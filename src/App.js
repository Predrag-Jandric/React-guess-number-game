import React from "react";
import wave from '../src//assets/wave.svg'
import ConfettiExplosion from 'react-confetti-explosion';

function App() {
  const generateRandomNum = function (min, max) {
    return Math.trunc(Math.random() * (max - min + 1)) + min;
  }

  const [secretNum, setSecretNum] = React.useState(generateRandomNum(1, 15));
  const [inputNum, setInputNum] = React.useState(0);
  const [message, setMessage] = React.useState("Start guessing...");
  const [score, setScore] = React.useState(30);
  const [highScore, setHighScore] = React.useState(0);
  const [win, setWin] = React.useState(false)

  const [isExploding, setIsExploding] = React.useState(false);

  const checkNumber = () => {
    if (inputNum === "") {
      setMessage("Start guessing...");
    } else if (inputNum > secretNum) {
      setMessage("❌ Too high");
      setScore((prev) => prev - 1);
    } else if (inputNum < secretNum) {
      setMessage("❌ Too low");
      setScore((prev) => prev - 1);
      // eslint-disable-next-line eqeqeq
    } else if (inputNum == secretNum) {
      setMessage("✅ Correct !");
      setWin(true)
      setIsExploding(true)
      if (score > highScore) {
        setHighScore(score);
      }
    }
  };

  const handleReset = () => {
    setSecretNum(generateRandomNum(1, 15))
    setInputNum(0)
    setMessage("Start guessing...")
    setScore(30)
    setWin(false)
    setIsExploding(false)
  }

  return (
    <main className="text-slate-100 flex flex-col min-h-screen  bg-slate-600">
      <header className="flex flex-col justify-center text-center bg-slate-700 items-center gap-12 pb-5">
        <button onClick={handleReset} className={`${win ? "animate-bounce" : ""} border-2 border-slate-300 text-xl py-3 m-5 px-3 ml-auto hover:bg-slate-100 hover:text-slate-900 font-semibold transition-all`}>Reset game</button>
        <h1 className="text-4xl mx-3">{win ? "The secret number was" : "Guess the number in range 1-15"}<span>{isExploding && <ConfettiExplosion />}</span></h1>
        <p className={`bg-white text-slate-900 w-[10rem] mx-auto py-4 text-4xl ${win ? "bg-green-300" : ""}`}>{win ? secretNum : "?"}</p>
      </header>

      <img src={wave} alt="waves transition" />

      <section className="flex justify-center items-center pt-10 gap-20 max-[640px]:flex-col max-[640px]:gap-0">
        <article className="text-2xl max-[640px]:order-last mb-14 max-[640px]:text-center">
          <p className="-mt-6">{message}</p>
          <p className="mt-14">Score: {score}</p>
          <p className="mt-1">Highscore: {highScore}</p>
        </article>
        <article className="flex flex-col w-48 gap-8 mb-14 relative">
          <input
            onChange={(e) => setInputNum(e.target.value)}
            value={inputNum}
            className="border-2 text-center bg-slate-600 h-24 text-5xl border-cyan-300"
            type="number"
          />
          <button
            onClick={checkNumber}
            className="text-xl py-3 px-3 bg-slate-100 font-semibold text-slate-900 w-[80%] mx-auto transition-colors hover:bg-slate-400 hover:text-white"
          >
            Check !
          </button>
        </article>
      </section>
    </main>
  );
}

export default App;
