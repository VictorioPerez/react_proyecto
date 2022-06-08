import NavBar from "./components/NavBar";  
import ItemListContainer from "./components/ItemListContainer";
function App(){
    return(
    <> 
        <NavBar saludo = "hola"></NavBar>{/* Header */}
        <ItemListContainer greeting={'Prueba item list'}/> 
        <h4>Hola mundo con JSX UWU</h4>
        <p>Prueba</p>
    </>
        )
  } 

  //export default variable == solo se puede exportar 1 vez
  //export variable == se puede exportar cuantas veces quieras
  export default App;