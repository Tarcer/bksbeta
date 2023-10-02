import React from 'react';
import {Link} from "react-router-dom";
import BKS from "../pages/Private/PrivateHome/logo-negative.png";
import discord from "../pages/logo discord.png";
import twitter from "../pages/logo twitter.png";
import instagram from "../pages/logo instagram.png";



export default function Navbar2() {


  return (
    <nav className="navbar navbar-bottom bg-dark px-4">
    <Link to="/" className="navbar-brand align-self-start">
        <img src={BKS} width="150" height="40" className="d-inline-block align-top" alt="" ></img>
    </Link>
    
    <div className='col-md-6'>
        <div className="d-flex justify-content-between mb-3">
           <div className='mb-2 text-white' style={{textDecoration: 'underline'}}>Suivez-nous:  </div>
            <Link to="https://discord.gg/jukrVXxrun" className="navbar-brand ">
                <img src={discord} width="20" height="20" className="d-inline-block align-top" alt="" ></img>
            </Link>
            <Link to="https://twitter.com/BACKSTORM_off" className="navbar-brand ">
                <img src={twitter} width="20" height="20" className="d-inline-block align-top" alt="" ></img>
            </Link>
            <Link to="https://instagram.com/backstorm_off?igshid=MzRlODBiNWFlZA==" className="navbar-brand ">
                <img src={instagram} width="20" height="20" className="d-inline-block align-top" alt="" ></img>
            </Link>
        </div>
        
        <div className='col-md-12'>
            <p className='h10 span'>
            Backstorm est une plateforme autorisée et régulée en tant que Prestataire de Services d'Investissement (auprès de l'ACPR - N° 17183) et Prestataire de Services sur Actifs Numériques (auprès de l'AMF - N°E2023-071).

Aucune information sur ce site web ne doit être interprétée comme une recommandation ou un conseil en investissement. En cas de doutes, nous vous encourageons à contacter un conseiller. Tout investissement présente un risque de perte en capital.

Backstorm met à disposition les services de Contrat CAR, une technologie développé par leurs soins.
            </p>
        </div>
    </div>
</nav>

  )
}
