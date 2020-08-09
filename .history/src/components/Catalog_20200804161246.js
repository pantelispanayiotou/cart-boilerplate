import React from 'react';
import catalog from '../catalog.json';
class Catalog extends React.Component {

    constructor() {
        super();
        this.state = {
            catalog: ''
        }
    }
    loadCatalog = () => {
        let catalog = JSON.parse(catalog);
        this.setState({ catalog }, () => console.log(this.state.catalog));
    }

    componentDidMount() {
        this.loadCatalog();
        
    }

    render() {
        return (
            <div>
                <p>hello world</p>
            </div>
        )
    }
}

export default Catalog;