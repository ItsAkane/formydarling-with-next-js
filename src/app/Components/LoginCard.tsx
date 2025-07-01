'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export function LoginCard() {
    const router = useRouter();

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

    useEffect(() => {
        if (isLoggedIn) {
            router.push("/lembrancas/photos");
        }
    }, [isLoggedIn]);

    function valide_login() {
        var login = document.getElementById("login") as HTMLInputElement;
        var password = document.getElementById("senha") as HTMLInputElement;

        if (login.value == "teste" && password.value == "123") {
            setIsLoggedIn(true);
            router.push("/lembrancas/photos");
        } else if (login.value == "lua" && password.value == "morgana") {
            setIsLoggedIn(true);
            router.push("/lembrancas/photos");
        }
    }

    return (
        <div className="max-w-sm w-full mx-auto bg-white rounded-xl shadow-lg p-8 border border-pink-300">
            <h2 className="text-2xl font-bold text-pink-600 text-center mb-6">Login</h2>
            <form className="flex flex-col gap-4">
                <input
                    id="login"
                    type="text"
                    placeholder="Login"
                    className="p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                <input
                    id="senha"
                    type="password"
                    placeholder="Senha"
                    className="p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                <button
                    type="submit"
                    className="bg-pink-500 text-white py-2 rounded-md font-semibold hover:bg-pink-600 transition"
                    onClick={valide_login}
                >
                    Entrar
                </button>

            </form>
        </div>
    );
}