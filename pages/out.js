
import { useEffect } from 'react'

export default function Out() {
  useEffect(() => {
    window.location.href = 'https://shopeday.netlify.app/'
  }, [])

  return <p>Redirecionando...</p>
}
