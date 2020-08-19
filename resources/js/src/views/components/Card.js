import React, { useState, useEffect } from "react"

export default function Card({ figure, label, animate }) {
  const [dynamicfigure, setDynamicfigure] = useState(0)
  const [timer, setTimer] = useState()

  useEffect(() => {
    if (figure && animate) {
      countUp(0, figure, 2000)

      return () => dynamicfigure === figure && clearInterval(timer)
    }
  }, [figure])

  const countUp = (start, end, duration) => {
    let range = end - start
    // let current = start
    // let increment = 1
    let stepTime = Math.abs(Math.floor(duration / range))

    setTimer(
      setInterval(() => {
        // current += increment
        setDynamicfigure((prevDynamicfigure) => prevDynamicfigure + 100)
      }, stepTime)
    )
  }

  return (
    <div className="dashboard-card">
      <h3>{animate ? dynamicfigure : figure}</h3>
      <div className="line"></div>
      <h4>{label}</h4>
    </div>
  )
}
