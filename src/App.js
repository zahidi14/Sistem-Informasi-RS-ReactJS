import React from 'react';
import './App.scss';
import {Link} from 'react-router-dom';
import Main from './component/main';
import {FaPlus, FaPrint, FaSearch} from 'react-icons/fa';

function App() {
  return (
    <div>
      <nav>
        <h2>SI</h2>     
        <span><i>logout</i></span>
      </nav>
      <grid>
        <div1>
          <ul>
            <li><Link to="/dashboard"><button>Dashboard</button></Link></li>
            <li><Link to="/dokter"><button>Dokter</button></Link></li>
            <li><Link to="/pasien"><button>Pasien</button></Link></li>
            <li><Link to="/pegawai"><button>Pegawai</button></Link></li>
            <li><Link to="/poliklinik"><button>Poliklinik</button></Link></li>
            <li><Link to="/"><button>Pendaftaran</button></Link></li>
            <li><Link to="/pemeriksaan"><button>Pemeriksaan</button></Link></li>
            <li><Link to="/resep"><button>Resep</button></Link></li>
            <li><Link to="/obat"><button>Obat</button></Link></li>
          </ul>
        </div1>
        <div2 className="container">
        
               <nav>
                    <ul>
                        <li><button><FaPlus /></button></li>
                        <li><button><FaPrint /></button></li>
                        
                    </ul>
                <form>
                    <input type="text"></input>
                    <button><FaSearch /></button>
                    </form>    
               </nav>
             
          <Main />
        </div2>
      </grid>
    </div>
  );
}

export default App;
