import { CreateMovieDTO } from './create-movie.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateMovieDTO extends PartialType(CreateMovieDTO) {}
