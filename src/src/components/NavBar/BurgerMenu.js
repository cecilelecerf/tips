import './BurgerMenu.css';
import ModalButton from './ModalButton';
import { DateTime } from "luxon";
import DarkModeContext from '../DarkMode/DarkMode';
import { ReactComponent as AdminIconDark } from './AdminIconDark.svg';
import { ReactComponent as ModifyIconDark } from './ModifyIconDark.svg';

import { ReactComponent as BurgerIcon } from './BurgerIcon.svg';
import { ReactComponent as AdminIcon } from './AdminIcon.svg';
import { ReactComponent as ExitIcon } from './Exit.svg';
import { ReactComponent as ModifyIcon } from './ModifyService.svg';
import { ReactComponent as ServiceIcon } from './Service.svg';
import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';

function BurgerMenu(props, { navbarBrand }) {
    const { darkMode } = useContext(DarkModeContext);
    const [isOpen, setIsOpen] = useState(false);

    const navBarStyle = darkMode ? "navbar bg-dark fixed-top" : "navbar bg-secondary-subtle fixed-top";
    const containerClass = darkMode ? 'bg-dark ' : 'bg-secondary-subtlet';
    const DarkModeTextColor = darkMode ? 'text-light' : 'text-dark';
    const adminIcon = darkMode ? <AdminIconDark /> : <AdminIcon />;
    const modifyIcon = darkMode ? <ModifyIconDark /> : <ModifyIcon />;


    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const currentDate = DateTime.local().toFormat(' DDDD ');

    return (
        <>
            <nav className={`navbar  fixed-top ${navBarStyle}`}>
                <div className={`container-fluid ${containerClass}`}>
                    <div className="navbar-brand mt-3">
                        <div className="text-secondary fs-6">{currentDate}</div>
                        <p className={`NavBarBrand fs-1 fw-bold ${DarkModeTextColor}`}>{props.navbarBrand}</p>
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
                                        <NavLink className="nav-link active" aria-current="page" to="/whoWorks"><ServiceIcon /> Service</NavLink>                                    </li>
                                    <li className="nav-item">
                                        <p className="nav-link" href="#">{adminIcon} Administrateur</p>
                                    </li>
                                </div>
                                <div className='menu2 position-absolute bottom-0 end-0 me-4'>
                                    <li className="nav-item">
                                        <p className="nav-link " aria-current="page" data-bs-toggle="modal" href="#">{modifyIcon} Modifier Service</p>
                                    </li>
                                    <li className="nav-item">
                                        <p className="nav-link text-danger" href="#" data-bs-target="#CloseServiceModal" ><ExitIcon /> Fermer le service</p>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ETES VOUS SURE DEVOULOIR FERMER LE SERVICE ??
                        </div>
                        <div className="modal-footer">
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