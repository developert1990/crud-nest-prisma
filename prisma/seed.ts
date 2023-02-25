import { Genre, PrismaClient } from '@prisma/client';
import * as genreData from './data/genres.json';

const prisma = new PrismaClient();

const main = async () => {
  const { genres } = genreData;

  for (const genre of genres) {
    await insertGenres(genre);
  }
};

const insertGenres = async (genre: Genre) => {
  const obj = prisma.genre.create({
    data: {
      id: genre.id,
      name: genre.name,
    },
  });
  return obj;
};

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
