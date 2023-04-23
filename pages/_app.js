import Navbar from '@/components/Navbar/Navbar'
import "../styles/globals.css";
// import "../node_modules/mdb-ui-kit/css/mdb.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// import "../node_modules/mdb-ui-kit/js/mdb.min";
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(()=>{
    import("../node_modules/bootstrap/dist/js/bootstrap.min.js")
  },[])

  return (
    <>
    <Navbar></Navbar>
    <Component {...pageProps} />
    </>
  )
}
