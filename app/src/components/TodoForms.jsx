/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {useState} from 'react'

const TodoForms = ({addTodo}) => {
    const [value, setValue] = useState("")
    const [category, setCategory] = useState("")
        
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!value || !category)return;
        addTodo(value, category);
        setValue("");
        setCategory("");
        
    }
        
    
  return (
    <div className='todo-form'>
        <h2>Criar Tarefa:</h2>
        <form onSubmit={handleSubmit}>
            <input 
                type='text' 
                placeholder='Digite o Titulo' 
                value={value} 
                onChange={(e) => setValue(e.target.value)}
                
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}> 
                <option value="">Selecione uma Categoria</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Profissional">Profissional</option>
                <option value="Estudo">Estudo</option>
            </select>
            <button type='submit'>Criar Tarefa</button>
        </form>
    </div>
  )
}

export default TodoForms