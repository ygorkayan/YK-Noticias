import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./Pagina/Login/Login";
import RecuperarSenha from "./Pagina/RecuperarSenha/RecuperarSenha";
import Cadastro from "./Pagina/Cadastro/Cadastro";

const Pagina = styled.div`
  display: flex;
  height: 98vh;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
`;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Pagina>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/recuperar-senha">
            <RecuperarSenha />
          </Route>
          <Route path="/cadastro">
            <Cadastro />
          </Route>
        </Switch>
      </Pagina>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
