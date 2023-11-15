import { BrowserRouter, Router } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
    <Router>
      <Router path='/' element={<h1>Home Page</h1>}/>
      <Router path='/login' element={<h1>Login</h1>}/>
      <Router path='/register' element={<h1>Register</h1>}/>
      <Router path='/profile' element={<h1>Profile Page</h1>}/>
      <Router path='/products' element={<h1>Productos</h1>}/>
      <Router path='/add-product' element={<h1>Add Product</h1>}/>
      <Router path='/product/:id' element={<h1>Update Product</h1>}/>
    </Router>
    </BrowserRouter>
  )
}

export default App