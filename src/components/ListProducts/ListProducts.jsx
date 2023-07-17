// REACT Y ROUTER DOM
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

// COMPONENTS
import CardProduct from '../CardProduct/CardProduct';
import "./ListProducts.css"

// FIREBASE
import { db } from "../../firebase/FirebaseConfig"
import { collection, query, getDocs } from "firebase/firestore";

// COMPONENTE QUE MUESTA TODOS LOS PRODUCTOS DEL HOME QUE VIENE DEL FIREBASE
const ListProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "products"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
        setProducts(docs)
      });
    };
    getProducts();
  }, []);
  return (
    <div className='Card-List'>
      {products.map((product) => {
        return (
          <div style={{ margin: 10 }} key={product.id}>
            <Link style={{ textDecoration: "none" }} to={`detail/${product.id}`}>
              <CardProduct product={product} />
            </Link>
          </div>)
      })}
    </div>
  )
}

export default ListProducts