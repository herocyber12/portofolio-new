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
import { ConceptDialog } from "@/components/ConceptDialog";
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
    const [conceptVisible, setConceptVisible] = useState(false);
    const [openApps, setOpenApps] = useState(["about"]);
    const [activeApp, setActiveApp] = useState("about");
    const [viewport, setViewport] = useState<{ width: number; height: number; safeAreaTop: number; safeAreaBottom: number } | null>(null);
    const [minimizedApps, setMinimizedApps] = useState<string[]>([]);
    const [maximizedApps, setMaximizedApps] = useState<string[]>([]);
    const [windowRects, setWindowRects] = useState<Record<string, WindowRect>>({});
    const [restoreRects, setRestoreRects] = useState<Record<string, WindowRect>>({});

    const screen = viewport ?? { width: 1280, height: 800, safeAreaTop: 0, safeAreaBottom: 0 };
    const isCompactViewport = screen.width < 640;
    const windowWidth = Math.max(1, Math.min(900, screen.width - (isCompactViewport ? 16 : 32)));
    const workspaceHeight = Math.max(1, screen.height - screen.safeAreaTop - screen.safeAreaBottom - 80);
    const windowHeight = Math.max(1, Math.min(640, workspaceHeight - (isCompactViewport ? 16 : 24)));
    const maxWindowWidth = Math.min(900, screen.width);
    const maxWindowHeight = Math.min(640, workspaceHeight);

    const fitWindowRect = (rect: WindowRect): WindowRect => {
        const width = Math.min(rect.width, maxWindowWidth);
        const height = Math.min(rect.height, maxWindowHeight);
        return {
            x: Math.max(0, Math.min(rect.x, screen.width - width)),
            y: Math.max(0, Math.min(rect.y, workspaceHeight - height)),
            width,
            height,
        };
    };

    const getDefaultRect = (index: number): WindowRect => ({
        x: isCompactViewport ? 8 : Math.max(12, Math.min(72 + index * 22, screen.width - windowWidth - 12)),
        y: isCompactViewport ? 8 : Math.max(12, Math.min(48 + index * 20, screen.height - windowHeight - 100)),
        width: windowWidth,
        height: windowHeight,
    });

    useEffect(() => {
        const updateViewport = () => {
            const visualViewport = window.visualViewport;
            const safeAreaTop = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--safe-area-top")) || 0;
            const safeAreaBottom = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--safe-area-bottom")) || 0;
            setViewport({
                width: Math.round(visualViewport?.width ?? window.innerWidth),
                height: Math.round(visualViewport?.height ?? window.innerHeight),
                safeAreaTop,
                safeAreaBottom,
            });
        };
        updateViewport();
        window.addEventListener("resize", updateViewport);
        window.visualViewport?.addEventListener("resize", updateViewport);
        return () => {
            window.removeEventListener("resize", updateViewport);
            window.visualViewport?.removeEventListener("resize", updateViewport);
        };
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
            const restoreRect = fitWindowRect(restoreRects[app] ?? getDefaultRect(index));
            setWindowRects((current) => ({ ...current, [app]: restoreRect }));
            setMaximizedApps((current) => current.filter((item) => item !== app));
            return;
        }

        const currentRect = fitWindowRect(windowRects[app] ?? getDefaultRect(index));
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
            <main className="absolute inset-x-0" style={{ top: "var(--safe-area-top)", bottom: "calc(5rem + var(--safe-area-bottom))" }}>
                {viewport && openApps.map((app, index) => (
                    minimizedApps.includes(app) ? null : (() => {
                        const isMaximized = maximizedApps.includes(app);
                        const rect = isMaximized
                            ? { x: 0, y: 0, width: screen.width, height: workspaceHeight }
                            : fitWindowRect(windowRects[app] ?? getDefaultRect(index));

                        return (
                            <Rnd
                                key={app}
                                position={{ x: rect.x, y: rect.y }}
                                size={{ width: rect.width, height: rect.height }}
                                minWidth={Math.min(isCompactViewport ? 280 : 320, rect.width)}
                                minHeight={Math.min(isCompactViewport ? 220 : 300, rect.height)}
                                maxWidth={isMaximized ? screen.width : maxWindowWidth}
                                maxHeight={isMaximized ? workspaceHeight : maxWindowHeight}
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

            <div aria-label="CRF restricted candidate dossier, file CRF-01" className="pointer-events-none absolute left-4 z-5 hidden flex-col border-l-2 border-rose-400/80 bg-black/35 py-1 pl-2.5 pr-3 font-mono backdrop-blur-sm md:flex" style={{ top: "calc(0.75rem + var(--safe-area-top))" }}>
                <span className="text-[12px] font-semibold tracking-[0.14em] text-rose-200">CANDIDATE RESEARCH FEDERATION // RESTRICTED</span>
                <span className="mt-0.5 text-[13px] tracking-[0.08em] text-white/55">CANDIDATE DOSSIER · FILE CRF-01</span>
            </div>

            <div className="absolute left-4 lg:left-2/6" style={{ bottom: "calc(5rem + var(--safe-area-bottom))" }}>
                <StartMenu
                    visible={startMenuVisible}
                    openApp={openApp}
                    onOpenConcept={() => {
                        setConceptVisible(true);
                        setStartMenuVisible(false);
                    }}
                />
            </div>

            <div className="absolute left-1/2 -translate-x-1/2" style={{ bottom: "calc(0.75rem + var(--safe-area-bottom))" }}>
                <BottomBar
                    openApps={openApps}
                    openApp={openApp}
                    startMenuVisible={startMenuVisible}
                    setStartMenuVisible={setStartMenuVisible}
                />
            </div>

            {conceptVisible && <ConceptDialog onClose={() => setConceptVisible(false)} />}
            {!researchComplete && <ResearchLoadingScreen onComplete={() => setResearchComplete(true)} />}
        </>
    );
}