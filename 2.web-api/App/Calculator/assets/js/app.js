// 현재 계산기에 그려질 숫자
let currentResult = 0;

// 로그를 모아놓을 배열
const logArray = [];

// 로그 시퀀스
let seq = 0;


// 계산 기능을 담당하는 함수
const calculate = (type) => {
  console.log('계산이 시작됨!');
  console.log(type);
  // 계산전 값을 기억
  const originalResult =  currentResult;

  // 입력창에 입력된 숫자를 읽자.
  const enteredNumber = +$userInput.value;  // =+$userInput.value를 = +$userInput.value로 수정함.

  console.log(enteredNumber);
  

  if(!enteredNumber || enteredNumber === 0){
    alert('연산이 불가능한 값입니다.!!!');
    return;
  }


/*  아래 완성 시켜보셈~~~ --> 100라인~104라인 Handler등록 보정함.*/
let mark;

if(type === 'ADD'){
  mark='+';
  currentResult += enteredNumber;
} else if(type === 'SUB') {
  mark = '-';
  currentResult -= enteredNumber;
} else if(type === 'MULTI') {
  mark = '*';
  currentResult *= enteredNumber;
} else {
  mark = '/';s
  currentResult /= enteredNumber;
}
console.log(mark);


// 연삱자의 결과를 두번째 section에 렌더링
$currentCalculationOutput.textContent = `${originalResult} ${mark} ${enteredNumber} = ${currentResult}`;
$currentResultOutput.textContent = currentResult;

 // 다음 연산을 위한 처리
$userInput.value='';
$userInput.focus();

//로그 이력 쌓기
writeToLog(mark, originalResult, enteredNumber, currentResult);
};

//로그 이력을 만드는 함수
const writeToLog = (mark, originalResult, enteredNumber, currentResult) => {

  // 계산 결과를 객체로 포장해서 배열에 저장
  // 변수의 값으로 프로퍼티를 만들때 키 값이 변수 이름과 같다면 키를 생략 가능.
  // 변수의 이름이 키가 된다.
  const logObject = {
    mark,
    originalResult,
    enteredNumber,
    currentResult,
  };

  logArray.push(logObject);
  console.log(logArray);

  // 화면에 로그를 li로 렌더링하는 함수 호출
  renderToLog(logObject);
};

const renderToLog = ({mark, originalResult:prevResult, enteredNumber: number, currentResult: result}) => {

  // li 태그 생성
  const $newLi = document.createElement('li');
  $newLi.textContent = `${++seq} ${prevResult} ${mark} ${number} = ${result}`;
  $newLi.classList.add('log-entries-item');

  // ul에 추가
  $logEntries.appendChild($newLi); 
};

const addHandler = () => calculate('ADD');
const subHandler = () => calculate('SUB');
const multiHandler = () => calculate('MULTI');
const divideHandler = () => calculate('DEVIDE');

// 이벤트 핸들러 자리에 함수 호출문을 쓰면, 함수의 호출 결과를 이벤트로 등록하겠다는 것이기 때문에 
// 함수가 바로 호출된다.

$addBtn.addEventListener('click', addHandler);
$subtractBtn.addEventListener('click', subHandler);
$multiplyBtn.addEventListener('click', multiHandler);
$divideBtn.addEventListener('click', divideHandler);