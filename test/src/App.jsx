import NetflixSeries from './NetflixSeries.jsx';
import Props from './Props.jsx'
import GrandChild, {Child, Parent} from './components/Child.jsx'




function App(){
  return(
    <>
    {/* <Props name="Monika" age={25} isStudent={true} area="British" /> */}
    {/* <Props name="Komal" age={24} isStudent={true} area="Canadian" />
    <Props name="Reet" age={26} isStudent={true} area="Indian" />
    <Props name="Preet" age={30} isStudent={false} area="Indian"/> */}
    {/* <Parent/> */}
    {/* <Child /> */}
    {/* <GrandChild/> */}
    <NetflixSeries/>
    
    </>
  );

}

export default App
