import QuestionBox from './components/questionBox/QuestionBox'


// 기능은 대부분 해당 유저의 seq 값으로 움직이도록 설계
const SSRJSON = [
{ 
  seqComponent: "Q",
  head: 
  {
    profile:"/test_source/10010006.png", locale:"KOR", thankAlmoney:"100", uLv:"1", nick: "똑똑똑", title: "지방간에 좋은 음식은 어떤 음식이 있을까요",
    persent:"100", date:"2021-03-22 10:23:47 UTC+9", readCount: "8", 
  },
  contents: "지방간에 좋은 음식은 어떤 음식이 있을까요",
  
  replys: {
    
  },

},
]

// 바디 클릭시 팝업되어 있던 모든 특정 스타일(시간, 팝업 등)이 지워지도록 작용.

function App() {
  return (
    <div className="App">
      <QuestionBox></QuestionBox>
    </div>
  );
}

export default App;
