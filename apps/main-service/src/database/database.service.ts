import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit {
  constructor() {
    const databaseUrl = `postgresql://postgres:DPkWVqIqMuPXGUZMNUzIlKPQwdzcTKbb@autorack.proxy.rlwy.net:33381/airbnb`;
    super({
      datasources: {
        db: {
          url: databaseUrl,
        },
      },
    });
  }
  async onModuleInit() {
    await this.$connect();
  }
}
