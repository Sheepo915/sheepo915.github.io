import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ThemeState {
    value: "light" | "dark";
}

const initialState: ThemeState = {
    value: "light",
};

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        switchTheme: (state, action: PayloadAction<"light" | "dark">) => {
            if (state.value === "light" && action.payload === "dark") {
                state.value = action.payload;
            } else if (state.value === "dark" && action.payload === "light") {
                state.value = action.payload;
            }
        },
    },
});

export const { switchTheme } = themeSlice.actions;
export default themeSlice.reducer;
