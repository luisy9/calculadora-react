export const Teclado = ({ operations, limpiar }) => {


  return (
    <div className="grid grid-cols-4 justify-center items-center">
      <div className="flex justify-center pb-5">
        <div className="border-2 w-20 h-20 border-solid border-black rounded-xl flex justify-center cursor-pointer hover:bg-black hover:text-white"
          onClick={limpiar}>
          <button className="">AC</button>
        </div>
      </div>
      <div className="flex justify-center pb-5">
        <div className="border-2 w-20 h-20 border-solid border-black rounded-xl flex justify-center cursor-pointer hover:bg-black hover:text-white"
          onClick={() => operations('+/-')}>
          <button className="">+/-</button>
        </div>
      </div>
      <div className="flex justify-center pb-5">
        <div className="border-2 w-20 h-20 border-solid border-black rounded-xl flex justify-center cursor-pointer hover:bg-black hover:text-white"
          onClick={() => operations('%')}>
          <button className="">%</button>
        </div>
      </div>
      <div className="flex justify-center pb-5">
        <div className="border-2 w-20 h-20 border-solid border-black rounded-xl flex justify-center cursor-pointer hover:bg-black hover:text-white"
          onClick={() => operations('/')}>
          <button className="">/</button>
        </div>
      </div>
      <div className="flex justify-center pb-5">
        <div className="border-2 w-20 h-20 border-solid border-black rounded-xl flex justify-center cursor-pointer hover:bg-black hover:text-white"
          onClick={() => operations('7')}>
          <button className="" >7</button>
        </div>
      </div>
      <div className="flex justify-center pb-5">
        <div className="border-2 w-20 h-20 border-solid border-black rounded-xl flex justify-center cursor-pointer hover:bg-black hover:text-white"
          onClick={() => operations('8')}>
          <button >8</button>
        </div>
      </div>
      <div className="flex justify-center pb-5">
        <div className="border-2 w-20 h-20 border-solid border-black rounded-xl flex justify-center cursor-pointer hover:bg-black hover:text-white"
          onClick={() => operations('9')}>
          <button >9</button>
        </div>
      </div>
      <div className="flex justify-center pb-5">
        <div className="border-2  w-20 h-20 border-solid border-black rounded-xl flex justify-center cursor-pointer hover:bg-black hover:text-white"
          onClick={() => operations('*')}>
          <button >X</button>
        </div>
      </div>
      <div className="flex justify-center pb-5">
        <div className="border-2 w-20 h-20 border-solid border-black rounded-xl flex justify-center cursor-pointer hover:bg-black hover:text-white"
          onClick={() => operations('4')}>
          <button >4</button>
        </div>
      </div>
      <div className="flex justify-center pb-5">
        <div className="border-2 w-20 h-20 border-solid border-black rounded-xl flex justify-center cursor-pointer hover:bg-black hover:text-white"
          onClick={() => operations('5')}>
          <button >5</button>
        </div>
      </div>
      <div className="flex justify-center pb-5">
        <div className="border-2 w-20 h-20 border-solid border-black rounded-xl flex justify-center cursor-pointer hover:bg-black hover:text-white"
          onClick={() => operations('6')}>
          <button>6</button>
        </div>
      </div>
      <div className="flex justify-center pb-5">
        <div className="border-2 w-20 h-20 border-solid border-black rounded-xl flex justify-center cursor-pointer hover:bg-black hover:text-white"
        onClick={() => operations('-')}>
          <button >-</button>
        </div>
      </div>
      <div className="flex justify-center pb-5">
        <div className="border-2 w-20 h-20 border-solid border-black rounded-xl flex justify-center cursor-pointer hover:bg-black hover:text-white"
        onClick={() => operations('1')}>
          <button >1</button>
        </div>
      </div>

      <div className="flex justify-center pb-5">
        <div className="border-2 w-20 h-20 border-solid border-black rounded-xl flex justify-center cursor-pointer hover:bg-black hover:text-white"
         onClick={() => operations('2')}>
          <button >2</button>
        </div>
      </div>

      <div className="flex justify-center pb-5">
        <div className="border-2 w-20 h-20 border-solid border-black rounded-xl flex justify-center cursor-pointer hover:bg-black hover:text-white"
         onClick={() => operations('3')}>
          <button>3</button>
        </div>
      </div>

      <div className="flex justify-center pb-5">
        <div className="border-2 w-20 h-20 border-solid border-black rounded-xl flex justify-center cursor-pointer hover:bg-black hover:text-white"
        onClick={() => operations('+')}>
          <button>+</button>
        </div>
      </div>

      <div className="flex justify-center pb-5">
        <div className="border-2 w-20 h-20 border-solid border-black rounded-xl flex justify-center cursor-pointer hover:bg-black hover:text-white"
         onClick={() => operations('0')}>
          <button>0</button>
        </div >
      </div>

      <div className="flex justify-center pb-5">
        <div className="border-2 w-20 h-20 border-solid border-black rounded-xl flex justify-center cursor-pointer hover:bg-black hover:text-white"
         onClick={() => operations(',')}>
          <button>,</button>
        </div>
      </div>

      <div className="flex justify-center pb-5">
        <div className="border-2 w-20 h-20 border-solid border-black rounded-xl flex justify-center cursor-pointer hover:bg-black hover:text-white"
         onClick={() => operations('=')}>
          <button>=</button>
        </div>
      </div>

    </div>
  )
}

export default Teclado
