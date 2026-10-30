"use client";
type BottomBarProps = {
    openApps: string[];
    openApp: (app: string) => void;
    startMenuVisible: boolean;
    setStartMenuVisible: (visible: boolean) => void;
};

import { useEffect, useState } from "react";
import { AppWindow, BriefcaseBusiness, FolderKanban, Mail, UserRound } from "lucide-react";

const dockApps = [
    { id: "about", label: "About", icon: UserRound },
    { id: "experience", label: "Experience", icon: BriefcaseBusiness },
    { id: "projects", label: "Projects", icon: FolderKanban },
    { id: "contact", label: "Contact", icon: Mail },
];

export function BottomBar({ openApps, openApp, startMenuVisible, setStartMenuVisible }: BottomBarProps) {
    const [time, setTime] = useState(() =>
        new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
        })
    );
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(
                new Date().toLocaleTimeString("en-GB", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                })
            );
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-[min(620px,calc(100vw-24px))] h-16 px-3 py-2 bg-black/35 rounded-xl shadow-[0px_-2px_12px_0px_rgba(0,0,0,0.15)] border border-white/10 backdrop-blur-md flex justify-between items-center">
            <button type="button" aria-label="Open profile menu" title="Profile menu" onClick={() => setStartMenuVisible(!startMenuVisible)} className={`size-11 shrink-0 rounded-lg inline-flex justify-center items-center text-white transition-colors ${startMenuVisible ? "bg-white/20" : "bg-white/10 hover:bg-white/20"}`}>
                <AppWindow size={21} />
            </button>
            <div className="flex items-center gap-1 sm:gap-2">
                {dockApps.map(({ id, label, icon: Icon }) => (
                    <button key={id} type="button" aria-label={`Open ${label}`} title={label} onClick={() => openApp(id)} className={`relative size-11 rounded-lg inline-flex justify-center items-center text-white transition-colors ${openApps.includes(id) ? "bg-white/20" : "bg-white/5 hover:bg-white/15"}`}>
                        <Icon size={20} />
                        {openApps.includes(id) && <span className="absolute bottom-1 size-1 rounded-full bg-white" />}
                    </button>
                ))}
            </div>
            <div className="hidden sm:block text-white text-sm font-semibold tabular-nums">{time}</div>
        </div>
    )
}