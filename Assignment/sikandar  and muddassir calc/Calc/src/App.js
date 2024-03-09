import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Content from './component/Content';
import Footer from './component/Footer';
import './css/style.css';
import profileImage from './images/profile.jpg';
import logoImage from './images/logo.png';
import LeftSidePanel from './component/LeftSidePanel';
import Calculator from './component/Calculator';



function App() {
  return (
  <div className="app-container">
  <Header logo={logoImage} profile={profileImage} />
  <div className="content-container">
    <Calculator/>
    <LeftSidePanel />
    <Content />

  </div>
  <Footer className="footer"/>
</div>
  );
}

export default App;
