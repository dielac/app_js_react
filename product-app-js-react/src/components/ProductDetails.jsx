import styles from './ProductDetails.module.css'    
{/* this code above imports css module */}
const ProductDetails = ({ oneProduct }) => {  
    {/* the code above links product details page to this one */}
  let tempVariable = "Not used anywhere";  // i dont think this is linked to my app prob left over remove it after looking over  

  return (  
    <div className={styles.productDetail}>  

      {/* logs in the name of what is being rendered and helps the process */}
      {console.log("Rendering:", oneProduct.name)}  

      <img src={oneProduct.image} alt={oneProduct.name} className={styles.productImage} />  
    {/*also underneith this, the code is showing how i displayed product details on this page (one of the project requirements)*/}
      <h3> {oneProduct.name} </h3>  
      <p> {oneProduct.description} </p>  
      <p className={styles.price}> {oneProduct.price} </p>  

      <p className={styles.stock}>  
        
        {oneProduct.stock ? " In Stock" : " Out of Stock"}  
      </p>  
    </div>  
  )  
}  

export default ProductDetails  
/* code above is needed if you want to link this page to other pages*/ 