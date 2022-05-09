import './App.css';
import rezadriLogo from "./images/logo_editado.png";
import Boton from './components/Boton';
import Contador from './components/Contador';
import {useState} from "react";


function App() {

  const [numClics,setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () =>{
    setNumClics(0);
  };

  return (
    <div className='App'>
      <div className='logorezadri-contenedor'>
        <img className='rezadrilogo' src={rezadriLogo} alt='logorezadri' />

      </div>
      <div className="contedorContador">

        <Contador numClics={numClics}/>
        <Boton texto="Clic" esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton texto="Reiniciar" esBotonDeClic={false} manejarClic={reiniciarContador} />


      </div>
    </div>
  );
}

export default App;
