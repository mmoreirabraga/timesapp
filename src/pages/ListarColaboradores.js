import Time from "../componentes/Time";

const ListarColaboradores = ({
  times,
  colaboradores,
  mudarCor,
  deletarColaborador,
  resolverFavorito,
}) => {
  //const [times, setTimes] = useState(times);

  //const [colaboradores, setColaboradores] = useState(inicial);

  return (
    <section className="times">
      <h1>Minha organização</h1>
      {times.map((time, indice) => (
        <Time
          mudarCor={mudarCor}
          key={indice}
          time={time}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.id
          )}
          aoDeletar={deletarColaborador}
          aoFavoritar={resolverFavorito}
        />
      ))}
    </section>
  );
};

export default ListarColaboradores;
