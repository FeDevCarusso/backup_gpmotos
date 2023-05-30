import React from 'react'
import Styles from '../../Styles/dist/SearchSupplies.module.css'
const SearchSupplies = () => {
  return (
    <div className={Styles.container}>
        <form className={Styles.searchbar}>
            <input className={Styles.input} type="text" name="searchSupplies" id="search supplies" placeholder='Ingresá tu busqueda'/>
            <input className={Styles.search} type="submit" value="Buscar" />
        </form>
    </div>
  )
}

export default SearchSupplies