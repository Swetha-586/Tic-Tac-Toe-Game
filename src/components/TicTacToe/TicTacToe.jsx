import React, { useState, useRef } from 'react'
import './TicTacToe.css'
import circle_icon from '../assests/circle.png'
import cross_icon from '../assests/cross.png'

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);
    let titleRef = useRef(null);
    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);

    const toggle = (e, num) => {
        if (lock) return;
        if (data[num] !== "") return;
        if (count % 2 === 0) {
            e.target.innerHTML = `<img src='${cross_icon}' />`;
            data[num] = "x";
            setCount(++count);
        } else {
            e.target.innerHTML = `<img src='${circle_icon}' />`;
            data[num] = "o";
            setCount(++count);
        }
        checkWin();
    }

    const checkWin = () => {
        // rows
        if (data[0] === data[1] && data[1] === data[2] && data[0] !== "") won(data[0]);
        else if (data[3] === data[4] && data[4] === data[5] && data[3] !== "") won(data[3]);
        else if (data[6] === data[7] && data[7] === data[8] && data[6] !== "") won(data[6]);
        // cols
        else if (data[0] === data[3] && data[3] === data[6] && data[0] !== "") won(data[0]);
        else if (data[1] === data[4] && data[4] === data[7] && data[1] !== "") won(data[1]);
        else if (data[2] === data[5] && data[5] === data[8] && data[2] !== "") won(data[2]);
        // diagonals
        else if (data[0] === data[4] && data[4] === data[8] && data[0] !== "") won(data[0]);
        else if (data[2] === data[4] && data[4] === data[6] && data[2] !== "") won(data[2]);
    }

    const won = (winner) => {
        setLock(true);
        titleRef.current.innerHTML = `Congratulations: <img src='${winner === "x" ? cross_icon : circle_icon}' /> is winner`;
    }

    const reset = () => {
        setLock(false);
        data = ["", "", "", "", "", "", "", "", ""];
        titleRef.current.innerHTML = 'Tic Tac Toe game In <span>React</span>';
        box1.current.innerHTML = "";
        box2.current.innerHTML = "";
        box3.current.innerHTML = "";
        box4.current.innerHTML = "";
        box5.current.innerHTML = "";
        box6.current.innerHTML = "";
        box7.current.innerHTML = "";
        box8.current.innerHTML = "";
        box9.current.innerHTML = "";
        setCount(0);
    }

    return (
        <div className='container'>
            <h1 className='title' ref={titleRef}>Tic Tac Toe game In <span>React</span></h1>
            <div className='board'>
                <div className="boxes" ref={box1} onClick={(e) => { toggle(e, 0) }}></div>
                <div className="boxes" ref={box2} onClick={(e) => { toggle(e, 1) }}></div>
                <div className="boxes" ref={box3} onClick={(e) => { toggle(e, 2) }}></div>
                <div className="boxes" ref={box4} onClick={(e) => { toggle(e, 3) }}></div>
                <div className="boxes" ref={box5} onClick={(e) => { toggle(e, 4) }}></div>
                <div className="boxes" ref={box6} onClick={(e) => { toggle(e, 5) }}></div>
                <div className="boxes" ref={box7} onClick={(e) => { toggle(e, 6) }}></div>
                <div className="boxes" ref={box8} onClick={(e) => { toggle(e, 7) }}></div>
                <div className="boxes" ref={box9} onClick={(e) => { toggle(e, 8) }}></div>
            </div>
            <button className='reset' onClick={reset}>Reset</button>
        </div>
    )
}

export default TicTacToe;
