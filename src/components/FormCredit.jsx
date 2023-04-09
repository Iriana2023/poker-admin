import {FaTimes} from 'react-icons/fa'
import { useState } from 'react'


function FormCredit({handleCloseCredit, handleCredit}) {

    const [methode, setMethode] = useState(false)
    const handleRemboursement = () => {
        setMethode(true)
    }
    const handleRetrait = () => {
        setMethode(false)
    }

  return (
    <form className="py-5" onSubmit={(e) => handleCredit(e)}>
        <h2>Credit</h2>
        <div className="form-group">

            <div className="form-check">
                <input className="form-check-input" type="radio" onChange={handleRetrait} name="creditChoice" id="flexRadioDefault1" value='retrait' />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Retrait
                </label>
                </div>
                <div className="form-check">
                <input className="form-check-input" type="radio" onChange={handleRemboursement} name="creditChoice" id="flexRadioDefault2" value='remboursement' />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Remboursement
                </label>

                {methode && 
                    (<><h3 className='mt-4'>Veuillez choisir la méthode de remboursement :</h3>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="methoder" id="m1" value='espece' />
                        <label className="form-check-label" htmlFor="m1">
                            Espèce
                        </label>
                    </div>
                    <div className="form-check mb-4">
                        <input className="form-check-input" type="radio" name="methoder" id="m2" value='jeton' />
                        <label className="form-check-label" htmlFor="m2">
                            Jetons
                        </label>
                    </div></>)
                }
                
            </div>

            <label htmlFor="pwd">Entrez la valeur</label>
            <input type="number" name="cdt" className="form-control" placeholder="Valeur du retrait en Ar" id="cave" />
        </div>
        
        <button type="submit" className="btn btn-success mr-3">Retirer </button>
        <button type="button" className="btn btn-danger" onClick={handleCloseCredit}><FaTimes /> Fermer</button>
    </form>
  )
}

export default FormCredit