import React from "react";
import arrow from '../src/arrow-right.svg'
import wave from '../src/wave.svg'


function App() {
  return (
    <div className="text-slate-100 flex flex-col min-h-screen  bg-slate-600">

      <header className="flex flex-col justify-center text-center bg-slate-700 items-center gap-12 pb-5">
        <button className="border-2 border-slate-300 text-xl py-3 m-5 px-3 ml-auto hover:bg-slate-100 hover:text-slate-900 font-semibold transition-colors">Reset game</button>
        <h1 className="text-4xl mx-3">Guess the number in range 1-20</h1>
        <p className="bg-white text-slate-900 w-[10rem] mx-auto py-4 text-4xl">10</p>
      </header>


      <img src={wave} alt="waves transition" />


      <main className="flex justify-center items-center pt-10 gap-20 max-[640px]:flex-col max-[640px]:gap-0">
        <article className="text-2xl max-[640px]:order-last mb-14 max-[640px]:text-center">
          <p className="-mt-2">Start guessing <img className="max-[640px]:hidden inline-block w-7 h-7" src={arrow} alt="" /></p>
          <p className="mt-14">Score:</p>
          <p className="mt-1">Highscore:</p>
        </article>

        <article className="flex flex-col w-48 gap-8 mb-14">
          <input className="border-2 text-center bg-slate-600 h-20 text-5xl border-cyan-300" type="text" />
          <button className="text-xl py-3 px-3 bg-slate-100 font-semibold text-slate-900 w-[80%] mx-auto transition-colors hover:bg-slate-300">Check !</button>
        </article>
      </main>

    </div>
  );
}

export default App;
