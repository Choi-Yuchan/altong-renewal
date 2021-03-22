import MiniProfile from '../miniProfile/MiniProfile'

// atm_top_wrap
function BoxTop() {
    return (
      <div className="BoxTop">
        <figure>
          <img></img>
        </figure>
        <h2>Q.<span className="yellow" >100</span></h2>
        <ul>
          <li>
            <span>수호천사</span>
            <strong className="prgNickname_Q">똑똑똑</strong>님의 질문입니다.</li>
          <li>지방간에 좋은 음식은 어떤 음식이 있을까요</li>
          <li>감사알 지급률<b>100%</b> · <div>1시간 전<span>2021-03-22 10:23:47 UTC+9</span></div>
          <img></img>8</li>
        </ul>
        <div>
          <i></i>
          <i></i>
          <i></i>
        </div>
        <MiniProfile></MiniProfile>
      </div>
    );
  }
  
  export default BoxTop;
  