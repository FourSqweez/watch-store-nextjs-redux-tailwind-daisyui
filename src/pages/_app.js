import '../styles/globals.css'
import Navbar from '../components/Navbar'
import store from '../app/store'
import { Provider } from 'react-redux'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</Provider>
	)
}

export default MyApp
