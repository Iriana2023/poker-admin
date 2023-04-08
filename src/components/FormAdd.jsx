import {FaTimes} from 'react-icons/fa'


function FormAdd({handleCaveAdd, handleClose}) {
  return (
    <form className="py-5" onSubmit={(e) => handleCaveAdd(e)}>
        
        <div className="form-group">
            <label htmlFor="pwd">Combien?</label>
            <input type="number" name="caveAjout" className="form-control" placeholder="Entrer la valeur du cave > 1000Ar" id="cave" />
        </div>
        
        <button type="submit" className="btn btn-success mr-3">Ajouter</button>
        <button type="button" className="btn btn-danger" onClick={handleClose}><FaTimes /> Fermer</button>
    </form>
  )
}

export default FormAdd