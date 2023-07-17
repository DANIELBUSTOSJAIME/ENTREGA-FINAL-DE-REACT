//REACT Y ROUTER DOM
import { React, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// COMPONENTES
import CardProduct from '../CardProduct/CardProduct';
import "./Category.css"

// FIREBASE
import { db } from "../../firebase/FirebaseConfig"
import { collection, query, getDocs, where } from "firebase/firestore";

// FUNCION PARA EFECTUAR CLASIFICAR EL LISTPRODUCTS EN SUS CATEGORIAS USANDO FIREBASE
const Category = () => {
  const [product, setProduct] = useState([])
  const { categoryId } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      const q = query(
        collection(db, "products"),
        where("category", "==", categoryId)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
        setProduct(docs)
      });
    };
    getProducts();
  }, [categoryId]);

  return (
    <div style={{ display: "flex", flexDirection: "column", margin: 5 }}>
      <div>
        <h1 style={{ textAlign: "center", fontFamily: 'Shadows Into Light Two', color: "rgb(224, 182, 65)" }}>{categoryId}</h1>
      </div>
      <div className="Card-Category">
        {product.map((product) => (
          <div style={{ margin: 10 }} key={product.id}>
            <Link style={{ textDecoration: "none" }} to={`/detail/${product.id}`}>
              <CardProduct product={product} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category