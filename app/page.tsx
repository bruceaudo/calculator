"use client"
import { useRef, useState } from "react";
import Navigation from "./components/Navigation";
import { useDarkMode } from "./hooks/useDarkMode";
import axios from "axios";


export default function Home() {

  const[expression, setExpression] = useState("")
  
  const percRef = useRef<HTMLButtonElement | null>(null)
  const exclamationRef = useRef<HTMLButtonElement | null>(null)
  const cRef = useRef<HTMLButtonElement | null>(null)
  const delRef = useRef<HTMLButtonElement | null>(null)
  const oneRef = useRef<HTMLButtonElement | null>(null)
  const twoRef = useRef<HTMLButtonElement | null>(null)
  const threeRef = useRef<HTMLButtonElement | null>(null)
  const fourRef = useRef<HTMLButtonElement | null>(null)
  const fiveRef = useRef<HTMLButtonElement | null>(null)
  const sixRef = useRef<HTMLButtonElement | null>(null)
  const sevenRef = useRef<HTMLButtonElement | null>(null)
  const eightRef = useRef<HTMLButtonElement | null>(null)
  const nineRef = useRef<HTMLButtonElement | null>(null)
  const zeroRef = useRef<HTMLButtonElement | null>(null)
  const pointRef = useRef<HTMLButtonElement | null>(null)
  const equalsRef = useRef<HTMLButtonElement | null>(null)
  const othersRef = useRef<HTMLButtonElement | null>(null)
  const plusRef = useRef<HTMLButtonElement | null>(null)
  const divideRef = useRef<HTMLButtonElement | null>(null)
  const timesRef = useRef<HTMLButtonElement | null>(null)
  const minusRef = useRef<HTMLButtonElement | null>(null)
  const leftParenthesisRef = useRef<HTMLButtonElement | null>(null)
  const rightParenthesisRef = useRef<HTMLButtonElement | null>(null)
  const factorialRef = useRef<HTMLButtonElement | null>(null)

   const handleButtonClick = (buttonValue: string) => {
     switch (buttonValue) {
       case "1":
       case "2":
       case "3":
       case "4":
       case "5":
       case "6":
       case "7":
       case "8":
       case "9":
       case "0":
       case "%":
       case ".":
       case "(":
       case ")":
       case "÷":
       case "×":
       case "-":
       case "+":
       case "!":
         setExpression(prevString => prevString + buttonValue);
         break;
       case "del":
         setExpression(prevString => prevString.substring(0, prevString.length-1))
         break;
       case "C":
         setExpression(prevString => (prevString = ""));
         break;
       case "others":
         break;
       default: //Expression will be sent to backend for processing here when equals button is clicked
         const body = {
           expression: expression
         }

         const submitExpression = async (body: {}) => {
           try {
             const response = await axios.post(`http://localhost:5000`, body)
             
             console.log("Data from backend: ",response.data)
            } catch (error) {
              console.log("There was an error sending the expression: ", error)
            }
         }
         break;
     }
   };

  return <main className="">
      <Navigation />
      <section className="h-screen lg:mb-8 lg:flex lg:gap-3 lg:mx-8">
        <section className="h-full lg:w-[70%]">
          <section className="h-[30%] lg:px-8 px-4">
            <div className="font-semibold text-2xl h-[30%]">Standard</div>
            <div className="text-4xl font-semibold flex items-end justify-end h-[70%] p-3 lg:p-6 sm:p-5">
              <span>
                {expression == "" ? "0" : expression}
              </span>
            </div>
          </section>
          <section className="h-[70%] grid grid-cols-4 grid-rows-6 gap-1 mx-1 sm:mx-4 lg:mx-8">
            <button ref={percRef} onClick={() => handleButtonClick("%")}>
              %
            </button>
            <button ref={factorialRef} onClick={() => handleButtonClick("!")}>
              !
            </button>
            <button ref={cRef} onClick={() => handleButtonClick("C")}>
              C
            </button>
            <button ref={delRef} onClick={() => handleButtonClick("del")}>
              ⌫
            </button>
            <button ref={leftParenthesisRef} onClick={() => handleButtonClick("(")}>
              (
            </button>
            <button ref={rightParenthesisRef} onClick={() => handleButtonClick(")")}>
              )
            </button>
            <button ref={exclamationRef} onClick={() => handleButtonClick("!")}>
              !
            </button>
            <button ref={divideRef} onClick={() => handleButtonClick("÷")}>
              ÷
            </button>
            <button ref={sevenRef} onClick={() => handleButtonClick("7")}>
              7
            </button>
            <button ref={eightRef} onClick={() => handleButtonClick("8")}>
              8
            </button>
            <button ref={nineRef} onClick={() => handleButtonClick("9")}>
              9
            </button>
            <button ref={timesRef} onClick={() => handleButtonClick("×")}>
              ×
            </button>
            <button ref={fourRef} onClick={() => handleButtonClick("4")}>
              4
            </button>
            <button ref={fiveRef} onClick={() => handleButtonClick("5")}>
              5
            </button>
            <button ref={sixRef} onClick={() => handleButtonClick("6")}>
              6
            </button>
            <button ref={minusRef} onClick={() => handleButtonClick("-")}>
              -
            </button>
            <button ref={oneRef} onClick={() => handleButtonClick("1")}>
              1
            </button>
            <button ref={twoRef} onClick={() => handleButtonClick("2")}>
              2
            </button>
            <button ref={threeRef} onClick={() => handleButtonClick("3")}>
              3
            </button>
            <button ref={plusRef} onClick={() => handleButtonClick("+")}>
              +
            </button>
            <button ref={othersRef} onClick={() => handleButtonClick("others")}>
              +/-
            </button>
            <button ref={zeroRef} onClick={() => handleButtonClick("0")}>
              0
            </button>
            <button ref={pointRef} onClick={() => handleButtonClick(".")}>
              .
            </button>
            <button ref={equalsRef} onClick={() => handleButtonClick("equals")} id="equals-btn" className="bg-[#00308f] text-white">
              =
            </button>
          </section>
        </section>
        <aside className="h-screen w-[30%] rounded-md bg-gray-100 hidden lg:inline-block p-3">
          Left
        </aside>
      </section>
    </main>;
}
