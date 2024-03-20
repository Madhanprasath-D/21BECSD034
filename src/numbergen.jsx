import React from 'react'
import { useState } from 'react';
export const NumberGen = () => {
    const [seriesType, setSeriesType] = useState('prime');
    const [number, setNumber] = useState(1); 
    const [result, setResult] = useState([]);
  
    const handleSeriesChange = (event) => {
      setSeriesType(event.target.value);
      setResult([]); 
    };
  
    const handleNumberChange = (event) => {
      setNumber(parseInt(event.target.value));
    };
  
    const generateSeries = () => {
      setResult([]);
      let series = [];
      switch (seriesType) {
        case 'prime':
          series = generatePrimes(number);
          break;
        case 'fibonacci':
          series = generateFibonacci(number);
          break;
        case 'random':
          series = generateRandom(number);
          break;
        case 'even':
          series = generateEven(number);
          break;
        case 'odd':
          series = generateOdd(number);
          break;
        default:
          series = [];
      }
      setResult(series);
    };
  
    const generatePrimes = (n) => {
      const primes = [];
      for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
          primes.push(i);
        }
      }
      return primes;
    };
  
    const isPrime = (num) => {
      if (num <= 1) return false;
      if (num <= 3) return true;
      if (num % 2 === 0 || num % 3 === 0) return false;
      for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
      }
      return true;
    };
  
    const generateFibonacci = (n) => {
      const fib = [];
      let a = 0,
        b = 1;
      for (let i = 0; i < n; i++) {
        fib.push(a);
        const temp = a;
        a = b;
        b = temp + b;
      }
      return fib;
    };
  
    const generateRandom = (n) => {
      const randomNumbers = [];
      for (let i = 0; i < n; i++) {
        randomNumbers.push(Math.floor(Math.random() * 100) + 1);
      }
      return randomNumbers;
    };
  
    const generateEven = (n) => {
      const evenNumbers = [];
      for (let i = 0; i < n; i++) {
        evenNumbers.push(i * 2);
      }
      return evenNumbers;
    };
  
    const generateOdd = (n) => {
      const oddNumbers = [];
      for (let i = 0; i < n; i++) {
        oddNumbers.push(i * 2 + 1);
      }
      return oddNumbers;
    };
  
    return (
      <div>
        <h1>Number Series Generator</h1>
        <select value={seriesType} onChange={handleSeriesChange} className='continer'>
          <option value="prime">Prime Numbers</option>
          <option value="fibonacci">Fibonacci Sequence</option>
          <option value="random">Random Numbers</option>
          <option value="even">Even Numbers</option>
          <option value="odd">Odd Numbers</option>
        </select>
        <input
          type="number"
          value={number}
          onChange={handleNumberChange}
          min={1}
          className='continer'
        />
        <button onClick={generateSeries} className='btn'>Generate</button>
        {result.length > 0 && (
          <ul>
            {result.map((num) => (
              <li key={num}>{num}</li>
            ))}
          </ul>
        )}
      </div>
    );
}
