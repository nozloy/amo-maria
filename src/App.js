import './App.css'
import React from 'react'
import Menu from './components/Menu'
import Faq from './Pages/Faq'
import Layout from './Pages/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Menu />} />
					<Route path='faq' element={<Faq />} />
					{/* <Route path='*' element={<Home />} /> */}
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
