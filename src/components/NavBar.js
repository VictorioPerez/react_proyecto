import CartWidget from './CartWidget'

function NavBar(props){
    //console.log(props.saludo)
return (
<>
    <header>
        {/* <h3>{props.saludo}</h3> */}
        {
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand mx-2" href="#">Compra Vic</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse px-5" id="navbarNavDropdown">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item ">
                            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li class="nav-item dropdown mx-5">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Catalogo
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Componentes</a></li>
                                <li><a class="dropdown-item" href="#">Perifericos</a></li>
                                <li><a class="dropdown-item" href="#">Combos</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contacto</a>
                        </li>

                    </ul>
                    <CartWidget/>
                </div>
            </div>
        </nav>}
    </header>
</>
)
}

export default NavBar;