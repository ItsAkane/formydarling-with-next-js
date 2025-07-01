'use client'
import { useEffect, useState } from "react";
import { Cabecalho } from "../Components/Cabecalho"
import { LoginCard } from "../Components/LoginCard"

export default function Lembrancas() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const valorSalvo = localStorage.getItem("logado")
        if (valorSalvo == "true") {
            setIsLoggedIn(true);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("logado", String(isLoggedIn));
    }, [isLoggedIn]);


    return (
        <>
            <Cabecalho />
            <LoginCard />
        </>
    )
}