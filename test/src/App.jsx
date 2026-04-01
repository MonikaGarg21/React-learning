import NetflixSeries from './NetflixSeries.jsx';
import Props from './Props.jsx'
import GrandChild, {Child, Parent} from './components/Child.jsx'
import "./components/Netflix.css";



function App(){
  return(
    <section className = "container">
    {/* <Props name="Monika" age={25} isStudent={true} area="British" /> */}
    {/* <Props name="Komal" age={24} isStudent={true} area="Canadian" />
    <Props name="Reet" age={26} isStudent={true} area="Indian" />
    <Props name="Preet" age={30} isStudent={false} area="Indian"/> */}
    {/* <Parent/> */}
    {/* <Child /> */}
    {/* <GrandChild/> */}
    <h1 className = "card-heading">List Of Best Netflix Series</h1>
    <hr/>
    <NetflixSeries/>
    
    </section>
  );

}

export default App
