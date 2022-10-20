import React, { useState, useEffect } from 'react'

export const DateTime = () => {
    var [date, setDate] = useState(new Date())

    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }
    })

    return (
        <div className="DateTime">
            <p>
                {' '}
                Время : {date.toLocaleTimeString()} Дата :{' '}
                {date.toLocaleDateString()} Напряжение в сети : 630 В
            </p>
        </div>
    )
}

export default DateTime
