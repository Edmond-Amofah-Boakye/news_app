import nodemailer from "nodemailer";
class AppEmail{
    constructor(
        private readonly email: string , 
        private readonly message: string ,
        private readonly username?: string ,
    ){}

    createTransport (){
        const transport = nodemailer.createTransport({
            host: process.env.HOST,
            port: Number(process.env.MAIL_PORT),
            secure: true,
            auth: {
                user: process.env.USER,
                pass: process.env.APP_PASSWORD,
            },
        })

        return transport
    }

    async sendMail(subject: string){
        const info = await this.createTransport().sendMail({
            from: process.env.USER,
            to: this.email,
            subject: subject,
            text: this.message,
          });
        
          console.log("Message sent: %s", info.messageId);
    }

    sendResetEmail (){
        this.sendMail("RESET PASSWORD").catch(console.error)
    }
}

export default AppEmail