import React, { useEffect } from 'react'
import axios from 'axios';
import { removedSelectedProduct, selectedProduct } from '../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import {loading} from '../loading.gif'
import Spinner from './Spinner';


const ProductDetails = () => {
  const {productId} = useParams();


const dispatch = useDispatch();

const product = useSelector((state) => state.product);
const {title,price,description,category,image} = product;

console.log("asdasda")
  const fetchProdcutDetails = async () =>{

    const response = await axios
    .get(`https://fakestoreapi.com/products/${productId}`)
    .catch((err) =>{
    console.log("Err",err);

    })
    dispatch(selectedProduct(response.data));
  }

  useEffect(()=>{
  if(productId && productId!=="") fetchProdcutDetails();
  
  return ()=>
  {
    dispatch(removedSelectedProduct());
  }
  },[productId])
  
 
  return (
   
<>

<div>
      <div className="container mt-3 mb-3">
        {Object.keys(product).length===0 ?(
          <Spinner/>
        ): (
    <div className="row d-flex justify-content-center">
        <div className="col-md-10">
            <div className="card">
                <div className="row">
                    <div className="col-md-6">
                        <div className="images p-3">
                            <div className="text-center p-4"> <img id="main-image" src={image} width="250" /> </div>
                            <div className="thumbnail text-center"> <img onclick="change_image(this)" src={image} width="70"/> <img onclick="change_image(this)" src={image} width="70"/> </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="product p-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center"> <i className="fa fa-long-arrow-left"></i> <span className="ml-1">Back</span> </div> <i className="fa fa-shopping-cart text-muted"></i>
                            </div>
                            <div className="mt-4 mb-3"> <span className="text-uppercase text-muted brand">{category}</span>
                                <h5 className="text-uppercase">{title}</h5>
                                <div className="price d-flex flex-row align-items-center"> 
                                    <div className="ml-2"> <strong className="dis-price">$: {price}</strong> <span>40% OFF</span> </div>
                                </div>
                            </div>
                            <p className="about">{description}</p>
                            <div className="cart mt-4 aligncenter" align='center'> <button className="btn btn-danger text-uppercase mr-2 px-4">Add to cart</button> <i className="fa fa-heart text-muted"></i> <i className="fa fa-share-alt text-muted"></i> </div>

                            <div className="sizes mt-5">
                                </div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
        </div>

        </div>
</>
  
  )
}

export default ProductDetails
