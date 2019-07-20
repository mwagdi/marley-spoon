import React, { useEffect } from 'react'

export default () => {
    useEffect(() => {
        console.log("hello")
    })
    return (
        <React.Fragment>
            <h1>Hello</h1>
        </React.Fragment>
    )
}