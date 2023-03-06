import { UpdateMovieDTO } from './dto/update-movie.dto';
import { MovieEntity } from './entities/movie.entity';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable, NotImplementedException } from '@nestjs/common';
import { Movie } from '@prisma/client';

@Injectable()
export class MovieService {
  private take = 10;

  constructor(private prisma: PrismaService) {}

  async filterMovies(
    offset: number,
    sort: string,
    order: string,
  ): Promise<Movie[]> {
    const movies = await this.prisma.movie.findMany({
      skip: offset,
      take: this.take,
      include: {
        genres: true,
      },
      orderBy: {
        [sort]: order,
      },
    });
    console.dir(movies, { depth: null });
    return movies;
  }

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

  async updateMovie(id: number, movieData: UpdateMovieDTO) {
    await this.checkHasMovie(id);
    await this.prisma.movie.update({
      where: { id },
      data: { ...movieData },
    });
    return 'Movie is updated.';
  }

  async deleteMovie(id: number) {
    await this.checkHasMovie(id);
    await this.prisma.movie.delete({
      where: { id },
    });
    return 'Movie is deleted.';
  }

  async searchMovies(
    title: string,
    offset: number,
    sort: string,
    order: string,
  ): Promise<Movie[]> {
    const movies = await this.prisma.movie.findMany({
      skip: offset,
      take: this.take,
      orderBy: {
        [sort]: order,
      },
      where: {
        title: {
          contains: title,
        },
      },
    });
    return movies;
  }

  async findMovie(id: number) {
    const hasMovie = await this.prisma.movie.findUnique({
      where: {
        id,
      },
    });

    return hasMovie;
  }

  async checkHasMovie(id: number): Promise<void | NotImplementedException> {
    const hasMovie = await this.findMovie(id);
    if (!hasMovie) {
      throw new NotImplementedException('The movie does not exists');
    }
    return;
  }
}
