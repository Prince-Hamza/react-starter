import React from 'react'
import { Content } from '../styles/styles'

export default function Center({ children }) {
    return (
        <div style={Styles.Center}>
            {children}
        </div>
    )
}

const Styles = ({
    Center: {
        width: '100%',
        ...Content.rowCentrify
    }
})
