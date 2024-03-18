
const HeaderContainer = () => {
    return(
        <header>
            <img src="log" alt="logo" />
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>About</li>
                </ul>
            </nav>
            <button className="bt-login"><a href="#">Login</a></button>
            <button className="bt-free-triat"><a href="#">Try Whitespace Free</a></button>
        </header>
    )
}
export default  HeaderContainer;