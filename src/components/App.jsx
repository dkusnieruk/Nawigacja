import { useEffect, lazy, Suspense } from 'react';
import {Routes, Route, useLocation} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/about/';
import Reviews from './pages/about/Reviews';
import Mission from './pages/about/Mission';
import Team from './pages/about/Team';
// import Contact from './pages/Contact';
import Blog from './pages/blog';
import BlogPost from './pages/blog/Post'
import NotFound from './pages/NotFound';
import Login from './pages/Loggin';
import WebappTemplate from './WebappTemplate';
import StoreWall from './pages/shop';
import Product from './pages/shop/Product';
import '../index.css'

const Contact = lazy(()=>{
 return new Promise ((resolve) =>{
   setTimeout(() => {
    return (resolve (import('./pages/Contact')
    ))
  }, 2000);
 }) 
})

export const App = () => {
  const location = useLocation()  
  useEffect(()=>{
    console.log('location', location);
  })

  return (
<Suspense fallback={<div>Loading</div>}>
<Routes>
      <Route path='/' element={<WebappTemplate/>}>
      <Route path='/react-homework-template/' element={<Home/>}/>
        <Route path='/react-homework-template/about' element={<About/>}>
        <Route path='mission' element={<Mission/>}/>
        <Route path='team' element={<Team/>}/>
        <Route path='reviews' element={<Reviews/>}/>
        </Route>
      <Route path='/react-homework-template/contact' element={<Contact/>}/>
      <Route path='/react-homework-template/blog' element={<Blog/>}/>
      <Route path='/react-homework-template/blog/:postId' element={<BlogPost/>}/>
      <Route path='/react-homework-template/loggin' element={<Login/>}/>
      <Route path='/react-homework-template/shop' element={<StoreWall/>}/>
      <Route path='/react-homework-template/shop/product' element={<Product/>}/>
      
      
      <Route path='/*' element={<NotFound/>}/>
      </Route>
    </Routes>
    </Suspense>   
  );
};
