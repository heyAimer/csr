'use client'

import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = import.meta.env.VITE_API_URL;

export default function useArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log("hellow log!")
  
  useEffect(() => {
    const fetchArticles = async() => {
      console.log("in fetch")
      try {
        const res = await axios.get(`${BASE_URL}/anime-news`); 
        setArticles(res?.data?.articles);
        
        console.log("api res: ",res.data.articles);
      } catch (err) {
        setError("Failed to load articles");
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  return { articles, loading, error };
}