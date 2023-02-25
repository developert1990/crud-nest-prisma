/*
  Warnings:

  - You are about to alter the column `votes` on the `movie` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- AlterTable
ALTER TABLE `movie` MODIFY `votes` INTEGER NOT NULL DEFAULT 0;
