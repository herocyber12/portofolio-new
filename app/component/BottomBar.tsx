"use client";
type BottomBarProps = {
    z_index?: number;
    openApp?: (apps: string[]) => void;
    startMenuVisible?: (visible: boolean) => void;
};

import { useEffect, useState } from "react";
import { AppWindow, Folder, Terminal, Cog } from "lucide-react";

export function BottomBar({ z_index = 0, openApp, startMenuVisible }: BottomBarProps) {
    const [time, setTime] = useState(() =>
        new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
        })
    );
    const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
    const [appOpened, setAppOpened] = useState<string[]>([])

    useEffect(() => {
        startMenuVisible?.(isStartMenuOpen);
    }, [isStartMenuOpen, startMenuVisible]);

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

    useEffect(()=>{
        openApp?.(appOpened)
    },[appOpened])

    const handleOpenedApp = (app: string) => {
        setAppOpened((prev) => {
            if (prev.includes(app)) {
                return prev.filter((item) => item !== app);
            }

            return [...prev, app];
        });
    }

    return (
        <div className={`w-[1380px] h-16 px-4 py-3 bg-gradient-to-br from-black/40 to-black/20 rounded-2xl shadow-[0px_-2px_12px_0px_rgba(0,0,0,0.15)] border-white/10 backdrop-blur-md inline-flex justify-between items-center`}>
            <div onClick={() => setIsStartMenuOpen((prev) => !prev)} className="size-11 bg-white/10 rounded-xl outline-white/10 inline-flex flex-col justify-center items-center text-white">
                <AppWindow />
            </div>
            <div className="size- flex justify-start items-center gap-3">
                <div onClick={()=>handleOpenedApp("folder")} className="size-11 bg-white/10 rounded-xl outline-white/10 inline-flex flex-col justify-center items-center text-white">
                    <Folder />
                </div>

                <div onClick={()=>handleOpenedApp("terminal")} className="size-11 bg-white/10 rounded-xl outline-white/10 inline-flex flex-col justify-center items-center text-white">
                    <Terminal />
                </div>
            </div>
            <div className="size- flex justify-start items-center gap-4">
                <div className="size-11 bg-white/10 rounded-xl outline-white/10 inline-flex flex-col justify-center items-center text-white">
                    <Cog />
                </div>
                <div className="justify-start text-white text-sm font-semibold font-['Inter']">{time}</div>
            </div>
        </div>
    )
}