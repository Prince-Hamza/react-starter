import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './screens/Main/Main'
import Stripes from './screens/Stripe/Stripe'
import MeetProfessionals from './screens/Meet/MeetProfessionals'
import Messenger from './screens/Messenger/Messenger'
import "bootstrap/dist/css/bootstrap.min.css"
import { AppContext } from './Context'
import { useContext, useState } from 'react'
import firebase from 'firebase/compat/app'
import { firebaseConfig } from './backend/config'
import { setScheme } from './backend/scheme/scheme'
import Timelines from './screens/Timelines/Timelines'
import Create from './screens/Timelines/Create'
import Community from './screens/Community/Community'
import StripeSubscribe from './screens/StripeSubscribe/StripeSubscription'
import AboutUs from './screens/AboutUs/AboutUs'
import GetSupport from './screens/GetSupport/GetSupport'
import SignUp from './screens/SignUp/SignUp'
import Admin from './screens/Admin/Admin'
import './App.css'

function App() {
  const [appData, setAppData] = useState({ userInfo: {}, groups: [], selectedGroup: {} })

  if (!firebase.apps.length) firebase.initializeApp(firebaseConfig)
  setScheme()

  return (
    <AppContext.Provider value={{ appData: appData, setAppData: setAppData }} >
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/stripe" element={<Stripes />} />
          <Route exact path="/subscription" element={<StripeSubscribe />} />
          <Route exact path="/professionals" element={<MeetProfessionals />} />
          <Route exact path="/messenger" element={<Messenger />} />
          <Route exact path="/community" element={<Community />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/community/:id" element={<Timelines />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/getsupport" element={<GetSupport />} />
          <Route exact path="/contact" element={<SignUp />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App;

