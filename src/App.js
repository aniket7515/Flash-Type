
import './App.css';
import Nav from './componenets/Nav/Nav';
import Landing from './componenets/Landing/Landing'
import Footer from './componenets/Footer/Footer';
import ChallengeSection from './componenets/Challenge/ChallengeSection';
function App() {
  return (
    <div className="App">
      {/* Nav Bar    */}
      <Nav/>

      {/* Landing Page     */}
      <Landing/>

      {/* Challenge section   */}
      <ChallengeSection/>

      {/* Footer  */}
      <Footer/>


    </div>
  );
}

export default App;
