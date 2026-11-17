"use client";

import Link from "next/link";
import { useState } from "react";

// Another React component
function CountButton({ color }: { color: string }) {
    const [count, setCount] = useState(0); // React hook

    return (
        <>
            <button 
            style={{ backgroundColor: color }}
            onClick={() => setCount(prev => prev + 1 > 10 ? 0 : prev + 1)}>
                +1
            </button>
            <div>{count}</div>
        </>
    );
};

function CountButton2({ color }: { color: string }) {
    const [count, setCount] = useState(0); // React hook

    return (
        <>
            <button 
            style={{ backgroundColor: color }}
            onClick={() => setCount(prev => prev + 2 > 10 ? 0 : prev + 2)}>
                +2
            </button>
            <div>{count}</div>
        </>
    );
};

function CountButton3({ color }: { color: string }) {
    const [count, setCount] = useState(1); // React hook

    return (
        <>
            <button
            style={{ backgroundColor: color }} 
            onClick={() => setCount(prev => prev + prev > 10 ? 1 : prev + prev)}>
                2^n
            </button>
            <div>{count}</div>
        </>
    );
};

export default function Page() { // JSX = readable
    return (
    <>
        <h1>JSX: The Process</h1>
        <CountButton color="blue"/>
        <CountButton2 color = "green"/>
        <CountButton3 color = "red"/>
    </>
)
}

