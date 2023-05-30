import React from 'react'
import loadingSpinner from '../../misc/img/loading_spinner.png'
import gpLogo from '../../misc/img/gplogo.png'

const Loading = () => {
  return (
    <div className="loadingspinner">
      <img className="dasdasq12e1r" width={"300px"} src={gpLogo} alt="gpLogo" />
      <img className="spinner" src={loadingSpinner} alt="loading_img" />
      <h2 className='fdofyg2521__276'>Cargando ...</h2>
    </div>
  )
}



export default Loading