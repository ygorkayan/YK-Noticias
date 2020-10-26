import React, { SyntheticEvent } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

interface IProps {
  msg: string;
  visivel: boolean;
  setVisivel: any;
}

const Alerta = (props: IProps) => {
  const fechar = (event?: SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") return;
    props.setVisivel(false);
  };

  return (
    <Snackbar
      open={props.visivel}
      autoHideDuration={10000}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      onClose={fechar}
    >
      <Alert elevation={6} variant="filled" onClose={fechar} severity="info">
        {props.msg}
      </Alert>
    </Snackbar>
  );
};

export default Alerta;