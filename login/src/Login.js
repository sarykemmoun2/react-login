import React from 'react'

export default function Login({ text, onLogin }) {
    return <button onClick={onLogin}>{text}</button>
}