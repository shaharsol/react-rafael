import { useContext } from 'react'
import Login from '../../auth/login/Login'
import Followers from '../../follows/followers/Followers'
import Following from '../../follows/following/Following'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Main from '../main/Main'
import './Layout.css'
import AuthContext from '../../auth/auth/AuthContext'

export default function Layout() {

    const { jwt } = useContext(AuthContext)!
    // !! turns anything into its boolean value
    const isLoggedIn = !!jwt;

    return (
        <div className='Layout'>

            {!isLoggedIn && <Login />}

            {isLoggedIn && <>
                <header>
                    <Header />
                </header>
                <aside id="following">
                    <Following />
                </aside>
                <aside id="followers">
                    <Followers />
                </aside>
                <main>
                    <Main />
                </main>
                <footer>
                    <Footer />
                </footer>
            </>}

        </div>
    )
}