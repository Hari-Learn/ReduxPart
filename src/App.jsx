import { useDispatch, useSelector } from "react-redux"
import storeBox from "./store/storeBox"
import { increment,decrement } from "./store/counterSlicer"

function App() {
 
  const reducerKeyObj = useSelector(storeBox => storeBox.reducerKey)
  
  const dispatchAction = useDispatch()
  const handlePlus = ()=>{
    // dispatchAction({type:"PLUS",payload:5})
    dispatchAction(increment(5))
  }
  const handleMinus = ()=>{
    // dispatchAction({type:"MINUS",payload:1})
    dispatchAction(decrement(3))
  }
  return (
    <>

      <h1>Redux + React {"--> "+ reducerKeyObj.current_state} </h1>
      <button onClick={handlePlus}>Plus</button>
      <button onClick={handleMinus}>Minus</button>
    </>
  )
}

export default App
