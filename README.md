## tailwindCSS

https://tailwindcss.com/docs/guides/create-react-app

2번부터 따라해야함

---

## 1. clsx

설치 :: npm i clsx

- 조건에 따라 여러 클래스를 추가할 수 있는 라이브러리
- 조건이 많아질 때 가독성이 좋음

---

## 2. Swiper

설치 :: npm i swiper
https://swiperjs.com/demos

---

## 3. react-router-dom

설치 :: npm i react-router-dom

- 새로고침 없이 페이지 이동하는 라이브러리

1. 꼭 index.js에 BrowserRouter 작성
    <BrowserRouter>

2. 라우팅 설정은 App.js에 작성
    <Routes>안에 라우트 작성

3. 라우트 태그 사용
    <Route path="/" element={<Home />}>

4. Link 태그 사용
    <Link to="/">Home</Link>

---

## 3-1. useParams

- URL 파라미터 추출

1. 라우트 설정에서 파라미터 추출
    <Route path="/users/:id" element={<UserDetail />}>

2. 컴포넌트에서 파라미터 추출
    const { id } = useParams();