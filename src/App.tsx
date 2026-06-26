import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ConfigProvider, theme } from 'antd'
import WelcomePage from './pages/WelcomePage'
import DriversPage from './pages/DriversPage'
import RacesPage from './pages/RacesPage'
import RankingPage from './pages/RankingPage'

const appTheme = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: '#FF1E00',
    colorBgBase: '#0a0a0a',
    controlOutlineWidth: 0,
  },
}

function App() {
  return (
    <ConfigProvider theme={appTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/driver/overall" element={<DriversPage />} />
          <Route path="/races" element={<RacesPage />} />
          <Route path="/ranking" element={<RankingPage />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App