import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import * as formidable from 'formidable';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('upload handler');

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  const form = formidable.default({
    uploadDir: path.join(process.cwd(), 'public', 'uploads'),
    keepExtensions: true,
    maxFileSize: 5 * 1024 * 1024, // 5MB
  });

  const uploadDir = path.join(process.cwd(), 'public', 'uploads');
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Erro no parse:', err);
      return res.status(500).json({ error: 'Erro ao fazer upload' });
    }

    const fileArray = files.imagem instanceof Array ? files.imagem : [files.imagem];
    const file = fileArray[0];
    if (!file) return res.status(400).json({ error: 'Arquivo não enviado' });

    const descricao = fields.descricao?.[0] || '';
    if (!fields.createdAt?.[0]) {
      return res.status(400).json({ error: 'Campo "createdAt" é obrigatório' });
    }
    const createdAt = new Date(fields.createdAt[0]);
    const autorLogin = fields.autorLogin?.[0] || '';

    const ext = path.extname(file.originalFilename || '');
    const newFileName = uuidv4() + ext;
    const newPath = path.join(uploadDir, newFileName);

    fs.renameSync(file.filepath, newPath);
    const imagemUrl = `/uploads/${newFileName}`;

    const novocard = await prisma.card.create({
      data: {
        imagemUrl,
        descricao,
        createdAt,
        autorLogin,
      },
    });

    return res.status(201).json(novocard);
  })};