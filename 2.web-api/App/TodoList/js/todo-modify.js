import todos from "./global-var.js";

// 수정모드 진입 이벤트 함수
const enterModifyMode = ($modSpan) => {
  // 아이콘 교체  --> XXXXX 실패함... 수정하셔요~~~ <-- 수정함. span.lnr-checkmark-circle span과 .lnr-check...을 붙여야한다.
  console.log("enterModifyMode 진입");

  $modSpan.classList.replace("lnr-undo", "lnr-checkmark-circle");

  // span.text를 input텍스트로 교체
  const $label = $modSpan.parentNode.previousElementSibling;
  const $textSpan = $label.lastElementChild;

  // input 태그 만들기
  const $modInput = document.createElement("input");
  // $modInput.setAttribute('type', 'text') -- 굳이 안해도됨.

  $modInput.value = $textSpan.textContent;
  $modInput.classList.add("modify-input");

  $label.replaceChild($modInput, $textSpan);
};

// 수정완료 처리
const modifyTodoData = ($modCompleteSpan) => {
  // 버튼을 원상복구
  $modCompleteSpan.classList.replace("lnr-checkmark-circle", "lnr-undo");

  // input을 span.text로 변경
  const $label = $modCompleteSpan.parentNode.previousElementSibling;
  const $modInput = $label.lastElementChild;

  const $textSpan = document.createElement("span");
  $textSpan.textContent = $modInput.value;
  $textSpan.classList.add("text");

  $label.replaceChild($textSpan, $modInput);

  //배열내의 객체를 찾아서 text프로퍼티 변경.
  const dataId = $label.parentNode.dataset.id;
  const idx = todos.findIndex((todo) => todo.id === +dataId);

  todos[idx].text = $textSpan.textContent;
  console.log(todos);
};

export { enterModifyMode, modifyTodoData };
