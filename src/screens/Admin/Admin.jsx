import { AdminContext } from './Context'
import {  useState } from 'react'
import Auth from './Auth'

function Admin() {
    
    const [adminData, setAdminData] = useState({ appointments: [], currentAuth: {}, newAuth: {} })

    return (
        <AdminContext.Provider value={{ adminData: adminData, setAppData: setAdminData }} >
            <Auth setAdminData={setAdminData} />
        </AdminContext.Provider>
    )
}

export default Admin

