import { Resend } from 'resend';

const resend = new Resend('re_icSbDhMo_781bvptYUDw5e1wd3bkVst44');

async function sendMail (from , sub , msg) {
  const { data, error } = await resend.emails.send({
    from: from,
    to: 'akshathpkk@gmail.com',
    subject: sub,
    html: msg,
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
};

export default sendMail;