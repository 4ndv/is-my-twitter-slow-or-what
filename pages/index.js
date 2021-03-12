import Head from 'next/head'
import Speedometer from '../components/Speedometer'

export default function Home() {
  return (
    <div className="flex justify-center mt-10 xl:mt-20 mb-10 mr-4 ml-4">
      <Head>
        <title>Is my Twitter slow or what?</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <article className="prose lg:prose-xl">
        <h1>Твиттер у меня замедленный или как?</h1>
        <p>Эта страничка достаточно простым способом пытается это выяснить:</p>
        <p>Загружаем картинку с <code>abs.twimg.com</code> (организация, замедленная на территории Российской Федерации), и считаем сколько это заняло времени. Проверка может занять <b>до минуты</b>.</p>
        <p>Кроме того, мы собираем анонимизированные данные (скорости, ip, UA) для дальнейшего анализа.</p>
        <Speedometer />
        <p>
          Технические обсуждения всего происходящего идут на <a target="_blank" href="https://ntc.party/t/twitter/907/">NTC</a>, присоединяйтесь!
        </p>
        <p>
          Исходники <a target="_blank" href="https://github.com/4ndv/is-my-twitter-slow-or-what">на Github</a>. Спасибо <a target="_blank" href="http://darkk.net.ru">Леониду "darkk" Евдокомову</a> за помощь в тестировании и анализе данных!
        </p>
        <p>
          Подписывайтесь на <a target="_blank" href="https://twitter.com/libneko">замедленный твиттер</a>. Made by <a href="https://lynx.pink">me</a>.
        </p>
      </article>
    </div>
  )
}
