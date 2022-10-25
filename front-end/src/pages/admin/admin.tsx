import React, { FC } from 'react';
import Sidebar from '../../components/admin/sidebar/sidebar';
import TopNavbar from '../../components/admin/navbar/navbar';
import "./admin.scss"
import { Outlet } from 'react-router';


const AdminPage: FC = () => {


  return (
    <>
      <div className='content'>
        <Sidebar></Sidebar>
        <div className='rightSide'>
          <TopNavbar></TopNavbar>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  )
}

export default AdminPage