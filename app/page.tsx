'use client';
import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);
  const [beginTime, setBeginTime] = useState<Date | null>(null);
  const [lastTime, setLastTime] = useState<Date | null>(null);
  const [darkMode, setDarkMode] = useState(true);

  const increment = () => {
    if (count === 0) {
      setBeginTime(new Date());
    }
    setCount(count + 1);
    setLastTime(new Date());
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setLastTime(new Date());
    }
  };

  const reset = () => {
    setCount(0);
    setBeginTime(null);
    setLastTime(null);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <button
        className="absolute top-4 left-4 bg-gray-500 text-white px-3 py-1 rounded text-lg"
        onClick={toggleDarkMode}
      >
        {darkMode ? 'Light' : 'Dark'}
      </button>
      <h1 className="text-6xl font-bold mb-8">Tally Counter</h1>
      <div className="flex items-center mb-8">
        <button
          className="bg-red-500 text-white px-6 py-3 rounded mr-8 text-4xl"
          onClick={decrement}
        >
          -
        </button>
        <span className="text-4xl font-bold">{count}</span>
        <button
          className="bg-green-500 text-white px-6 py-3 rounded ml-8 text-4xl"
          onClick={increment}
        >
          +
        </button>
      </div>
      <button
        className="bg-blue-500 text-white px-6 py-3 rounded mb-8 text-2xl"
        onClick={reset}
      >
        Reset
      </button>
      <div className="min-h-12">
        {beginTime && (
          <p className="text-2xl">
            Begin time: {beginTime.toLocaleDateString()}{' '}
            {beginTime.toLocaleTimeString()}
          </p>
        )}
        {lastTime && (
          <p className="text-2xl">
            Last time: {lastTime.toLocaleDateString()}{' '}
            {lastTime.toLocaleTimeString()}
          </p>
        )}
      </div>
    </div>
  );
}
