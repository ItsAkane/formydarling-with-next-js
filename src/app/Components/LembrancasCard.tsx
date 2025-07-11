'use client'
import { useEffect, useState } from "react";
import { NewCard } from "./NewCard";

interface Card {
    id: number;
    imagemUrl: string;
    descricao: string;
    createdAt: string;
    autorLogin: string;
}

export function LembrancasCard({ aberto, setar, setarDetalhe }: { aberto: boolean; setar: (value: boolean) => void; setarDetalhe: (id: number) => void; }) {
    const [cards, setCards] = useState<Card[]>([]);

    useEffect(() => {
        fetch('/api/cards')
            .then(res => res.json())
            .then(setCards);
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
            {cards.map(card => (
                <div
                    key={card.id}
                    onClick={() => setarDetalhe(card.id)}
                    className="cursor-pointer bg-[#ffd1dc] rounded-xl shadow-md overflow-hidden border border-pink-300 hover:shadow-lg transition-shadow duration-300"
                    style={{ maxWidth: '350px', margin: '0 auto' }}>
                    <img src={card.imagemUrl} alt="card" className="w-full h-60 object-cover rounded-t-xl" />
                    <div className="p-4">
                        <h3 className="text-base font-medium text-gray-800">{card.descricao}</h3>
                        <p className="text-sm text-gray-600 mt-2">
                            {new Date(card.createdAt).toLocaleDateString('pt-BR')}
                        </p>
                    </div>
                </div>
            ))}
            <NewCard onclick={() => setar(true)} />
        </div>
    )
}