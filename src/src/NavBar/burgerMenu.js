import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './burgerMenu.css';
import { ReactComponent as BurgerIcon } from './burgerIcon.svg';
import { ReactComponent as AdminIcon } from './Admin.svg';
import { ReactComponent as ExitIcon } from './Exit.svg';
import { ReactComponent as ModifyIcon } from './ModifyService.svg';
import { ReactComponent as ServiceIcon } from './Service.svg';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="navbar bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Qui travaille aujourd’hui ?</a>
                    <BurgerIcon onClick={handleToggle} className="navbar-toggler" type="button" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" />
                    <div className={`offcanvas offcanvas-end ${isOpen ? 'show' : ''}`} tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{ width: '50%' }}>
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={handleToggle}></button>
                        </div>
                        <div className="offcanvas-body container">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <div className='menu1'>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#"><ServiceIcon /> Service</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><AdminIcon /> Administrateur</a>
                                    </li>
                                </div>
                                <div className='menu2 position-absolute bottom-0 end-0 me-4'>
                                    <li className="nav-item">
                                        <a className="nav-link " aria-current="page" href="#"><ModifyIcon /> Modifier Service</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-danger" href="#"><ExitIcon /> Fermer le service</a>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default BurgerMenu;