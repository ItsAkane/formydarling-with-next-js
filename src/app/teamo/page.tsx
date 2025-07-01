'use client'
import { useEffect, useState } from "react";
import { Cabecalho } from "../Components/Cabecalho";

export default function TeAmo() {
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

            <img src="/img/img_viada.jpeg" alt="emoji com coracoes" className="w-[200px] h-auto rounded-[15px] shadow-md border-[3px] border-[#ff80b3] mb-5" />
            <h3>
                Você é a pessoa mais especial com quem já tive contato na minha vida.<br />
                Obrigado por sempre estar comigo, mesmo quando faço merda ou te deixo triste.<br />
                Sempre vou estar tentando mudar e melhorar, pra você ter a minha melhor versão.<br />
                <br />
                Eu te amo &lt;3,<br />
                do seu nerdolinha sz.
            </h3>
        </>
    )
}