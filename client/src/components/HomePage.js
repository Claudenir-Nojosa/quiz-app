"use client"

import Link from "next/link";
import React, { useRef } from "react";

const HomePage = () => {

  const inputRef = useRef();
  return (
    <div>
      <h1>Quiz!</h1>
      <ol>
        <li>Regra n#1</li>
        <li>Regra n#2</li>
        <li>Regra n#3</li>
        <li>Regra n#4</li>
        <li>Regra n#5</li>
      </ol>
      <form>
        <input ref={inputRef} type="text" placeholder="Usuario"></input>
      </form>
      <div>
        <button><Link href='./quiz'>Acessar o Quiz!</Link></button>
      </div>
    </div>
  );
};

export default HomePage;
