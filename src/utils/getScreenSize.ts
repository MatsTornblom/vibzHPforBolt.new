import React, { useState, useEffect } from "react"

export const getScreenSize = () => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)

    setWidth(window.innerWidth)

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return width
}
