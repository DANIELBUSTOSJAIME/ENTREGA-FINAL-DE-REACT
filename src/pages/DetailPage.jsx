// REACT
import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// COMPONENTS
import CardDescription from '../components/CardDescription/CardDescription';

// FIREBASE
import { db } from "../firebase/FirebaseConfig"
import { collection, query,  getDocs, where, documentId } from "firebase/firestore";

// PAGINA DE DETALLE DEL PRODUCTO QUE MUESTRA EL CARD DESCRIPTION DE FIREBASE
const DetailPage = () => {
    const [product, setProduct] = useState([])
    const { id } = useParams();

    useEffect(() => {
      const getProducts = async () => {
        const q = query(
          collection(db, "products"),
          where(documentId(), "==", id)
        );
        const docs = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
          setProduct(docs)
        });
      };
      getProducts();
    }, [id]);

  return (
    <div style={{display:"flex", flexDirection:"column", margin:5}}>
      <div>
        <h1 style={{textAlign:"center", fontFamily:'Shadows Into Light Two', color:"rgb(224, 182, 65)"}}>Detalle del Producto</h1>
      </div>
      <div>
        {product.map((product) => {
          return(
            <div key={product.id}>
              <CardDescription product={product}/>
            </div>
          )
        })}
      </div>  
    </div>
  )
}
export default DetailPage