// import all components
import Message from './Message'
import ListGroup from './components/ListGroup'
import Alert from './components/Alert'
import Button from './components/Button'


function App() {

  const projects = [
          "Text-based-Pokemon-Player-vs-Computer", 
          "Live-Display-",
          "Crop-Prediction", 
          "chopsticksFPGA", 
          "P-Median-Location-Metaheuristics", 
          "HTMLTable-to-CSV"
      ];

  const handleSelectProject = (project: string) => {
    console.log("https://github.com/megiemee/" + project);
  }

  return <>
  <div>
    <Message/>
  </div>
  <div>
    <ListGroup projects = {projects} heading = "Projects" onSelectProject = {handleSelectProject}/>
  </div>
  <div className="d-flex justify-content-center">
    <Button/>
  </div>
  <div>
    <Alert>
        Thank You ¯\_〳 •̀ o •́ 〵_/¯
    </Alert>
  </div>
  </>
}

export default App;