import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom'

// Props - tells NavBar which page is active
type NavBarProps = {
  selectedKey: string
}

const menuItems = [
  { key: '1', label: 'Home' },
  { key: '2', label: 'Drivers' },
  { key: '3', label: 'Races' },
  { key: '4', label: 'Ranking' },
]

export default function NavBar({ selectedKey }: NavBarProps) {
  const navigate = useNavigate()

  const routes: Record<string, string> = {
    '1': '/',
    '2': '/driver/overall',
    '3': '/races',
    '4': '/ranking',
  }

  return (
      <div
        className="flex items-center"
        style={{ background: 'linear-gradient(to right, #0a0a0a, #750000, #c80000)' }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[selectedKey]}
          items={menuItems}
          className="nav-menu"
          style={{ width: '100%', background: 'transparent', flex: 1 }}
          onClick={(e) => navigate(routes[e.key])}
        />
      </div>
  )
}
