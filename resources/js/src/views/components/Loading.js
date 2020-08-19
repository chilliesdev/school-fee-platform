import React, { useEffect } from "react"
// components
import { CircularProgress } from "@material-ui/core"
// hooks
import { useBodyOverflow } from "../../hooks"

export default function Loading({
  color = "primary",
  size = "sm",
  background = "default",
  relative
}) {
  const styles = () => {
    switch (size) {
      case "lg":
        return { height: "3rem", width: "3rem" }

      case "md":
        return { height: "2rem", width: "2rem" }

      default:
        return { height: "1.3rem", width: "1.3rem" }
    }
  }

  useEffect(() => {
    background === "full" && useBodyOverflow()
    return () => {
      useBodyOverflow("unset")
    }
  }, [background])

  const Spinner = () => (
    <CircularProgress
      style={styles()}
      className={`loading ${color} ${size} ${relative && "relative"}`}
    />
  )

  return background === "full" ? (
    <div className="loading-bg">
      <Spinner />
    </div>
  ) : (
    <Spinner />
  )
}
