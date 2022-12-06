import './App.css';
import React from 'react';
import ListaContactos from './ListaContactos';
import Contacto from './Contacto';

import {Busqueda} from './Busqueda';
import {DirectorioContext, DirectorioProvider} from './Context/DirectorioProvider'
import AgregarContacto from './AgregaContacto';
function App(){

  return (
    <DirectorioProvider>
      <DirectorioContext.Consumer>
        {
        ({
          contactosFiltrados,
          borrarContacto,
          contadorContactos,
          modal,
          setModal
        })=>(
          <React.Fragment>
            <h1>Directorio ({contadorContactos})</h1>
            <Busqueda/>
            <button onClick={()=>{setModal(true)}} className="Agregar">Agregar Contacto</button>
            <ListaContactos>
              {
                contactosFiltrados.map((contacto)=>{
                  return(
                    <Contacto
                    nombre={contacto.nombre}
                    correo={contacto.correo}
                    telefono={contacto.telefono}
                    borrarContacto = {()=>{borrarContacto(contacto.nombre)}}
                    />
                  )
                })
              }
            </ListaContactos>
            {modal && <AgregarContacto/>}
          </React.Fragment>
        )
        }
      </DirectorioContext.Consumer>
    </DirectorioProvider>
  );
}

export default App;
