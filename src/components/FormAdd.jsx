import {FaTimes} from 'react-icons/fa'
import {motion, AnimatePresence} from 'framer-motion'


function FormAdd({handleCaveAdd, handleClose}) {
  return (
    <AnimatePresence>
      <motion.form 
      className="py-5" onSubmit={(e) => handleCaveAdd(e)}
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      transition={{delay:.75}}
      >
          
          <div className="form-group">
              <label htmlFor="pwd">Combien?</label>
              <input type="number" name="caveAjout" className="form-control" placeholder="Entrer la valeur du cave > 1000Ar" id="cave" />
          </div>
          
          <button type="submit" className="btn btn-success mr-3">Ajouter</button>
          <button type="button" className="btn btn-danger" onClick={handleClose}><FaTimes /> Fermer</button>
      </motion.form>
    </AnimatePresence>
  )
}

export default FormAdd