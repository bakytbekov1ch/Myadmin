import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const API = "https://668f6b7480b313ba09180a62.mockapi.io/mycar";

function App() {
  const [value, setValue] = useState([]);

  const handleClick = async () => {
    try {
      const res = await axios.get(API);
      setValue(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="apple">
      <div className="container">
        <div className="apple__content">
          <table>
            <thead>
              <tr>
                <th>№</th>
                <th>Payeer</th>
                <th>Chek ID</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {value.map((item, index) => (
                <tr key={index} style={{ marginTop: "10px" }}>
                  <td>{item.id}</td>
                  <td>{item.payeer}</td>
                  <td>{item.price}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
