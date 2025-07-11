import type { NextApiRequest, NextApiResponse } from 'next';
import * as formidable from 'formidable';
import cloudinary from '@/lib/cloudinary';
import { prisma } from '@/lib/prisma';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: 'Erro ao fazer upload' });

    const file = Array.isArray(files.imagem) ? files.imagem[0] : files.imagem;

    if (!file?.filepath) return res.status(400).json({ error: 'Imagem não enviada' });

    const uploadResult = await cloudinary.uploader.upload(file.filepath, {
      folder: 'lembrancas',
    });

    const imagemUrl = uploadResult.secure_url;
    const descricao = fields.descricao?.[0] || '';
    if (!fields.createdAt?.[0]) {
      return res.status(400).json({ error: 'Campo "createdAt" é obrigatório' });
    }
    const createdAt = new Date(fields.createdAt[0]);
    const autorLogin = fields.autorLogin?.[0] || '';

    const card = await prisma.card.create({
      data: { imagemUrl, descricao, createdAt, autorLogin },
    });

    return res.status(201).json(card);
  });
}