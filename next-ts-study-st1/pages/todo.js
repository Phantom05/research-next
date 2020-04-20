import {useRef} from 'react';
import PlainLayout from 'components/Layout/PlainLayout';
import { TodoListing } from 'components/Listing';
import { useImmer } from "use-immer";


const TodoState = {
  input:"",
  items: []
}

const Todo = props => {
  const [values, setValues] = useImmer(TodoState);
  const inputRef = useRef(null);
  
  const handleClick = e=>{
    setValues(draft=>{
      draft.items = values.items.concat(inputRef.current.value);
      draft.input = "";
    })
  }
  
  const handleChange = e =>{
    const targetValue = e.target.value;
    setValues(draft=>{
      draft.input = targetValue;
    })
  }
  const handleKeyUp = e=>{
    if(e.key === 'Enter'){
      handleClick() 
    }
  }
  
  return (
    <PlainLayout>
      <h1>Todo</h1>

      <input 
        type="text" 
        onChange={handleChange}
        ref={inputRef}
        value={values.input}
        onKeyUp={handleKeyUp}
        
      /> <button onClick={handleClick}>입력</button>
      <TodoListing items={values.items} />

    </PlainLayout>
  )
}


export default Todo;
