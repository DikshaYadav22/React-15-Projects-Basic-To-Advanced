import React, { useState } from "react";
import Lists from "./components/Lists";
import data from "./components/data";

const App = () => {
  const [lists, setLists] = useState(data);
  return (
    <div>
      <Lists inputLists={lists} setLists={setLists} />
    </div>
  );
};

export default App;
