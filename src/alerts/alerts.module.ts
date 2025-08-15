// src/alerts/alerts.module.ts
import { Module } from '@nestjs/common';
import { AlertsService } from './alerts.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Product} from "../products/entities/product.entity";
import {OrderItem} from "../orders/entities/order-item.entity";
import {MailService} from "../mail/mail.service";
import {User} from "../auth/entities/user.entity";
import { ReportsService } from '../report/reports.service';
import { ReportsModule } from '../report/reports.module';

@Module({
  imports: [
    ReportsModule,
    TypeOrmModule.forFeature([Product,OrderItem,User]),
  ],
  providers: [AlertsService,ReportsService,MailService],
  exports: [AlertsService],
})
export class AlertsModule {}