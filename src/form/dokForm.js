import React, {Component} from 'react';
import '../App.scss';

class DokForm extends Component{
    constructor(props) {
        super(props);
        
        this.initialState = {
            nama : '',
            alamat : '',
            telp : '',
            kerja : '',
            hariKerja : '',
            mulai : '',
            selesai : ''           
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { nama, value } = event.target;

        this.setState({
            [nama] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { nama, alamat, telp, kerja, hariKerja, mulai, selesai } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                <label>Name</label>
                <input 
                    type="text" 
                    name="name" 
                    value={nama} 
                    onChange={this.handleChange} />
                <label>Alamat</label>
                
                <input 
                    type="text" 
                    name="job" 
                    value={alamat} 
                    onChange={this.handleChange} />
                
                <label>Telepon</label>
                <input 
                    type="text" 
                    name="job" 
                    value={telp} 
                    onChange={this.handleChange} />
                
                <label>Tempat Kerja</label>
                <input 
                    type="text" 
                    name="kerja" 
                    value={kerja} 
                    onChange={this.handleChange} />
                
                <label>Hari Kerja</label>
                <input 
                    type="text" 
                    name="hariKerja" 
                    value={hariKerja} 
                    onChange={this.handleChange} />
                
                <label>Jam Mulai</label>
                <input 
                    type="text" 
                    name="mulai" 
                    value={mulai} 
                    onChange={this.handleChange} />
                
                <label>Jam Selesai</label>
                <input 
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