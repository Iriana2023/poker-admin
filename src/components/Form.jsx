import { useState } from "react"
import { FaTimes } from 'react-icons/fa'
import {motion, AnimatePresence} from 'framer-motion'

function Form({handleAddCave, handleCloseAdd}) {

    const [nameForm, setNameForm] = useState('')
    const [valueCave, setValueCave] = useState()

    
    const validateName = (e) => {
        setNameForm(e.target.value)        
    }

    const validateValue = (e) => {
        setValueCave(e.target.value)  
    }

  return (
    <AnimatePresence>
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
        >
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
        </motion.div>
    </AnimatePresence>
  )
}

export default Form