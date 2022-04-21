import styled from "styled-components";
const Todos = styled.div`
  display: inline-flex;
  align-items: center;
`;

export default function Form(props) {
  const onInputChange = (event) => {
    props.setInput(event.target.value);
  };
  const onForDelete = (event) => {
    let array = [...props.todos];
    array = array.slice(1, array.length + 1);
    props.setTodos(array);
  };
  const onForSubmit = (event) => {
    props.setTodos([...props.todos, props.input]);
  };
  let list = [];
  return (
    <form>
      <div>
        <input
          type="text"
          placeholder="Enter a todo item"
          className="text-input"
          value={props.input}
          required
          onChange={onInputChange}
        />
        <botton className="button-add" onClick={onForSubmit}>
          Add
        </botton>
        <botton className="button-add" onClick={onForDelete}>
          Delete
        </botton>
      </div>
      <Todos>
        <ol>
          {props.todos.map((element, ind) => {
            return (
              <h1>
                {ind}.{element}
              </h1>
            );
          })}
        </ol>
      </Todos>
    </form>
  );
}
