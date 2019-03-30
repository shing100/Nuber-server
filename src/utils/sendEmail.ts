import Mailgun from "mailgun-js";

const mailGunClient = new Mailgun({
  apiKey: procces.env.MAILGUN_API_KEY || "",
  domain: "sandbox19be5094f8f4471aac927f451b0b37db.mailgun.org"
});

const sendEmail = (subject: string, html: string) => {
    const emailData = {
        from: "nsnl@nsnl.io",
        // 보낼사람 등록
        to: "shing100@Naver.com",
        subject,
        html
    }
    return mailGunClient.messages().send(emailData);
}

export const sendVerificationEmail = (fullName: string, key: string) => {
    const emailSubject = `안녕하세요! ${fullName}, 이메일을 확인해주세요`;
    const emailBody = `이메일 인증을 위해서 클릭해주세요 <a href="http://nsnl.io/verification/${key}/">여기</a>`;
    return sendEmail(emailSubject, emailBody)
}