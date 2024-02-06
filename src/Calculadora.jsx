import { useState } from 'react';
import Pantalla from './components/Pantalla';
import Teclado from './components/Teclado';

export const Calculadora = () => {

  const [value, setValue] = useState('0');

  function operations(event) {
    if (event !== '=') {
      if (value == '0') {
        setValue(event);
      }else{
        setValue(value + event);
      }
    } else if (event === '=') {
      setValue(eval(value));
    }
  }

  function limpiar() {
    setValue('0');
  }

  return (
    <div className='w-3/12 border-2 border-solid rounded-xl'>
      <Pantalla value={value} />
      <Teclado operations={operations} limpiar={limpiar} />
    </div>
  )
}
export default Calculadora;
