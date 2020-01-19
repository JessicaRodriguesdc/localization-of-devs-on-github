import React,{useState,useEffect} from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

//compontente: bloco isolado de html , css e js , o qual nao iterfere no restane da aplicacao
//estado:informacoes mantidas pelo componente(lembrar: imutabilidade)
//propriedade: informacoes que um componente PAI passa para o componente filho 

function App() {
  const [devs,setDevs]= useState([]);

  useEffect(()=>{
    async function loadDevs(){
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    
    loadDevs();
  },[]);

  async function handLeAddDev(data){
    const response = await api.post('/devs',data)

    setDevs([...devs,response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
          <DevForm onSubmit={handLeAddDev}/>
      </aside>

      <main>
        <ul>
          {devs.map(dev=>(
            <DevItem key={dev._id} dev={dev}/>
          ))}
          
        </ul>
      </main>
    </div>

  );
}

export default App;
