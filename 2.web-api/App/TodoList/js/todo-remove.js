import todos from "./global-var.js";

const removeTodoData = ($li) => {
  // 강사는 $delTarget으로 선언해서 썼음.
  $li.classList.add("delMoving");
  //애니메이션 발동시간 동안은 remove가 진행되지 않도록
  // setTimeout 처리
  setTimeout(() => {
    // $todoList.removeChild($li);
    $li.parentNode.removeChild($li);
  }, 1500);

  // 배열 내의 객체 삭제하기.
  const targetIdx = todos.findIndex((todo) => todo.id === +$li.dataset.id);
  todos.splice(targetIdx, 1);

  console.log(todos);
};

export default removeTodoData;
