import React, { useState, useEffect } from "react";

import UserCard from "./UserCard";

function Banderas() {
  const [englishUsers, setEnglishUsers] = useState([]);
  const [germanUsers, setGermanUsers] = useState([]);

  const [showEn, setShowEn] = useState(false);
  const [showGe, setShowGe] = useState(false);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=9&nat=gb")
      .then((res) => res.json())
      .then((json) => setEnglishUsers(json))
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=9&nat=dk")
      .then((res) => res.json())
      .then((json) => setGermanUsers(json))
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  let [cantidad, setCantidad] = useState(0);
  const [pais, setPais] = useState("");
  const [customCall, setCustomCall] = useState([]);
  const [showCustom, setShowCustom] = useState(false);

  const handleChange = (e) => {
    setPais(e.target.value);
  };

  const getCustomRequest = event => {
    event.preventDefault();
    fetch(`https://randomuser.me/api/?results=${cantidad}&nat=${pais}`)
      .then((res) => res.json())
      .then((json) => setCustomCall(json))
      .catch((error) => {
        console.log("Error", error);
      });
    setShowCustom(!showCustom);
  }

  //   console.log(customCall.results);

  return (
    <div>
      <h1>Elige tu bandera</h1>
      <button onClick={() => setShowEn(!showEn)}>Ver britanicos </button>
      <button onClick={() => setShowGe(!showGe)}>Ver alemanes </button>

      <h2>
        Ahora puedes elegir bien cuantos usuarios quieres y de que nacionalidad
      </h2>
      <form onSubmit={getCustomRequest}>
        <select value={pais} onChange={handleChange}>
          <option value="dk">Alemania</option>
          <option value="gb">Inglaterra</option>
          <option value="fr">Francia</option>
        </select>
        <input onChange={(e) => setCantidad(e.target.value)} type="number" />
        <button type="submit">Ver Custom Call</button>
      </form>

      <div className="cards-container">
        {showEn
          ? englishUsers.results.map((user) => {
              return <UserCard user={user} />;
            })
          : null}
        {/* {showGe`
          ? germanUsers.results.map((user) => {
              return <UserCard user={user} />;
            })
          : null} */}

        {showCustom
          ? customCall.results.map((user) => {
              return <UserCard user={user} />;
            })
          : null}
      </div>
    </div>
  );
}

export default Banderas;
