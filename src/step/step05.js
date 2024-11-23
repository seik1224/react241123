import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { counterState, textState } from '../store'

const Step05 = () => {
    const [count, setCount] = useRecoilState(counterState);

    const text = useRecoilValue(textState);
  return (
    <>
        <h2>카운트 : {count}</h2>
        <button onClick={()=>setCount(count + 1)}>증가</button>
        <button onClick={()=>setCount(count - 1)}>감소</button>
        <p>텍스트 : {text}</p>
    </>
  )
}

export default Step05