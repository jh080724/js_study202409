import { $btn as $button, $pText as $text } from "./getDOM.js"; // import,  디스트럭션닝
import {clickHandler as clickFunc } from "./event.js";
import {pow, add} from './operate.js';


// $button.addEventListener("click", () => {
//   alert('버튼이 클릭됨!!!')
// });

// 임포트한 데디터를 별칭을 붙야서 사용할 시에는 
// 동일한 이름의 변수를 선언하는 것을 피해야 함.
const $btn = '123';
console.log(`btn의 값: ${btn}`);
console.log(`임포트한 btn: ${button}`);


$button.addEventListener('click', clickHandler);