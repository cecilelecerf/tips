import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './BurgerMenu.css';
import ModalButton from './ModalButton';
import { DateTime } from "luxon";

import { ReactComponent as BurgerIcon } from './BurgerIcon.svg';
import { ReactComponent as AdminIcon } from './Admin.svg';
import { ReactComponent as ExitIcon } from './Exit.svg';
import { ReactComponent as ModifyIcon } from './ModifyService.svg';
import { ReactComponent as ServiceIcon } from './Service.svg';

const BurgerMenu = ({ navbarBrand }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const currentDate = DateTime.local().toFormat(' DDDD ');

    return (
        <>
            <nav className="navbar bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <div className="text-secondary">{currentDate}</div>
                        <a>{navbarBrand}</a>
                    </div>
                    <BurgerIcon onClick={handleToggle} className="navbar-toggler" type="button" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" />
                    <div className={`offcanvas offcanvas-end ${isOpen ? 'show' : ''}`} tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{ width: '60%' }}>
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
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
                                        <a className="nav-link " aria-current="page" data-bs-toggle="modal" href=""><ModifyIcon /> Modifier Service</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-danger" href="#" data-bs-target="#CloseServiceModal" ><ExitIcon /> Fermer le service</a>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ETES VOUS SURE DEVOULOIR FERMER LE SERVICE ??
                        </div>
                        <div class="modal-footer">
                            <ModalButton text="Non, modifier" cssClass="btn-rounded" href="#" />
                            <ModalButton text="Oui terminer" cssClass="btn-rounded" data-bs-dismiss="modal" />
                        </div>
                    </div >
                </div >
            </div >
        </>
    );
};

export default BurgerMenu;