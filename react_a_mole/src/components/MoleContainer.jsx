import Mole from './Mole'
import EmptySlot from './EmptySlot'
import {useState} from 'react'




function MoleContainer(props) {
    let [displayMole, setDisplayMole] = useState(false)
    function handleClick(){
        props.setScore(props.score +1)
        setDisplayMole(false)
    }

    let showMole = displayMole? <Mole setScore={props.setScore} toggle={setDisplayMole} handleClick={handleClick}/> : <EmptySlot toggle={setDisplayMole}/>
    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {showMole}
        </div>
    )
  }

  export default MoleContainer