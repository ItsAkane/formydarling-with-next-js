import { useEffect, useState } from "react";

export function LembrancasCard() {
    const [cards, setCards] = useState<any[]>([]);

    useEffect(() => {
        fetch('/api/cards')
            .then(res => res.json())
            .then(setCards);
    }, []);


    return (
        <div>
            {cards.map(card => (
                <div key={card.id} className="p-10 bg-[#ffd1dc] rounded-md m-2 mt-">
                    <img src={card.imagemUrl} alt="card" className="rounded-lg border" />
                    <h3 className="mt-2">{card.descricao}</h3>
                </div>
            ))}
        </div>
    )
}