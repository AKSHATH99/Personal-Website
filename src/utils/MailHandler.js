import { Resend } from 'resend';

const resend = new Resend('re_icSbDhMo_781bvptYUDw5e1wd3bkVst44');

(async function () {
  const { data, error } = await resend.emails.send({
    from: '',
    to: 'akshathpkk@gmail.com',
    subject: 'Hello World',
    html: '<strong>It works!</strong>',
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
})();
