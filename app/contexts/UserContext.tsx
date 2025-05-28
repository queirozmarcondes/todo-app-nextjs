'use client'
import React, { createContext, PropsWithChildren, useState } from "react";

type UserContextValue = {
    accessToken: string | null;
    loading: boolean;
    error: string | null;
    login: (email: string, password: string) => Promise<void>;
}

export const UserContext = createContext<UserContextValue>({} as UserContextValue);

export const UserContextProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string |null>(null)

    const login = async (email: string, password: string): Promise<void> => {
        try {
            setLoading(true);

            const response = await fetch('https://todo-nestjs-api.onrender.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            const json = await response.json();
            if (!response.ok) {
                throw new Error(`${json.message}`)
            }
            setAccessToken(json.accessToken);
            setError(null)
            // setar no localstorage
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message)
            }
            
        } finally {
            setLoading(false);
        }
    }

    return (
        <UserContext.Provider value={{ accessToken, loading, error, login }}>
            {children}
        </UserContext.Provider>
    )
}