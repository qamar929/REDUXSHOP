import React , {useEffect} from 'react'
import axios from 'axios';
import ProductComponent from './ProductComponent';
import {setProducts} from '../redux/actions/productActions'
import { useDispatch } from 'react-redux';

const ProductListing = () => {
    
//  const products = useSelector((state) => state.allProducts.products);
 
   
    const dispatch = useDispatch();

    const fetchProdcuts = async () =>{

      const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) =>{
      console.log("Err",err);

       

      })

      dispatch(setProducts(response.data));
 
    }
    

    useEffect(()=>{

      fetchProdcuts();
    } ,[]);


    return (
    <div>
      
      <h1>
        ProductListing

      </h1>
      
      <ProductComponent/>
    
    </div>
  )
 } 

export default ProductListing

