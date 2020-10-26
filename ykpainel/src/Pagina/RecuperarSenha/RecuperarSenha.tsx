import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link, Redirect } from "react-router-dom";

import Container from "../../Components/Container";
import AreaTitulo from "../../Components/AreaTitulo";
import AreaInputs from "../../Components/AreaInputs";
import AreaBtns from "../../Components/AreaBtns";
import AreaVoltar from "../../Components/AreaVoltar";
import Alerta from "../../Components/Alerta";
import { recuperarSenha } from "../../Axios";

const RecuperarSenha = () => {
  const [email, setEmail] = useState("");
  const [alertaVisivel, setAlertaVisivel] = useState(false);
  const [alertaMsg, setAlertaMsg] = useState("");

  function fazerRecuperacaoDeSenha() {
    recuperarSenha(email)
      .then((resp) => {
        setAlertaMsg(resp);
        setAlertaVisivel(true);
        <Redirect to="/"/>
      })
      .catch((erro) => {
        setAlertaMsg(erro);
        setAlertaVisivel(true);
      });
  }

  return (
    <Container>
      <AreaTitulo height={30}>Recuperar Senha</AreaTitulo>
      <AreaInputs height={20}>
        <TextField
          label="Email"
          value={email}
          onChange={(t) => setEmail(t.target.value)}
        />
      </AreaInputs>
      <AreaBtns height={20}>
        <Button variant="contained" onClick={() => fazerRecuperacaoDeSenha()}>
          Recuperar
        </Button>
      </AreaBtns>
      <AreaVoltar height={30}>
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

export default RecuperarSenha;
