import React from 'react'
import Dashboard from './dashboard';
import axios from "axios";
import { Message_Data } from "../context/Context.js";
import { useEffect, useContext } from "react";

export const server = 'http://localhost:2500';

const index = () => {
  const { setIsAuthenticated, setLoading, setUser} = useContext(Message_Data);

  useEffect(() => {
    setLoading(true);
    axios
    .get(`${server}/users/me`, {
      withCredentials: true,
    })
    .then((res) => {
      setUser(res.data.user);
      setIsAuthenticated(true);
      setLoading(false);
    })
    .catch((error) => {
      setUser({});
      setIsAuthenticated(false);
      setLoading(false);
    });
  }, []);
  return (
    <>
      <Dashboard />
    </>
  )
}

export default index
