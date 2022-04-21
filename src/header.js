import styled from "styled-components";
import Form from "./form";
import { useState } from "react";
const Head = styled.div`
  color: white;
  background: grey;
  border-radius: 4px;
`;
const Body = styled.div`
  height: 40vh;
  background: grey;
  border-radius: 4px;
`;

export default function Headers() {
  const [input, setInput] = useState();
  const [todos, setTodos] = useState([]);
  return (
    <div className="header">
      <Head>
        <h1>TodoList</h1>
      </Head>
      <Body>
        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
        />
      </Body>
    </div>
  );
}
