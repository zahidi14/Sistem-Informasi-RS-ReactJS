import React, {Component} from 'react';
import PasForm from '../form/pasForm';

const TableHead = () =>{
    return(
        <thead>
            <tr>
            
            <th>Nama Pasien</th>
            <th>Alamat</th>
            <th>Telepon</th>
            <th>Tanggal Lahir</th>
            <th>Jenis Kelamin</th>
            <th>Action</th>
        </tr>
        </thead>
    );
}

const TableBody = props =>{
    const rows = props.characterData.map((row, index)=>{
        return(
            <tr key={index}>
                <td>{row.nama}</td>
                <td>{row.alamat}</td>
                <td>{row.telp}</td>
                <td>{row.ttl}</td>
                <td>{row.gender}</td>
                <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
            </tr>
        )
    });
    return <tbody>{rows}</tbody>
}

const Table = props =>(
    
    <table>
        <TableHead />
        <TableBody characterData={props.characterData} removeCharacter={props.removeCharacter} />
    </table>
)

class Pasien extends Component{
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
                <PasForm handleSubmit={this.handleSubmit} />
            </div>
          )
      }
}

export default Pasien;