import './BurgerMenu.css';
import ModalButton from './ModalButton';
import { DateTime } from "luxon";
import DarkModeContext from '../DarkMode/DarkMode';
import { ReactComponent as AdminIconDark } from './AdminIconDark.svg';
import { ReactComponent as ModifyIconDark } from './ModifyIconDark.svg';
import { ReactComponent as BurgerIconDark } from './BurgerIconDark.svg';
import { ReactComponent as AdminClickedOrange } from './AdminClickedOrange.svg';


import { ReactComponent as BurgerIcon } from './BurgerIcon.svg';
import { ReactComponent as AdminIcon } from './AdminIcon.svg';
import { ReactComponent as ExitIcon } from './Exit.svg';
import { ReactComponent as ModifyIcon } from './ModifyService.svg';
import { ReactComponent as ServiceIcon } from './Service.svg';
import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';

function BurgerMenu(props, { navbarBrand }) {


    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const [isAdminClicked, setAdminClicked] = useState(false);
    const { darkMode } = useContext(DarkModeContext);
    const [isOpen, setIsOpen] = useState(false);

    const navBarStyle = darkMode ? "navbar bg-dark fixed-top" : "navbar bg-secondary-subtle fixed-top";
    const containerClass = darkMode ? 'bg-dark ' : 'bg-secondary-subtlet';
    const DarkModeTextColor = darkMode ? 'text-light' : 'text-dark';
    const adminIconClicked = <AdminClickedOrange />;
    const adminTextColor = isAdminClicked ? 'text-orange' : DarkModeTextColor;
    const adminIcon = isAdminClicked ? adminIconClicked : (darkMode ? <AdminIconDark /> : <AdminIcon />);
    const modifyIcon = darkMode ? <ModifyIconDark /> : <ModifyIcon />;
    const burgerIcon = darkMode ? <BurgerIconDark onClick={handleToggle} type="button" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" /> : <BurgerIcon onClick={handleToggle} type="button" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" />; const [isModifyModalOpen, setIsModifyModalOpen] = useState(false);
    const [isCloseModalOpen, setIsCloseModalOpen] = useState(false);

    const openModifyModal = () => setIsModifyModalOpen(true);
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
                    {burgerIcon}
                    <div className={`offcanvas offcanvas-end ${isOpen ? 'show' : ''}`} tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{ width: '60%' }}>
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={handleToggle}></button>
                        </div>
                        <div className="offcanvas-body container">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <div className='menu1'>
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" aria-current="page" to="/room"><ServiceIcon /> Service</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <p className={`nav-link ${isAdminClicked ? 'text-orange' : ''}`} onClick={() => setAdminClicked(true)}>
                                            {adminIcon} Administrateur
                                        </p>
                                    </li>
                                </div>
                                <div className='menu2 position-absolute bottom-0 end-0 me-4'>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link " aria-current="page" onClick={openModifyModal}>
                                            {modifyIcon} Modifier Service
                                        </a>
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