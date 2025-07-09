/*
  Warnings:

  - A unique constraint covering the columns `[login]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `autorLogin` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "autorLogin" TEXT NOT NULL,
ALTER COLUMN "createdAt" DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX "User_login_key" ON "User"("login");
