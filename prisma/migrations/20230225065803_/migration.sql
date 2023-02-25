/*
  Warnings:

  - You are about to drop the `GenresOnMovies` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `GenresOnMovies` DROP FOREIGN KEY `GenresOnMovies_genreId_fkey`;

-- DropForeignKey
ALTER TABLE `GenresOnMovies` DROP FOREIGN KEY `GenresOnMovies_movieId_fkey`;

-- DropTable
DROP TABLE `GenresOnMovies`;

-- CreateTable
CREATE TABLE `_GenreToMovie` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_GenreToMovie_AB_unique`(`A`, `B`),
    INDEX `_GenreToMovie_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_GenreToMovie` ADD CONSTRAINT `_GenreToMovie_A_fkey` FOREIGN KEY (`A`) REFERENCES `Genre`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_GenreToMovie` ADD CONSTRAINT `_GenreToMovie_B_fkey` FOREIGN KEY (`B`) REFERENCES `movie`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
