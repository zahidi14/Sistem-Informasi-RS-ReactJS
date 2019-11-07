import React, {Component} from 'react';
import '../App.scss';



class Poliklinik extends Component{
    render(){
        return(
           
               <table>
                   
                   <tr>
                       <th>Nama Dokter</th>
                       <th>Alamat</th>
                       <th>Telepon</th>
                       <th>Tempat Prakter</th>
                       <th></th>
                       <th></th>
                   </tr>
               </table>
           
        )
    }
}

export default Poliklinik;