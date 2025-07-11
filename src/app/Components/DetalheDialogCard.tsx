'use client'
import { useEffect, useState } from "react";

export default function DetalheCardDialog({
  aberto,
  onFechar,
  cardId,
  onDeletado
}: {
  aberto: boolean;
  onFechar: () => void;
  cardId: number | null;
  onDeletado?: () => void;
}) {
  const [card, setCard] = useState<any>(null);

  useEffect(() => {
    if (cardId !== null) {
      fetch(`/api/cards/${cardId}`)
        .then(res => res.json())
        .then(setCard);
    }
  }, [cardId]);

  const handleExcluir = async () => {
    if (!cardId) return;

    const confirmado = confirm("Deseja realmente excluir este card?");
    if (!confirmado) return;

    const res = await fetch(`/api/cards/${cardId}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      alert("Card excluído com sucesso!");
      onFechar();
      if (onDeletado) onDeletado();
    } else {
      alert("Erro ao excluir card");
    }
  };

  if (!aberto || !card) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center">
      <div className="bg-white max-w-xl w-full p-6 rounded-xl shadow-lg relative">
        <button onClick={onFechar} className="absolute top-2 right-4 text-xl font-bold text-gray-500 hover:text-black">×</button>
        <img src={card.imagemUrl} alt="Imagem" className="w-full h-auto rounded-md mb-4" />
        <h1 className="text-xl font-semibold mb-2">{card.descricao}</h1>
        <p className="text-gray-600">Criado em: {new Date(card.createdAt).toLocaleDateString('pt-BR')}</p>
        <p className="text-gray-600 mb-4">Autor: {card.autorLogin}</p>
        <button onClick={handleExcluir} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Excluir
        </button>
      </div>
    </div>
  );
}