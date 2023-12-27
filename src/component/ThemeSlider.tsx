import React from "react";
import { useAppDispatch, useAppSelector } from "../features/hooks";
import { switchTheme } from "../features/slices/themeSlice";

export default function ThemeSlider() {
    const theme = useAppSelector((state) => state.theme.value);
    const dispatch = useAppDispatch();

    function handleChangeTheme() {
        const newTheme = theme === "light" ? "dark" : "light";
        dispatch(switchTheme(newTheme));
    }

    return (
        <div
            className={`relative | w-10 h-5 | outline outline-1 outline-black rounded-full`}
            onClick={handleChangeTheme}
        >
            <div
                className={`absolute ${
                    theme === "dark" && "translate-x-5"
                } transition-transform duration-300 ease-in-out | w-5 h-5 aspect-square | outline outline-1 outline-black rounded-full`}
            ></div>
        </div>
    );
}
