import React from 'react'
import Menu from './Menu'
import Faq from '../Pages/Faq'
import Cert from '../Pages/Cert'
import Layout from '../Pages/Layout'
import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'

const AnimatedRoutes = () => {
	const location = useLocation()
	return (
		<AnimatePresence exitBeforeEnter>
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<Layout />}>
					<Route index element={<Menu />} />
					<Route path='faq' element={<Faq />} />
					<Route path='cert' element={<Cert />} />
					{/* <Route path='*' element={<Home />} /> */}
				</Route>
			</Routes>
		</AnimatePresence>
	)
}

export default AnimatedRoutes
