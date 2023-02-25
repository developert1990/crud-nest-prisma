import { UpdateMovieDTO } from './dto/update-movie.dto';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { MovieService } from './movie.service';
import { Body, Controller, Get, Patch, Post } from '@nestjs/common';

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

  @Patch()
  async update(@Body() movieData: UpdateMovieDTO): Promise<string> {
    return this.movieService.updateMovie(movieData);
  }
}
