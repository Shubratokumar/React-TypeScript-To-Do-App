import React from 'react';
import './styles.css';

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props> = ({todo, setTodo}) => {
    return (
        <form className="input">
            <input type="text" className="input-box" 
            value={todo}
            onChange={(e)=>setTodo(e.target.value)}
            placeholder="Enter your new task here"
            />
            <button type="submit" className="input-submit">Enter</button>
        </form>
    );
};

export default InputField;