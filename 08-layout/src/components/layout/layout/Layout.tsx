import Followers from '../../follows/followers/Followers'
import Following from '../../follows/following/Following'
import Header from '../header/Header'
import './Layout.css'

export default function Layout() {
    return (
        <div className='Layout'>
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
                profie|feed...
            </main>
            <footer>
                footer...
            </footer>
        </div>
    )
}