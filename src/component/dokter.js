import React, {Component} from 'react';
import '../App.scss';
import DokForm from '../form/dokForm';


const TableHead = () =>{
    return(
        <thead>
              <tr>
                    <th>Nama Dokter</th>                         
                    <th>Alamat</th>
                    <th>Telepon</th>
                    <th>Tempat Praktek</th>
                    <th>Hari Kerja</th>
                    <th>Jam Mulai</th>
                    <th>Jam Selesai</th>
                    <th>Remove</th>
                </tr>
        </thead>
    );
}


const TableBody= props =>{
   
    const rows = props.characterData.map((row, index) =>{
        return(
        <tr key={index}>
            <td>{row.nama}</td>
            <td>{row.alamat}</td>
            <td>{row.telp}</td>
            <td>{row.kerja}</td>
            <td>{row.hariKerja}</td>
            <td>{row.mulai}</td>
            <td>{row.selesai}</td>
            <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>

        </tr>
        );
    });
    return <tbody>{rows}</tbody>
}

const Table = props =>(
    
    <table>
        <TableHead />
        <TableBody characterData={props.characterData} removeCharacter={props.removeCharacter} />
    </table>
)


class Dokter extends Component{
   state = {
      characters : []
   };

   removeCharacter = index =>{
       const { characters }  =this.state;

       this.setState({
           characters:characters.filter((character, i) =>{
            return i !==index;
           })
       });
   }

   handleSubmit = character => {
    this.setState({characters: [...this.state.characters, character]});
}
    render(){
        
        const {characters} = this.state;
    
       
        return(
          <div>
              <Table characterData={characters} removeCharacter={this.removeCharacter}/>
              <DokForm handleSubmit={this.handleSubmit} />
          </div>
        )
    }
}

export default Dokter;