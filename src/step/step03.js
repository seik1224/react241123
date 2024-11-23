import React from 'react'
import { Link } from 'react-router-dom'

const Step03 = () => {
  return (
    <>
        {/* 네비게이션 메뉴 */}
        <div className='bg-gray-200 p-4'>LOGO</div>
        <nav>
            <ul className='flex gap-4 bg-red-200 p-4'>
                <li>
                    <Link to="/">홈</Link>
                </li>
                <li>
                    <Link to="/about">소개</Link>
                </li>
                <li>
                    <Link to="/contact">연락처</Link>
                </li>
            </ul>
        </nav>

        <div className='bg-slate-200 p-4'>공통으로 보이는 영역</div>

        {/* 푸터 영역 */}
        <div className='bg-gray-800 p-4 text-white'>FOOTER</div>
    </>
  )
}

export default Step03