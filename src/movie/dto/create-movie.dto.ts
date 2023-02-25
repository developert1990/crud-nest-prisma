import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsString } from 'class-validator';

export class CreateMovieDTO {
  @IsString()
  @ApiProperty()
  title: string;

  @IsNumber()
  @ApiProperty()
  year: number;

  @IsNumber()
  @ApiProperty()
  votes: number;

  @IsArray()
  @ApiProperty()
  genreIds: number[];

  @IsString()
  @ApiProperty()
  description: string;
}

// {
//     "title": "100% Wolf",
//     "year": 2020,
//     "votes": 65,
//     "genreIds": [10751, 16, 14],
//     "description": "Freddy Lupin, heir to a proud family line of werewolves, is in for a shock when on his 14th birthday his first 'warfing' goes awry, turning him into a ferocious poodle. The pack elders give Freddy until the next moonrise to prove he has the heart of a wolf, or risk being cast out forever. With the help of an unlikely ally in a streetwise stray named Batty, Freddy must prove he's 100% Wolf."
//   },
