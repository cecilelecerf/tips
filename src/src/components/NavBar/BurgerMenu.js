import './BurgerMenu.css';
import { DateTime } from "luxon";
import DarkModeContext from '../DarkMode/DarkMode';


import { ReactComponent as BurgerIcon } from './BurgerIcon.svg';
import { ReactComponent as AdminIcon } from './AdminIcon.svg';
import { ReactComponent as ExitIcon } from './Exit.svg';
import { ReactComponent as ModifyIcon } from './ModifyIcon.svg';
import { ReactComponent as ServiceIcon } from './Service.svg';
import { useState, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function BurgerMenu(props, { navbarBrand }) {

    const location = useLocation();

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const { darkMode } = useContext(DarkModeContext);
    const [isOpen, setIsOpen] = useState(false);

    const navBarStyle = darkMode ? "navbar bg-dark fixed-top" : "navbar  fixed-top";
    const containerClass = darkMode ? 'bg-dark ' : '';
    const DarkModeTextColor = darkMode ? 'text-light' : 'text-dark';
    const [isModifyModalOpen, setIsModifyModalOpen] = useState(false);
    const [isCloseModalOpen, setIsCloseModalOpen] = useState(false);
    const closeModifyModal = () => setIsModifyModalOpen(false);

    const openCloseModal = () => setIsCloseModalOpen(true);
    const closeCloseModal = () => setIsCloseModalOpen(false);




    const currentDate = DateTime.local().toFormat(' DDDD ');

    return (
        <>
            <nav className={`navbar ${navBarStyle}`}>
                <div className={`container-fluid ${containerClass}`}>
                    <div className="navbar-brand mt-3">
                        <div className="text-secondary fs-6">{currentDate}</div>
                        <p className={`NavBarBrand fs-1 fw-bold ${DarkModeTextColor}`}>{props.navbarBrand}</p>
                    </div>
                    <BurgerIcon onClick={handleToggle} type="button" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" />
                    <div className={`offcanvas offcanvas-end ${isOpen ? 'show' : ''}`} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{ width: '60%' }}>
                        <div className="offcanvas-header">
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={handleToggle}></button>
                        </div>
                        <div className="offcanvas-body container">
                            <ul className="navbar-nav align-items-end justify-content-between ">
                                <div className='menu1'>
                                    <li className="nav-item border-bottom pb-3 mb-3">
                                        <NavLink className={`nav-link ${!location.pathname.includes("/admin") ? 'text-primary border-end border-primary border-4 pe-3' : 'pe-3'}`} to="/"><ServiceIcon /> Service</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/admin" className={`nav-link ${location.pathname.includes("/admin") ? 'text-primary border-end border-primary border-4 pe-3' : 'pe-3'}`} >
                                        <AdminIcon /> Administrateur
                                        </NavLink>
                                    </li>
                                </div>
                                <div className='menu2 align-self-center'>
                                    <li className="nav-item">
                                        <NavLink to="/" href="#" className="nav-link " >
                                        <ModifyIcon /> Modifier Service
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link text-danger" onClick={openCloseModal}>
                                            <ExitIcon /> Fermer le service
                                        </a>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div className={`modal fade ${isModifyModalOpen ? 'show d-block' : ''}`} tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <p>êtes-vous sur de vouloir modifier le service du {currentDate} ??</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={closeModifyModal}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`modal fade ${isCloseModalOpen ? 'show d-block' : ''}`} tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <p>êtes-vous sur de vouloir mettre fin au service du {currentDate} ??</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={closeCloseModal}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
            {isModifyModalOpen || isCloseModalOpen ? <div className="modal-backdrop fade show"></div> : null}
        </>
    );
};

export default BurgerMenu;