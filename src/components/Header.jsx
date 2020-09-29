import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

    constructor() {
        super();

        this.state = {
            menuOpen: false
        }
    }

    openMenu() {

        if (this.state.menuOpen) {
            this.setState({ menuOpen : false })
        } else {
            this.setState({ menuOpen : true });
        }
    }

    render() {

        const togglerClass = this.state.menuOpen ? "nav--open inline-block cursor-pointer" : "inline-block cursor-pointer ";
        const navLinksClass = this.state.menuOpen ? "navbar--links-list text-center md:text-right h-0 md:h-full nav--open" :
        "navbar--links-list text-center md:text-right overflow-hidden h-0 md:h-full";

        return (
            <header>
                <nav className="flex flex-row flex-wrap items-center px-12 py-5 shadow-md">
                    <div className="navbar--brand w-2/3 md:w-1/3">
                        <Link to="/">Inventory Management</Link>
                    </div>
                    <div className="navbar--toggler text-right md:hidden w-1/3">
                        <div className={togglerClass} onClick={() => this.openMenu()}>
                            <span id="navbar--toggler-top" className="transition-transform duration-300"></span>
                            <span id="navbar--toggler-mid"></span>
                            <span id="navbar--toggler-bot" className="transition-transform duration-300"></span>
                        </div>
                    </div>
                    <div className="navbar--links w-full md:w-2/3">
                        <ul className={navLinksClass}>
                            <li className="navbar--list-link block md:inline-block my-2 md:my-0">
                                <Link to="/" className="p-3 my-2 md:my-0">Home</Link>
                                <Link to="/addproduct" className="p-3 my-2 md:my-0">Add Product</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;