import { CreateNotificationDto } from './dto/create-notification.dto';
import { NotificationService } from './notification.service';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('notification')
@ApiTags('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  async create(
    @Body() notificationData: CreateNotificationDto,
  ): Promise<CreateNotificationDto> {
    return this.notificationService.createNotification(notificationData);
  }
}
