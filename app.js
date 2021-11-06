(async () =>{
  require('dotenv-safe').config();
  const sgMail = require('@sendgrid/mail');

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
      to: process.env.TO,
      from: process.env.FROM,
      subject: 'este é o sobre da mensagem :-)',
      text: 'conteudo da mensagem enviada!!!!!!!',
  }

  try {
      const result = await sgMail.send(msg);
      console.log('Email enviado', result);
  }
  catch (error) {
      console.error(error)
  }
})();






