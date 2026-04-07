import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountController, MemberController } from './controllers';
import { AccountService } from './service/account.service';

@Module({
  imports: [],
  controllers: [AppController, AccountController, MemberController],
  providers: [AppService, AccountService],
})
export class AppModule {}
