-- CreateTable
CREATE TABLE "Card" (
    "id" SERIAL NOT NULL,
    "imagemUrl" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);
