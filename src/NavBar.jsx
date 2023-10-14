import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';



const NavBar = ({ cartCount }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
 


      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Mi Tienda</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <div>
      {/* Aquí puedes usar la variable cartCount como necesites */}
      <p>{cartCount}</p>
        </div>

        <li className="nav-item">
              <Link className="nav-link" to="products">Home</Link>
            </li>


            <li className="nav-item">
              <Link className="nav-link" to="/products">Productos</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} /> Carrito ({cartCount})
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;


