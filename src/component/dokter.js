import React, {Component} from 'react';
import '../App.scss';
import Form from '../form/dokForm';


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
                </tr>
        </thead>
    )
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
            <td><button onClick={() => props.removeData(index)}>Hapus</button></td>

        </tr>
        );
    });
    return <tbody>{rows}</tbody>
}

const Table = props =>(
    
    <table>
        <TableHead />
        <TableBody characterData={props.characterData} removeData={props.removeData} />
    </table>
)


class Dokter extends Component{
   state = {
      char : [
        {
            nama: 'asd',
            alamat: 'sss',
            telp: '098',
            kerja: 'sadf',
            hariKerja: 'sdfdsf',
            mulai: 'afsdfasf',
            selesai: 'fsdfdf',
        },
        {
            nama: 'asd',
            alamat: 'sss',
            telp: '098',
            kerja: 'sadf',
            hariKerja: 'sdfdsf',
            mulai: 'afsdfasf',
            selesai: 'fsdfdf',
        },
      ]
   }

   removeData = index =>{
       const { char }  =this.state
       this.setState({
           char:char.filter((character, i) =>{
            return i !==index;
           }),
       })
   }

   handleSubmit = character => {
    this.setState({char: [...this.state.char, character]});
}
    render(){
        
        const {char} = this.state;
    
       
        return(
          <div>
              <Table characterData={char} removeData={this.removeData}/>
              <Form handleSubmit={this.handleSubmit} />
          </div>
        )
    }
}

export default Dokter;