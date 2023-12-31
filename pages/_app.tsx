import "../styles/tailwind.css"

import { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  console.log(Component);
  return <Component {...pageProps} />
}

export default MyApp
