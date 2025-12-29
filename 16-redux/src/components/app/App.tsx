import { BrowserRouter } from 'react-router-dom'
import Layout from '../layout/layout/Layout'
import './App.css'
import Auth from '../auth/auth/Auth'
import { Provider as Redux } from 'react-redux'
import store from '../../redux/store'
import SocketDispatcher from '../socket-dispatcher/SocketDispatcher'

function App() {

    return (
        <>
            <BrowserRouter>
                <Auth>
                    <Redux store={store}>
                        <SocketDispatcher>
                            <Layout />
                        </SocketDispatcher>
                    </Redux>
                </Auth>
            </BrowserRouter>
        </>
    )

}

export default App
