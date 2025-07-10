'use client'
import { Cabecalho } from "../../Components/Cabecalho";
import { LembrancasCard } from "../../Components/LembrancasCard";
import { useEffect, useState } from "react";
import { NewCard } from "@/app/Components/NewCard";
import DialogCard from "@/app/Components/DiologCard";


export default function Photos() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [dialogIsOpen, setDialogIsOpen] = useState(false);

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
                <div className="pt-8 pb-10 p-5 rounded-3xl bg-[#ffe0e7] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <LembrancasCard/>
                    <NewCard onclick={()=> setDialogIsOpen(true)}/>
                    <DialogCard aberto={dialogIsOpen} onFechar={()=> setDialogIsOpen(false)}/>
                </div>
            </>
        )
    }
}