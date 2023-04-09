import {motion, AnimatePresence} from 'framer-motion'


function ModalForm({currentPlayers, handleCloseModal, handleDecave}) {


    //console.log(currentPlayers)
  return (
    <AnimatePresence>
      <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
      >
        <form className="modal-form" onSubmit={(e) => handleDecave(e)}>
            <h3 className="text-white">Retrait de <strong>{currentPlayers.name}</strong></h3>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="text-white">Montant decave(Ar)</label>
            <input type="Number" className="form-control" name="decave" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="0" />
        </div>
      
        <button type="submit" className="btn btn-primary mr-3">Retirer ?</button>
        <button type="button" className="btn btn-danger" onClick={(e) => handleCloseModal(e)}>Fermer</button>
        </form>
      </motion.div>
    </AnimatePresence>
  )
}

export default ModalForm