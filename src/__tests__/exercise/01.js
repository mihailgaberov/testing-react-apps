// simple test with ReactDOM
// http://localhost:3000/counter

import React from 'react'
import ReactDOM from 'react-dom'
import Counter from '../../components/counter'

test('counter increments and decrements when the buttons are clicked', () => {
  // 🐨 create a div to render your component to (💰 document.createElement)
  const div = document.createElement("div");  
  
  // 🐨 append the div to document.body (💰 document.body.append)
  document.body.append(div);

  // 🐨 use ReactDOM.render to render the <Counter /> to the div
  ReactDOM.render(<Counter />, div);
  // 🐨 get a reference to the increment and decrement buttons:
  const buttons = div.querySelectorAll('button') //   💰 div.querySelectorAll('button')
  console.log(buttons[0])
  // 🐨 get a reference to the message div:
  const msg = div.firstChild.querySelector('div')
  //   💰 div.firstChild.querySelector('div')
  //
  // 🐨 expect the message.textContent toBe 'Current count: 0'
  expect(msg.textContent).toBe('Current count: 0')
  // 🐨 click the increment button (💰 increment.click())

  // 🐨 assert the message.textContent
  // 🐨 click the decrement button (💰 decrement.click())
  // 🐨 assert the message.textContent
  //
  // 🐨 cleanup by removing the div from the page (💰 div.remove())
  // 🦉 If you don't cleanup, then it could impact other tests and/or cause a memory leak
})

/* eslint no-unused-vars:0 */
