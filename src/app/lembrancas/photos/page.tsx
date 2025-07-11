'use client'
import { Cabecalho } from "../../Components/Cabecalho";
import { LembrancasCard } from "../../Components/LembrancasCard";
import { useEffect, useState } from "react";
import DialogCard from "@/app/Components/DiologCard";
import DetalheCardDialog from "@/app/Components/DetalheDialogCard";

export default function Photos() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [detalheAberto, setDetalheAberto] = useState(false);
  const [cardSelecionado, setCardSelecionado] = useState<number | null>(null);

  useEffect(() => {
    const valorSalvo = localStorage.getItem("logado");
    if (valorSalvo === "true") setIsLoggedIn(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("logado", String(isLoggedIn));
  }, [isLoggedIn]);

  if (!isLoggedIn) return null;

  return (
    <>
      <Cabecalho />
      <div className="mt-20 pt-8 pb-10 p-5 rounded-3xl bg-[#ffe0e7]">
        <LembrancasCard
          aberto={dialogIsOpen}
          setar={setDialogIsOpen}
          setarDetalhe={(id) => {
            setCardSelecionado(id);
            setDetalheAberto(true);
          }}
        />
        <DialogCard aberto={dialogIsOpen} onFechar={() => setDialogIsOpen(false)} />
        <DetalheCardDialog
          aberto={detalheAberto}
          onFechar={() => {
            setDetalheAberto(false);
            setCardSelecionado(null);
          }}
          cardId={cardSelecionado}
          onDeletado={() => {
            setDetalheAberto(false);
            setCardSelecionado(null);
            location.reload();
          }}
        />
      </div>
    </>
  );
}