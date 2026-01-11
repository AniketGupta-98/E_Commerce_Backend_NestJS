// src/database/health.controller.ts
import { Controller, Get } from '@nestjs/common';
import { DbHealthService } from './db-health.service';

@Controller('health')
export class HealthController {
    constructor(private readonly dbHealthService: DbHealthService) { }

    @Get('db')
    checkDb() {
        return this.dbHealthService.check();
    }
}
