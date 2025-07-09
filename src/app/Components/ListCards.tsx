'use client';
import { useEffect, useState } from 'react';

export function ListCards() {
  const [cards, setCards] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/cards')
      .then(res => res.json())
      .then(setCards);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {cards.map(card => (
        <div key={card.id} className="border rounded-lg p-4 bg-white shadow">
          <img src={card.imagemUrl} alt="card" className="w-full h-40 object-cover rounded" />
          <p className="mt-2 text-sm">{card.descricao}</p>
        </div>
      ))}
    </div>
  );
}