import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import  {Layout } from "./layout";
import Home from './assets/components/Home/Home';
import  About  from "./assets/components/About/About";
import Contact from "./assets/components/Contact/Contact";
import  User  from "./assets/components/User/User";
import  Github, { githubInfoLoader }  from "./assets/components/Github/Github";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//     {
//       path :"/About",
//       element : <About />
//     },
//     {
//       path :"/Contact",
//       element : <Contact/>
//     }
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element = {<Layout/>}>
      <Route path="" element = {<Home/>} />
      <Route path="about" element = {<About/>} />
      <Route path="contact" element = {<Contact/>} />
      <Route path="user/:userid" element={<User/>}/>
      <Route loader={githubInfoLoader} path="github" element={<Github/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
