import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";

function UserDetail({ user }) {
  const { id } = useParams();

  // const [currentUser, setCurrentUSer] = useState();

  // useEffect(() => {
  //   fetch(`https://randomuser.me/api/1.0/?seed=${user.info.seed}`)
  //     .then((res) => res.json())
  //     .then((json) => setCurrentUSer(json));
  // }, []);

  // console.log(user, id);

  return (
    <div>
      <h1>Pagina de detalle </h1>
    </div>
  );
}

export default UserDetail;
