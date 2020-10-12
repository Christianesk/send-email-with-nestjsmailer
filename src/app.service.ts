import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { MAIL_CONFIG} from '../config/mail-config'

@Injectable()
export class AppService {
  constructor(private readonly mailerService: MailerService) {}


  public sendMail(): void {
    this
      .mailerService
      .sendMail({
        to: 'example@gmail.com', // list of receivers
        from: `"No Reply" <${MAIL_CONFIG.user}>`, // sender address
        subject: MAIL_CONFIG.subject.register, // Subject line
        text: 'welcome', // plaintext body
        html: '<b>welcome</b>', // HTML body content
      })
      .then((res:any) => {
        console.log(res)
      })
      .catch((err:any) => {
        console.log('Error ',err)
      });
  }
}
