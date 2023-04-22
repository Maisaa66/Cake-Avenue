import Navbar from '@/components/Navbar/Navbar'
import "../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css";
import "../styles/globals.css"
import { useEffect } from 'react';
import Header from '@/components/Header/Header';
export default function App({ Component, pageProps }) {
  useEffect(()=>{
    import("../node_modules/bootstrap/dist/js/bootstrap.min.js")
  },[])

  return (
    <>
    <Navbar></Navbar>
    <Header></Header>
    <Component {...pageProps} />
    </>
  )
}
