import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  try {
    const { login, password } = req.body;

    const usuario = await prisma.user.findUnique({
      where: { login },
    });

    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    if (usuario.password !== password) {
      return res.status(401).json({ error: 'Senha incorreta' });
    }

    return res.status(200).json({ success: true, usuario });
  } catch (error) {
    return res.status(500).json({ error: 'Erro interno no servidor' });
  }
}