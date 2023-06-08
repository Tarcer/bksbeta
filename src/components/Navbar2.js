import React from 'react';
import {Link} from "react-router-dom";
import BKS from "../pages/icon.png";
import discord from "../pages/logo discord.png";
import twitter from "../pages/logo twitter.png";
import instagram from "../pages/logo instagram.png";



export default function Navbar2() {


  return (
    <nav className="navbar navbar-bottom bg-dark px-4">
      <Link to="/" className="navbar-brand">
      <img src={BKS} width="30" height="40" className="d-inline-block align-top" alt="" ></img>
      </Link>
      <Link to="https://discord.gg/jukrVXxrun" className="navbar-brand">
      <img src={discord} width="40" height="40" className="d-inline-block align-top" alt="" ></img>
      </Link>
      <Link to="https://twitter.com/BACKSTORM_off" className="navbar-brand">
      <img src={twitter} width="40" height="40" className="d-inline-block align-top" alt="" ></img>
      </Link>
      <Link to="https://instagram.com/backstorm_off?igshid=MzRlODBiNWFlZA==" className="navbar-brand">
      <img src={instagram} width="40" height="40" className="d-inline-block align-top" alt="" ></img>
      </Link>
      <div>
      </div>
    </nav>
  )
}
