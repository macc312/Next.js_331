"use client";

import { useState } from "react";

// Another React component
function CountButton() {
    const [count, setCount] = useState(0); // React hook

    return (
        <>
            <button onClick={() => setCount(prev => prev + 1)}>
                +1
            </button>
            <div>{count}</div>
        </>
    );
};

export default function Page() { // JSX = readable
    return (
    <>
        <h1>JSX: The Process</h1>
        <CountButton />
        <ul>
            <li>JSX looks like HTML</li>
            <li>HTML gets translated into JavaScript</li> 
            <li>JSX creates React elements (JS objects)</li>
            <li>ReactDOM uses it to create/update DOM nodes</li>
            <li>The browser displays as HTML & elements</li>
        </ul>
    </>
)
}

