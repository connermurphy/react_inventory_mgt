import React from 'react';

import { Link } from 'react-router-dom';

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            products: localStorage.getItem("products") == null ? [] : JSON.parse(localStorage.getItem("products"))
        }

        this.deleteCallback = this.deleteCallback.bind(this);
    }

    deleteCallback(prods) {
        this.setState({ products : prods });
    }

    render() {
        return (

            < div className="mx-10 md:mx-16 lg:mx-20" >
                <div className="flex flex-row flex-wrap mt-10 lg:mt-20 border-2">
                    <div className="w-1/4 p-2 font-bold text-lg">Product ID</div>
                    <div className="w-1/4 p-2 font-bold text-lg">Product Name</div>
                    <div className="w-1/4 p-2 font-bold text-lg">Product Stock</div>
                    <div className="w-1/4 p-2 font-bold text-lg">Actions</div>
                </div>
                { this.state.products.map((product) => <Product productData={product} deleteCallback={this.deleteCallback} />) }
            </div >
        )
    }
}

class Product extends React.Component {

    deleteProduct(id) {

        const products = JSON.parse(localStorage.getItem("products"));
        const targetProduct = products.filter((obj) => {
            return obj.id === id;
        });

        products.splice(products.indexOf(targetProduct) + 1, 1);
        localStorage.setItem("products", JSON.stringify(products));
        this.props.deleteCallback(products);
    }

    render() {

        const editProduct = `/edit/${this.props.productData.id}`;

        return (
            <div className="flex flex-row flex-wrap border-2 border-t-0">
                <div className="w-1/4 p-2">{this.props.productData.id}</div>
                <div className="w-1/4 p-2">{this.props.productData.name}</div>
                <div className="w-1/4 p-2">{this.props.productData.stock}</div>
                <div className="w-1/4 p-2">
                    <Link to={editProduct} className="inline-block mx-2 px-4 py-1 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-background duration-150">Edit</Link>
                    <Link onClick={() => this.deleteProduct(this.props.productData.id)} className="inline-block mx-2 px-4 py-1 bg-red-600 text-white rounded-sm hover:bg-red-700 transition-background duration-150">Remove</Link>
                </div>
            </div>
        )
    }
}

export default Home;