import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HouseModule } from './house/house.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    HouseModule,
    PrismaModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}
