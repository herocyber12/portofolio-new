"use client";

import { BottomBar } from "@/components/BottomBar";
import { StartMenu } from "@/components/StartMenu";
import { useEffect, useState } from "react";
import { Rnd } from "react-rnd";
import { AboutMe } from "@/components/Widget/AboutMe";
import { Experience } from "@/components/Widget/ExperienceView";
import { Projects } from "@/components/Widget/Projects";
import { Skills } from "@/components/Widget/Skills";
import { Contact } from "@/components/Widget/Contact";
import { CardWindow } from "@/components/CardWindow";

type WindowRect = { x: number; y: number; width: number; height: number };

const appTitles: Record<string, string> = {
    about: "Profile - About Krisna",
    experience: "Explorer - Experience",
    projects: "Explorer - Selected Projects",
    skills: "Profile - Technical Skills",
    contact: "Mail - Contact Krisna",
};

export function DesktopUi() {
    const [startMenuVisible, setStartMenuVisible] = useState<boolean>(false);
    const [openApps, setOpenApps] = useState(["about"]);
    const [activeApp, setActiveApp] = useState("about");
    const [viewport, setViewport] = useState({ width: 1280, height: 800 });
    const [minimizedApps, setMinimizedApps] = useState<string[]>([]);
    const [maximizedApps, setMaximizedApps] = useState<string[]>([]);
    const [windowRects, setWindowRects] = useState<Record<string, WindowRect>>({});
    const [restoreRects, setRestoreRects] = useState<Record<string, WindowRect>>({});

    const windowWidth = Math.min(900, Math.max(320, viewport.width - 32));
    const windowHeight = Math.min(640, Math.max(300, viewport.height - 116));
    const workspaceHeight = Math.max(180, viewport.height - 80);

    const getDefaultRect = (index: number): WindowRect => ({
        x: Math.max(12, Math.min(72 + index * 22, viewport.width - windowWidth - 12)),
        y: Math.max(12, Math.min(48 + index * 20, viewport.height - windowHeight - 100)),
        width: windowWidth,
        height: windowHeight,
    });

    useEffect(() => {
        const updateViewport = () => setViewport({ width: window.innerWidth, height: window.innerHeight });
        updateViewport();
        window.addEventListener("resize", updateViewport);
        return () => window.removeEventListener("resize", updateViewport);
    }, []);

    const openApp = (app: string) => {
        setOpenApps((current) => current.includes(app) ? current : [...current, app]);
        setMinimizedApps((current) => current.filter((item) => item !== app));
        setActiveApp(app);
        setStartMenuVisible(false);
    };

    const closeApp = (app: string) => {
        const remainingApps = openApps.filter((item) => item !== app);
        setOpenApps(remainingApps);
        setMinimizedApps((current) => current.filter((item) => item !== app));
        setMaximizedApps((current) => current.filter((item) => item !== app));
        setWindowRects((current) => {
            const next = { ...current };
            delete next[app];
            return next;
        });
        setRestoreRects((current) => {
            const next = { ...current };
            delete next[app];
            return next;
        });
        if (activeApp === app) {
            const visibleApps = remainingApps.filter((item) => !minimizedApps.includes(item));
            setActiveApp(visibleApps[visibleApps.length - 1] ?? "");
        }
    };

    const minimizeApp = (app: string) => {
        setMinimizedApps((current) => current.includes(app) ? current : [...current, app]);
        if (activeApp === app) {
            const visibleApps = openApps.filter((item) => item !== app && !minimizedApps.includes(item));
            setActiveApp(visibleApps[visibleApps.length - 1] ?? "");
        }
    };

    const toggleMaximize = (app: string, index: number) => {
        if (maximizedApps.includes(app)) {
            const restoreRect = restoreRects[app] ?? getDefaultRect(index);
            setWindowRects((current) => ({ ...current, [app]: restoreRect }));
            setMaximizedApps((current) => current.filter((item) => item !== app));
            return;
        }

        const currentRect = windowRects[app] ?? getDefaultRect(index);
        setRestoreRects((current) => ({ ...current, [app]: currentRect }));
        setWindowRects((current) => ({
            ...current,
            [app]: { x: 0, y: 0, width: viewport.width, height: workspaceHeight },
        }));
        setMaximizedApps((current) => [...current, app]);
    };

    const renderApp = (app: string) => {
        switch (app) {
            case "about": return <AboutMe />;
            case "experience": return <Experience />;
            case "projects": return <Projects />;
            case "skills": return <Skills />;
            case "contact": return <Contact />;
            default: return null;
        }
    };

    return (
        <>
            <main className="absolute inset-x-0 top-0 bottom-20">
                {openApps.map((app, index) => (
                    minimizedApps.includes(app) ? null : (() => {
                        const rect = windowRects[app] ?? getDefaultRect(index);
                        const isMaximized = maximizedApps.includes(app);

                        return (
                            <Rnd
                                key={app}
                                position={{ x: rect.x, y: rect.y }}
                                size={{ width: rect.width, height: rect.height }}
                                minWidth={Math.min(320, rect.width)}
                                minHeight={Math.min(300, rect.height)}
                                enableResizing={!isMaximized}
                                disableDragging={isMaximized}
                                bounds="parent"
                                dragHandleClassName="window-titlebar"
                                cancel=".window-controls"
                                style={{ zIndex: activeApp === app ? 20 : 10 + index }}
                                onMouseDown={() => setActiveApp(app)}
                                onDragStop={(_event, data) => setWindowRects((current) => ({
                                    ...current,
                                    [app]: { ...rect, x: data.x, y: data.y },
                                }))}
                                onResizeStop={(_event, _direction, element, _delta, position) => setWindowRects((current) => ({
                                    ...current,
                                    [app]: { x: position.x, y: position.y, width: element.offsetWidth, height: element.offsetHeight },
                                }))}
                            >
                                <CardWindow
                                    title={appTitles[app]}
                                    onClose={() => closeApp(app)}
                                    onMinimize={() => minimizeApp(app)}
                                    onToggleMaximize={() => toggleMaximize(app, index)}
                                    isMaximized={isMaximized}
                                >
                                    {renderApp(app)}
                                </CardWindow>
                            </Rnd>
                        );
                    })()
                ))}
            </main>

            <div className="absolute bottom-20 left-4">
                <StartMenu
                    visible={startMenuVisible}
                    openApp={openApp}
                />
            </div>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
                <BottomBar
                    openApps={openApps}
                    openApp={openApp}
                    startMenuVisible={startMenuVisible}
                    setStartMenuVisible={setStartMenuVisible}
                />
            </div>
        </>
    );
}