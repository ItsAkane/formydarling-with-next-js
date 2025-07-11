import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const cards = await prisma.card.findMany({
        orderBy: { id: 'desc' },
      });
      return res.status(200).json(cards);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar cards' });
    }
  }

  if (req.method === 'POST') {
    try {
      const { imagemUrl, descricao, createdAt, autorLogin } = req.body;

      const novocard = await prisma.card.create({
        data: { imagemUrl, descricao, createdAt: new Date(createdAt), autorLogin },
      });

      return res.status(201).json(novocard);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar card' });
    }
  }

  return res.status(405).json({ error: 'Método não permitido' });
}