import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const cards = await prisma.card.findMany({
    orderBy: { id: 'desc' }
  })
  return NextResponse.json(cards)
}

export async function POST(req: Request) {
  const data = await req.json();
  const { imagemUrl, descricao , createdAt , autorLogin} = data;

  const novocard = await prisma.card.create({
    data: { imagemUrl, descricao , createdAt , autorLogin },
  });

  return NextResponse.json(novocard);
}