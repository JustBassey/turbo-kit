import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Welcome to Turbo-kit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
        <h1 className="mx-auto max-w-5xl text-center text-6xl font-semibold sm:text-7xl lg:text-8xl xl:text-8xl">
          Welcome to <br className="hidden lg:block" />
          <span className="inline-block bg-gradient-to-r from-red-600 to-indigo-600 bg-clip-text text-transparent">
            Turbo-kit
          </span>
        </h1>
      </main>
    </div>
  )
}

export default Home
