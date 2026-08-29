"use client";

import { BottomBar } from "@/app/component/BottomBar";
import { StartMenu } from "@/app/component/StartMenu";
import { useEffect, useState } from "react";
import { Rnd } from "react-rnd";
import { AboutMe } from "@/app/component/AboutMe";

export function DesktopUi() {
    const [startMenuVisible, setStartMenuVisible] = useState<boolean>(false);
    const [openedApp, setOpenedApp] = useState<string[]>([])

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
                <StartMenu visible={startMenuVisible} />
            </div>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                <BottomBar z_index={10} startMenuVisible={setStartMenuVisible} openApp={setOpenedApp}/>
            </div>
        </>
    );
}