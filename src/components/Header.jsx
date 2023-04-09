function Header() {
  return (
    <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
      <div className="navbar-brand col-sm-3 col-md-2 mr-0" >Daddy tools</div>
      <input className="form-control form-control-dark w-100" type="text" placeholder="Recherche" aria-label="Search" />
      <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap">
          <div className="nav-link">Sign out</div>
        </li>
      </ul>
    </nav>
  )
}


export default Header