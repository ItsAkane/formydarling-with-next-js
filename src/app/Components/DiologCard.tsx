'use client'
import { useEffect, useState } from "react";

export default function DialogCard({ aberto, onFechar }: { aberto: boolean, onFechar: () => void }) {
    if (!aberto) return;
    const [Descrição, setDescricao] = useState('');
    const [data, setData] = useState('');
    const [imagem, setImagem] = useState<File | null>(null);
    const [autorLogin, setAutorLogin] = useState('');

    useEffect(() => {
        const loginSalvo = localStorage.getItem("login");
        if (loginSalvo) setAutorLogin(loginSalvo);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!imagem) return alert('selecione uma imagem');

        const formData = new FormData();

        formData.append('imagem', imagem);
        formData.append('descricao', Descrição);
        formData.append("createdAt", data);
        formData.append('autorLogin', autorLogin);

        
        const res = await fetch('/api/cards/upload', {
            method: 'POST',
            body: formData,
        });

        if (res.ok) {
            alert('Card salvo!');
            onFechar();
        } else {
            alert('erro ao salvar card');
        }
    };

    return (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.75)] flex justify-center items-center z-50">
            <div className="bg-amber-50 opacity-200">
                <button className="flex ml-95 text-xl mt-4 text-gray-600 hover:text-black" onClick={onFechar}>X</button>
                <h1>Novo Card</h1>
                <form className="flex flex-col gap-4 p-7">
                    <input className="p-2 border rounded" type="file" accept="image/" onChange={(e) => setImagem(e.target.files?.[0] || null)} />
                    <input className="p-2 border rounded" type="text" value={Descrição} onChange={(e)=> setDescricao(e.target.value)} placeholder="Descrição"></input>
                    <input type="date" value={data} onChange={(e)=> setData(e.target.value)} className="p-2 border rounded" />
                    <button className="bg-pink-500 text-white py-2 rounded hover:bg-pink-600" onClick={handleSubmit}>Salvar</button>
                </form>
            </div>
        </div>
    )
}