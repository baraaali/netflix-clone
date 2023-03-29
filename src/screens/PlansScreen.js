import React, { useState ,useEffect } from 'react'
import db from '../firebase';
import'./PlansScreen.css'
import { collection, getDocs , query , where } from "firebase/firestore";

function PlansScreen() {
    const [products , setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const q =  query(collection(db, "products"), where("active", "==", true));
            const querySnapshot = await getDocs(q);

            const products = {};

            querySnapshot.forEach((productDoc) => {
                products[productDoc.id] = productDoc.data();
            });
            setProducts(products);
        }
        return fetchData;
    }, []);


    return (
        <div className='plansScreen'> 
            {Object.entries(products).map(([productId, productData]) => {
                
                return(
                    <div key={productId} className='plansScreen__plan'>
                        <div className='plansScreen__info'>
                            <h5>{productData.name}</h5>
                            <h6>{productData.description}</h6>
                        </div>
                        <button onClick={ ()=> window.location.replace("/")}>Subscribe</button>
                    </div>
                );
            })}
        
        </div>
    );
}

export default PlansScreen
