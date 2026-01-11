import { Injectable, OnModuleInit } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class DbHealthService implements OnModuleInit {
    constructor(private readonly dataSource: DataSource) { }

    async onModuleInit() {
        try {
            await this.dataSource.query('SELECT 1');
            console.log('✅ PostgreSQL CONNECTED');
        } catch (error) {
            console.error('❌ PostgreSQL NOT CONNECTED');
            console.error(error.message);
        }
    }

    async check() {
        await this.dataSource.query('SELECT 1');
        return { status: 'ok', database: 'connected' };
    }
}
