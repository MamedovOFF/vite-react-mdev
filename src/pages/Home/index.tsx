import { useEffect, useState } from 'react'

function Home() {
  const [themeSwitch, setThemeSwitch] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches,
  )

  useEffect(() => {
    if (themeSwitch) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [themeSwitch])

  return (
    <div className="h-full content-center bg-slate-100">
      <div className="container m-auto">
        <div className="transition text-center bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
          <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg" />
          <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
            This is template for Vite+React project
          </h3>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            Basic settings (Eslint, Prettier, Tailwind, React Router Dom)
          </p>
          <button
            className=" transition mt-2 p-2 rounded-md  dark:bg-white dark:text-black bg-slate-800 text-white"
            type="button"
            onClick={() => setThemeSwitch(!themeSwitch)}
          >
            Switch
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
