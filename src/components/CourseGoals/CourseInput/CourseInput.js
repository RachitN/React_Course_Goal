import React, { useState } from 'react';
import styled from 'styled-components'

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const FormControl = styled.div`

  margin: 0.5rem 0;


& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color:${props=> props.invalid?'red':'black'};
}

& input {
  display: block;
  width: 100%;
  border: 1px solid ${props=> props.invalid?'red':'#ccc'};
  background:${props=> props.invalid?'rgb(236, 109, 109)':'transparent'};
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}

// &.invalid input {
//   border-color: red;
//   background: rgb(236, 109, 109);
// }
// &.invalid label {
//   color: red;
// }

`

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid,setValid] = useState(true)

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length!==0){
      setValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0)
    {
      setValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <div className={`form-control ${!isValid?'invalid':''}`}>        Dynamic Class */}
      {/* <FormControl className={!isValid && 'invalid'}> One Way of dynamic with Styled Components*/ }
      <FormControl invalid ={!isValid}>  {/* Styled Component with Props */}
        <label style={{color : !isValid? 'red': 'black'}}>Course Goal</label>          {/*Dynamic Style*/}
        <input type="text" onChange={goalInputChangeHandler} />
      {/* </div> */}
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
