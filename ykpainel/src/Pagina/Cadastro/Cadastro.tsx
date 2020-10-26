import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";

import Container from "../../Components/Container";
import AreaTitulo from "../../Components/AreaTitulo";
import AreaInputs from "../../Components/AreaInputs";
import AreaBtns from "../../Components/AreaBtns";
import AreaVoltar from "../../Components/AreaVoltar";
import Alerta from "../../Components/Alerta";
import { cadastro } from "../../Axios";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [alertaVisivel, setAlertaVisivel] = useState(false);
  const [alertaMsg, setAlertaMsg] = useState("");

  function fazerCadastro() {
    if (senha !== confirmSenha) {
      setAlertaMsg("Senhas nao combinam");
      setAlertaVisivel(true);
      return;
    }

    cadastro(nome, email, senha)
      .then((sucesso) => {
        setAlertaMsg(sucesso);
        setAlertaVisivel(true);
      })
      .catch((erro) => {
        setAlertaMsg(erro);
        setAlertaVisivel(true);
      });
  }

  return (
    <Container>
      <AreaTitulo height={20}>Cadastro</AreaTitulo>
      <AreaInputs height={50}>
        <TextField
          label="Nome"
          value={nome}
          onChange={(t) => setNome(t.target.value)}
        />
        <TextField
          label="Email"
          value={email}
          onChange={(t) => setEmail(t.target.value)}
        />
        <TextField
          label="Senha"
          type="password"
          value={senha}
          onChange={(t) => setSenha(t.target.value)}
        />
        <TextField
          label="Confirma Senha"
          type="password"
          value={confirmSenha}
          onChange={(t) => setConfirmSenha(t.target.value)}
        />
      </AreaInputs>
      <AreaBtns height={20}>
        <Button variant="contained" onClick={() => fazerCadastro()}>
          Cadastrar
        </Button>
      </AreaBtns>
      <AreaVoltar height={10}>
        <Link to="/">
          <Button variant="contained">
            <ArrowBackIcon />
          </Button>
        </Link>
      </AreaVoltar>
      <Alerta
        visivel={alertaVisivel}
        setVisivel={setAlertaVisivel}
        msg={alertaMsg}
      />
    </Container>
  );
};

export default Cadastro;
