
import './App.css'
import Header from "./components/Header/Header.jsx";
import Inicio from "./components/Inicio/Inicio.jsx";
import Evento from "./components/Evento/Evento.jsx";
import Palestrante from "./components/Palestrantes/palestrantes.jsx"
import Oficinas from './components/Oficinaas/oficinas.jsx';
import Cronograma from './components/Cronograma/conograma.jsx';
import Inscricoes from './components/Inscricoes/inscricoes.jsx';
import Footer from './components/Footer/footer.jsx';
function App() {
 

  return (
    <main className='mainContainer'>
        <Header />
        <Inicio />
        <Evento />
        <Palestrante />
        <Oficinas /> 
        <Cronograma />
        <Inscricoes />
        <Footer />

    </main>
    )
}

export default App
