import { Stack } from "expo-router";

export default function AuthLayout() {
    return (
        <>
        <statusBar sytle="auto" />
        <Stack 
        screenOptions={{  animation: "none"}}
        />
        </>
    )
}