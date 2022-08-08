import Mole from './Mole'
import EmptySlot from './EmptySlot'




function MoleContainer(props) {
    let [displayMole, setDisplayMole] = usesState(false)
    function handleClick(e){
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