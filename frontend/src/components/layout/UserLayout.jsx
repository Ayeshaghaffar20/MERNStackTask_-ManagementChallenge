import React from 'react'
import Header from '../common/Header'

import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div>
        {/* header section  */}
        <Header/>

        {/*Main Content*/}
        <main>
          <Outlet/>
        </main>
       
       


    </div>
  )
}

export default UserLayout
