import ButtonGradient from "./assets/svg/ButtonGradient"
import Benefits from "./component/Benefits"
import Button from "./component/Button"
import Collaboration from "./component/Collaboration"
import Header from "./component/Header"
import Hero from "./component/Hero"
function App() {
 

  return (
    <>
      
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header/>
        <Hero/>
        <Benefits/>
        <Collaboration/>
      </div>
      <ButtonGradient/>
    </>
  )
}

export default App
