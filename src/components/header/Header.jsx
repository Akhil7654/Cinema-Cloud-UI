import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from '/Cinema-cloud-logo.png'

const Header = () => {
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(()=>{
        window.scrollTo(0,0)
    },[location])

    const controlNavbar=()=>{
      console.log(window.scrollY)
      if(window.scrollY>240){
        if(window.scrollY>lastScrollY && !mobileMenu){
          setShow("hide")
        }else{
          setShow("show")
        }
      }else{
        setShow("top")
      }
      setLastScrollY(window.scrollY)
    }

    useEffect(()=>{
      window.addEventListener('scroll',controlNavbar)
      return ()=>{
        window.removeEventListener('scroll',controlNavbar)
      }
    },[lastScrollY])

    const OpenSearch = () =>{
      setShowSearch(true)
      setMobileMenu(false)
    }

    const OpenMobileMenu = () =>{
      setMobileMenu(true)
      setShowSearch(false)
    }

    const searchQueryHandler = (event) => {
      if (event.key === 'Enter' && query.length > 0) {
        navigate(`/search/${query}`);
        setTimeout(()=>{
          setShowSearch(false)
        },1000)
      }
    };

    const navigationHandler=(type)=>{
       if(type==="movies"){
        navigate("/explore/movies")
       }else{
        navigate("/explore/tv")
       }
       setMobileMenu(false)
    }

   
    return (
          <header className={`header ${mobileMenu?"mobileView":""} ${show}`}>
            <ContentWrapper>
              <div className="logo" onClick={()=>navigate("/")}>
                <img src={logo} alt="CinemaCloud Logo" />
              </div>
              <ul className="menuItems">
                <li className="menuItem" onClick={()=>{navigationHandler("movies")}}>Movies</li>
                <li className="menuItem" onClick={()=>{navigationHandler("tvshows")}}>TV Shows</li>
                <li className="menuItem">
                  <HiOutlineSearch onClick={OpenSearch}/>
                </li>
              </ul>

              <div className="mobileMenuItems">

                <HiOutlineSearch onClick={OpenSearch}/>
                {mobileMenu?(
                <VscChromeClose onClick={()=>{
                  setMobileMenu(false)
                }}/>
                ):(
                <SlMenu onClick={OpenMobileMenu}/>
                )}     

              </div>

            </ContentWrapper>

            {showSearch && (
            <div className="searchBar">
              <ContentWrapper>
              <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a Movie or TV Show"
              onKeyUp={searchQueryHandler}
              onChange={(e) => setQuery(e.target.value)}
            />
            <VscChromeClose onClick={()=>{
                  setShowSearch(false)
                }}/>
          </div>
              </ContentWrapper>
            </div>
          )} 
          </header>
      
    );
};

export default Header;
