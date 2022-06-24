import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {companies.map((company) => {
          return (
            <tr key={company.id}>
              <td>{company.Empresa}</td>
              <td>{company.CNPJ}</td>
              <td>{company.Estado}</td>
              <td>
                <div class="dropdown">
                  <button
                    className="btn btn-dark dropdown-toggle btn-sm"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Ações
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <button className="dropdown-item">Ligar</button>
                    </li>
                    <li>
                      <Link
                        style={{ textDecoration: "none" }}
                        to={`/editdata/${company.id}`}
                      >
                        <button className="dropdown-item">Editar</button>
                      </Link>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => {
                          handleDelete(company.id);
                        }}
                      >
                        Deletar
                      </button>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
