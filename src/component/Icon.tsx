import React from "react";

interface IconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    text?: string;
    className?: string;
}

export default function Icon({ text, className, ...props }: IconProps) {
    return (
        <div className={className}>
            <img {...props} />
            {text ? (
                <p className="w-full | text-white text-center [text-shadow:0_0px_4px_rgb(0,0,0)] select-none">
                    {text}
                </p>
            ) : null}
        </div>
    );
}
