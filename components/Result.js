const SIZE = 3000

const Result = ({ test, control, controlTaco }) => {
  const testTime = test / 1000
  const controlTime = control / 1000
  const controlTacoTime = controlTaco / 1000

  const testSpeed = SIZE / test * 1000
  const controlSpeed = SIZE / control * 1000
  const controlTacoSpeed = SIZE / controlTaco * 1000

  let result = null

  if (testSpeed < 600 && controlSpeed > 600) {
    result = <b>замедлен</b>
  } else if (controlSpeed < 600) {
    result = <b>возможно замедлен (скорость контроля &lt; 600 kpbs)</b>
  } else {
    result = <b>не замедлен</b>
  }

  return (
    <>
      <h3>&#8776; {testSpeed.toFixed(2)} kbps, {Math.round(testTime)} секунд(-а)</h3>
      <p>Скорее всего, твиттер у вас: <b>{result}</b></p>
      <p>Контроль 1 (эта же картинка с другого сервера): {controlSpeed.toFixed(2)} kbps, {Math.round(controlTime)} секунд(-а)</p>
      <p>Контроль 2 (эта же картинка с другого сервера, в адресе которого есть <code>t.co</code>): {controlTacoSpeed.toFixed(2)} kbps, {Math.round(controlTacoTime)} секунд(-а)</p>
    </>
  )
}

export default Result
