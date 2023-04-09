function Sidebar() {
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <div className="nav-link " >
                  <span ></span>
                  Salon de jeux <span className="sr-only">(current)</span>
                </div>
              </li>
              <li className="nav-item" >
                <div className="nav-link" >
                  <span ></span>
                  Table 1
                </div>
              </li>
              
            </ul>

            
           
          </div>
        </nav>
  )
}

export default Sidebar