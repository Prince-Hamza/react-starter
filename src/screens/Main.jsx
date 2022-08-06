import React from 'react'
import { useNavigate } from "react-router-dom"

export default function Main() {
    const navigate = useNavigate()
    return (
        <div onClick={() => { navigate('/plan') }}> React Starter App </div>
    )
}
