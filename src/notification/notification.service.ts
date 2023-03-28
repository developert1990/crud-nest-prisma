import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { Notification } from './entities/notification.entity';

@Injectable()
export class NotificationService {
  notifications: Notification[] = [
    { id: 1, name: 'Hong', text: 'Bid is added', hasRead: true },
  ];
  clientToUser = {};

  identify(name: string, clientId: string) {
    this.clientToUser[clientId] = name;
    return Object.values(this.clientToUser);
  }

  getclientName(clientId: string) {
    return this.clientToUser[clientId];
  }

  async createNotification(createNotificationDto: CreateNotificationDto) {
    const notification = { ...createNotificationDto };
    this.notifications.push(notification);
    return notification;
  }

  findAll() {
    return this.notifications;
  }

  findOne(id: number) {
    return `This action returns a #${id} notification`;
  }

  update(id: number, updateNotificationDto: UpdateNotificationDto) {
    return `This action updates a #${id} notification`;
  }

  remove(id: number) {
    return `This action removes a #${id} notification`;
  }
}
