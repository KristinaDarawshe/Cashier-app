import React from 'react';
import './App.css';
import AddProducts from "./components/addProducts"
import ProductList from "./components/productsList"
import TotalToPay from "./components/totalToPay"
import Search from "./components/search"
function App() {
  return (
 <>
 <div className="app">
   <AddProducts/>
   <Search/>
   <ProductList/>
   <TotalToPay/>
   </div>
 </>

  );
}

export default App;
