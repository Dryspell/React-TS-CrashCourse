import React from 'react'
import './styles.css';

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
}

export default function InputFeild({todo, setTodo}: Props) {
  return (
    <form className="input">
        <input type="input" placeholder="Enter your task here" className="input__box"/>
        <button className="input__submit" type="submit">Add</button>
    </form>
  )
}
