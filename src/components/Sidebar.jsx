function Sidebar() {
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <div className="nav-link " >
                  <span ></span>
                  Dashboard <span className="sr-only">(current)</span>
                </div>
              </li>
              <li className="nav-item" >
                <div className="nav-link" >
                  <span ></span>
                  Orders
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" >
                  <span ></span>
                  Products
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" >
                  <span ></span>
                  Customers
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" >
                  <span ></span>
                  Reports
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" >
                  <span ></span>
                  Integrations
                </div>
              </li>
            </ul>

            
           
          </div>
        </nav>
  )
}

export default Sidebar