import {FaTimes, FaPlus, FaMinus, FaPiggyBank} from 'react-icons/fa'


function TableListe({items, handleRemove, handleAdd, handleRetrait, handleCredit}) {

    //console.log(items)

  return (
    <div className="table-responsive">
       
        {items.length > 0 ? 
            (<table className="table table-striped table-sm">
            <thead>
                <tr>
                <th>$</th>
                <th>Joueur</th>
                <th>Retrait</th>
                <th>Credit</th>
                <th>Status</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map((item)=>(
                        <tr key={item.id} className={`${!item.inGames && 'table-danger'}`}>
                            <td>{item.cave}</td>
                            <td>{item.name}</td>
                            <td>{item.retrait}</td>
                            <td className={`${parseInt(item.credit) > 0 ? 'text-danger' : 'text-success'}`}>{item.credit}</td>
                            <td>{item.inGames ? 'En Jeux' : 'Hors Jeux'}</td>
                            <td>
                                <button className='btn btn-danger' disabled={!item.inGames} onClick={() => handleRemove(item.id)}>{ <FaTimes /> }</button> 
                                <button className='btn btn-success' disabled={!item.inGames} onClick={() => handleAdd(item.id)}>{ <FaPlus /> }</button> 
                                <button className='btn btn-warning' disabled={!item.inGames} onClick={() => handleRetrait(item.id)}>{ <FaMinus /> }</button> 
                                <button className='btn btn-secondary' disabled={!item.inGames} onClick={() => handleCredit(item.id)}>{ <FaPiggyBank /> }</button> 
                            </td>
                        </tr>
                    ))
                }           
                
            </tbody>
            </table>
            ) : (<h2>Veuillez ajouter du nouveau joueur pour commencer. Merci! </h2>)
        }
        
        
    </div>
  )
}

export default TableListe