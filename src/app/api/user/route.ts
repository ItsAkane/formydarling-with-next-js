import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { login, password } = await req.json();

  const usuario = await prisma.user.findUnique({
    where: { login }
  })

  if(!usuario){
    return NextResponse.json({error: 'Usuario nao encontrado'}, {status: 404});
  }

  if(usuario.password !== password){
    return NextResponse.json({error: 'Senha incorreta'}, {status: 401});
  }

  return NextResponse.json({sucess: true, usuario});
}