import { useState, useEffect } from "react";

interface TypeWriterOptions {
    speed?: number;
    repeat?: boolean;
}

const useTypewriter = (
    text: string,
    { speed = 50, repeat = false }: TypeWriterOptions = {}
): string => {
    const [displayText, setDisplayText] = useState<string>("");
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        const typingInterval = setInterval(() => {
            if (index < text.length) {
                setDisplayText((prevText) => prevText + text.charAt(index));
                setIndex((prevIndex) => prevIndex + 1);
            } else if (repeat == true && index == text.length) {
                setDisplayText("");
                setIndex(0);
            } else {
                clearInterval(typingInterval);
            }
        }, speed);

        return () => {
            clearInterval(typingInterval);
        };
    }, [text, speed, index]);

    return displayText;
};

export default useTypewriter;
