import React, { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import { filterData, apiUrl } from "./data";
import { toast } from "react-toastify";

const App = () => {
  const [courses, setCourses] = useState({});
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('All');

  const fetchData = async (apiUrl) => {
    try {
      const resp = await fetch(apiUrl);
      const output = await resp.json();
      setCourses(output.data);
      setLoading(false);
    } catch (err) {
      toast.error("errored out");
    }
  };

  const filterHandler = (category) => {
    setCategory(category)
  }

  useEffect(() => {
    fetchData(apiUrl);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div><Navbar /></div>
      <div className="bg-bgDark2">
      <div><Filter category={category} filterHandler={filterHandler} filterData={filterData} /></div>
      <div>{
        loading ? <div className="spinner"></div>:<Cards category={category} courses={courses}/>
      }</div>
      </div>
    </div>
  );
};

export default App;
