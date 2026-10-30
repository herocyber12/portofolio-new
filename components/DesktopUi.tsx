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

    useEffect(() => {
        const updateViewport = () => setViewport({ width: window.innerWidth, height: window.innerHeight });
        updateViewport();
        window.addEventListener("resize", updateViewport);
        return () => window.removeEventListener("resize", updateViewport);
    }, []);

    const openApp = (app: string) => {
        setOpenApps((current) => current.includes(app) ? current : [...current, app]);
        setActiveApp(app);
        setStartMenuVisible(false);
    };

    const closeApp = (app: string) => {
        const remainingApps = openApps.filter((item) => item !== app);
        setOpenApps(remainingApps);
        if (activeApp === app) setActiveApp(remainingApps[remainingApps.length - 1] ?? "");
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

    const windowWidth = Math.min(900, Math.max(320, viewport.width - 32));
    const windowHeight = Math.min(640, Math.max(300, viewport.height - 116));

    return (
        <>
            <main className="absolute inset-x-0 top-0 bottom-20">
                {openApps.map((app, index) => (
                    <Rnd
                        key={`${app}-${windowWidth}-${windowHeight}`}
                        default={{
                            x: Math.max(12, Math.min(72 + index * 22, viewport.width - windowWidth - 12)),
                            y: Math.max(12, Math.min(48 + index * 20, viewport.height - windowHeight - 100)),
                            width: windowWidth,
                            height: windowHeight,
                        }}
                        minWidth={Math.min(320, windowWidth)}
                        minHeight={Math.min(300, windowHeight)}
                        bounds="parent"
                        dragHandleClassName="window-titlebar"
                        cancel=".window-controls"
                        style={{ zIndex: activeApp === app ? 20 : 10 + index }}
                        onMouseDown={() => setActiveApp(app)}
                    >
                        <CardWindow title={appTitles[app]} onClose={() => closeApp(app)}>
                            {renderApp(app)}
                        </CardWindow>
                    </Rnd>
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