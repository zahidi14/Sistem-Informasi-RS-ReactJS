import React, {Component} from 'react';
import ObatForm from '../form/obatForm';

const TableHead = ()=>{
    return(
        <thead>
            <tr>
                <th>Nama Obat</th>
                <th>Merek</th>
                <th>Satuan</th>
                <th>Harga Jual</th>
                <th>Action</th>
            </tr>
        </thead>
    )
}

const TableBody= props =>{
    const rows = props.characterData.map((row, index) =>{
        return(
            <tr key={index}>
                <td>{row.nama}</td>
                <td>{row.merek}</td>
                <td>{row.satuan}</td>
                <td>{row.harga}</td>
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

class Obat extends Component{
    state = {
        characters :[]
    };

    removeCharacter = index=>{
        const { characters } =this.state;

        this.setState({
            characters:characters.filter((character, i)=>{
                return i !==index;
            })
        });
    }

    handleSubmit = character =>{
        this.setState({characters: [...this.state.characters, character]});
    }
    render(){
        const {characters} = this.state;
        return(
            <div>
                <Table  characterData={characters} removeCharacter={this.removeCharacter}/>
                <ObatForm handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default Obat;