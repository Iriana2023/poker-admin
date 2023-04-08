import { useState } from "react"
import { FaTimes } from 'react-icons/fa'

function Form({handleAddCave, handleCloseAdd}) {

    const [nameForm, setNameForm] = useState('')
    const [valueCave, setValueCave] = useState(0)

    
    const validateName = (e) => {
        setNameForm(e.target.value)        
    }

    const validateValue = (e) => {
        setValueCave(e.target.value)  
    }

  return (
    <form className="py-5" onSubmit={(e) => handleAddCave(e)}>
        <div className="form-group">
            <label htmlFor="email">Nom:</label>
            <input type="text" value={nameForm} name="nameForm" className="form-control" placeholder="JoueurX...." id="name" onChange={validateName}/>
        </div>
        <div className="form-group">
            <label htmlFor="pwd">Cave:</label>
            <input type="number" value={valueCave} name="valueCave" className="form-control" placeholder="Entrer la valeur du cave > 1000Ar" id="cave" onChange={validateValue}/>
        </div>
        
        <button type="submit" className="btn btn-success mr-3">Ajouter</button>
        <button type="button" className="btn btn-danger" onClick={handleCloseAdd}><FaTimes /> Fermer</button>
    </form>
  )
}

export default Form