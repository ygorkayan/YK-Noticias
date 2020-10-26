import Db from "../Config/Db";

function executarQuery(query: string): Promise<Array<Object>> {
  return new Promise((resolver, reject) =>
    Db.query(query, (err, result) => {
      if (err) return reject(err);
      resolver(result);
    })
  );
}

export function buscarSenhaPorEmail(email: string): Promise<any> {
  const query: string = `select senha from redatores where email = '${email}'`;

  return new Promise((resolver, reject) => {
    return executarQuery(query).then((resp) => {
      if (resp.length > 0) {
        resolver(resp[0]);
      } else {
        reject("nao encontrado");
      }
    });
  });
}

export function trocarSenha(email: string, novaSenha: string): Promise<any> {
  const query: string = `update redatores set senha = '${novaSenha}' where email = '${email}'`;

  return new Promise((resolver, reject) => {
    executarQuery(query).then((resp: any) => {
      if (resp.affectedRows === 0) reject("email nao encontrado");
      return resolver(`senha do email ${email} elterada`);
    });
  });
}

export function cadastrarRedator(
  nome: string,
  email: string,
  senha: string
): Promise<any> {
  const query: string = `insert into redatores (
    nome, email, senha, super_redator
  ) values (
    '${nome}', '${email}', '${senha}', false
  );`;

  return new Promise((resolver, reject) => {
    executarQuery(query)
      .then(() => resolver("cadastrado com sucesso"))
      .catch((erro) => {
        const msgDuplicidade: string = erro.sqlMessage;
        const cont = msgDuplicidade.indexOf("'redatores.") + 11;
        const categoria = msgDuplicidade.substring(cont).replace("'", "");

        reject({ duplicidade: categoria });
      });
  });
}
