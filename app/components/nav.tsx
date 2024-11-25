"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from 'next/navigation'

export default function Nav() {

    const pathname = usePathname()

    return <>
        <div className="col-3">
            <div className="list-group">
                <Link href="/" className={"list-group-item list-group-item-action " + (pathname == "/" ? "active" : "")}>
                    Home
                </Link>
                <Link href="/about" className={"list-group-item list-group-item-action " + (pathname == "/about" ? "active" : "")}>
                    About Us
                </Link>
                <Link href="/contact" className={"list-group-item list-group-item-action " + (pathname == "/contact" ? "active" : "")}>
                    Contact Us
                </Link>
            </div>
            <p className="small text-danger text-center mt-3 text-warning">
                Coffee: the magic potion that turns morning mayhem into midday clarity.
            </p>
        </div>
    </>
}