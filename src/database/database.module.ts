// src/database/database.module.ts
import { Module } from '@nestjs/common';
import { DbHealthService } from './db-health.service';
import { HealthController } from './health.controller';

@Module({
    providers: [DbHealthService],
    controllers: [HealthController],
    exports: [DbHealthService],
})
export class DatabaseModule { }
