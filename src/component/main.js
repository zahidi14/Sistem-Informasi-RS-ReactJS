import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './dashboard';
import Dokter from './dokter';
import Pegawai from './pegawai';
import Poliklinik from './poliklinik';
import Pasien from './pasien';
import Pendaftaran from './pendaftaran';
import Pemeriksaan from './pemeriksaan';
import Resep from './resep';
import Obat from './obat';


const Main= () =>(
    <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/dokter" component={Dokter} />
        <Route path="/pegawai" component={Pegawai} />
        <Route path="/pasien" component={Pasien} />
        <Route path="/poliklinik" component={Poliklinik} />
        <Route path="/pendaftaran" component={Pendaftaran} />
        <Route path="/pemeriksaan" component={Pemeriksaan} />
        <Route path="/resep" component={Resep}/>
        <Route path="/obat" component={Obat} />
    </Switch>
)

export default Main;