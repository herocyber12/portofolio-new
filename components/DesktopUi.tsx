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
import { ResearchLoadingScreen } from "@/components/ResearchLoadingScreen";

type WindowRect = { x: number; y: number; width: number; height: number };

const appTitles: Record<string, string> = {
    about: "CRF / DOSSIER 01 · PROFILE",
    experience: "CRF / DOSSIER 02 · EXPERIENCE",
    projects: "CRF / DOSSIER 03 · PROJECTS",
    skills: "CRF / DOSSIER 04 · SKILLS",
    contact: "CRF / DOSSIER 05 · CONTACT",
};

export function DesktopUi() {
    const [researchComplete, setResearchComplete] = useState(false);
    const [startMenuVisible, setStartMenuVisible] = useState<boolean>(false);
    const [openApps, setOpenApps] = useState(["about"]);
    const [activeApp, setActiveApp] = useState("about");
    const [viewport, setViewport] = useState<{ width: number; height: number } | null>(null);
    const [minimizedApps, setMinimizedApps] = useState<string[]>([]);
    const [maximizedApps, setMaximizedApps] = useState<string[]>([]);
    const [windowRects, setWindowRects] = useState<Record<string, WindowRect>>({});
    const [restoreRects, setRestoreRects] = useState<Record<string, WindowRect>>({});

    const screen = viewport ?? { width: 1280, height: 800 };
    const isCompactViewport = screen.width < 640;
    const windowWidth = Math.max(1, Math.min(900, screen.width - (isCompactViewport ? 16 : 32)));
    const workspaceHeight = Math.max(1, screen.height - 80);
    const windowHeight = Math.max(1, Math.min(640, workspaceHeight - (isCompactViewport ? 16 : 24)));

    const getDefaultRect = (index: number): WindowRect => ({
        x: isCompactViewport ? 8 : Math.max(12, Math.min(72 + index * 22, screen.width - windowWidth - 12)),
        y: isCompactViewport ? 8 : Math.max(12, Math.min(48 + index * 20, screen.height - windowHeight - 100)),
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
            [app]: { x: 0, y: 0, width: screen.width, height: workspaceHeight },
        }));
        setMaximizedApps((current) => [...current, app]);
    };

    const renderApp = (app: string) => {
        switch (app) {
            case "about": return <AboutMe onOpenApp={openApp} />;
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
                {viewport && openApps.map((app, index) => (
                    minimizedApps.includes(app) ? null : (() => {
                        const rect = windowRects[app] ?? getDefaultRect(index);
                        const isMaximized = maximizedApps.includes(app);

                        return (
                            <Rnd
                                key={app}
                                position={{ x: rect.x, y: rect.y }}
                                size={{ width: rect.width, height: rect.height }}
                                minWidth={Math.min(isCompactViewport ? 280 : 320, rect.width)}
                                minHeight={Math.min(isCompactViewport ? 220 : 300, rect.height)}
                                maxWidth={Math.min(900, screen.width)}
                                maxHeight={Math.min(640, workspaceHeight)}
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

            <div aria-label="CRF restricted candidate dossier, file CRF-01" className="pointer-events-none absolute left-4 top-3 z-5 hidden flex-col border-l-2 border-rose-400/80 bg-black/35 py-1 pl-2.5 pr-3 font-mono backdrop-blur-sm md:flex">
                <span className="text-[12px] font-semibold tracking-[0.14em] text-rose-200">CANDIDATE RESEARCH FEDERATION // RESTRICTED</span>
                <span className="mt-0.5 text-[13px] tracking-[0.08em] text-white/55">CANDIDATE DOSSIER · FILE CRF-01</span>
            </div>

            <div className="absolute bottom-20 left-4 lg:left-2/6 ">
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

            {!researchComplete && <ResearchLoadingScreen onComplete={() => setResearchComplete(true)} />}
        </>
    );
}