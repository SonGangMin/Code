import React, { useCallback } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Todos from "../components/Todos";
import { changeInput, insert, toggle, remove } from "../modules/todos";
import useActions from "../lib/useActions";

const TodosContainer = () => {
  const input = useSelector((state) => state.todos.input);
  const todos = useSelector((state) => state.todos.todos);

  //useActions 사용
  const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
    [changeInput, insert, toggle, remove],
    []
  );

  // const dispatch = useDispatch();

  // const onChangeInput = useCallback(
  //   (input) => dispatch(changeInput(input)),
  //   [dispatch]
  // );
  // const onInsert = useCallback((todo) => dispatch(insert(todo)), [dispatch]);
  // const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
  // const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);

  return (
    <div>
      <Todos
        input={input}
        todos={todos}
        onChangeInput={onChangeInput}
        onInsert={onInsert}
        onToggle={onToggle}
        onRemove={onRemove}
      />
    </div>
  );
};

export default React.memo(TodosContainer);
// const TodosContainer = ({
//   input,
//   todos,
//   changeInput,
//   insert,
//   toggle,
//   remove,
// }) => {
//   return (
//     <div>
//       <Todos
//         input={input}
//         todos={todos}
//         onChangeInput={changeInput}
//         onInsert={insert}
//         onToggle={toggle}
//         onRemove={remove}
//       />
//     </div>
//   );
// };

// export default connect(
//   ({ todos }) => ({
//     input: todos.input,
//     todos: todos.todos,
//   }),
//   {
//     changeInput,
//     insert,
//     toggle,
//     remove,
//   }
// )(TodosContainer);
