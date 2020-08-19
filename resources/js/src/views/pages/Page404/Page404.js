import React from "react"
import { useHistory } from "react-router-dom"

// components
import { Button } from "../../components"

export default function Page404() {
  const { goBack } = useHistory()

  return (
    <div className="error-page">
      <img src="/images/404-error.png" />
      <h3>Page not found</h3>
      <Button action={() => goBack()}>GO BACK</Button>
    </div>
  )
}
