import React from "react";

export const Filtrar = ({filter, setFilter}) => {
  const handleInput = ({target}) => {
    setFilter(target.value)
  }

  return(
    <section className="filtrar">
      <input 
        type="text"
        placeholder="Search character"
        name="buscar"
        onChange={handleInput}
        value={filter}
      />
    </section>
  )
}