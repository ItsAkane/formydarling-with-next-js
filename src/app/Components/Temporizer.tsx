'use client'; // Necessário se estiver usando App Router

import { useEffect, useState } from 'react';

export default function Temporizer() {
  const dataInicial = new Date('2024-10-13T00:00:00'); // <-- altere para a data desejada
  const [tempo, setTempo] = useState({ anos: 0, meses: 0, dias: 0, horas: 0, minutos: 0, segundos: 0 });

  useEffect(() => {
    const atualizarTempo = () => {
      const agora = new Date();
      const diff = calcularDiferenca(dataInicial, agora);
      setTempo(diff);
    };

    atualizarTempo(); // inicial
    const intervalo = setInterval(atualizarTempo, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="mt-10 bg-white p-5 rounded-[15px] shadow-[0_4px_10px_rgba(0,0,0,0.1)] border-[3px] border-[#ff80b3] max-w-[400px] text-[#ff1a75] text-[18px] leading-[1.5] mb-[20px] flex flex-col items-center">
      <h3 className="text-[#ff4d94] m-0 text-[20px]">Tempo de namoro!</h3>
      <p>{tempo.anos} anos, {tempo.meses} meses, {tempo.dias} dias, {tempo.horas}h {tempo.minutos}m {tempo.segundos}s</p>
    </div>
  );
}

function calcularDiferenca(inicio: Date, fim: Date) {
  let anos = fim.getFullYear() - inicio.getFullYear();
  let meses = fim.getMonth() - inicio.getMonth();
  let dias = fim.getDate() - inicio.getDate();
  let horas = fim.getHours() - inicio.getHours();
  let minutos = fim.getMinutes() - inicio.getMinutes();
  let segundos = fim.getSeconds() - inicio.getSeconds();

  if (segundos < 0) {
    segundos += 60;
    minutos--;
  }
  if (minutos < 0) {
    minutos += 60;
    horas--;
  }
  if (horas < 0) {
    horas += 24;
    dias--;
  }
  if (dias < 0) {
    const ultimoMes = new Date(fim.getFullYear(), fim.getMonth(), 0);
    dias += ultimoMes.getDate();
    meses--;
  }
  if (meses < 0) {
    meses += 12;
    anos--;
  }

  return { anos, meses, dias, horas, minutos, segundos };
}
