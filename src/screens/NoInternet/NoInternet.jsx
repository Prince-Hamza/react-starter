import React, { useState, useEffect } from 'react'
import { Col } from 'react-bootstrap'

const NetEvents = (props) => {
    const [isOnline, setOnline] = useState(true)

    useEffect(() => {
        setOnline(navigator.onLine)
    }, [])


    window.addEventListener('online', () => {
        setOnline(true)
    })

    window.addEventListener('offline', () => {
        setOnline(false)
    })


    if (isOnline) {
        return (props.children)
    } else {
        return (
            <Col lg={12} xs={12}>
                <h2>
                    No Interner Connection Please try again later
                </h2>
            </Col>
        )
    }
}

export default NetEvents

const Styles = ({

})

