import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class DoctoresEspecialidad extends Component {
  
    urlDoctores=Global.urlAPiDoctores;

    selectEspecialidad=React.createRef();

    state={
        doctores:[],
        idDoctores:[]
    }

    loadEspecialidades=()=>{
        
        let request="api/Doctores/Especialidades";
        axios.get(this.urlDoctores+request).then((response)=>{
            console.log("leyendo especialidades", response.data);
            this.setState({
                doctores:response.data
            })
        })
    }

    componentDidMount=()=>{
        this.loadEspecialidades();
    }

    buscarEspecialidad=(event)=>{
        event.preventDefault();
        let id=this.selectEspecialidad.current.value;
        let request="/api/Doctores/DoctoresEspecialidad/" + id;
        axios.get(this.urlDoctores+request).then((response)=>{
            console.log("leyendo doctores por especialidad", response.data);
            this.setState({
                idDoctores:response.data
            })
        })

    }

    buscarDoctor=(event)=>{
        event.preventDefault();
        let especialidad=this.selectEspecialidad.current.value;

        let request="api/Doctores/DoctoresEspecialidad/" + especialidad;

        axios.get(this.urlDoctores+request).then((response)=>{
            console.log("leyendo doctores", response.data);

            this.setState({
                doctores:response.data
        })
        })
    }


  
  
    render() {
    return (
      <div>
        <h1>Doctores por Especialidad</h1>
        <form>
            <label>Seleccionar Especialidad:</label>
            <select ref={this.selectEspecialidad}>
                {this.state.doctores.map((especialidad,index) => (
                    <option key={index}>
                        {especialidad}
                    </option>
                ))}
            </select>
            <button onClick={this.buscarEspecialidad}>
                Buscar Doctores por Especialidad
            </button>
        </form>
      </div>
    )
  }
}
