import React from 'react';
import catalogData from '../catalog.json';
class Catalog extends React.Component {

    constructor() {
        super();
        this.state = {
            catalog: ''
        }
    }
    loadCatalog = () => {
        let catalog = JSON.parse(catalogData);
        // this.setState({ catalog }, () => console.log(this.state.catalog));
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