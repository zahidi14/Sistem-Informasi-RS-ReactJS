import React, {Component} from 'react';

class DokForm extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            nama: '',
            alamat: '',
            telp: '',
            kerja: '',
            hariKerja: '',
            mulai: '',
            selesai :''           
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { nama, alamat, telp, kerja, hariKerja, mulai, selesai } = this.state; 
        console.log(this.state);
        return (
            <form onSubmit={this.onFormSubmit} className="form">
               
                <input
                    type="text" 
                    name="nama" 
                    value={nama}
                    placeholder="Nama"  
                    onChange={this.handleChange} ></input>
               
                
                <input 
                placeholder="Alamat..."
                    type="text" 
                    name="alamat" 
                    value={alamat} 
                    onChange={this.handleChange} />
                
               
                <input 
                    placeholder="Telepon..."
                    type="text" 
                    name="telp" 
                    value={telp} 
                    onChange={this.handleChange} />
             
                <input 
                    placeholder="Tempat Kerja..."
                    type="text" 
                    name="kerja" 
                    value={kerja} 
                    onChange={this.handleChange} />
          
                <input 
                    placeholder="Hari Kerja..."
                    type="text" 
                    name="hariKerja" 
                    value={hariKerja} 
                    onChange={this.handleChange} />
                

                <input 
                placeholder="Jam Mulai..."
                    type="text" 
                    name="mulai" 
                    value={mulai} 
                    onChange={this.handleChange} />
        
                <input 
                placeholder="Jam Selesai..."
                    type="text" 
                    name="selesai" 
                    value={selesai} 
                    onChange={this.handleChange} />
                
                <button type="submit">
                    Submit
                </button>
            </form>
           
        );
    }
}

export default DokForm;