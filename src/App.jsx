import Header from "./components/Header";
import Crousle from "./components/Crousle";
import Service from "./components/Service";
import Contect from "./components/Contect";
import Footer from "./components/Footer";


function App() {
  return (
    <>

    <Header/>

    <Crousle/>  
  <div className="container">
<div className="text-center mt-5 mb-5">
      <h1>Service</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse cupiditate consequatur aliquid deleniti quod similique?</p>
    </div>
  <div className="row">
    <div className="col">
      <Service/>
    </div>
    <div className="col">
      <Service/>
    </div>
    <div className="col">
      <Service/>
    </div>
  </div>
</div>
   
<div className="text-center mt-5 mb-5">
<h1>Contact</h1>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae incidunt aliquam omnis dignissimos minima velit?</p>
</div>

<Contect/>

<Footer/>


    </>
  )
}

export default App
