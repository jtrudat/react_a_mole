import MoleContainer from './components/MoleContainer'
import {useState} from 'react'

let [score, setScore] = useState(0)

function App() {
  function createMoleHill(){
    let hills = []
    for(let index = 0; index<9; index+=1){
        hills.push(
          <MoleContainer key={i} setScore={setScore} score={score}/>
        )
    }
}
  
  return (
    <div>
      {hills}
    </div>
  )
  return(
    <div>
      <h1>React-a-mole</h1>
      {score}
      {createMoleHill()}
    </div>
  )
}

export default App;
