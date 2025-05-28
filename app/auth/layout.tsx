import { PropsWithChildren } from "react";
import { UserContextProvider } from "../contexts/UserContext";

export default function AuthRootLayout({children}: PropsWithChildren) {
    return (
        <UserContextProvider>
            {children}
        </UserContextProvider>
    )
}