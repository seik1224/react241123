import React, { useState } from 'react'
import { Route, Routes, useParams } from 'react-router-dom';

const UserDetail = () => {
    const { id } = useParams(); // URL파라미터에서 id 값 추출

    return <h2>마이페이지 - 사용자ID : {id}</h2>
}

const Step04 = () => {
    const [userId, setUserId] = useState([1, 2, 3]);
  return (
    <>
        <nav>
            <ul className='flex gap-4 bg-red-200 p-4'>
                {}
            </ul>
        </nav>
        <div className='bg-slate-200 p-4'>공통영역</div>
        <Routes>
            <Route path='/users/:id' element={<UserDetail />} />
        </Routes>
    </>
  )
}

export default Step04