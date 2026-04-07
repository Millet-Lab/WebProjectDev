import { Controller, Post, Put, Delete } from '@nestjs/common';
import {AccountService} from "../service/account.service";

// http://localhost:PORT/account
@Controller('account')
export class AccountController {
    constructor(private readonly accountService: AccountService) {}

    // http://localhost:PORT/account/sign-in
    @Post('sign-in')
    public signIn(): string{
        return this.accountService.signIn();
    }

    // http://localhost:PORT/account/sign-up
    @Post('sign-up')
    public signUp(): string{
        return this.accountService.signUp();
    }

    // http://localhost:PORT/account/modify
    @Put('modify')
    public modify(): string{
        return this.accountService.modify();
    }

    // http://localhost:PORT/account/delete-account
    @Delete('delete-account')
    public delete(): void{
        return this.accountService.delete();
    }
}