
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { MAIL_CONFIG } from 'config/mail-config';

@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: {
          host: MAIL_CONFIG.host,
          port: MAIL_CONFIG.port,
          ignoreTLS: true,
          secure: true,
          auth: {
            user: MAIL_CONFIG.user,
            pass: MAIL_CONFIG.pass
          },
        },
        defaults: {
          from: `"No Reply" <${MAIL_CONFIG.user}>`,
        }
      })
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
