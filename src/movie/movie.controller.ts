import { UpdateMovieDTO } from './dto/update-movie.dto';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { MovieService } from './movie.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Movie } from '@prisma/client';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  async getMovies(
    @Query('offset') offset: number,
    @Query('sort') sort: string,
    @Query('orderby') order: string,
  ) {
    return this.movieService.filterMovies(offset, sort, order);
  }

  @Post()
  async create(@Body() movieData: CreateMovieDTO): Promise<string> {
    return this.movieService.createMovie(movieData);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() movieData: UpdateMovieDTO,
  ): Promise<string> {
    return this.movieService.updateMovie(id, movieData);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<string> {
    return this.movieService.deleteMovie(id);
  }

  @Get('search')
  async search(@Query('title') title: string): Promise<Movie[]> {
    return this.movieService.searchMovies(title);
  }
}
