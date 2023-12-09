import { useState } from "react";
import Botao from "../componentes/Botao";
import Campo from "../componentes/Campo";
import ListaSuspensa from "../componentes/ListaSuspensa";
import { v4 as uuidv4 } from "uuid";
import "./formulario.css";

const FormularioColaborador = ({ cadastrar, times }) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSubmeter = (evento) => {
    evento.preventDefault();
    console.log("form enviado", nome, cargo, imagem, time);
    cadastrar({
      id: uuidv4(),
      nome,
      cargo,
      imagem,
      time,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  /*const aoCadastrar = (colaborador) => {
    setColaboradorList([...colaboradorList, colaborador]);
  };*/

  return (
    <section className="formulario-container">
      <form className="formulario" onSubmit={aoSubmeter}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <Campo
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome "
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <Campo
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo "
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <Campo
          label="Imagem"
          placeholder="Informe o endereço da imagem "
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Times"
          items={times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao texto="Criar card" navegarPara={"/listar-colaborador"} />
      </form>
    </section>
  );
};

export default FormularioColaborador;
