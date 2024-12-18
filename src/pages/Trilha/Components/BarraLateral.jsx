import React from "react";
import { Link } from "react-router-dom";
import "./BarraLateral.css";
import { MdHomeFilled } from "react-icons/md";
import { FaBookBookmark, FaUser } from "react-icons/fa6";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";

const BarraLateral = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <img
          src="https://tse3.mm.bing.net/th?id=OIG3.8bdhoM3_FeuT_BMrXRcm&pid=ImgGn"
          alt="Foto do Usuário"
          className="profile-picture"
        />
        <div className="profile-info">
        <h3>Lucas Oliveira</h3>
        <p>Nível: 5</p>
        <p>XP: 1200 / 1500</p>
      </div>
      </div>
      <ul className="menu">
        <li>
          <Link to="/Trilha/" className="menu-link">
          <i ClassName="icon"><MdHomeFilled /></i>Home
          </Link>
        </li>
        <li>
          <Link to="/trilha/aprender" className="menu-link">
          <i className="icon"><FaBookBookmark /></i> Aprender
          </Link>
        </li>
        <li>
          <Link to="/trilha/Dicas" className="menu-link">
            <i className="icon"><RiLightbulbFlashFill /></i> Leva Dica
          </Link>
        </li>
        <li>
          <i className="icon"><FaUser /></i> Perfil
        </li>
        <li>
          <i className="icon"><BsThreeDots /></i> Outros
        </li>
      </ul>
    </div>
  );
};

export default BarraLateral;
