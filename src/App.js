import logo from './logo-b360.svg';
import { Sidebar } from './Sidebar';
import './App.css';
import { FormAsesorias } from './FormAsesorias';


function App() {
  return (
    <div className="App">
      <div className='header-b360'>
      <img src={logo} className="logo-app" alt="logo" />
      </div>
      <div className='wrapp-all-content'>
      <Sidebar />
      <FormAsesorias />

      </div>
      
      
    </div>
  );
}

export default App;
