import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../Firebase/firebase";

export default function AllData() {
  const [companies, setCompanies] = useState([]);
  const companiesCollectionRef = collection(db, "companies");

  useEffect(() => {
    const getCompanies = async () => {
      const data = await getDocs(companiesCollectionRef);
      setCompanies(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getCompanies();
  }, []);

  const handleDelete = async (id) => {
    const userDoc = doc(db, "companies", id);
    await deleteDoc(userDoc);
    window.location.reload();
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Empresa</th>
          <th scope="col">CNPJ</th>
          <th scope="col">Estado</th>
          <th scope="col">Ação</th>
        </tr>
      </thead>
      <tbody>
        {companies.map((company) => {
          return (
            <tr>
              <td>{company.Empresa}</td>
              <td>{company.CNPJ}</td>
              <td>{company.Estado}</td>
              <td>
                <button className="btn btn-primary m-1">Ligar</button>
                <button className="btn btn-dark m-1">Editar</button>
                <button
                  className="btn btn-danger m-1"
                  onClick={() => {
                    handleDelete(company.id);
                  }}
                >
                  Deletar
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
