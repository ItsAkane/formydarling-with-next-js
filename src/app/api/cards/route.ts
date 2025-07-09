import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const cards = await prisma.card.findMany({
    orderBy: { createdAt: 'desc' }
  })
  return NextResponse.json(cards)
}

export async function POST(req: Request) {
  const data = await req.json();
  const { imagemUrl, descricao } = data;

  const novocard = await prisma.card.create({
    data: { imagemUrl, descricao },
  });

  return NextResponse.json(novocard);
}