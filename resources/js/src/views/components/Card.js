import React from "react"
import CountUp, { useCountUp } from "react-countup"

// hooks
import { useThousand } from "../../hooks"

export default function Card({ figure, label, prefix, thousand }) {
  const { countUp } = useCountUp({ end: figure, prefix: prefix })

  return (
    <div className="dashboard-card">
      <h3>
        {thousand ? (
          useThousand(countUp)
        ) : (
          <CountUp end={figure} prefix={prefix ? prefix : null} />
        )}
      </h3>
      <div className="line"></div>
      <h4>{label}</h4>
    </div>
  )
}
