import React from "react";
import './AgregaContacto.css';
import {DirectorioContext} from '../Context/DirectorioProvider';

function AgregarContacto(){
    const {setModal, guardaContacto} = React.useContext(DirectorioContext);
    const [contact, setContact]=React.useState({
        nombre:"",
        correo:"",
        telefono:""
    })

    function onChangeNombre(event){
        let contactoTemporal=contact;
        contactoTemporal.nombre=event.target.value;
        setContact(contactoTemporal);
    }

    function onChangeCorreo(event){
        let contactoTemporal=contact;
        contactoTemporal.correo=event.target.value;
        setContact(contactoTemporal);
    }

    function onChangeTelefono(event){
        let contactoTemporal=contact;
        contactoTemporal.telefono=event.target.value;
        setContact(contactoTemporal);
    }

    function modalCancelar(){
        setModal (false);
    }

    function modalGuardar(event){
        event.preventDefault();
        guardaContacto(contact);
        setModal(false);
    }

    return(
        <React.Fragment>
            <form>
                <div className="fondo">
                    <div className="ventana">
                        <h3>Agregar contacto</h3>
                        <div className="contenedor">
                            <input placeholder="Nombre" onChange={onChangeNombre}></input>
                            <input placeholder="Correo" onChange={onChangeCorreo}></input>
                            <input placeholder="Telefono" onChange={onChangeTelefono}></input>
                        </div>
                        <button typeof="submit" value="Agregar" className="agregar" onClick={modalGuardar}>Agregar</button>
                        <button type="button" value="Cancelar" className="cancelar" onClick={modalCancelar}>Cancelar</button>
                    </div>
                </div>
            </form>
        </React.Fragment>
    )
}

export default AgregarContacto;