import React, { ReactElement, useState } from "react";

const Index = (): ReactElement => {
  const [tip, setTip] = useState(0);
  const [bill, setBill] = useState(0);
  const [noPeople, setNoPeople] = useState(1);
  const handleReset = () => {
    setTip(0);
    setNoPeople(1);
    setBill(0);
  };
  return (
    <main className="flex w-screen md:h-screen justify-center items-center">
      <div className="container mx-auto flex flex-col gap-10 justify-center items-center p-28 bg-cyan-grayish-light-1">
        <p className="break-all uppercase text-center tracking-[0.5em] text-xl font-bold font-space-mono  text-cyan-dark">
          Spli <br />
          Tter
        </p>
        <div className="flex flex-col w-screen md:w-max md:flex-row p-5 gap-5 bg-white rounded-2xl shadow-lg">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <label className="font-space-mono text-cyan-grayish-dark-1">
                Bill
              </label>
              <div className="flex relative items-center ">
                <input
                  type="text"
                  onFocus={(e) => e.target.select()}
                  onChange={(e) => setBill(Number(e.target.value))}
                  value={bill}
                  className="font-space-mono focus:outline-none focus:ring-0 focus:border-2 focus:border-primary text-right font-bold text-xl w-full text-cyan-dark bg-cyan-grayish-light-2 py-1 px-3 rounded"
                  defaultValue="0.00"
                />
                <p className="absolute font-space-mono text-2xl top-0 left-3 text-cyan-grayish-light-1">
                  $
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="font-space-mono text-cyan-grayish-dark-1">
                Select Tip %
              </p>
              <div className="grid grid-flow-row grid-cols-3 gap-4">
                <div
                  onClick={(e) => setTip(5)}
                  className={
                    tip === 5
                      ? "bg-primary text-cyan-dark font-space-mono font-bold tracking-wide rounded px-5 py-1 justify-center inline-flex"
                      : "font-space-mono text-white font-bold tracking-wide rounded bg-cyan-dark px-5 py-1 justify-center inline-flex"
                  }
                >
                  5%
                </div>
                <div
                  onClick={(e) => setTip(10)}
                  className={
                    tip === 10
                      ? "bg-primary text-cyan-dark font-space-mono font-bold tracking-wide rounded px-5 py-1 justify-center inline-flex"
                      : "font-space-mono text-white font-bold tracking-wide rounded bg-cyan-dark px-5 py-1 justify-center inline-flex"
                  }
                >
                  10%
                </div>
                <div
                  onClick={(e) => setTip(15)}
                  className={
                    tip === 15
                      ? "bg-primary text-cyan-dark font-space-mono font-bold tracking-wide rounded px-5 py-1 justify-center inline-flex"
                      : "font-space-mono text-white font-bold tracking-wide rounded bg-cyan-dark px-5 py-1 justify-center inline-flex"
                  }
                >
                  15%
                </div>
                <div
                  onClick={(e) => setTip(25)}
                  className={
                    tip === 25
                      ? "bg-primary text-cyan-dark font-space-mono font-bold tracking-wide rounded px-5 py-1 justify-center inline-flex"
                      : "font-space-mono text-white font-bold tracking-wide rounded bg-cyan-dark px-5 py-1 justify-center inline-flex"
                  }
                >
                  25%
                </div>
                <div
                  onClick={(e) => setTip(50)}
                  className={
                    tip === 50
                      ? "bg-primary text-cyan-dark font-space-mono font-bold tracking-wide rounded px-5 py-1 justify-center inline-flex"
                      : "font-space-mono text-white font-bold tracking-wide rounded bg-cyan-dark px-5 py-1 justify-center inline-flex"
                  }
                >
                  50%
                </div>
                <input
                  type="text"
                  className="font-space-mono w-16 focus:outline-none focus:ring-0 focus:border-2 focus:border-primary font-bold text-cyan-dark bg-cyan-grayish-light-2 py-1 px-3 rounded"
                  placeholder="Custom"
                  onChange={(e) => setTip(Number(e.target.value))}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between w-full">
                <p className="font-space-mono text-xs text-cyan-grayish-dark-2">
                  Number of People
                </p>
                {noPeople <= 0 && (
                  <p className="font-space-mono text-xs text-red-600">
                    Can't be zero
                  </p>
                )}
              </div>
              <input
                type="text"
                className={`font-space-mono text-right focus:outline-none focus:ring-0 focus:border-2 font-bold text-cyan-dark bg-cyan-grayish-light-2 py-1 px-3 rounded ${
                  noPeople <= 0
                    ? "border-red-600 focus:border-red-600"
                    : "focus:border-primary"
                }`}
                placeholder="Custom"
                value={noPeople}
                onFocus={(e) => e.target.select()}
                onChange={(e) => setNoPeople(Number(e.target.value))}
              />
            </div>
          </div>
          <div className="flex flex-col bg-cyan-dark p-7 gap-5 rounded-xl">
            <div className="flex w-64 items-center justify-between">
              <div className="felx flex-col items-center mt-3">
                <p className="font-space-mono font-bold text-sm text-cyan-grayish-light-2">
                  Tip Amount
                </p>
                <p className="font-space-mono text-xs text-cyan-grayish-light-1">
                  / Person
                </p>
              </div>
              <p className="font-space-mono font-bold text-4xl text-primary">
                ${((bill * (tip / 100)) / noPeople).toFixed(2)}
              </p>
            </div>
            <div className="flex w-64 items-center justify-between">
              <div className="felx flex-col items-center mt-3">
                <p className="font-space-mono font-bold text-sm text-cyan-grayish-light-2">
                  Total
                </p>
                <p className="font-space-mono text-xs text-cyan-grayish-light-1">
                  / Person
                </p>
              </div>
              <p className="font-space-mono font-bold text-4xl text-primary">
                ${((bill * (tip / 100) + bill) / noPeople).toFixed(2)}
              </p>
            </div>
            <div className="mt-10">
              <button
                type="button"
                onClick={handleReset}
                className="w-full py-2 uppercase font-space-mono font-bold hover:text-cyan-dark hover:bg-cyan-grayish-light-1 bg-primary text-cyan-grayish-light-2"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;
