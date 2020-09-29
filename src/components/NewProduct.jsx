import React from 'react';
import Alert from './Alert';

class NewProduct extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            productName : "",
            productStock : 0,
            products : localStorage.getItem("products") == null ? [] : JSON.parse(localStorage.getItem("products"))
        }
    }

    generatePID() {

        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

        // This variable will store 8 random characters which will later be converted to a string before returning
        let newPID = [];

        /* Loop through characters choosing 8 random characters and append it to our
          newPID variable.
        */
        for (let i = 0; i < 9; i++) {
            newPID.push(characters.split("")[Math.round(Math.random() * characters.split("").length + 1)]);
        }

        return newPID.join("");
    }

    validateForm(evt) {

        //Prevent default form submission
        evt.preventDefault();

        let productName = this.state.productName;
        let productStock = this.state.productStock;

        if (productName.trim() === "" || !parseInt(productStock)) {
            alert("Please ensure all forms are filled in correctly!");
        } else {
            let newProduct = {
                id : this.generatePID(),
                name : productName,
                stock : productStock
            };
            
            this.state.products.push(newProduct);
            localStorage.setItem("products", JSON.stringify(this.state.products));

            this.setState({ productName : "", productStock : 0 });
            alert("Product added successfully!");

        }
    }

    render() {
        return (
            <div>
                <div className="flex flex-row flex-wrap justify-center">
                    <p className="w-full my-2 text-center">This form will add the product to stock and generate a <b>unique product ID</b>!</p>
                    <form className="w-full md:w-1/2 lg:w-1/3 px-4 py-6" onSubmit={(e) => this.validateForm(e)}>
                        <div className="my-4">
                            <label className="text-sm block mb-1">
                                Name
                            </label>
                            <input type="text" onChange={(e) => this.setState({ productName : e.target.value })} className="shadow-md px-2 py-1 w-full" placeholder="Product Name"  />
                        </div>
                        <div className="my-4">
                            <label className="text-sm block mb-1">
                                Stock Count
                            </label>
                            <input type="number" onChange={(e) => this.setState({ productStock : e.target.value })} step="1" className="shadow-md px-2 py-1 w-full" placeholder="100"  />
                        </div>
                        <div className="my-4">
                            <button type="submit" className="w-full bg-blue-600 text-white py-2 font-bold">Add Product</button>
                        </div>
                    </form>
                </div>
                {this.state.formSuccess !== undefined && this.state.formSuccess === true ? <Alert type="success" msg={this.state.formMsg} /> : ""}
            </div>
        );
    }

}

export default NewProduct;