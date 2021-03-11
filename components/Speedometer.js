import { useCallback, useState } from 'react';
import Result from './Result';

const Speedometer = () => {
  const [isChecking, setIsChecking] = useState(false);
  const [imgSrc, setImgSrc] = useState(null);
  const [startedAt, setStartedAt] = useState(null);
  const [result, setResult] = useState(false);

  const run = () => {
    setStartedAt(null)
    setResult(null)

    // Картинка, хранящаяся на замедленном сервере твиттера + обход кеширования браузером
    setImgSrc(`https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png?nocache=${Math.random()}`)

    setIsChecking(true)
    setStartedAt(+new Date())
  }

  const onLoad = () => {
    setIsChecking(false)
    setResult(+new Date())
  }

  let content = (
    <>
      <span>Поехали!</span>
      <svg className="w-5 h-5 ml-3 fill-current" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
    </>
  )

  let img = null

  if (isChecking) {
    content = (
      <span>Проверяем...</span>
    )

    img = <img src={imgSrc} onLoad={onLoad} width={1} height={1} style={{ opacity: 0.1 }} />
  }

  let resultContent = null

  if (!isChecking && result) {
    resultContent = <Result started={startedAt} ended={result} />
    content = <span>Проверить еще раз</span>
  }

  return (
    <>
      {resultContent}
      <div className="flex">
        <button
          className="inline-flex items-center h-12 px-6 text-lg text-purple-100 transition-colors duration-150 bg-purple-600 hover:bg-purple-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 disabled:opacity-50"
          disabled={isChecking}
          onClick={run}
        >
          {content}
        </button>
        {img}
      </div>
    </>
  );
};

export default Speedometer
