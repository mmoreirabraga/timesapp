import { useState } from "react";
import Banner from "./componentes/Banner";
import Rodape from "./componentes/Rodape";
import { v4 as uuidv4 } from "uuid";
import Home from "./pages/Home";
import ListarColaboradores from "./pages/ListarColaboradores";
import FormularioColaborador from "./pages/FormularioColaborador";
import colaboradoresjson from "./colaboradores.json";
import timesjson from "./times.json";
import FormularioTime from "./pages/FormularioTime";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Botao from "./componentes/Botao";

function App() {
  const [colaboradorList, setColaboradorList] = useState(
    colaboradoresjson.colaboradores
  );
  const [timeList, setTimeList] = useState(timesjson.times);

  const aoCadastrar = (colaborador) => {
    setColaboradorList([...colaboradorList, colaborador]);
  };

  function aoCadastrarTime({ nome, cor }) {
    setTimeList([...timeList, { nome, cor, id: uuidv4() }]);
  }

  function aoDeletarColaborador(id) {
    setColaboradorList(
      colaboradorList.filter((colaborador) => colaborador.id !== id)
    );
  }

  function aoMudarCor(cor, id) {
    setTimeList(
      timeList.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  function aoResolverFavorito(id) {
    setColaboradorList(
      colaboradorList.map((colaborador) => {
        if (colaborador.id === id) colaborador.favorito = !colaborador.favorito;
        return colaborador;
      })
    );
  }

  return (
    <BrowserRouter>
      <Banner />
      <div className="centered-container-btn">
        <div className="centered-buttons">
          <Botao texto={"Home"} />
          <Botao texto={"Cad. Colaborador"} navegarPara={"/form-colaborador"} />
          <Botao texto={"Cad. Time"} navegarPara={"/form-time"} />
          <Botao
            texto={"Listar Colaborador"}
            navegarPara={"/listar-colaborador"}
          />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/form-colaborador"
          element={
            <FormularioColaborador cadastrar={aoCadastrar} times={timeList} />
          }
        />
        <Route
          path="/form-time"
          element={<FormularioTime cadastrarTime={aoCadastrarTime} />}
        />
        <Route
          path="/listar-colaborador"
          element={
            <ListarColaboradores
              times={timeList}
              colaboradores={colaboradorList}
              mudarCor={aoMudarCor}
              deletarColaborador={aoDeletarColaborador}
              resolverFavorito={aoResolverFavorito}
            />
          }
        />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default App;
