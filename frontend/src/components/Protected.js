import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ Cmp }) => {
  const nav = useNavigate();
  const [allowed, setAllowed] = useState(false);
  const checkUser = () => {
    if (!localStorage.getItem("data") || !localStorage.getItem("cmp_id")) {
        nav("/employer/login");
    }
    setAllowed(true);
  };


  useEffect(() => {
    checkUser();
  }, []);

  return <div>{allowed ? <Cmp />:false}</div>;
};

export default Protected;
