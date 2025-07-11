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
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.75)] flex justify-center items-center z-50 overflow-auto">
            <div className="bg-amber-50 rounded-xl max-h-[90vh] overflow-y-auto p-6 w-[90%] max-w-md">
                <img src={card.imagemUrl} alt="Imagem detalhada" className="w-full rounded-lg mb-4" />
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{card.descricao}</h2>
                <p className="text-sm text-gray-600 mb-1">Data: {new Date(card.createdAt).toLocaleDateString('pt-BR')}</p>
                <p className="text-sm text-gray-600 mb-4">Criado por: {card.autorLogin}</p>

                <div className="flex justify-between">
                    <button onClick={onFechar} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded">
                        Fechar
                    </button>
                    <button onClick={handleExcluir} className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded">
                        Excluir
                    </button>
                </div>
            </div>
        </div>

    );
}