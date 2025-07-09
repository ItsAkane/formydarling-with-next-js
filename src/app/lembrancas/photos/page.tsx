'use client'
import { Cabecalho } from "../../Components/Cabecalho";
import { LembrancasCard } from "../../Components/LembrancasCard";
import { useEffect, useState } from "react";
import { ListCards } from "@/app/Components/ListCards";
import { NewCard } from "@/app/Components/NewCard";


export default function Photos() {

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

    if (isLoggedIn == true) {

        return (
            <>
                <Cabecalho />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full mt-20">
                    <LembrancasCard/>
                    <NewCard/>
                </div>
            </>
        )
    }
}