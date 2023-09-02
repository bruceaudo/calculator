"use client"
import Navigation from "./components/Navigation";
import { useDarkMode } from "./hooks/useDarkMode";


export default function Home() {

  let buttons = ["%", "C", "⌫", "÷", 7, 8, 9, "×", 4, 5, 6, "-", 1, 2, 3, "+", "+/-", 0, ".", "="];

  //const {darkMode, setDarkMode} =useDarkMode()
  const darkMode = true

  return (
    <main className={`flex flex-col`}>
      <Navigation />
      <section className="max-h-screen flex lg:px-[32px] gap-2.5">
        <section className="w-3/4 my-2.5 h-screen flex flex-col gap-y-2.5">
          <div className={`rounded-md p-3 bg-white w-full h-32 flex items-end justify-end`}>
            <p className="text-[40px] font-semibold">0</p>
          </div>

          <div className={`rounded-t-md -mb-2.5 p-3 bg-white w-full h-14 grid grid-cols-4`}>
            Options
          </div>
          <div className={`grid grid-cols-4 gap-1 rounded-b-md bg-white w-full p-3 grid-rows-5`}>
            {
              buttons && buttons.map((button, index) => (
                <button id="dark-btn" className={ `h-[60px] rounded-md font-semibold text-lg ${button === '='?'bg-[#00308f] text-white border-none hover:bg-[#00308f] hover:opacity-90':'hover:bg-gray-100 border'}`} key={index}>{button}</button>
            ))
            }

          </div>
        </section>
        <section className={`w-1/4 bg-white my-2.5 rounded-md p-3 h-screen`}>Right</section>
      </section>
    </main>
  )
}
