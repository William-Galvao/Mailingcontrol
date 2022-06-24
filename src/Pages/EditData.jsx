import { doc, getDoc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UFList } from "../Components/Lists";
import { db } from "../Firebase/firebase";

export default function EditData() {
  const [company, setCompany] = useState({
    Empresa: "",
    CNPJ: "",
    Estado: "",
  });

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const docRef = doc(db, "companies", params.id);
      const docSnap = await getDoc(docRef);
      setCompany({ ...docSnap.data() });
    };
    getData();
  }, [params.id]);

  function handleChange(e) {
    setCompany({
      ...company,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setDoc(doc(db, "companies", params.id), company);
    navigate("/");
  };

  return (
    <div>
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="d-flex flex-column justify-content-center">
          <div className="mb-3">
            <input
              value={company.Empresa}
              className="form-control"
              type="text"
              name="Empresa"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              value={company.CNPJ}
              name="CNPJ"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <select
              className="form-select"
              value={company.Estado}
              name="Estado"
              onChange={handleChange}
            >
              <option selected>Selecione o Estado</option>
              {UFList.map((estado) => (
                <option key={estado} value={`${estado}`}>
                  {estado}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-dark" onClick={handleSubmit}>
            Alterar
          </button>
        </div>
      </div>
    </div>
  );
}
