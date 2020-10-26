import Axios from "axios";

const ip = "http://192.168.0.3:4000/redatores";

export function logar(email: string, senha: string) {
  const uri = `${ip}/login`;
  const data = { email, senha };

  return Axios.post(uri, data)
    .then(() => "logado com sucesso")
    .catch(() => "Usuario ou senha incorreto");
}

export function recuperarSenha(email: string) {
  const uri = `${ip}/recuperar-senha`;
  const data = { email };

  const msg = "Caso Email seja encontrado sera enviado uma nova senha para ele";
  return Axios.post(uri, data)
    .then(() => msg)
    .catch(() => msg);
}

export function cadastro(
  nome: string,
  email: string,
  senha: string
): Promise<string> {
  const uri = `${ip}/cadastro`;
  const data = { nome, email, senha };

  return new Promise((resolver, reject) => {
    Axios.post(uri, data).then((resp) => {
      if (resp.status === 201) {
        resolver("Conta criada com sucesso");
      } else {
        reject(
          `Nao pode ser criado pois ja contem alguem com esse ${resp.data.duplicidade}`
        );
      }
    });
  });
}
