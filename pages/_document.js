import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />

          <script
            async
            src="https://a.shirou.lynx.pink/tracker.js"
            data-ackee-server="https://a.shirou.lynx.pink"
            data-ackee-domain-id="93e65cd3-a55b-41e7-957e-d6f51b25b43b"
            data-ackee-opts='{ "detailed": true }'
          />
        </body>
      </Html>
    )
  }
}

export default MyDocument
