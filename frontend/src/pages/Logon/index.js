import React from 'react';
import { FiLogIn } from 'react-icons/fi'

import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon(){
    const title = 'title here!';
    return(
        <div className="logon-container">
            <section className="form">
              <img src={logoImg}/>

              <form>
                 <h1>Faça seu logon</h1>
                  <input placeholder="Sua ID"/>
                  <button className="button" type="submit">Entrar</button>
                  <a href="/register">
                      <FiLogIn size={16} color="#E02041" />
                      Não tenho cadastro
                  </a>
               </form>
            </section>
            
            <img src={heroesImg}/>
        </div>
    );
}