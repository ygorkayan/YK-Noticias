import {
  cadastrarRedator,
  buscarSenhaPorEmail,
  trocarSenha,
} from "../Dao/RedatoresDAO";
import { criptografar, compararSenha } from "../Util/Criptografia";
import { emailRecuperaçaoSenha, emailCadastro } from "../Util/Email";
import { Request, Response } from "express";

export function logar(req: Request, resp: Response): void {
  const email: string = req.body.email;
  const senha: string = req.body.senha;

  buscarSenhaPorEmail(email)
    .then((sucesso) => {
      const senhaDb: string = sucesso.senha;
      if (compararSenha(senha, senhaDb)) {
        resp.status(200).json({ token: "token aqui" });
      } else {
        resp.status(400).end();
      }
    })
    .catch(() => resp.status(400).end());
}

export function recuperarSenha(req: Request, resp: Response): void {
  const email: string = req.body.email;
  const senhaNova: string = Math.random().toString();
  const senhaNovaCriptografada = criptografar(senhaNova);

  trocarSenha(email, senhaNovaCriptografada)
    .then(() => {
      emailRecuperaçaoSenha(email, senhaNova);
      resp.status(202).end();
    })
    .catch(() => resp.status(400).end());
}

export function cadastrar(req: Request, resp: Response): void {
  const nome: string = req.body.nome;
  const email: string = req.body.email;
  const senha: string = req.body.senha;
  const senhaCriptografada: string = criptografar(senha);

  cadastrarRedator(nome, email, senhaCriptografada)
    .then(() => {
      emailCadastro(nome, email, senha);
      resp.status(201).end();
    })
    .catch((erro) => resp.status(200).json(erro));
}
