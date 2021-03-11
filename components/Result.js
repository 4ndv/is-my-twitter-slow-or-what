const SIZE = 3000

const Result = ({ started, ended }) => {
  const time = (ended - started) / 1000
  const speed = SIZE / time

  let result = null

  if (speed < 700) {
    result = <b>замедлен</b>
  } else {
    result = <b>не замедлен</b>
  }

  return (
    <>
      <h3>&#8776; {speed.toFixed(2)} kbps, {Math.round(time)} секунд</h3>
      <p>Скорее всего, твиттер у вас: <b>{result}</b></p>
    </>
  )
}

export default Result
