import { BrowserRouter } from "react-router-dom"
import { Router } from "./routes"
import { BlogContextProvider } from "./context/BlogContext"

export function App() {
  return (
    <BlogContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </BlogContextProvider>
  )
}
