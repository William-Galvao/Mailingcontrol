import Container from "../Components/Container";
import { UFList } from "../Components/Lists";

export default function NewData() {
  return (
    <Container>
      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          placeholder="Nome da empresa"
        />
      </div>
      <div className="mb-3">
        <input className="form-control" type="text" placeholder="CNPJ" />
      </div>
      <div className="mb-3">
        <select className="form-select">
          <option selected>Selecione o Estado</option>
          {UFList.map((estado) => (
            <option key={estado} value={`${estado}`}>
              {estado}
            </option>
          ))}
        </select>
      </div>
    </Container>
  );
}
