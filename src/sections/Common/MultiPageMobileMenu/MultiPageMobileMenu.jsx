"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

const MultiPageMobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {
    const [isHomeMenuOpen, setIsHomeMenuOpen] = useState(false);
    const [isMultiPageMenuOpen, setIsMultiPageMenuOpen] = useState(false);
    const [isOnePageMenuOpen, setIsOnePageMenuOpen] = useState(false);
    const [isPagesMenuOpen, setIsPagesMenuOpen] = useState(false);
    const [isProjectMenuOpen, setIsProjectMenuOpen] = useState(false);
    const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);
    const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
    const [isBlogMenuOpen, setIsBlogMenuOpen] = useState(false);


    const handleMobileMenuClose = () => {
        setIsMenuOpen(false);
    }

    const [menuStyles, setMenuStyles] = useState({
        isHomeMenu: {
            opacity: 0,
            transition: 'opacity 0.5s ease',
            display: 'none',
        },
        isMultiPageMenu: {
            opacity: 0,
            transition: 'opacity 0.5s ease',
            display: 'none',
        },
        isOnePageMenu: {
            opacity: 0,
            transition: 'opacity 0.5s ease',
            display: 'none',
        },
        isPagesMenu: {
            opacity: 0,
            transition: 'opacity 0.5s ease',
            display: 'none',
        },
        isProjectMenu: {
            opacity: 0,
            transition: 'opacity 0.5s ease',
            display: 'none',
        },
    });

    // Home
    useEffect(() => {
        if (isHomeMenuOpen) {
            setMenuStyles((prevStyles) => ({
                ...prevStyles,
                isHomeMenu: {
                    ...prevStyles.isHomeMenu,
                    display: 'block',
                },
            }));
            setTimeout(() => {
                setMenuStyles((prevStyles) => ({
                    ...prevStyles,
                    isHomeMenu: {
                        ...prevStyles.isHomeMenu,
                        opacity: 1,
                    },
                }));
            }, 100);
        } else {
            setMenuStyles((prevStyles) => ({
                ...prevStyles,
                isHomeMenu: {
                    ...prevStyles.isHomeMenu,
                    opacity: 0,
                },
            }));
            setTimeout(() => {
                setMenuStyles((prevStyles) => ({
                    ...prevStyles,
                    isHomeMenu: {
                        ...prevStyles.isHomeMenu,
                        display: 'none',
                    },
                }));
            }, 500);
        }
    }, [isHomeMenuOpen]);
    // MultiPage
    useEffect(() => {
        if (isMultiPageMenuOpen) {
            setMenuStyles((prevStyles) => ({
                ...prevStyles,
                isMultiPageMenu: {
                    ...prevStyles.isMultiPageMenu,
                    display: 'block',
                },
            }));
            setTimeout(() => {
                setMenuStyles((prevStyles) => ({
                    ...prevStyles,
                    isMultiPageMenu: {
                        ...prevStyles.isMultiPageMenu,
                        opacity: 1,
                    },
                }));
            }, 100);
        } else {
            setMenuStyles((prevStyles) => ({
                ...prevStyles,
                isMultiPageMenu: {
                    ...prevStyles.isMultiPageMenu,
                    opacity: 0,
                },
            }));
            setTimeout(() => {
                setMenuStyles((prevStyles) => ({
                    ...prevStyles,
                    isMultiPageMenu: {
                        ...prevStyles.isMultiPageMenu,
                        display: 'none',
                    },
                }));
            }, 300);
        }
    }, [isMultiPageMenuOpen]);
    // OnePage
    useEffect(() => {
        if (isOnePageMenuOpen) {
            setMenuStyles((prevStyles) => ({
                ...prevStyles,
                isOnePageMenu: {
                    ...prevStyles.isOnePageMenu,
                    display: 'block',
                },
            }));
            setTimeout(() => {
                setMenuStyles((prevStyles) => ({
                    ...prevStyles,
                    isOnePageMenu: {
                        ...prevStyles.isOnePageMenu,
                        opacity: 1,
                    },
                }));
            }, 100);
        } else {
            setMenuStyles((prevStyles) => ({
                ...prevStyles,
                isOnePageMenu: {
                    ...prevStyles.isOnePageMenu,
                    opacity: 0,
                },
            }));
            setTimeout(() => {
                setMenuStyles((prevStyles) => ({
                    ...prevStyles,
                    isOnePageMenu: {
                        ...prevStyles.isOnePageMenu,
                        display: 'none',
                    },
                }));
            }, 300);
        }
    }, [isOnePageMenuOpen]);
    // PagesPage
    useEffect(() => {
        if (isPagesMenuOpen) {
            setMenuStyles((prevStyles) => ({
                ...prevStyles,
                isPagesMenu: {
                    ...prevStyles.isPagesMenu,
                    display: 'block',
                },
            }));
            setTimeout(() => {
                setMenuStyles((prevStyles) => ({
                    ...prevStyles,
                    isPagesMenu: {
                        ...prevStyles.isPagesMenu,
                        opacity: 1,
                    },
                }));
            }, 100);
        } else {
            setMenuStyles((prevStyles) => ({
                ...prevStyles,
                isPagesMenu: {
                    ...prevStyles.isPagesMenu,
                    opacity: 0,
                },
            }));
            setTimeout(() => {
                setMenuStyles((prevStyles) => ({
                    ...prevStyles,
                    isPagesMenu: {
                        ...prevStyles.isPagesMenu,
                        display: 'none',
                    },
                }));
            }, 300);
        }
    }, [isPagesMenuOpen]);
    // ProjectPage
    useEffect(() => {
        if (isProjectMenuOpen) {
            setMenuStyles((prevStyles) => ({
                ...prevStyles,
                isProjectMenu: {
                    ...prevStyles.isProjectMenu,
                    display: 'block',
                },
            }));
            setTimeout(() => {
                setMenuStyles((prevStyles) => ({
                    ...prevStyles,
                    isProjectMenu: {
                        ...prevStyles.isProjectMenu,
                        opacity: 1,
                    },
                }));
            }, 100);
        } else {
            setMenuStyles((prevStyles) => ({
                ...prevStyles,
                isProjectMenu: {
                    ...prevStyles.isProjectMenu,
                    opacity: 0,
                },
            }));
            setTimeout(() => {
                setMenuStyles((prevStyles) => ({
                    ...prevStyles,
                    isProjectMenu: {
                        ...prevStyles.isProjectMenu,
                        display: 'none',
                    },
                }));
            }, 300);
        }
    }, [isProjectMenuOpen]);
    // Service
    useEffect(() => {
        if (isServiceMenuOpen) {
            setMenuStyles((prevStyles) => ({
                ...prevStyles,
                isServiceMenu: {
                    ...prevStyles.isServiceMenu,
                    display: 'block',
                },
            }));
            setTimeout(() => {
                setMenuStyles((prevStyles) => ({
                    ...prevStyles,
                    isServiceMenu: {
                        ...prevStyles.isServiceMenu,
                        opacity: 1,
                    },
                }));
            }, 100);
        } else {
            setMenuStyles((prevStyles) => ({
                ...prevStyles,
                isServiceMenu: {
                    ...prevStyles.isServiceMenu,
                    opacity: 0,
                },
            }));
            setTimeout(() => {
                setMenuStyles((prevStyles) => ({
                    ...prevStyles,
                    isServiceMenu: {
                        ...prevStyles.isServiceMenu,
                        display: 'none',
                    },
                }));
            }, 300);
        }
    }, [isServiceMenuOpen]);
    // ShopPage
    useEffect(() => {
        if (isShopMenuOpen) {
            setMenuStyles((prevStyles) => ({
                ...prevStyles,
                isShopMenu: {
                    ...prevStyles.isShopMenu,
                    display: 'block',
                },
            }));
            setTimeout(() => {
                setMenuStyles((prevStyles) => ({
                    ...prevStyles,
                    isShopMenu: {
                        ...prevStyles.isShopMenu,
                        opacity: 1,
                    },
                }));
            }, 100);
        } else {
            setMenuStyles((prevStyles) => ({
                ...prevStyles,
                isShopMenu: {
                    ...prevStyles.isShopMenu,
                    opacity: 0,
                },
            }));
            setTimeout(() => {
                setMenuStyles((prevStyles) => ({
                    ...prevStyles,
                    isShopMenu: {
                        ...prevStyles.isShopMenu,
                        display: 'none',
                    },
                }));
            }, 300);
        }
    }, [isShopMenuOpen]);
    // BlogPage
    useEffect(() => {
        if (isBlogMenuOpen) {
            setMenuStyles((prevStyles) => ({
                ...prevStyles,
                isBlogMenu: {
                    ...prevStyles.isBlogMenu,
                    display: 'block',
                },
            }));
            setTimeout(() => {
                setMenuStyles((prevStyles) => ({
                    ...prevStyles,
                    isBlogMenu: {
                        ...prevStyles.isBlogMenu,
                        opacity: 1,
                    },
                }));
            }, 100);
        } else {
            setMenuStyles((prevStyles) => ({
                ...prevStyles,
                isBlogMenu: {
                    ...prevStyles.isBlogMenu,
                    opacity: 0,
                },
            }));
            setTimeout(() => {
                setMenuStyles((prevStyles) => ({
                    ...prevStyles,
                    isBlogMenu: {
                        ...prevStyles.isBlogMenu,
                        display: 'none',
                    },
                }));
            }, 300);
        }
    }, [isBlogMenuOpen]);
    return (
        <div className={`mobile-menu-wrapper ${isMenuOpen ? 'body-visible' : ''}`}>
            <div className="mobile-menu-area">
                <div className="mobile-logo">
                    <Link href="/home-1">
                        <Image src="/main-assets/img/logo.png" alt="Columbia Agencies Limited Logo" width={120} height={30} />
                    </Link>
                    <button onClick={handleMobileMenuClose} className="menu-toggle">
                        <i className="ri-close-line"></i>
                    </button>
                </div>
                <div className="mobile-menu">
                    <ul>
                        <li className={`menu-item-has-children submenu-item-has-children ${isHomeMenuOpen ? 'active-class' : ''}`}>
                            <Link onClick={() => setIsHomeMenuOpen(!isHomeMenuOpen)} href="#">Home <span className="mean-expand-class"></span></Link>
                            
                        </li>
                        <li><Link href="/pages/innerpage/about">About</Link></li>
                        
                        <li className={`menu-item-has-children submenu-item-has-children ${isProjectMenuOpen ? 'active-class' : ''}`}>
                            <Link onClick={() => setIsProjectMenuOpen(!isProjectMenuOpen)} href="pages/innerpage/project">Project <span className="mean-expand-class"></span></Link>
                            
                        </li>
                        <li className={`menu-item-has-children submenu-item-has-children ${isServiceMenuOpen ? 'active-class' : ''}`}>
                            <Link onClick={() => setIsServiceMenuOpen(!isServiceMenuOpen)} href="/pages/innerpage/service">Service <span className="mean-expand-class"></span></Link>
                            
                        </li>
                        <li className={`menu-item-has-children submenu-item-has-children ${isShopMenuOpen ? 'active-class' : ''}`}>
                            <Link onClick={() => setIsShopMenuOpen(!isShopMenuOpen)} href="/pages/innerpage/shop">Shop <span className="mean-expand-class"></span></Link>
                           
                        </li>
                        <li className={`menu-item-has-children submenu-item-has-children ${isBlogMenuOpen ? 'active-class' : ''}`}>
                            <Link onClick={() => setIsBlogMenuOpen(!isBlogMenuOpen)} href="/pages/innerpage/blog">Blog <span className="mean-expand-class"></span></Link>
                            
                        </li>
                        <li><Link href="/pages/innerpage/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MultiPageMobileMenu;