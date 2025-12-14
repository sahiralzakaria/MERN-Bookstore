import './header.css'
import HeaderMiddle from './HeaderMiddle'
import HeaderTop from './HeaderTop'
import Navbar from './Navbar'

export const Header = () => {
    return (
        <header className="header">
            <HeaderTop />
            <HeaderMiddle />
            <Navbar />
        </header>
    )
}
