import React from 'react';
var catalogData = require('../catalog.json');

class Catalog extends React.Component {

    constructor() {
        super();
        this.state = {
            catalog: ''
        }
    }
    loadCatalog = () => {
        
        this.setState({ catalog: catalogData}, () => console.log(this.state.catalog));
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