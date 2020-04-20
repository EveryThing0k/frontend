import React from 'react';
import { FiLock, FiMail } from "react-icons/fi";
import { Link } from 'react-router-dom';
import './style.css';

export default function FormLogon() {
    return (
        <div className="div1">

            <form>
                <h1>EVERYTHING OK</h1>
                <div className= "input-button">
                    <FiMail size={20} cplor="#0000" />
                    <input type="text" placeholder="EMAIL" />
                </div>
                <div className="input-button">
                    <FiLock size={20} cplor="#0000" />
                    <input type="password" placeholder="SENHA" />
                </div>
                <div>
                    <button className="button" type="submit">LOGIN</button>
                </div>

                <div className="texto-conta">
                    <span>Não possui uma conta? </span>
                    <Link className="back-link" to="/singin">
                        Criar Conta
                    </Link>
                </div>
            </form>
        </div>
    );
}
