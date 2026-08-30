"use client";

import { BottomBar } from "@/components/BottomBar";
import { StartMenu } from "@/components/StartMenu";
import { useEffect, useState } from "react";
import { Rnd } from "react-rnd";
import { AboutMe } from "@/components/AboutMe";

export function DesktopUi() {
    const [startMenuVisible, setStartMenuVisible] = useState<boolean>(false);

    const [openedAppsBySource, setOpenedAppsBySource] = useState({
        startMenu: [] as string[],
        bottomBar: [] as string[],
    });

    const handleOpenedApp = (
        source: "startMenu" | "bottomBar",
        apps: string[]
    ) => {
        setOpenedAppsBySource((prev) => ({
            ...prev,
            [source]: apps,
        }));
    };

    const openedApp = [
        ...new Set([
            ...openedAppsBySource.startMenu,
            ...openedAppsBySource.bottomBar,
        ]),
    ];
    
    useEffect(() => {
        console.log(openedApp)
    },[openedApp])

    return (
        <>
            <Rnd
                default={{
                    x: 100,
                    y: 100,
                    width: 494,
                    height: 320,
                }}

                minWidth={280}
                minHeight={144}
            >
                <AboutMe />
            </Rnd>

            <div className="absolute bottom-1/11 left-1/7">
                <StartMenu
                    visible={startMenuVisible}
                    openApp={(apps) => handleOpenedApp("startMenu", apps)}
                />
            </div>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                <BottomBar
                    z_index={10}
                    startMenuVisible={setStartMenuVisible}
                    openApp={(apps) => handleOpenedApp("bottomBar", apps)}
                />
            </div>
        </>
    );
}