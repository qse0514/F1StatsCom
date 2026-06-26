import { Layout, Typography } from 'antd'
import bgImage from '../assets/bgimg.png'
import NavBar from '../Components/NavBar'

const { Content } = Layout;

function WelcomePage() {

    return (
    <Layout>
        <NavBar selectedKey="1" />

        <Content>
            <div
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                }}
            >
                <Typography.Title style={{ 
                    color: '#FF1E00',
                    height: '58vh',
                    fontSize: '64px',
                    fontStyle: 'italic',
                    fontFamily: "'Titillium Web', sans-serif",

                }}>
                    Welcome to F1 StatsCom
                </Typography.Title>
            </div>
        </Content>

    </Layout>
  )
}

export default WelcomePage
