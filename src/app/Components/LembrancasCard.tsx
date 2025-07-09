import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
    imagemSrc: any;
    alt?: any;
    text?: string;
};

export function LembrancasCard({ imagemSrc, alt, text }: Props) {
    const [cards, setCards] = useState<any[]>([]);

    useEffect(() => {
        fetch('/api/cards')
            .then(res => res.json())
            .then(setCards);
    }, []);


    return (
        <div>
            {cards.map(card => (
                <div key={card.id} className="p-10 bg-[#ffe0cc] rounded-md m-2 mt-">
                    <img src={card.imagemSrc} alt={alt} className="rounded-lg" />
                    <h3>{card.descricao}</h3>
                </div>
            ))}
        </div>
    )
}