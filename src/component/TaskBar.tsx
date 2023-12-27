import Icon from "./Icon";

import windowsLogo from "../assets/taskbarLogo/windowsLogo.png";
import chromeLogo from "../assets/taskbarLogo/chromeLogo.png";
import firefoxLogo from "../assets/taskbarLogo/firefoxLogo.png";
import figmaLogo from "../assets/taskbarLogo/figmaLogo.png";
import vscodeLogo from "../assets/taskbarLogo/vscodeLogo.png";
import visualStudioLogo from "../assets/taskbarLogo/visualStudioLogo.png";
import pycharmLogo from "../assets/taskbarLogo/pycharmLogo.png";
import intellijIdeaLogo from "../assets/taskbarLogo/intellijIdeaLogo.png";

const taskBarLogo = [
    windowsLogo,
    chromeLogo,
    firefoxLogo,
    figmaLogo,
    vscodeLogo,
    visualStudioLogo,
    pycharmLogo,
    intellijIdeaLogo,
];

export default function TaskBar() {
    return (
        <div className="flex flex-row | justify-center items-center h-full max-h-full | bg-gray-800/90">
            <ul className="flex justify-center items-center | h-full | py-1 space-x-1.5">
                {taskBarLogo.map((logo) => (
                    <li className="grid place-items-center | h-full aspect-square p-0.5 | hover:bg-zinc-300/30 hover:rounded-md">
                        <Icon src={logo} className="h-3/4 w-3/4 aspect-square" />
                    </li>
                ))}
            </ul>
        </div>
    );
}
