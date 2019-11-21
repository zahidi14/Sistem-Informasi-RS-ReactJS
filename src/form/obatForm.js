import React, {Component} from 'react';

class ObatForm extends Component{
    constructor(props){
        super(props);

        this.initialState = {
            nama: '',
            merek: '',
            satuan: '',
            harga: ''
        };
        this.state = this.initialState;
    }

    handleChange= event => {
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
    render(){
        const { nama, merek, satuan, harga } = this.state;
        return(
            <form onSubmit={this.onFormSubmit} className="form">
                
                <input
                    type="text" 
                    name="nama" 
                    value={nama}
                    placeholder="Nama"  
                    onChange={this.handleChange} />
                
                <input
                    type="text" 
                    name="merek" 
                    value={merek}
                    placeholder="Merk"  
                    onChange={this.handleChange} />

                <input
                    type="text" 
                    name="satuan" 
                    value={satuan}
                    placeholder="Satuan... "  
                    onChange={this.handleChange} />

                <input
                    type="text" 
                    name="harga" 
                    value={harga}
                    placeholder="Harga..."  
                    onChange={this.handleChange} />
                
                    
                <button type="submit">
                        Submit
                    </button>
            </form>
        )
    }
}

export default ObatForm;