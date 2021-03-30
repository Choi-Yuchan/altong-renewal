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
      profile:"/test_source/10010006.png", locale:"KOR", thankAlmoney:"101230", uLv:"5", nick: "똑똑합니다", 
      title: "김치가 코로나에 좋나요요",
      persent:"79", date:"2021-03-22 11:23:42 UTC+9", readCount: "8111", 
    },
    contents: "지방에 들3어가2312세요",
    good:7,
    bad:6,
    replys: [
      { id: 1, profile: { seqId:"10037135", img: "/test_source/10037135.png",
      locale: "KOR", nick: "커피낙타"}, content:"운동도4 도움이 4124124124클것 같습니다.", 
      date:"2021-03-22 08:00:38"  },
      { id: 2, profile: { seqId:"10037135", img: "/test_source/10037135.png",
      locale: "KOR", nick: "커피낙타"}, content:"운동도4 도움이 4124124124클것 같습니다.", 
      date:"2021-03-22 08:00:38"  },
      { id: 3, profile: { seqId:"10037135", img: "/test_source/10037135.png",
      locale: "KOR", nick: "커피낙타"}, content:"운동도4 도움이 4124124124클것 같습니다.", 
      date:"2021-03-22 08:00:38"  },
      { id: 4, profile: { seqId:"10037135", img: "/test_source/10010006.png",
      locale: "KOR", nick: "커피낙1타"}, content:"운동3도 도움이 클것 같습니다.", 
      date:"2021-03-22 07:00:38"  },
      { id: 5, profile: { seqId:"10010006", img: "/test_source/10037135.png",
      locale: "KOR", nick: "커피낙2타"}, content:"운2동도 도움이 클것 같습니다.", 
      date:"2021-03-22 06:00:38"  },
    ],
    almoney:"99,000",
    mini:{
      nick: "똑똑합니다", uLv:"5", uHref:"", qBenefit:1244000, ABenefit:1232300, giveThankNum:3609, giveThankRate:98, descript:"똑똑 문 열어주세요.", alBenefit: 23312000
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
    contents: "지방We find happiness only when we have self-esteem and love ourselves. That way, you know how to love others too. You must be proud of yourself in an attitude of loving, caring, and humble in a relationship, not selfish love. Happiness should be found in yourself, not in others. Did you think too much about me? I've been living so it is. My family and people around me become happy when I am healthy and happy. If the family is harmonious and the body and mind are healthy, it will be happiness. Most importantly, everyone in the family should be healthy. By serving my 97-year-old mother until her death, I learned more about the importance of health.에 들어가2312세요",
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
    almoney:"399,000",
    etimate:{
      v1:1,
      v2:9,
      v3:10,
      v4:20,
      v5:3,
      v6:9,
    },
    mini:{
      nick: "로건", uLv:"4", uHref:"", qBenefit:1230000, ABenefit:4595900, giveThankNum:1234, giveThankRate:12, descript:"로건을 아시나요?", alBenefit: 8880000
    }
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
    contents: "지방간에 좋은 We find happiness only when we have self-esteem and love ourselves. That way, you know how to love others too. You must be proud of yourself in an attitude of loving, caring, and humble in a relationship, not selfish love. Happiness should be found in yourself, not in others. Did you think too much about me? I've been living so it is. My family and people around me become happy when I am healthy and happy. If the family is harmonious and the body and mind are healthy, it will be happiness. Most importantly, everyone in the family should be healthy. By serving my 97-year-old mother until her death, I learned more about the importance of health. 어떤 음식이 있을까요2222",
    good:13,
    bad:2,
    replys: [
      { id: 1, profile: { seqId:"10037135", img: "/test_source/10037135.png",
      locale: "KOR", nick: "커피낙타zz"}, content:"운동도 도움이 클것 같습니다333.", 
      date:"2021-03-22 03:00:38"  },
    ],
    almoney:"13,000",
    etimate:{
      v1:1,
      v2:9,
      v3:1,
      v4:20,
      v5:3,
      v6:9,
    },
    mini:{
      nick: "1234", uLv:"1", uHref:"", qBenefit:13213, ABenefit:5151515, giveThankNum:3609, giveThankRate:55, descript:"ㅋㅋㅋ 1234 입니다.", alBenefit: 654210
    }
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
    contents: "We find happiness only when we have self-esteem and love ourselves. That way, you know how to love others too. You must be proud of yourself in an attitude of loving, caring, and humble in a relationship, not selfish love. Happiness should be found in yourself, not in others. Did you think too much about me? I've been living so it is. My family and people around me become happy when I am healthy and happy. If the family is harmonious and the body and mind are healthy, it will be happiness. Most importantly, everyone in the family should be healthy. By serving my 97-year-old mother until her death, I learned more about the importance of health.",
    good:10,
    bad:1,
    replys: [
      { id: 1, profile: { seqId:"10037135", img: "/test_source/10037135.png",
      locale: "KOR", nick: "커피낙타123"}, content:"운동도 도움이 클것 같습니다.444", 
      date:"2021-03-22 04:00:38"  },
    ],
    almoney:"9,000",
    etimate:{
      v1:1,
      v2:9,
      v3:10,
      v4:20,
      v5:3,
      v6:9,
    },
    mini:{
      nick: "ㅁㄴㅇㄹ", uLv:"5", uHref:"", qBenefit:300000, ABenefit:45542 ,
      giveThankNum:3609, giveThankRate:100, descript:"안녕하세요 ㅁㄴㅇㄹ 에요.", alBenefit: 141410
    }
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
