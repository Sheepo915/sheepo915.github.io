interface DesktopProps {
    children: JSX.Element;
}

export default function Desktop({ children }: DesktopProps) {
    return <div className="aboslute | w-screen h-screen p-2">{children}</div>;
}
