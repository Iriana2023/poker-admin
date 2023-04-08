import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainHeader from './components/MainHeader';
import Users from './data/UserData';
import TableListe from './components/TableListe';
import { useState } from 'react';
import Form from './components/Form';
import FormAdd from './components/FormAdd';
import ModalForm from './components/ModalForm';
import FormRetrait from './components/FormRetrait';
import FormCredit from './components/FormCredit';



function App() {


   const [players, setPlayers] = useState(Users)
   const [add, setAdd] = useState(false)
   const [addAmount, setAddAmount] = useState(false)
   const [currentPlayers, setCurrentPlayers] = useState('')
   const [addCaveValue, setAddCaveValue] = useState(0)
   const [inRemoved, setInRemoved] = useState(false)
   const [withdrawed, setWithdrawed] = useState(false)
   const [credited, setCredited] = useState(false)
 

   const removePlayers = (id) => {

    setInRemoved(true)
    let cust = players.find((el) => el.id === id)
    setCurrentPlayers(cust)
      /* let retrait = 0
      const newUsers = [...players]
      let cust = newUsers.find((el) => el.id === id)
      cust.inGames = false
      
      setPlayers(newUsers) */

   }

    const decave = (e) => {
      e.preventDefault()
      const newStatePlayers = [...players]
      let cust = newStatePlayers.find(el=>el.id === currentPlayers.id)
      cust.retrait = isNaN(parseInt(e.target.decave.value)) ? 0 : parseInt(e.target.decave.value)+parseInt(cust.retrait)
      cust.inGames = false
      setPlayers(newStatePlayers)
      setInRemoved(false)
      //console.log(players) 
    }

   const closeFormModal = (e) => {
    e.preventDefault()
    setInRemoved(false)
   }

   const addCave = (id) => {

    const newUsers = [...players]
    let cust = newUsers.find((el) => el.id === id)
    setCurrentPlayers(cust)
    setAddAmount(true)
    setPlayers(newUsers)
   }

  
   const addNew = () => {
    setAdd(true)
   }
   
   const addValueCave = (e) => {
    e.preventDefault()    
    
    const elPlayers = {
      id: players.length + 1,
      name: e.target.nameForm.value,
      cave: parseInt(e.target.valueCave.value),
      retrait: 0,
      credit: 0,
      inGames: true
    } 

    
    const newUsers = [...players, ...[elPlayers]]

    setAdd(false)
    setPlayers(newUsers)
    //console.log(players)

   }

   const closeForm = () => {
    setAddAmount(false)
   }

   const closeFormAdd = () => {
    setAdd(false)
   }

   const addInGames = (e) => {
    e.preventDefault()
    //console.log(currentPlayers)
    setAddCaveValue(e.target.caveAjout.value)
    const currentModify = [...players]
    let toModify = currentModify.find(el=>el.id === currentPlayers.id)
    toModify.cave = parseInt(e.target.caveAjout.value) + parseInt(toModify.cave)
    setPlayers(currentModify)
    setAddAmount(false)
   }

   const retraitCave = (id) => {
    console.log(id)
    let duplicateData = [...players]
    let curr = duplicateData.find(el=>el.id === id)
    setCurrentPlayers(curr)
    setWithdrawed(true)
    console.log(curr)
   }

   const closeWithdraw = () => {
    setWithdrawed(false)
   }

   const withdraw = (e) => {
    e.preventDefault()
    const newUsers = [...players]
    let cust = newUsers.find(el=>el.id === currentPlayers.id)
    cust.retrait = parseInt(e.target.withdraw.value) + parseInt(cust.retrait)
    setPlayers(newUsers)
    setWithdrawed(false)
   }

   const doCredit = (id) => {
    let duplicateData = [...players]
    let curr = duplicateData.find(el=>el.id === id)
    setCurrentPlayers(curr)
    setCredited(true)
   }

   const closeCredit = () => {
    setCredited(false)
   }

   const credit = (e) => {
    e.preventDefault()
    //console.log(e.target.creditChoice.value + ' ' +e.target.cdt.value)
    const newStatePlayers = [...players]
    let cust = newStatePlayers.find(el => el.id === currentPlayers.id)

    if(e.target.creditChoice.value === 'retrait'){

      cust.credit = parseInt(e.target.cdt.value) + parseInt(cust.credit)
      setCredited(false)

    }else if(e.target.creditChoice.value === 'remboursement'){

      cust.credit = parseInt(cust.credit) - parseInt(e.target.cdt.value)
      cust.remboursement = parseInt(e.target.cdt.value) + parseInt(cust.remboursement)
      setCredited(false)

    } 
    setPlayers(newStatePlayers)

   }

  return (
    <>
      {inRemoved && (<div className='overlay'></div>)}
      <Header />
      <div className='container-fluid'>
        <div className='row'>
            <Sidebar />
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
              <MainHeader items={players} handleAddPlayers={addNew}/>

              {inRemoved && (<ModalForm currentPlayers={currentPlayers} handleCloseModal={closeFormModal} handleDecave={decave}/>)}

              {withdrawed && (<FormRetrait handleCloseWithDraw={closeWithdraw} handleWithdraw={withdraw} withdrawFor={currentPlayers.name}/>)}

              {add && (<Form handleAddCave={addValueCave} handleCloseAdd={closeFormAdd}/>)}

              {addAmount && (<><h2>Ajout pour {currentPlayers.name}</h2><FormAdd handleCaveAdd={addInGames} handleClose={closeForm}/></>)}

              {credited && (<FormCredit handleCloseCredit={closeCredit} handleCredit={credit}/>)}
              

              <h2>Liste</h2>
              <TableListe items={players} handleRemove={removePlayers} handleAdd={addCave} handleRetrait={retraitCave} handleCredit={doCredit}/>
            </main>

        </div>
      </div>  
    </>
  );
}



export default App;
