import "./header.css";

const Header = ()=>{
    return <>
        <header>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6 col-md-6">
                <nav class="navbar navbar-expand-xl navbar-light">
                    <div class="container-fluid">
                        <a href="#" class="navbar-brand"><h4 style={{color:"white"}}>Grocito</h4></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav mx-auto">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Dairy</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Beverages</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Condiments
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a class="dropdown-item" href="#">Personal Care</a></li>
                                        <li><a class="dropdown-item" href="#">Cleaners</a></li>
                                        <li><a class="dropdown-item" href="#">Others</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <div class="col-lg-4 col-md-3">
                <div class="header-search mt-2">
                    <div class="search-form">
                        <form method="get">
                            <div class="input-group">
                                <div class="select-style">
                                    <select name="order">
                                        <option class="topshow" value="1">All</option>
                                        <option value="a">Dairy</option>
                                        <option value="b">Breverages</option>
                                        <option value="c">Condiments</option>
                                        <option value="d">Personal Care</option>
                                        <option value="e">Cleaners</option>
                                        <option value="f">Others</option>
                                    </select>
                                </div>
                                <input type="text" name="search" id="search" class="form-control" placeholder="Search Here" />
                                <div class="input-group-addon">
                                    <button type="submit"><i class="fas fa-search"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="col-lg-2 col-md-3 cart-login">
                <div class="float-end cart mt-2">
                    <a href="#">
                        {/* <span class="number">10</span> */}
                        <img class="img-fluid" src=""/>
                        {/* <span>Cart</span> */}
                    </a>
                </div>

                <div class="float-end">
    <button type="button" class="btn btn-light mt-2 btn-sm">Sign-In</button>
    <button type="button" class="btn btn-light mt-2 btn-sm ms-2">Login</button>
</div>

                
              
            </div>

            <div class="col-12 mt-sm-2 mt-lg-0">
                <div class="store-location p-0 text-end">
                    <div class="form-check-inline">
                        <input type="radio" id="test1" name="radio-group" data-toggle="modal" data-target=".bd-example-modal-lg" />
                        <label for="test1">Choose a Store</label>
                    </div>

                    <div class="form-check-inline">
                        <h6 style={{color:"white"}}>or</h6>
                    </div>

                    <div class="form-check-inline">
                        <input type="radio" id="test2" name="radio-group" data-toggle="modal" data-target=".bd-example-modal-lg1" />
                        <label for="test2">Show Local Availblity</label>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="sidebar">
       
      </div>
</header>
    </>
}

export default Header;