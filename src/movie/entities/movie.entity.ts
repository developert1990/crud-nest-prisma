import { ApiProperty } from '@nestjs/swagger';

export class MovieEntity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  year: number;

  @ApiProperty()
  votes: number;

  @ApiProperty()
  description: string;
}
