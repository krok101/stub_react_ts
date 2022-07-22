import { useDispatch, useSelector } from 'react-redux'
import { setCount } from '../../store/actionCreators'
import { iState } from '../../store/models'

const ClickCount = () => {
  const count = useSelector((state: iState) => state.count)
  const dispatch = useDispatch()
  return (
    <>
      <div>click count = {count}</div>
      <button onClick = {() => dispatch(setCount(count + 1))}>click me</button>
    </>
  )
}

export default ClickCount
