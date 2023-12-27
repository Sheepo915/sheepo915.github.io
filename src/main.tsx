import React from "react";
import ReactDOM from "react-dom/client";
import store from "./features/store.ts";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/route.tsx";
import "./index.css";
import SplashScreen from "./component/SplashScreen.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} fallbackElement={<SplashScreen />} />
        </Provider>
    </React.StrictMode>
);
