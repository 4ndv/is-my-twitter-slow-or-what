import { useEffect, useState } from 'react';
import Result from './Result';
import TestImg from './TestImg';

const Speedometer = () => {
  const [isChecking, setIsChecking] = useState(false)
  const [key, setKey] = useState(Math.random())

  const [testResult, setTestResult] = useState(false)
  const [controlResult, setControlResult] = useState(false)
  const [controlTacoResult, setControlTacoResult] = useState(false)
  const done = testResult && controlResult && controlTacoResult
  const run = () => {
    setTestResult(null)
    setControlResult(null)
    setControlTacoResult(null)

    setIsChecking(true)
  }

  const onLoad = (type, result) => {
    switch (type) {
      case 'test':
        setTestResult(result)
        setKey(Math.random())
        break
      case 'control':
        setControlResult(result)
        setKey(Math.random())
        break
      case 'control-taco':
        setControlTacoResult(result)
        setKey(Math.random())
        break
    }
  }

  useEffect(() => {
    if (done && isChecking) setIsChecking(false)
  }, [isChecking, done])

  let content = (
    <>
      <span>Поехали!</span>
      <svg className="w-5 h-5 ml-3 fill-current" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
    </>
  )

  let img = null

  if (isChecking) {
    content = (
      <span>Проверяем...</span>
    )

    if (!testResult) {
      img = (
        <div className="flex">
          <TestImg
            type="test"
            src="https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png"
            onLoad={onLoad}
            key={key}
          />
        </div>
      )
    } else if (!controlResult) {
      img = (
        <div className="flex">
          <TestImg
            type="control"
            src="https://freerunet.org/img/lohp_1302x955.png"
            onLoad={onLoad}
            key={key}
          />
        </div>
      )
    } else if (!controlTacoResult) {
      img = (
        <div className="flex">
          <TestImg
            type="control-taco"
            src="https://rknsoset.com/img/lohp_1302x955.png"
            onLoad={onLoad}
            key={key}
          />
        </div>
      )
    }
  }

  let resultContent = null

  if (!isChecking && done) {
    resultContent = <Result test={testResult} control={controlResult} controlTaco={controlTacoResult} />
    content = <span>Проверить еще раз</span>
  }

  return (
    <>
      {resultContent}
      <button
        className="inline-flex items-center h-12 px-6 text-lg text-purple-100 transition-colors duration-150 bg-purple-600 hover:bg-purple-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 disabled:opacity-50"
        disabled={isChecking}
        onClick={run}
      >
        {content}
      </button>
      {img}
    </>
  )
}

export default Speedometer
