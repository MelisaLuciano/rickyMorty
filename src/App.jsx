import { useEffect, useState } from "react"
import CharacterList from "./components/CharacterList"
import { Filtrar } from "./components/Filtrar"
import { Card } from "./components/Card"

function NavPage(props ){
  return(
    <header className="d-flex justify-content-between align-items-center">
      <p>Page: {props.page}</p>
      <button className="btn btn-primary btn-sm" 
      onClick={() => props.setPage(props.page + 1)}>
        Page: {props.page + 1}
      </button>
    </header>
  )
}

function App(){
  const [personajes, setPersonajes] = useState([])
	const [loading, setLoading] = useState(true)
	const [filter, setFilter] = useState('')
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getPersonajes = async () => {
      try{
        const response = await fetch(
          'https://rickandmortyapi.com/api/character'
        )
        const data = await response.json()
        setPersonajes(data.results)
        setLoading(false)
      }catch(error){
        console.log(error);
      }
    }
    getPersonajes();
  },[page])

  const personjesFiltrados = personajes.filter((personaje) =>
		personaje.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
	)

  return(
    
    <div className="bg-dark text-white">
      <NavPage page={page} setPage={setPage} />
      <h1 className="text-center display-1 py-4 ">Rick and Morty</h1>

      <Filtrar filter={filter} setFilter={setFilter} />
      
      <section className='lista-personajes'>
				{loading ? (
					<p>Cargando...</p>
				) : personjesFiltrados.length > 0 ? (
					personjesFiltrados.map((personaje) => (
						<Card key={personaje.id} personaje={personaje} />
					))
				) : (
					<p>
						No se encontro personajes con la busqueda{' '}
						<strong>"{filter}"</strong>.
					</p>
				)}
			</section>
    </div>
  )
}

export default App