const SIZE = 3000

const Result = ({ test, control, controlTaco }) => {
  const testTime = test / 1000
  const controlTime = control / 1000
  const controlTacoTime = controlTaco / 1000

  const testSpeed = SIZE / test * 1000
  const controlSpeed = SIZE / control * 1000
  const controlTacoSpeed = SIZE / controlTaco * 1000

  let result = null
  let ad = null

  if (testSpeed < 600 && controlSpeed > 600) {
    result = <b>замедлен</b>

    // Один раз живём
    ad = (
      <blockquote>
        <p>
          Если хотите вернуть как раньше — установите <a target="_blank" href="https://my.redshieldvpn.com/?r=TWITTER">Red Shield VPN</a> всего за $39 на год с промокодом TWITTER.
          <br />
          <i>- на правах рекламы</i>
        </p>
      </blockquote>
    )
  } else if (controlSpeed < 600) {
    result = <b>возможно замедлен (скорость контроля &lt; 600 kpbs)</b>
  } else {
    result = <b>не замедлен</b>
  }

  const logParams = new URLSearchParams({ test: testSpeed.toFixed(2), control: controlSpeed.toFixed(2), controlTaco: controlTacoSpeed.toFixed(2), v: 4 })

  const logUrl = `https://imtsow-new.lynx.pink/log.png?${logParams.toString()}`
  const darkkLogUrl = `https://darkk.net.ru/garbage/is-my-twitter-slow-or-what/log?${logParams.toString()}`

  return (
    <>
      <h3>&#8776; {testSpeed.toFixed(2)} kbps, {Math.round(testTime)} секунд(-а)</h3>
      <p>Скорее всего, твиттер у вас: <b>{result}</b></p>
      {ad}
      <p>Контроль 1 (эта же картинка с другого сервера): {controlSpeed.toFixed(2)} kbps, {Math.round(controlTime)} секунд(-а)</p>
      <p>Контроль 2 (эта же картинка с другого сервера, в адресе которого есть <code>t.co</code>): {controlTacoSpeed.toFixed(2)} kbps, {Math.round(controlTacoTime)} секунд(-а)</p>
      <img src={logUrl} width={1} height={1} />
      <img src={darkkLogUrl} width={1} height={1} />
    </>
  )
}

export default Result
