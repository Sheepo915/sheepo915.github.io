import React, { useEffect, useState } from "react";
import SplashScreen from "../component/SplashScreen";
import TaskBar from "../component/TaskBar";
import DesktopWallpaper from "../component/DesktopWallpaper";
import Icon from "../component/Icon";

import folderIcon from "../assets/windowsIcon/folder.png";
import Desktop from "../component/Desktop";

export default function Home() {
    const [showSplashScreen, setShowSplashScreen] = useState<boolean>(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowSplashScreen(false);
        }, 5000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            {showSplashScreen ? (
                <SplashScreen />
            ) : (
                <div className="relative | h-screen w-screen max-h-screen max-w-screen">
                    <main className="relative | flex flex-1 h-full">
                        <DesktopWallpaper />
                        <Desktop>
                            <Icon src={folderIcon} text="GitHub" className="h-14 aspect-square" />
                        </Desktop>
                    </main>
                    <footer className="absolute bottom-0 | w-screen h-[5%]">
                        <TaskBar />
                    </footer>
                </div>
            )}
        </>
    );
}
