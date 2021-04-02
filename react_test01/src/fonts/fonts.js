import { createGlobalStyle} from 'styled-components';

export default createGlobalStyle `
    /* @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+HK:wght@400;500;700&family=Noto+Sans+JP:wght@400;500;700&family=Noto+Sans+KR:wght@400;500;700&family=Noto+Sans+SC:wght@400;500;700&family=Noto+Sans+TC:wght@400;500;700&display=swap"); */

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  transition: background-color 5000s ease-in-out 0s;
  -webkit-transition: background-color 9999s ease-out;
  -webkit-box-shadow: 0 0 0px 1000px white inset !important;
  -webkit-text-fill-color: #333 !important;
}

/* common */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: #333;
}
html,
body {
  width: 100%;
  font-size: 16px;
  font-family: "Noto Sans KR", "Noto Sans JP", "Noto Sans HK", "Noto Sans SC",
    "Noto Sans TC", sans-serif;
  color: #333;
  position: relative;
}
.center {
  width: 800px;
  margin: 0 auto;
}

/* header */
header {
  width: 100%;
  height: 60px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  transition: all 0.5s;
  background: #fff;
}
header.fixed {
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid #eee;
}
`