import { CreateMovieDTO } from './dto/create-movie.dto';
import { MovieService } from './movie.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  async getAll() {
    return this.movieService.allMovies();
  }

  @Post()
  async create(@Body() movieData: CreateMovieDTO): Promise<string> {
    return this.movieService.createMovie(movieData);
  }
}
