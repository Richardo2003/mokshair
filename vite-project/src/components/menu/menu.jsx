const Menu = () => {
  
    return (
      <>
    <div className="col-md-8 ms-sm-auto col-lg-9 p-0">
        <nav id="sidebarMenu" className="col-md-4 col-lg-3 d-md-block sidebar collapse p-0">
  <div className="position-sticky sidebar-sticky d-flex flex-column justify-content-center align-items-center">
    <a className="navbar-brand" href="index.html">
      <img src="images/barber-logo.png" className="logo-image img-fluid" align />
    </a>
    <ul className="nav flex-column">
      <li className="nav-item">
        <a className="nav-link click-scroll" href="#section_1">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link click-scroll" href="#section_2">Our Story</a>
      </li>
      <li className="nav-item">
        <a className="nav-link click-scroll" href="#section_3">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link click-scroll" href="#section_4">Price List</a>
      </li>
      <li className="nav-item">
        <a className="nav-link click-scroll" href="#section_5">Contact</a>
      </li>
    </ul>
  </div>
        </nav>
    </div>
      </>
    )
  }
  
  export default Menu
  