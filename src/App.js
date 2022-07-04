import React from 'react'
import './App.css'
import {Header} from './components/Header.js'
import {Balace} from './components/Balace.js'
import {EncomeExpensis} from './components/EncomeExpensis.js'
import {TrasactionList} from './components/TrasactionList.js'
import {AddTransaction} from './components/AddTransaction.js'

import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
    <Header />
    <div className='container'>
      <Balace/>
      <EncomeExpensis />
      <TrasactionList />
      <AddTransaction />
    </div>
    </GlobalProvider>
  )
}

export default App