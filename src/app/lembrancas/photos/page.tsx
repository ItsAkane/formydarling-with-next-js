'use client'
import { Cabecalho } from "../../Components/Cabecalho";
import { LembrancasCard } from "../../Components/LembrancasCard";
import imagem1 from "../../../../public/img/img_viada.jpeg";
import { useEffect, useState } from "react";


export default function photos() {

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
                    <LembrancasCard imagemSrc={imagem1} alt="teste1" text="ola" />
                    <LembrancasCard imagemSrc={imagem1} alt="teste2" text="alo" />
                    <LembrancasCard imagemSrc={imagem1} alt="teste3" text="oal" />
                    <LembrancasCard imagemSrc={imagem1} alt="teste1" text="ola" />
                    <LembrancasCard imagemSrc={imagem1} alt="teste2" text="alo" />
                    <LembrancasCard imagemSrc={imagem1} alt="teste3" text="oal" />
                </div>
            </>
        )
    }
}