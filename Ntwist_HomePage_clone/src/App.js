import './App.css';
import Leftside from "./Components/Leftside/Leftside";
import Navbar from './Components/Navbar/Navbar';
import Rightside from "./Components/Rightside/Rightside";
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
    <Navbar 
    l1="Home"
    l2="Industries"
    l3="AI Softwares"
    l4="Blog"
    l5="Contact Us"/>
    <Home
    homeTitleOne="Data-powered solutions"
    homeTitleTwo="for Industrial Excellence"
    homeLink="Read More"
    href="#"
    
    />
    <Rightside 
     imgSrcRight="https://ntwist.com/wp-content/uploads/2023/01/iStock-1339284457-scaled.jpg"
     imgAltRight="mine image"
     headingRight="Mine-To-Mill-To-Mine Optimization"
     paragraphRight="NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies, and correct resource models and production plans."
     linkRight="Read More"
     href="##"
/>

   <Leftside 
    imgSrcLeft="https://ntwist.com/wp-content/uploads/2021/12/iStock-1284372575.jpg "
    imgAltLeft="sustainability image"
    headingLeft="Sustainability"
    paragraphLeft={
  <>
    Environmental stewardship is a priority for NTWIST. We help our customers to minimize their sustainability impact on the planet. Emissions or environmental targets are used alongside productivity targets to define success for our customers.
    <br />
    <br />
    With the increasing relevance of carbon accounting and emissions tracking, NTWIST offers a suite of tools to increase visibility into environmental performance and help processing plants track, manage, optimize, and report key metrics.
  </>
}
linkLeft="Read More"
href="##"
/>
<Rightside 
     imgSrcRight="https://ntwist.com/wp-content/uploads/2021/12/iStock-1322302283.jpg"
     imgAltRight="Mineral processing image"
     headingRight="Mineral Processing"
     paragraphRight="NTWIST offers a number of solutions for mills, concentrators, and leach plants. Our solutions help operations to reduce the effect of feed variability, avoid downtime and increase peak throughput while decreasing energy and reagent consumption."
     linkRight="Read More"
     href="##"
/>
<Leftside 
    imgSrcLeft="https://ntwist.com/wp-content/uploads/2022/03/2021-02-oil-and-gas-digital-hero-e1648984580884.png"
    imgAltLeft="oil & gas image"
    headingLeft="Oil & Gas"
    paragraphLeft={
  <>
    Oil and Gas plants require a high level of control and robustness in their operation due to the high risks to people and environment. 
    <br />
    <br />
    NTWIST helps Oil & Gas customers to analyze historical data, identify opportunities for process control improvements, and reduce variability in any part of the process, thus providing enhanced reliability and safety.
  </>
}
linkLeft="Read More"
href="##"
/>
<Footer 
/>
  </div>

  );
}

export default App;