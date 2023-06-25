import { useEffect } from 'react'
import Home from './pages/Home'
import Layout from './components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import NotFound from './pages/NotFound'
import store from './redux/store'
import Login from './pages/Login'
import './App.css'

function App() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </Provider>
    </ChakraProvider>
  )
}

export default App
