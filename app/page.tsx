"use client";
import { useRef, useState } from "react";
import Navigation from "./components/Navigation";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import { useDarkmode } from "./hooks/useDarkmode";



export default function Home() {
  const { darkMode, setDarkMode } = useDarkmode()

  const [expression, setExpression] = useState("");
  const [loading, setLoading] = useState(false);
  const btnDisabled = loading || expression === ""
  const[openMenu, setOpenMenu] = useState(false)
  const [mode, setMode] = useState("Standard")
  const history: String[] = []

  const percRef = useRef<HTMLButtonElement | null>(null);
  const exponentialRef = useRef<HTMLButtonElement | null>(null);
  const cRef = useRef<HTMLButtonElement | null>(null);
  const delRef = useRef<HTMLButtonElement | null>(null);
  const oneRef = useRef<HTMLButtonElement | null>(null);
  const twoRef = useRef<HTMLButtonElement | null>(null);
  const threeRef = useRef<HTMLButtonElement | null>(null);
  const fourRef = useRef<HTMLButtonElement | null>(null);
  const fiveRef = useRef<HTMLButtonElement | null>(null);
  const sixRef = useRef<HTMLButtonElement | null>(null);
  const sevenRef = useRef<HTMLButtonElement | null>(null);
  const eightRef = useRef<HTMLButtonElement | null>(null);
  const nineRef = useRef<HTMLButtonElement | null>(null);
  const zeroRef = useRef<HTMLButtonElement | null>(null);
  const pointRef = useRef<HTMLButtonElement | null>(null);
  const equalsRef = useRef<HTMLButtonElement | null>(null);
  const othersRef = useRef<HTMLButtonElement | null>(null);
  const plusRef = useRef<HTMLButtonElement | null>(null);
  const divideRef = useRef<HTMLButtonElement | null>(null);
  const timesRef = useRef<HTMLButtonElement | null>(null);
  const minusRef = useRef<HTMLButtonElement | null>(null);
  const leftParenthesisRef = useRef<HTMLButtonElement | null>(null);
  const rightParenthesisRef = useRef<HTMLButtonElement | null>(null);
  const factorialRef = useRef<HTMLButtonElement | null>(null);

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
      case "(":
      case ")":
      case ".":
      case "÷":
      case "×":
      case "-":
      case "+":
      case "!":
      case "^":
        setExpression(prevString => prevString + buttonValue);
        break;
      case "del":
        setExpression(prevString =>
          prevString.substring(0, prevString.length - 1)
        );
        break;
      case "C":
        setExpression(prevString => (prevString = ""));
        break;
      case "others":
        
        break;
      default:
        //Expression will be sent to backend for processing here when equals button is clicked
        submitExpression(expression);
        break;
    }
  };

  const submitExpression = async (expression: String) => {
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:8080/api/v1/calculate",
        {expression}
      );

      console.log("Data from backend: ", response.data);
      setExpression(prevString => (prevString = response.data));
      history.push(expression)
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("There was an error sending the expression: ", error);
    }
  };

  return <main className={`relative ${darkMode.darkMode ? "bg-black text-white" : ""}`}>
      <Navigation setOpen={setOpenMenu} />
      {openMenu && <Sidebar mode={mode} setMode={setMode} setOpen={setOpenMenu} />}
      {loading && <div className="loading-container">
          <div className="loading-line" />
        </div>}
      <section className="h-screen lg:mb-8 mb-4 lg:flex lg:gap-3 lg:mx-8">
        <section className="h-full lg:w-[70%]">
          <section className="h-[30%] lg:px-8 px-4">
            <div className="font-semibold text-2xl h-[30%]">
              {mode}
            </div>
            <div className="text-4xl font-semibold flex items-end justify-end h-[70%] p-3 lg:p-6 sm:p-5">
              <span>
                {expression == "" ? "0" : expression}
              </span>
            </div>
          </section>
          <section className="h-[70%] grid grid-cols-4 grid-rows-6 gap-1 mx-1 sm:mx-4 lg:mx-8">
            <button className={`${darkMode.darkMode ? "bg-[#222222] hover:bg-[#222222] hover:opacity-75 border-[#222222]" : ""}`} ref={percRef} onClick={() => handleButtonClick("%")}>
              %
            </button>
            <button className={`${darkMode.darkMode ? "bg-[#222222] hover:bg-[#222222] hover:opacity-75 border-[#222222]" : ""}`} ref={factorialRef} onClick={() => handleButtonClick("!")}>
              !
            </button>
            <button className={`${darkMode.darkMode ? "bg-[#222222] hover:bg-[#222222] hover:opacity-75 border-[#222222]" : ""}`} ref={cRef} onClick={() => handleButtonClick("C")}>
              C
            </button>
            <button className={`${darkMode.darkMode ? "bg-[#222222] hover:bg-[#222222] hover:opacity-75 border-[#222222]" : ""}`} ref={delRef} onClick={() => handleButtonClick("del")}>
              ⌫
            </button>
            <button className={`${darkMode.darkMode ? "bg-[#222222] hover:bg-[#222222] hover:opacity-75 border-[#222222]" : ""}`} ref={leftParenthesisRef} onClick={() => handleButtonClick("(")}>
              (
            </button>
            <button className={`${darkMode.darkMode ? "bg-[#222222] hover:bg-[#222222] hover:opacity-75 border-[#222222]" : ""}`} ref={rightParenthesisRef} onClick={() => handleButtonClick(")")}>
              )
            </button>
            <button className={`${darkMode.darkMode ? "bg-[#222222] hover:bg-[#222222] hover:opacity-75 border-[#222222]" : ""}`} ref={exponentialRef} onClick={() => handleButtonClick("^")}>
              ^
            </button>
            <button className={`${darkMode.darkMode ? "bg-[#222222] hover:bg-[#222222] hover:opacity-75 border-[#222222]" : ""}`} ref={divideRef} onClick={() => handleButtonClick("÷")}>
              ÷
            </button>
            <button className={`${darkMode.darkMode ? "bg-[#222222] hover:bg-[#222222] hover:opacity-75 border-[#222222]" : ""}`} ref={sevenRef} onClick={() => handleButtonClick("7")}>
              7
            </button>
            <button className={`${darkMode.darkMode ? "bg-[#222222] hover:bg-[#222222] hover:opacity-75 border-[#222222]" : ""}`} ref={eightRef} onClick={() => handleButtonClick("8")}>
              8
            </button>
            <button className={`${darkMode.darkMode ? "bg-[#222222] hover:bg-[#222222] hover:opacity-75 border-[#222222]" : ""}`} ref={nineRef} onClick={() => handleButtonClick("9")}>
              9
            </button>
            <button className={`${darkMode.darkMode ? "bg-[#222222] hover:bg-[#222222] hover:opacity-75 border-[#222222]" : ""}`} ref={timesRef} onClick={() => handleButtonClick("×")}>
              ×
            </button>
            <button className={`${darkMode.darkMode ? "bg-[#222222] hover:bg-[#222222] hover:opacity-75 border-[#222222]" : ""}`} ref={fourRef} onClick={() => handleButtonClick("4")}>
              4
            </button>
            <button className={`${darkMode.darkMode ? "bg-[#222222] hover:bg-[#222222] hover:opacity-75 border-[#222222]" : ""}`} ref={fiveRef} onClick={() => handleButtonClick("5")}>
              5
            </button>
            <button className={`${darkMode.darkMode ? "bg-[#222222] hover:bg-[#222222] hover:opacity-75 border-[#222222]" : ""}`} ref={sixRef} onClick={() => handleButtonClick("6")}>
              6
            </button>
            <button className={`${darkMode.darkMode ? "bg-[#222222] hover:bg-[#222222] hover:opacity-75 border-[#222222]" : ""}`} ref={minusRef} onClick={() => handleButtonClick("-")}>
              -
            </button>
            <button className={`${darkMode.darkMode ? "bg-[#222222] hover:bg-[#222222] hover:opacity-75 border-[#222222]" : ""}`} ref={oneRef} onClick={() => handleButtonClick("1")}>
              1
            </button>
            <button className={`${darkMode.darkMode ? "bg-[#222222] hover:bg-[#222222] hover:opacity-75 border-[#222222]" : ""}`} ref={twoRef} onClick={() => handleButtonClick("2")}>
              2
            </button>
            <button className={`${darkMode.darkMode ? "bg-[#222222] hover:bg-[#222222] hover:opacity-75 border-[#222222]" : ""}`} ref={threeRef} onClick={() => handleButtonClick("3")}>
              3
            </button>
            <button className={`${darkMode.darkMode ? "bg-[#222222] hover:bg-[#222222] hover:opacity-75 border-[#222222]" : ""}`} ref={plusRef} onClick={() => handleButtonClick("+")}>
              +
            </button>
            <button className={`${darkMode.darkMode ? "bg-[#222222] hover:bg-[#222222] hover:opacity-75 border-[#222222]" : ""}`} ref={othersRef} onClick={() => handleButtonClick("others")}>
              +/-
            </button>
            <button className={`${darkMode.darkMode ? "bg-[#222222] hover:bg-[#222222] hover:opacity-75 border-[#222222]" : ""}`} ref={zeroRef} onClick={() => handleButtonClick("0")}>
              0
            </button>
            <button className={`${darkMode.darkMode ? "bg-[#222222] hover:bg-[#222222] hover:opacity-75 border-[#222222]" : ""}`} ref={pointRef} onClick={() => handleButtonClick(".")}>
              .
            </button>
            <button disabled={btnDisabled} ref={equalsRef} onClick={() => handleButtonClick("equals")} id="equals-btn" className={`bg-[#00308f] text-white ${darkMode.darkMode ? "border-none" : ""}`}>
              =
            </button>
          </section>
        </section>
        <aside className={`h-screen w-[30%] rounded-md ${darkMode.darkMode ? "bg-[#222222] text-white" : "bg-gray-100"} hidden lg:inline-block p-3`}>
          <h2 className="font-semibold mb-5">History</h2>
          {history.length > 1 && history.map((exp, index) =>
              <p
                onClick={() =>
                  setExpression(prevString => (prevString = exp.toString()))}
                key={index}
                className="mb-5 w-full p-1.5 cursor-pointer"
              >
                {exp}
              </p>
            )}
        </aside>
      </section>
    </main>;
}
