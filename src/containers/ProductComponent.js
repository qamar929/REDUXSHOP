import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const ProductComponent = () => {

  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product)=>{
const {id,title,price,category,image} = product;
    return(

      <div className='col md-3' key={id} >
<Link to ={`/product/${id}`}>

        <div className="card border shadow p-0" Style="width: 18rem;">
  <img src={image} className="card-img-top" alt={category}/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{price}</p>
    <p className="card-text">{category}</p>
    <a href="/" className="btn btn-primary">Add to Cart</a>
  </div>
</div>
</Link>
      </div>

    );
  })
  return (
    
    <div className='container'>
 <div className='row'>
      {renderList}      
    </div>
    </div>
   
  )
}

export default ProductComponent
