import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Menu from './components/Menu';
import Nav from './components/Nav';

export default function App(){
  return(
    <>
      <Nav />
      <Main />
      <Menu />
      <Footer />
    </>
  );
}