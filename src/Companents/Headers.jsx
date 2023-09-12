import "./media.css"
function Headers() {
    return ( 
        <div className="headerContent">
            <nav className="navbar">
                <div className="navbarContent">
                    <div className="logo"><h1 className="title">Crazy Coder</h1><i class="bi bi-code-slash"></i></div>
                    <ul className="listElement">
                        <li><a href="#" className="linkElement links">Home</a></li>
                        <li><a href="#" className="linkElement links">Abouth</a></li>
                        <li><a href="#" className="linkElement links">Skills</a></li>
                        <li><a href="#" className="linkElement links">Contacts</a></li>
                    </ul>
                </div>
            </nav>
            <div className="content">
                <div className="bigTitle"><h1>Front-end Developer</h1></div>
                <div className="subtext"><p>I tell unique stories in the digital world by bringing together code and design. That's why I'm a Front-End Developer, crafting my art with code.</p></div>
            </div>
        </div>
     );
}

export default Headers;