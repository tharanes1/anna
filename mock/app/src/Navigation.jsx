    import React from 'react'
    import { Link } from 'react-router-dom';
    function Navigation() {
    return (
        <>
        <nav className="navbar fixed-top ">
    <div className="container-fluid d-flex">
        <a className="navbar-brand" href="#">NETFLIX</a>
        <ul className='list-unstyled d-flex ms-auto gap-1 pt-3'>
        <li><Link to="/" className='btn ' >Home</Link></li>
        <li><Link to="/about"className='btn '>About</Link></li>
        <li><Link to="/service" className='btn'>Service</Link></li>
        <li><Link to="/feature" className='btn '>Feature</Link></li>
        <li><Link to="/product" className='btn '>Product</Link></li>
        <li><Link to="/testimonial" className='btn '>testimonial</Link></li>
        </ul>
        <button className="navbar-toggler ms-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Netflix</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Login</a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">others</a>
            </li>
            
            </ul>
        </div>
        </div>
    </div>
    </nav>
    </>
    );
    }

    export default Navigation