import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Edit() {

    const { id } = useParams();

    const [product, setProduct] = useState(JSON.parse(localStorage.getItem("products")).filter(obj => obj.id === id)[0]);

    function updateProduct(e) {
        e.preventDefault();
        
        let products = JSON.parse(localStorage.getItem("products"));
        product.id = id;
        setProduct(product);

        let targetProd = products.findIndex(obj => obj.id === id);
        products[targetProd] = product;        
        localStorage.setItem("products", JSON.stringify(products));

        alert("Product updated successfully!");
    }

    return (
        <div className="flex flex-row flex-wrap justify-center">
            <h3 className="w-full text-xl my-2 text-center">{product.name}</h3>
            <form className="w-full md:w-1/2 lg:w-1/3 px-4 py-6" onSubmit={(e) => updateProduct(e)}>
                <div className="my-4">
                    <label className="text-sm block mb-1">
                        Edit Name
                    </label>
                    <input type="text" value={product.name} onChange={(e) => setProduct({ name: e.target.value, stock : product.stock})} className="shadow-md px-2 py-1 w-full" />
                </div>
                <div className="my-4">
                    <label className="text-sm block mb-1">
                        Stock Count
                    </label>
                    <input type="number" value={product.stock} onChange={(e) => setProduct({ name: product.name, stock: e.target.value,  })} step="1" className="shadow-md px-2 py-1 w-full" />
                </div>
                <div className="my-4">
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 font-bold">Update Product</button>
                </div>
            </form>
        </div>
    );

}