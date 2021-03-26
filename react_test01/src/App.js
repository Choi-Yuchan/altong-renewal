import QuestionBox from './components/questionBox/QuestionBox'

const SSRJSON = [
{ 
  head: 
  {
    profile:"/test_source/10010006.png", locale:"KOR", thankAlmoney:"100", uLv:"1", nick: "똑똑똑", title: "지방간에 좋은 음식은 어떤 음식이 있을까요",
    persent:"100", date:"2021-03-22 10:23:47 UTC+9", readCount: "8", 
  },
  contents: "지방간에 좋은 음식은 어떤 음식이 있을까요",
  bottom:
  {
    
  }

},
]

function App() {
  return (
    <div className="App">
      <QuestionBox></QuestionBox>
    </div>
  );
}

export default App;
