import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom';

import { AiOutlinePieChart } from 'react-icons/ai'
import { BsFolderSymlink } from 'react-icons/bs'
import { BsChatDots } from 'react-icons/bs'
import { GiComputerFan } from 'react-icons/gi'
import { BiLogInCircle } from 'react-icons/bi'

const Sidebar = () => {
  return (
    <div className='sideBar'>

      <div className="menu">
        <ul className="navItem">

          <li className="navList">
            <AiOutlinePieChart className="icon" />
            <Link to="/" className='link-t'>Início</Link>
          </li>

          <li className="navList">
            <GiComputerFan className="icon" />
            <Link to="/sendvideo" className='link-t'>Upload</Link>
          </li>

          <li className="navList">
            <BsFolderSymlink className="icon" />
            <Link to="/videoresult" className='link-t'>Detecção</Link>
          </li>

          <li className="navList">
            <BsChatDots className="icon" />
            <Link to="/feedback" className='link-t'>Feedback</Link>
          </li>

          <li className='navList'>
            <BiLogInCircle className='icon' />
            <Link to="/register" className='link-t'>Cadastro</Link>      
          </li>

        </ul>
      </div>

    </div>
  )
}

export default Sidebar;
