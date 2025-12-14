import './header.css'

export const Header = () => {
    return (
        <header className="header">
            <div className="header-top">
                <div className="header-top-menu">
                    <i class="bi bi-list"></i>
                </div>
                <div className="header-top-phone">
                    <i className="bi bi-telephone-fill"></i>
                    0552666666
                </div>
                <div className="header-top-text">
                    Welcome to our book store
                </div>
                <div className="header-top-link">
                    <i className="bi bi-person-fill"></i>
                    Login
                </div>
            </div>
            <div className="header-middle">
                <div className="header-middle-logo">
                    <b>Book</b>
                    <i className='bi bi-book'></i>
                    <b>Store</b>
                </div>
                <div className="header-middle-search-box">
                    <input placeholder='Search in our Book Store ....' type="text" className="header-middle-search-input" />
                    <i className="bi bi-search"></i>
                </div>
                <div className="header-middle-cart-wrapper">
                    <i className="bi bi-cart2"></i>
                </div>
            </div>
        </header>
    )
}
