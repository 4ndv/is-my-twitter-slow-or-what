import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex justify-center mt-10 xl:mt-20 mb-10 mr-4 ml-4">
      <Head>
        <title>Is my Twitter slow or what?</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <article className="prose lg:prose-xl">
        <h1>Pool is closed</h1>
        <p>Больше спасибо всем поучаствовавшим в исследовании!</p>
        <p>Почитать подробный разбор всего происходившего с твиттером вы можете <a href="https://censoredplanet.org/throttling">здесь</a>, анонимизированные данные можно получить <a href="https://github.com/4ndv/russia-twitter-throttle">тут</a>.</p>
        <p>
          Исходники <a target="_blank" href="https://github.com/4ndv/is-my-twitter-slow-or-what">на Github</a>. Спасибо <a target="_blank" href="http://darkk.net.ru">Леониду "darkk" Евдокомову</a> за помощь в тестировании и анализе данных!
        </p>
        <p>
          <a
            className="twitter-button mr-3"
            href="https://twitter.com/libneko"
          >
            <svg className="w-5 h-5 mr-3 fill-current" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
            Мой замедленный твиттер
          </a>
          <a
            className="twitter-button"
            href="https://twitter.com/libneko/status/1370028217352921098"
          >
            <svg className="w-5 h-5 mr-3 fill-current" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
            Расскажите друзьям
          </a>
        </p>
        <p>
          Made by <a href="https://lynx.pink">me</a>.
        </p>
      </article>
    </div>
  )
}
