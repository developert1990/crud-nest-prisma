import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './movie/movie.module';
import { PrismaModule } from './prisma/prisma.module';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [MovieModule, PrismaModule, NotificationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
