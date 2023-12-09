import { useState } from "react";
import Campo from "../componentes/Campo";
import Botao from "../componentes/Botao";
import "./formulario.css";

const FormularioTime = ({ cadastrarTime }) => {
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");

  return (
    <section className="formulario-container">
      <form
        className="formulario"
        onSubmit={(evento) => {
          evento.preventDefault();
          cadastrarTime({ nome: nomeTime, cor: corTime });
          setNomeTime("");
          setCorTime("");
        }}
      >
        <h2>Preencha os dados para criar um novo time.</h2>
        <Campo
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o nome do time"
          valor={nomeTime}
          aoAlterado={(valor) => setNomeTime(valor)}
        />
        <Campo
          obrigatorio={true}
          label="Cor"
          type="color"
          placeholder="Digite sua cor"
          valor={corTime}
          aoAlterado={(valor) => setCorTime(valor)}
        />
        <Botao texto="Criar Time" />
      </form>
    </section>
  );
};

export default FormularioTime;
