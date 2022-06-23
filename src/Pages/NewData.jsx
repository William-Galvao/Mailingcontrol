import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UFList } from "../Components/Lists";
import { db } from "../Firebase/firebase";

export default function NewData() {
  const [newEmpresa, setNewEmpresa] = useState("");
  const [newCNPJ, setNewCNPJ] = useState("");
  const [newEstado, setNewEstado] = useState("");
  const navigate = useNavigate();

  const companiesCollectionRef = collection(db, "companies");

  const handleCreate = async () => {
    await addDoc(companiesCollectionRef, {
      Empresa: newEmpresa,
      CNPJ: newCNPJ,
      Estado: newEstado,
    });
    navigate("/");
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="d-flex flex-column justify-content-center">
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Nome da empresa"
            onChange={(e) => {
              setNewEmpresa(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="CNPJ"
            onChange={(e) => {
              setNewCNPJ(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <select
            className="form-select"
            onChange={(e) => {
              setNewEstado(e.target.value);
            }}
          >
            <option selected>Selecione o Estado</option>
            {UFList.map((estado) => (
              <option key={estado} value={`${estado}`}>
                {estado}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-dark" onClick={handleCreate}>
          Cadastrar
        </button>
      </div>
    </div>
  );
}
