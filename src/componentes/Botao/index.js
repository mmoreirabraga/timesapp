import { useNavigate } from "react-router-dom";
import "./botao.css";

const Botao = ({ texto, navegarPara = "/" }) => {
  const navigate = useNavigate();

  return (
    <button
      className="botao"
      onClick={() => {
        navigate(navegarPara);
      }}
    >
      {texto}
    </button>
  );
};

export default Botao;
