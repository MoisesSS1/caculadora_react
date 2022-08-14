import React from 'react'
import './Main.css'
import { useState} from 'react'

const Main = () => {

  const [number, setNumber] = useState('')

  const [numberOld, setNumberOld] = useState()

  const [operation, setOperation] = useState()

  function numberEntrada(e) {
    setNumber(number + e.target.value)
  }

  //Salva o operador, adiciona o número digitado em numberOld e limpa o proximo number
  function salvarOperador(e) {
    setOperation(e.target.value)
    setNumberOld(number)
    setNumber('')   
  }

  function result() {

    let result = ''

    //Faz o calculo de acordo com o operador
    if(operation==='+'){
      result = Number(number) + Number(numberOld)

    }else if(operation==='-'){
      result = Number(numberOld) - Number(number)

    }else if(operation==='X'){
      result = number * numberOld

    }else if(operation==='/'){

      if(number ==='0'){
        return
      }else{
        result = number / numberOld

      }
     
    }

    setNumber(result)    
  }

  //Limpa todo os campos
  function clear() {
    setNumber('')
    operation('')
    setNumberOld('')
  }







    

  return (
    <div className='main'>
      
      <input className='inputRes' type="nuber" value={number} readOnly/>

        <div className="container">
            <button onClick={numberEntrada} className='btns black' value={1}>1</button>
            <button onClick={numberEntrada} className='btns black' value={2}>2</button>
            <button onClick={numberEntrada} className='btns black' value={3}>3</button>
            <button onClick={salvarOperador} className='btns orange' value={'+'}>+</button>
            <button onClick={numberEntrada} className='btns black' value={4}>4</button>
            <button onClick={numberEntrada} className='btns black' value={5}>5</button>
            <button onClick={numberEntrada} className='btns black' value={6}>6</button>
            <button onClick={salvarOperador} className='btns orange' value={'-'}>-</button>
            <button onClick={numberEntrada} className='btns black' value={7}>7</button>
            <button onClick={numberEntrada} className='btns black' value={8}>8</button>
            <button onClick={numberEntrada} className='btns black' value={9}>9</button>
            <button onClick={salvarOperador} className='btns orange' value={'X'}>X</button>
            <button onClick={numberEntrada} className='btns black' value={0}>0</button>
            <button onClick={salvarOperador} className='btns orange' value={'/'}>/</button>
            <button onClick={result} className='btns orange'>=</button>
            <button onClick={clear} className='btns ac' value={'ac'}>AC</button>
        </div>                      
            
    </div>
  )
}

export default Main