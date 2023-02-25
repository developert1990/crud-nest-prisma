import { UpdateMovieDTO } from './dto/update-movie.dto';
import { MovieEntity } from './entities/movie.entity';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable, NotImplementedException } from '@nestjs/common';

@Injectable()
export class MovieService {
  constructor(private prisma: PrismaService) {}
  async createMovie(movieData: CreateMovieDTO): Promise<string> {
    const { title, year, votes, genreIds, description } = movieData;

    (await this.prisma.movie.create({
      data: {
        title,
        year,
        votes,
        genres: {
          connect: genreIds.map((genreId) => ({ id: genreId })) || [],
        },
        description,
      },
    })) as MovieEntity;
    return 'Movie has been created.';
  }

  async findMovie(id: number) {
    const hasMovie = await this.prisma.movie.findUnique({
      where: {
        id,
      },
    });

    return hasMovie;
  }

  async allMovies() {
    const movies = await this.prisma.movie.findMany({
      include: {
        genres: true,
      },
    });
    console.dir(movies, { depth: null });
    return movies;
  }

  async updateMovie(id: number, movieData: UpdateMovieDTO) {
    console.log('herer?');
    const hasMovie = await this.findMovie(id);
    if (!hasMovie) {
      throw new NotImplementedException('The movie does not exists');
    }
    await this.prisma.movie.update({
      where: { id },
      data: { ...movieData },
    });
    return 'Movie is updated';
  }
}
