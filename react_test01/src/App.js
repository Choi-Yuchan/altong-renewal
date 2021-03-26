import QuestionBox from './components/questionBox/QuestionBox'


// 기능은 대부분 해당 유저의 seq 값으로 움직이도록 설계
const SSRJSON = [
  { 
    seqComponent: "Q",
    seqId: "10010006",
    head: 
    {
      profile:"/test_source/10010006.png", locale:"KOR", thankAlmoney:"100", uLv:"1", nick: "똑똑똑", title: "지방간에 좋은 음식은 어떤 음식이 있을까요",
      persent:"100", date:"2021-03-22 10:23:47 UTC+9", readCount: "8111", 
    },
    contents: "지방에 들어가2312세요",
    replys: [
      { profile: { seqId:"10037135", img: "/test_source/10037135.png",
      locale: "KOR", nick: "커피낙타"}, content:"운동도 도움이 클것 같습니다.", 
      date:"2021-03-22 14:00:38"  },
      { profile: { seqId:"10037135", img: "/test_source/10037135.png",
      locale: "KOR", nick: "커피낙타"}, content:"운동도 도움이 클것 같습니다.", 
      date:"2021-03-22 14:00:38"  },

    ],
    almoney:"3,000"
  },
  { 
    seqComponent: "A",
    seqId: "10010006",
    head: 
    {
      profile:"/test_source/10010006.png", locale:"KOR", thankAlmoney:"100", uLv:"1", nick: "똑똑똑", title: "지방간에 좋은 음식은 어떤 음식이 있을까요",
      persent:"100", date:"2021-03-22 10:23:47 UTC+9", readCount: "8", 
    },
    contents: "지방간에 좋은 음식은 어떤 음식이 있을까요2222",
    replys: [
      { profile: { seqId:"10037135", img: "/test_source/10037135.png",
      locale: "KOR", nick: "커피낙타"}, content:"운동도 도움이 클것 같습니다.", 
      date:"2021-03-22 14:00:38"  },
    ],
    almoney:"3,000"
  
  },
  { 
    seqComponent: "A",
    seqId: "10010006",
    head: 
    {
      profile:"/test_source/10010006.png", locale:"KOR", thankAlmoney:"100", uLv:"1", nick: "똑똑똑", title: "지방간에 좋은 음식은 어떤 음식이 있을까요",
      persent:"100", date:"2021-03-22 10:23:47 UTC+9", readCount: "8", 
    },
    contents: "지방간에 좋은 음식은 어떤 음식이 있을까요3333",
    replys: [
      { profile: { seqId:"10037135", img: "/test_source/10037135.png",
      locale: "KOR", nick: "커피낙타"}, content:"운동도 도움이 클것 같습니다.", 
      date:"2021-03-22 14:00:38"  },
    ],
    almoney:"3,000"
  
  },

]

// 바디 클릭시 팝업되어 있던 모든 특정 스타일(시간, 팝업 등)이 지워지도록 작용.

function App() {
  return (
    <div className="App">
      <QuestionBox SSRJSON={SSRJSON}></QuestionBox>
    </div>
  );
}

export default App;
