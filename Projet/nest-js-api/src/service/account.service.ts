import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountService {
    public signIn(): string{
        return 'Sign In service';
    }

    public signUp(): string{
        return 'Sign Up service';
    }

    public modify(): string{
        return 'Modify Service';
    }

    public delete(): void {
        return;
    }
}
