"use client";

import Link from "next/link";
import { useState } from "react";

export default function Page() { // JSX = readable
    return (
    <>
        <h1>GitHub Repo</h1>
        <p>GitHub Repo Linked Below</p>
        <Link href="https://github.com/macc312/Next.js_331">View my Repo on GitHub</Link>
    </>
)
}

