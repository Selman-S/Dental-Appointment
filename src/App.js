import './App.css'
import AppRouter from './router/AppRouter'

import AppContextProvider from './context/AppContext'

function App() {
  return (
    <div style={{ width: '98%', height: '95vh' }}>
      <AppContextProvider>
        <AppRouter />
      </AppContextProvider>
    </div>
  )
}

export default App
