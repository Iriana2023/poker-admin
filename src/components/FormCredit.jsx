import {FaTimes} from 'react-icons/fa'


function FormCredit({handleCloseCredit, handleCredit}) {
  return (
    <form className="py-5" onSubmit={(e) => handleCredit(e)}>
        <h2>Credit</h2>
        <div className="form-group">

            <div className="form-check">
                <input className="form-check-input" type="radio" name="creditChoice" id="flexRadioDefault1" value='retrait' />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Retrait
                </label>
                </div>
                <div className="form-check">
                <input className="form-check-input" type="radio" name="creditChoice" id="flexRadioDefault2" value='remboursement' />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Remboursement
                </label>
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