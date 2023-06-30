import { useState, useEffect } from "react";


export function useFetch() {

  const [characters, setCharacters] = useState([])
  const [loading, setLoading] =useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData(){
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      const data = await response.json()
      setLoading(false);
      setCharacters(data.results)
    }

    fetchData()
  }, [page])
}