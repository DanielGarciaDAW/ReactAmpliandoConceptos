import './App.css'
import HeaderComponent from './components/HeaderComponent'
import ButtonComponent from './components/ButtonComponent'

function App() {
  return (
    <>
    <HeaderComponent></HeaderComponent>
    <main className="main-content">
      <h2>Hola a todos!</h2>
      <ButtonComponent></ButtonComponent>
    </main>
    </>
  )
}

export default App
