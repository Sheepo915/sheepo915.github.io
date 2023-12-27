import { useTypeWriter } from "../hooks";

export default function SplashScreen() {
    const splashScreenHeading = useTypeWriter("Loading...", { speed: 200, repeat: true });

    return (
        <div className="h-screen max-w-screen max-h-screen | flex justify-center items-center">
            <p className="font-semibold font-mono text-lg tracking-widest">{splashScreenHeading}</p>
        </div>
    );
}
