import axios from "axios"
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  // axios.defaults.baseURL ="http://localhost:5000";
  // axios.defaults.withCredentials = false;
  
  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await axios.get("/info");

  //     setData(response.data);

  //     // const response = await fetch("http://localhost:5000/info").
  //     // then(response => response.json())
  //     // console.log(response.data);
  //     // setData(response.data)
      
  //   };

  //   getData();

  // }, []);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:5000/info");  
        console.log(res.data);
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

 

  return <>
  
  {
    data.map((item) => (
      <p>
        {item.id}<br />
        {item.name}
      </p>
    ))
  }
  
  
  </>;
}

export default App;
