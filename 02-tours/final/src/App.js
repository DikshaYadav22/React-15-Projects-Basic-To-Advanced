import React, { useState, useEffect } from "react";

import "./App.css";
import Tours from "./components/Tours";
import axios from "axios";

const App = () => {
  const url = "https://course-api.com/react-tours-project";
  const [tours, setTours] = useState([]);

  const loadTours = async () => {
    const res = await axios.get(url);
    if (res.data) {
      console.table(res.data);
      setTours(res.data);
    }
  };

  useEffect(() => {
    loadTours();
  }, []);

  const removeTour = (id) => {
    const removedData = tours.filter((curElem) => {
      return curElem.id !== id;
    });
    setTours(removedData);
  };

  return (
    <div>
      <Tours toursLists={tours} removeTour={(id) => removeTour(id)} />
    </div>
  );
};

export default App;
