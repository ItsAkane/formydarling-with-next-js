import { prisma } from "@/lib/prisma";
import { IncomingForm } from 'formidable-serverless';
import { writeFile, mkdir } from "fs/promises";
import { v4 as uuidv4 } from 'uuid';
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from 'fs';
import { Fields, Files } from "formidable";

export const config = {
  api: {
    bodyParser: false
  },
};

export async function POST(req: NextRequest) {
  try {
    const form = new IncomingForm({ uploadDir: '/tmp', keepExtensions: true });

    const reqNodeStream = (req as any).node?.req;

    const data: any = await new Promise((resolve, reject) => {
      form.parse(reqNodeStream, (err: any, fields: Fields, files: Files) => {
        if (err) return reject(err);
        resolve({ fields, files });
      });
    });

    const file = data.files?.imagem?.[0];
    const descricao = data.fields?.descricao?.[0];
    const autorLogin = data.fields?.autorLogin?.[0];
    const createdAt = new Date(data.fields?.createdAt?.[0]);

    if (!file || !descricao || !autorLogin || !createdAt) {
      return NextResponse.json({ error: "Dados incompletos" }, { status: 400 });
    }

    const ext = path.extname(file.originalFilename || '');
    const newFileName = uuidv4() + ext;

    const destinationDir = path.join(process.cwd(), 'public', 'uploads');
    if (!fs.existsSync(destinationDir)) {
      await mkdir(destinationDir, { recursive: true });
    }

    const destinationPath = path.join(destinationDir, newFileName);
    await writeFile(destinationPath, await file.toBuffer());

    const imagemUrl = `/uploads/${newFileName}`;

    const novocard = await prisma.card.create({
      data: {
        imagemUrl,
        descricao,
        createdAt,
        autorLogin,
      },
    });

    return NextResponse.json(novocard);
  } catch (error) {
    console.error("Erro ao fazer upload:", error);
    return NextResponse.json({ error: "Erro interno ao salvar card" }, { status: 500 });
  }
}