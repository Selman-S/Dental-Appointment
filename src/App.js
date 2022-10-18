import './App.css'
import AppRouter from './router/AppRouter'

import AppContextProvider from './context/AppContext'

function App() {
  return (
    <div >
      <AppContextProvider>
        <AppRouter />
      </AppContextProvider>
    </div>
  )
}

export default App
