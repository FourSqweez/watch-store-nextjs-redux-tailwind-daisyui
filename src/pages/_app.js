import '../styles/globals.css'
import Navbar from '../components/Navbar'
import store from '../app/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Navbar />
			<Component {...pageProps} />
		</Provider>
	)
}

export default MyApp
