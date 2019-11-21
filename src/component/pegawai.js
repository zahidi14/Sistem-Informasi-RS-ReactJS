import React, {Component} from 'react';
import PegForm from '../form/pegForm';

const TableHead = () =>{
    return(
        <thead>
            <tr>
                <th>NIP</th>
                <th>Nama</th>
                <th>Alamat</th>
                <th>Telepon</th>
                <th>Tanggal Lahir</th>
                <th>Jenis Kelamin</th>
                <th>Action</th>
            </tr>
        </thead>
    )
}

const TableBody = props =>{
    const rows = props.characterData.map((row, index) =>{
        return(
            <tr key={index}>
                <td>{row.nip}</td>
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

const Table= props =>(
    <table>
        <TableHead />
        <TableBody characterData={props.characterData} removeCharacter={props.removeCharacter} />
    </table>
)


class Pegawai extends Component{
    state = {
        characters : []
    };

    removeCharacter = index =>{
        const {characters } = this.state;

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
                <PegForm handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default Pegawai;