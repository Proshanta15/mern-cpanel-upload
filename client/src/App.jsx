import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import { AdminLayout } from './components/layouts/AdminLayout'
import Navbar from './components/Navbar'
import About from './pages/About'
import { AdminContacts } from './pages/AdminContacts'
import { AdminUsers } from './pages/AdminUsers'
import Contact from './pages/Contact'
import Error from './pages/Error'
import Home from './pages/Home'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Register from './pages/Register'
import Service from './pages/Service'
import './style/index.css'
import AdminUpdate from './pages/AdminUpdate'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className='app-shell'>
          <Navbar />
          <main className='app-main'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/service' element={<Service />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/logout' element={<Logout />} />
              <Route path='*' element={<Error />} />

              <Route path="/admin" element={<AdminLayout />} >
                <Route path="users" element={<AdminUsers />} />
                <Route path="contacts" element={<AdminContacts />} />
                <Route path="users/:id/edit" element={<AdminUpdate />} />
              </Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
