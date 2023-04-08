import {FaUserPlus} from 'react-icons/fa'

function MainHeader({items, handleAddPlayers}) {


    let sumCave = items.reduce((acc, obj) => {
        const cave = parseInt(obj.cave) || 0;
        const retrait = parseInt(obj.retrait) || 0;
        const remboursement = parseInt(obj.remboursement) || 0;
        return acc + cave - retrait + remboursement;
    }, 0);


  return (
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 className="h2">Tableau de bord</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group mr-2">

            <button type="button" className="btn btn-warning">
                Prize pool <span className="badge badge-light">{parseInt(sumCave)} Ar</span>
            </button>
            <button type="button" className="btn btn-success">
                Nombre de joueurs <span className="badge badge-light">{items.filter(item=>item.inGames).length}</span>
            </button>

            </div>
            <button className="btn btn-sm btn-outline-secondary" onClick={handleAddPlayers}>
                <FaUserPlus /> Nouveau joueur
            </button>
        </div>
    </div>
  )
}

export default MainHeader