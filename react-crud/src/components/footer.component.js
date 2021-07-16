import React from "react";
import { Link, Switch, Route } from "react-router-dom";

var style = {
    backgroundColor: "#333",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

var phantom = {
  display: 'block',
 /*  padding: '20px',
  height: '60px', */
  width: '100%',
}

function Footer({ children }) {
    return (
        <div >
            <div style={phantom} />
            <div style={style}>
                { children } <p>Pagina para la empresa <a href="https://getbootstrap.com/">Los enripiadores</a>, by <a href="https://cdn.memegenerator.es/imagenes/memes/full/31/39/31392168.jpg">Grupo8</a>.</p>
            </div>
        </div>
    )
}

export default Footer;