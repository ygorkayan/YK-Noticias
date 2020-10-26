const nodemailer = require("nodemailer");
import config from "../../config.json";

const host: string = config.host;
const email: string = config.email;
const senha: string = config.senhaEmail;

const transporter = nodemailer.createTransport({
  name: email,
  host: host,
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass: senha,
  },
});

function enviarEmail(para: string, assunto: string, mensagem: string) {
  const config = {
    from: email,
    to: para,
    subject: assunto,
    text: mensagem,
  };

  return new Promise((resolver, reject) => {
    transporter.sendMail(config, function (erro: any, info: any) {
      if (erro) reject("Nao Enviado");
      resolver("Enviado");
    });
  });
}

export function emailRecuperaçaoSenha(para: string, novaSenha: string) {
  const nome = para.split("@")[0];
  const mensagem = `Ola ${nome}, segue abaixo a sua nova senha
  Senha: ${novaSenha}
  Recomendamos que efetue a troca dela.`;

  return enviarEmail(para, "Recuperacao de Senha", mensagem);
}

export function emailCadastro(nome: string, email: string, senha: string) {
  const mensagem = `Ola ${nome}, segue abaixo os dados do seu cadastro
  Nome: ${nome}
  Email: ${email}
  Senha: ${senha}
  Seja bem vindo ao YK Noticias`;

  return enviarEmail(email, "Confirmacao de cadastro", mensagem);
}
