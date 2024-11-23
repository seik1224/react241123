import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

// 간단한 페이지
const Home = () => <h2>홈</h2>;
const About = () => <h2>소개 페이지</h2>;
const Contact = () => <h2>연락처 페이지</h2>;

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

        {/* 라우트 설정 : 페이지가 보이는 영역 */}
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>

        {/* 푸터 영역 */}
        <div className='bg-gray-800 p-4 text-white'>FOOTER</div>
    </>
  )
}

export default Step03