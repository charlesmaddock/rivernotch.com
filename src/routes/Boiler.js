import React, { Suspense, lazy } from "react"
import { Route, Switch } from 'react-router-dom'

// Components
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"

// Lazy loading components
const Home = lazy(() => import('../components/Home.js'))
const Download = lazy(() => import('../components/Download.js'))
const News = lazy(() => import('../components/News.js'))

function Boiler() {
	return (
		<div>
			<Header/>
			<Suspense fallback={null}>
				<Switch>
					<Route
						path="/" exact
						render={props => <Home {...props}/>}
					/>
					<Route
						path="/download"
						render={props => <Download {...props}/>}
					/>
		      <Route
		        path="/news"
		        render={props => <News {...props}/>}
		      />
				</Switch>
			</Suspense>
			<Footer/>
		</div>
	)
}

export default Boiler
