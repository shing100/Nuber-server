import Twilio from "twilio";

const twilioClient = Twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

// 아무 메시지 전송
export const sendSMS = (to: string, body: string): Promise<any> => {
    return twilioClient.messages.create({
        body,
        to,
        from: process.env.TWILIO_PHONE
    })
}

// 인증 텍스트 메시지 전송
export const sendVerificationSMS = (to: string, key: string) => sendSMS(to, `인증번호는 ${key} 입니다.`);