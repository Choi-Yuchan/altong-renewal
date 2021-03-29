import QuestionBox from './components/questionBox/QuestionBox'


// 기능은 대부분 해당 유저의 seq 값으로 움직이도록 설계
const SSRJSON = [
  {
    seqComponent: "U", 
    info: {
      seq: 10035484,
      name: "낙타커핑",
      lv: 1,
      
    }
  },
  { 
    id:1,
    seqComponent: "Q",
    seqId: "10010006",
    head: 
    {
      profile:"/test_source/10010006.png", locale:"KOR", thankAlmoney:"101230", uLv:"5", nick: "똑똑합니다", title: "지방1간에 좋은 음식은 어떤 음식이 있을까요",
      persent:"79", date:"2021-03-22 11:23:42 UTC+9", readCount: "8111", 
    },
    contents: "지방에 들3어가2312세요",
    good:7,
    bad:6,
    replys: [
      { id: 1, profile: { seqId:"10037135", img: "/test_source/10037135.png",
      locale: "KOR", nick: "커피낙타"}, content:"운동도4 도움이 4124124124클것 같습니다.", 
      date:"2021-03-22 08:00:38",
      
    },
      { id: 2, profile: { seqId:"10037135", img: "/test_source/10010006.png",
      locale: "KOR", nick: "커피낙1타"}, content:"운동3도 도움이 클것 같습니다.", 
      date:"2021-03-22 07:00:38"  },
      { id: 3, profile: { seqId:"10010006", img: "/test_source/10037135.png",
      locale: "KOR", nick: "커피낙2타"}, content:"운2동도 도움이 클것 같습니다.", 
      date:"2021-03-22 06:00:38"  },
    ],
    almoney:"99,000",
    etimate:{
      1:1,
      2:9,
      3:10,
      4:20,
      5:3,
      6:9,
    }
  },
  { 
    id:2,
    seqComponent: "A",
    seqId: "10010006",
    head: 
    {
      profile:"/test_source/10037135.png", locale:"KOR", thankAlmoney:"100", uLv:"4", nick: "로건", title: "지방간에 좋은 음식은 어떤 음식이 있을까요",
      persent:"87", date:"2021-03-22 10:23:47 UTC+9", readCount: "8111", 
    },
    contents: "지방에 들어가2312세요",
    good:5,
    bad:4,
    replys: [
      { id: 1, profile: { seqId:"10010006", img: "/test_source/10037135.png",
      locale: "KOR", nick: "커피낙타aa"}, content:"운동도 도움이 클것 같습니다.111", 
      date:"2021-03-22 01:00:38"  },
      { id: 2, profile: { seqId:"10010006", img: "/test_source/10037135.png",
      locale: "KOR", nick: "커피낙타bb"}, content:"운동도 도움이 클것 같습니다.222", 
      date:"2021-03-22 02:10:38"  },

    ],
    almoney:"399,000"
  },
  { 
    id:3,
    seqComponent: "A",
    seqId: "10010006",
    head: 
    {
      profile:"/test_source/10037135.png", locale:"KOR", thankAlmoney:"100", uLv:"3", nick: "1234", title: "지방간에 좋은 음식은 어떤 음식이 있을까요",
      persent:"68", date:"2021-03-22 10:23:47 UTC+9", readCount: "558", 
    },
    contents: "지방간에 좋은 음식은 어떤 음식이 있을까요2222",
    good:13,
    bad:2,
    replys: [
      { id: 1, profile: { seqId:"10037135", img: "/test_source/10037135.png",
      locale: "KOR", nick: "커피낙타zz"}, content:"운동도 도움이 클것 같습니다333.", 
      date:"2021-03-22 03:00:38"  },
    ],
    almoney:"13,000"
  },
  {
    id:4,
    seqComponent: "A",
    seqId: "10010006",
    head: 
    {
      profile:"/test_source/10037135.png", locale:"KOR", thankAlmoney:"100", uLv:"2", nick: "ㅁㄴㅇㄹ", title: "지방간에 좋은 음식은 어떤 음식이 있을까요",
      persent:"57", date:"2021-03-22 10:23:47 UTC+9", readCount: "8", 
    },
    contents: "지방간에 좋은 음식은 어떤 음식이 있을까요3333",
    good:10,
    bad:1,
    replys: [
      { id: 1, profile: { seqId:"10037135", img: "/test_source/10037135.png",
      locale: "KOR", nick: "커피낙타123"}, content:"운동도 도움이 클것 같습니다.444", 
      date:"2021-03-22 04:00:38"  },
    ],
    almoney:"9,000"
  
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
