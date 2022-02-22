function Navbar() {
    return (
     <nav className="navbar">
        <img src="/src/assets/world-icon.svg" className="nav-icon"/>
        <h1 className="nav-text">my travel journal.</h1>
     </nav>   
    )    
}

function Footer() {
    return (
        <footer>
            <p>Developed by <a href="https://github.com/kevinCubas" target="_blank" rel="noopener noreferrer">Kevin Cubas</a></p>
        </footer>
    )
}

export {Navbar, Footer}