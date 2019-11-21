import React, {Component} from 'react';

class PasForm extends Component{
    constructor(props) {
        super(props);
        
        this.initialState = {
            nama: '',
            alamat: '',
            telp: '',
            ttl: '',
            gender: ''           
        };

        this.state = this.initialState;
    }
    handleChange = event => {
        const { name, value} = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render(){
        const {nama, alamat, telp, ttl, gender} = this.state;
        return(
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
                    placeholder="Tempat Tanggal Lahir..."
                    type="text" 
                    name="ttl" 
                    value={ttl} 
                    onChange={this.handleChange} />
          
                <input 
                    placeholder="Jenis Kelamin..."
                    type="text" 
                    name="gender" 
                    value={gender} 
                    onChange={this.handleChange} />
                    <button type="submit">Submit</button>
            </form>
        )
    }
}


export default PasForm;