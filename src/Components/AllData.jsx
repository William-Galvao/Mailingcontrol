import { collection, getDocs } from "firebase/firestore";
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

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Empresa</th>
          <th scope="col">CNPJ</th>
          <th scope="col">Estado</th>
        </tr>
      </thead>
      <tbody>
        {companies.map((company) => {
          return (
            <tr>
              <td>{company.Empresa}</td>
              <td>{company.CNPJ}</td>
              <td>{company.Estado}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
