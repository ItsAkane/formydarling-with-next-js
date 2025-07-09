'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export function LoginCard() {
    const router = useRouter();

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [loginIncorreto, setLoginIncorreto] = useState(false)

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

    async function valide_login(event: React.FormEvent) {
        event.preventDefault();

        var login = (document.getElementById("login") as HTMLInputElement).value;
        var password = (document.getElementById("password") as HTMLInputElement).value;
        const retorno = document.getElementById("retorno") as HTMLElement;

        const res = await fetch('/api/user', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ login, password } ),
        })

        const data = await res.json();

        if(res.ok){
            console.log("Login valido", data.user);
            setIsLoggedIn(true);
            router.push("/lembrancas/photos");
        }else{
            setLoginIncorreto(true);
            retorno.innerHTML = data.error;
            return;
        }
    }

    return (
        <div className="max-w-sm w-full mx-auto bg-white rounded-xl shadow-lg p-8 border border-pink-300">
            <h2 className="text-2xl font-bold text-pink-600 text-center mb-6">Login</h2>

            <h4 id="retorno"></h4>
            <br />
            <form className="flex flex-col gap-4" onSubmit={valide_login}>
                <input
                    id="login"
                    type="text"
                    placeholder="Login"
                    className={`p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 ${ loginIncorreto ? "border-red-500" : "border-gray-300 " }`
                }/>
                <input
                    id="password"
                    type="password"
                    placeholder="Senha"
                    className={`p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 ${ loginIncorreto ? "border-red-500" : "border-gray-300 " }`
                }/>
                <button
                    type="submit"
                    className="bg-pink-500 text-white py-2 rounded-md font-semibold hover:bg-pink-600 transition"
                >
                    Entrar
                </button>

            </form>
        </div>
    );
}