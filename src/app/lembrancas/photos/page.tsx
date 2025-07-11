'use client'
import { Cabecalho } from "../../Components/Cabecalho";
import { LembrancasCard } from "../../Components/LembrancasCard";
import { useEffect, useState } from "react";
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
                <div className="mt-20 pt-8 pb-10 p-5 rounded-3xl bg-[#ffe0e7]">
                    <LembrancasCard aberto={dialogIsOpen} setar={setDialogIsOpen}/>
                    <DialogCard aberto={dialogIsOpen} onFechar={()=> setDialogIsOpen(false)}/>
                </div>
            </>
        )
    }
}