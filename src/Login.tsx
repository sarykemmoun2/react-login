import React from 'react'

const Login: React.FC<{text: string; onLogin: () =>{}; className:string}> = ({ text, onLogin, className }) => {
    return (
        <button className={className} onClick={onLogin}>{text}</button>
    )
}
export default Login;