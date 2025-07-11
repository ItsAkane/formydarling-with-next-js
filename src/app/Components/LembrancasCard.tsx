'use client'
import { useEffect, useState } from "react";
import { NewCard } from "./NewCard";

export function LembrancasCard({ aberto, setar }: { aberto: boolean, setar: (value: boolean) => void }) {
  const [cards, setCards] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/cards')
      .then(res => res.json())
      .then(setCards);
  }, []);

  return (
    <div className="justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {cards.map(card => (
        <div key={card.id} className="w-[350px] h-[360px] bg-[#ffd1dc] rounded-xl shadow-md overflow-hidden border border-pink-300 hover:shadow-lg transition-shadow duration-300 m-2">
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
  );
}