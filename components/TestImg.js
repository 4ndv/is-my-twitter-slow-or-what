import { useEffect, useState } from 'react'

const TestImg = ({ type, src, onLoad }) => {
  const [nonce, setNonce] = useState(null)
  const [startedAt, setStartedAt] = useState(false)

  // Меняем nonce при рендере
  useEffect(() => {
    setNonce(Math.random())
    setStartedAt(+new Date())
  }, [src]);

  const onLoadCallback = () => onLoad(type, +new Date() - startedAt)

  if (nonce) {
    return <img className="inline-flex" src={`${src}?nocache=${nonce}`} onLoad={onLoadCallback} width={100} height={100} />
  }

  return null
}

export default TestImg
