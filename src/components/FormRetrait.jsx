import {FaTimes} from 'react-icons/fa'

function FormRetrait({handleCloseWithDraw, withdrawFor, handleWithdraw}) {
  return (
    <form className="py-5" onSubmit={(e) => handleWithdraw(e)}>
        <h2>Retrait de {withdrawFor}</h2>
        <div className="form-group">
            <label htmlFor="pwd">Combien?</label>
            <input type="number" name="withdraw" className="form-control" placeholder="Valeur du retrait en Ar" id="cave" />
        </div>
        
        <button type="submit" className="btn btn-success mr-3">Retirer </button>
        <button type="button" className="btn btn-danger" onClick={handleCloseWithDraw}><FaTimes /> Fermer</button>
    </form>
  )
}

export default FormRetrait