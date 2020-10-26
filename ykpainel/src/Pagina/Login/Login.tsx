import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";

import Container from "../../Components/Container";
import AreaTitulo from "../../Components/AreaTitulo";
import AreaInput from "../../Components/AreaInputs";
import AreaBtns from "../../Components/AreaBtns";
import Alerta from "../../Components/Alerta";
import { logar } from "../../Axios";
import { Ml, RecuperarSenha } from "./Util";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [alertaVisivel, setAlertaVisivel] = useState(false);
  const [alertaMsg, setAlertaMsg] = useState("");

  function fazerLogin() {
    logar(email, senha)
      .then((resp) => {
        setAlertaVisivel(true);
        setAlertaMsg(resp);
      })
      .catch((erro) => {
        setAlertaVisivel(true);
        setAlertaMsg(erro);
      });
  }

  return (
    <Container>
      <AreaTitulo height={20}>YK Noticias</AreaTitulo>
      <AreaInput height={40}>
        <TextField
          label="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          label="Senha"
          type="password"
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
        />
      </AreaInput>
      <AreaBtns height={20}>
        <Button variant="contained" onClick={() => fazerLogin()}>
          Logar
        </Button>
        <Ml>
          <Link style={{ textDecoration: "none" }} to="/cadastro">
            <Button variant="contained">Cadastro</Button>
          </Link>
        </Ml>
      </AreaBtns>
      <RecuperarSenha>
        <Link style={{ textDecoration: "none" }} to="/recuperar-senha">
          <Button variant="contained">Recuperar Senha</Button>
        </Link>
      </RecuperarSenha>
      <Alerta
        visivel={alertaVisivel}
        setVisivel={setAlertaVisivel}
        msg={alertaMsg}
      />
    </Container>
  );
};

export default Login;
