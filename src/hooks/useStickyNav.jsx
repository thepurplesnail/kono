import {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";

export function useStickyNav() {
    const [stickyClass, setStickyClass] = useState('');
    const [onHome, setOnHome] = useState(true);

    const location = useLocation();

    // if user is Home at all -> setHome = true and no sticky nav
    // else -> automatic sticky nav

    useEffect(() => {
        if (location.pathname === '/' || location.pathname === '/#home' || location.pathname === '/#objectives' || location.pathname === '/#history'){
            setOnHome(true);
            setStickyClass('');
        } else {
            setOnHome(false);
            setStickyClass('sticky-nav');
        }
    }, [location, onHome])

    // if the user is Home and has scrolled -> activate sticky nav
    // if the user is not -> automatic sticky nav 

    useEffect(() => {
        if (onHome){
            window.addEventListener('scroll', stickNavbar);
            return () => window.removeEventListener('scroll', stickNavbar);
        } else {
            setStickyClass('sticky-nav');
        }
    }, [onHome]);
 
    // if the user has scrolled -> set stickyClass state to 'sticky-nav'

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 0 ? setStickyClass('sticky-nav') : setStickyClass('');
        }
    };

    return stickyClass;
}