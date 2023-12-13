import "./articles.css";
import Card from "../components/Card";
import axios from "axios";
import { useEffect, useState } from "react";
const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true)
       const response =  await axios.get(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/article`);
       console.log(response)
       setArticles(response.data)
      } catch (error) {
        console.log(error.message)
      }
      finally{
        setLoading(false)
      }
    };
    fetchArticles();
  }, []);
  return (
    <>
      <h1 className="pagetitle">All Articles</h1>
      (loading) ? <div>loading.....</div>:
      <div className="container">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};
export default Articles;
