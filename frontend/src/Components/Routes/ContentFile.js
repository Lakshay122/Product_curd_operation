import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Order from '../Order/Order';
import First from '../DashBoard/First';
import Inventory from '../Inventory/Inventory';
import Category from '../Inventory/Category/Category';
import NewProduct from '../Inventory/AllProducts/NewProduct/NewProduct';
import Products from '../Inventory/AllProducts/Products';
import EditProduct from '../Inventory/AllProducts/EditProduct/EditProduct';
import Stocks from '../Stock/Stocks';

 export default function ContentFile() {
  return (
        <>
            <Routes>
                <Route path='/'>
                    <Route   element={<Inventory/>}/>
                    <Route path='order' element={<Order/>}/>
                    <Route path='/products/newproduct' element={<NewProduct/>}/>
                    <Route path='/category' element={<Category />}/>
                    <Route index  element={<Products />}/>
                    <Route path='/products/editproduct' element={<EditProduct />}/>
                   
                </Route>
            </Routes> 
        </>
  )
}
