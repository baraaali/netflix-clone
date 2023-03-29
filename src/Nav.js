import React, { useState , useEffect} from 'react'
import './Nav.css'
import { useNavigate } from 'react-router-dom'
function Nav() {
    const [show ,handelShow] = useState(false);

    const navigate  = useNavigate();

    const translationNavBar = ()=>{
        if (window.scrollY > 100){
            handelShow(true);
        }else{
            handelShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", translationNavBar)
        return() =>  window.removeEventListener("scroll", translationNavBar)
    }, [])
    return (
        <div className={`nav ${show && 'nav__black'} `}>
            <div className='nav__contents'>
            <img 
            onClick={()=> navigate('/')}
            className='nav__logo'
                src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
                alt=''>
            </img>
            <img 
            onClick={()=> navigate('/profile')}
            className='nav__avatar'
                src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                alt=''>
            </img>
            </div>
        </div>
    )
}

export default Nav
