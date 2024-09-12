import makeTodoItem from "./todo-insert.js";
import changeCheckStatus from "./todo-done.js";
import removeTodoData from "./todo-remove.js";
import { enterModifyMode, modifyTodoData } from "./todo-modify.js";

const handlerBinding = () => {
  //추가버튼 클릭 이벤트
  document.getElementById("add").addEventListener("click", (e) => {
    e.preventDefault();

    //1. 입력한 텍스트를 읽어오자
    const $todoText = document.getElementById("todo-text");
    const inputText = $todoText.value;

    // 입력을 안했으면 이벤트 강제종료
    if (inputText.trim() === "" || inputText.length > 10) {
      $todoText.style.background = "orangered";
      $todoText.setAttribute(
        "placeholder",
        "필수 입력 사항임... 10자 이내로 쓰셈~"
      );
      $todoText.value = "";
      return;
    } else {
      //제대로 입력이 되었다면 스타일을 초기화.
      $todoText.style.background = "";
      $todoText.setAttribute("placeholder", "할 일을 입력하세요.");
    }

    //li생성
    makeTodoItem(inputText);

    // 입력완료 후 input에 존재하는 문자열 제거
    $todoText.value = "";
  });

  // 할 일 완료(체크박스) 이벤트
  const $todoList = document.querySelector("ul.todo-list");

  $todoList.addEventListener("click", (e) => {
    //checkbox에서만 이벤트만 동작해야 함.
    if (!e.target.matches("input[type=checkbox]")) return;

    // 이벤트가 발생한 주체의 부모를 보내겠다.
    changeCheckStatus(e.target.parentNode);
  });

  // 할일 삭제 이벤트
  $todoList.addEventListener("click", (e) => {
    if (!e.target.matches(".todo-list .remove span")) {
      return;
    }
    console.log("삭제 아이콘 클릭!");

    removeTodoData(e.target.parentNode.parentNode); // 삭제할 li를 바로 지목 부모(div)의 부모(li)
  });

  // 할 일 수정 이벤트(수정모드 진입, 수정완료)
  $todoList.addEventListener("click", (e) => {
    console.log("addEventListener 진입");
    if (e.target.matches(".todo-list .modify span.lnr-undo")) {
      console.log("addEventListener IF 진입");
      enterModifyMode(e.target); // 수정모드 진입. 해당 이벤트가 발생한 지점
    } else if (
      e.target.matches(".todo-list .modify span.lnr-checkmark-circle")
    ) {
      modifyTodoData(e.target); // 수정모드에서 수정을 확정 지으려는 이벤트
    } else return;
  });
};

export default handlerBinding;
