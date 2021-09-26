import React from 'react'
import { Link } from 'react-router-dom'

// rfc
export default function Home() {
    return (
        <div>
            <p>Home</p>
            <Link to='/about'>About</Link>
        </div>
    )
}
