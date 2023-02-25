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
    const hasMovie = await this.findMovie(movieData.title);
    if (hasMovie) {
      throw new NotImplementedException('The movie already exists');
    }
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

  async findMovie(title: string) {
    const hasMovie = await this.prisma.movie.findUnique({
      where: {
        title,
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

  async updateMovie(movieData: UpdateMovieDTO) {
    console.log('movieData', movieData);
    return 'updated';
  }
}
