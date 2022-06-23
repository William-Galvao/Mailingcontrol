import { UFList } from "../Components/Lists";

export default function NewData() {
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="d-flex flex-column justify-content-center">
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
        <button type="submit" className="btn btn-dark">
          Cadastrar
        </button>
      </div>
    </div>
  );
}
