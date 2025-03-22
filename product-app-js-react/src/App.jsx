import { useState } from 'react'  
import './App.css'  
import ProductListing from './components/ProductListing'  
import Footer from './components/Footer'    
// imported the codes above so they could all be linked in this page, react hook that allows you to manage components, list of products. css to style, product listing displays list of products, footer that represents the footer on the app.

function App() {  
// the main functional component of the react app^
  // State for the product list (was "products", now "listProducts" just because, also this is where my list of products are (one of the requirements))
  const [listProducts, setListProducts] = useState([  
    {  //useState represents a product?? re renters the data it updates 
      id: 1,  //this is where i start to aslo use usestate to list the produces (id,name,price,description.)
      name: "Primers",  
      price: "$12.99",  
      description: "All Natural primers that leave your skin feeling like glass!",  
      category: "Makeup",  
      image: "/public/primer.jpeg",  
      stock: true  
    },  
    {  
      id: 2,  
      name: "Concealer ",  // added images from my desktop and dragged them into public folder then linked them"
      price: "$45.99",  
      description: "Light coverage concealer, made safe for sensitive skin!",  
      category: "Makeup",  
      image: "/public/concealer.jpeg",  
      stock: false  
    },  
    {  
      id: 3,  
      name: "Foundation",  
      price: "$51.99",  
      description: "Buildable coverage foundation, made with all-natural ingredients.",  
      category: "Makeup",  
      image: "/public/foundation.jpeg",  
      stock: true  
    },   
    {  
      id: 4,  
      name: " Lipstick",  
      price: "$12.99",  
      description: "Natural lipstick made from only 3 ingredients!",  
      category: "Makeup",  
      image: "/public/lipstick.jpeg",  
      stock: true,  
    },  
    {  
      id: 5,  
      name: "Mascara",  
      price: "$15.99",  
      description: "Sensitive-eye mascara with all-natural ingredients.",  
      category: "Makeup",  
      image: "/public/mascara.jpeg",  
      stock: true,  
    },  
    {  
      id: 6,  
      name: "Skin Care Package",  
      price: "$89.99",  
      description: "All-natural skincare that will leave your skin feeling better than ever!",  
      category: "Skincare",  
      image: "/public/skincare.jpeg",  
      stock: true,  
    },  
    {  
      id: 7,  
      name: "Organic Body Scrub",  
      price: "$22.99",  
      description: "Exfoliating body scrub made with natural sugar and essential oils.",  
      category: "Skincare",  
      image: "/public/body scrub.jpeg",  
      stock: true,  
    },  
  ])  

  

  console.log("Loaded products:", listProducts)  // Forgot to remove debugging log  
  // debugging and verification code ^
  return (  //retuns the  JSX that represents the UI
    <div className="app-container">  

      <header className="header">  

        <h1> Earth's Beauty Products </h1>  
        <h2> All-Natural & Eco-Friendly </h2>  
      </header>  

      {/* below is where i pass the products array tp product listing as a prop (one of the requirements) */}

      <ProductListing allProducts={listProducts} />    

      <Footer />  
      
    </div>  
  )  
}  

export default App  
// the code above has to be written on every page so that you can link the pages together and itll work