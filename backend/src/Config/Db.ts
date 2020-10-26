import Mysql from "mysql";
import Config from "../../config.json";

export default Mysql.createConnection({
  host: Config.localhost,
  user: Config.user,
  password: Config.password,
  database: Config.database,
});

/*
  Comandos SQL Usados

  create schema noticias;

  create table noticias (
    id int not null auto_increment primary key,
    titulo varchar(255) not null,
    autor varchar(100) not null,
    data_publicacao bigint not null,
    banner varchar(255) not null,
    texto text not null,
    categoria varchar(100) not null
  )


  create table redatores (
    id int not null auto_increment primary key,
    nome varchar(255) not null unique,
    email varchar(255) not null unique,
    senha varchar(255) not null,
    super_redator boolean not null
);
*/
