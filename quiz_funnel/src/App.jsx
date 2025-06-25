import { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Screen_1 from "./components/Screen_1/Screen_1"
import Screen_2 from "./components/Screen_2/Screen_2"
import Screen_3 from "./components/Screen_3/Screen_3"
import Screen_4 from "./components/Screen_4/Screen_4"
import Screen_5 from "./components/Screen_5/Screen_5"
import Screen_6 from "./components/Screen_6/Screen_6"
import "./App.css"

function App() {  
  useEffect(() => {
    if (window.fbq) return
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments)
      }
      if (!f._fbq) f._fbq = n
      n.push = n
      n.loaded = !0
      n.version = "2.0"
      n.queue = []
      t = b.createElement(e)
      t.async = !0
      t.src = v
      s = b.getElementsByTagName(e)[0]
      s.parentNode.insertBefore(t, s)
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    )
    window.fbq("init", "1147964230707590")
    window.fbq("track", "PageView")
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Screen_1 />} />
        <Route path="/screen2" element={<Screen_2 />} />
        <Route path="/screen3" element={<Screen_3 />} />
        <Route path="/screen4" element={<Screen_4 />} />
        <Route path="/screen5" element={<Screen_5 />} />
        <Route path="/screen6" element={<Screen_6 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
