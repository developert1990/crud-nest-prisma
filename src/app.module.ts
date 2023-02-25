import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './movie/movie.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [MovieModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
