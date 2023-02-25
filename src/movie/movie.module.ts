import { PrismaService } from 'src/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';

@Module({
  controllers: [MovieController],
  providers: [PrismaService, MovieService],
})
export class MovieModule {}
