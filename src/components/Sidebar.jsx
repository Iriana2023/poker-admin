function Sidebar() {
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link " href="">
                  <span ></span>
                  Dashboard <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item" >
                <a className="nav-link" href="">
                  <span ></span>
                  Orders
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  <span ></span>
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  <span ></span>
                  Customers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  <span ></span>
                  Reports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span ></span>
                  Integrations
                </a>
              </li>
            </ul>

            
           
          </div>
        </nav>
  )
}

export default Sidebar