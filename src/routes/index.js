import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Boiler from './Boiler.js'
import ScrollToTop from "../wrappers/ScrollToTop.js"

export default () => (
	<Router>
		<ScrollToTop>
			<Boiler />
		</ScrollToTop>
	</Router>
)
