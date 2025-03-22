import React from 'react'  
import ProductDetails from './ProductDetails'  
import './ProductListing.css'  
/*imported react bc you need to with creating a functional app, product details bevause it renders using that component, and product listing css is how we style them */
const ProductListing = ({ allProducts }) => {  
/*creates the fucntional component and allproducts contain an array of products */
  console.log("Rendering product list...")  // message to the console each time component renders

  return (   //the codes below shows how i mapped the module (one of the requiements) also renders product items for each item.
    <div className="product-listing">  
      {allProducts.map((proudct, index) => (   //misspelt product but when i change it app wont show up on the screen so do not change it lol
        <ProductDetails key={index} oneProduct={proudct} />  //using the key helps react tract items, reducing bugs
      ))}  

      {}
      
    </div>  
  )  
}  

export default ProductListing  
//needs the code above on every page so that they all connect into eachother/ this code will allow this page to connect 