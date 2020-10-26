import bcryptjs from "bcryptjs";
import config from "../../config.json";

const salt: string = bcryptjs.genSaltSync(config.criptografiaSalt);

export function criptografar(senha: string): string {
  return bcryptjs.hashSync(senha, salt);
}

export function compararSenha(
  senhaNaoCriptografada: string,
  senhaCriptografada: string
): boolean {
  return bcryptjs.compareSync(senhaNaoCriptografada, senhaCriptografada);
}
