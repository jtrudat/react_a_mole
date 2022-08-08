import { useEffect } from "react"
import MoleHill from '../molehill.png'

function EmptySlot(props){

    useEffect(function() {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(function(){
            props.toggle(true)
        }, randSeconds)
        return function(){
            clearTimeout(timer)}
    })

    return (
        <div>
            <img style={{'width': '30vw'}} src={MoleHill} alt=""/>
        </div>
    )
}

export default EmptySlot