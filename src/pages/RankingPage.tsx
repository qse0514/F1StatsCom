import { Layout, Tabs, Table, Tag, Spin, Typography } from 'antd'
import { useDriverStandings } from '../hooks/useRankings'
import { useConstructorStandings } from '../hooks/useRankings'
import NavBar from '../Components/NavBar'

const { Content } = Layout

export default function RankingPage() {
  const { data: driverStandings, isLoading: driversLoading } = useDriverStandings()
  const { data: constructorStandings, isLoading: constructorsLoading } = useConstructorStandings()

  const driverColumns = [
    {
      title: 'POS',
      dataIndex: 'position',
      key: 'position',
      render: (pos: string) => (
        <Tag style={{
          color: pos === '1' ? '#FFD700' : pos === '2' ? '#C0C0C0' : pos === '3' ? '#CD7F32' : 'white',
          borderColor: pos === '1' ? '#FFD700' : pos === '2' ? '#C0C0C0' : pos === '3' ? '#CD7F32' : '#333',
          background: 'transparent',
          fontWeight: 'bold'
        }}>
          P{pos}
        </Tag>
      )
    },
    {
      title: 'Driver',
      key: 'driver',
      render: (_: unknown, record: any) => (
        <div className="flex flex-col">
          <span className="text-white font-semibold">
            {record.Driver.givenName} {record.Driver.familyName}
          </span>
          <span className="text-zinc-400 text-sm">{record.Constructors[0].name}</span>
        </div>
      )
    },
    {
      title: 'Nationality',
      key: 'nationality',
      render: (_: unknown, record: any) => (
        <span className="text-zinc-400">{record.Driver.nationality}</span>
      )
    },
    {
      title: 'Wins',
      dataIndex: 'wins',
      key: 'wins',
      render: (wins: string) => (
        <span className="text-white">{wins}</span>
      )
    },
    {
      title: 'Points',
      dataIndex: 'points',
      key: 'points',
      render: (pts: string) => (
        <span className="text-yellow-400 font-bold">{pts}</span>
      )
    },
  ]

  const constructorColumns = [
    {
      title: 'POS',
      dataIndex: 'position',
      key: 'position',
      render: (pos: string) => (
        <Tag style={{
          color: pos === '1' ? '#FFD700' : pos === '2' ? '#C0C0C0' : pos === '3' ? '#CD7F32' : 'white',
          borderColor: pos === '1' ? '#FFD700' : pos === '2' ? '#C0C0C0' : pos === '3' ? '#CD7F32' : '#333',
          background: 'transparent',
          fontWeight: 'bold'
        }}>
          P{pos}
        </Tag>
      )
    },
    {
      title: 'Constructor',
      key: 'constructor',
      render: (_: unknown, record: any) => (
        <span className="text-white font-semibold">{record.Constructor.name}</span>
      )
    },
    {
      title: 'Nationality',
      key: 'nationality',
      render: (_: unknown, record: any) => (
        <span className="text-zinc-400">{record.Constructor.nationality}</span>
      )
    },
    {
      title: 'Wins',
      dataIndex: 'wins',
      key: 'wins',
      render: (wins: string) => (
        <span className="text-white">{wins}</span>
      )
    },
    {
      title: 'Points',
      dataIndex: 'points',
      key: 'points',
      render: (pts: string) => (
        <span className="text-yellow-400 font-bold">{pts}</span>
      )
    },
  ]

  return (
    <Layout style={{ minHeight: '100vh', background: '#0a0a0a' }}>
      <NavBar selectedKey="4" />

      <Content style={{ padding: '24px', background: '#1a1a1a' }}>
        <Typography.Title
          style={{
            color: 'white',
            paddingLeft: '8px',
            borderLeft: '4px solid #FF1E00',
            marginBottom: '24px'
          }}
        >
          {new Date().getFullYear()} Standings
        </Typography.Title>

        <Tabs
          defaultActiveKey="drivers"
          className="ranking-tabs"
          items={[
            {
              key: 'drivers',
              label: 'Drivers',
              children: driversLoading ? (
                <div className="flex justify-center items-center h-[60vh]">
                  <Spin size="large" />
                </div>
              ) : (
                <Table
                  dataSource={driverStandings}
                  columns={driverColumns}
                  rowKey={(r) => r.Driver.driverId}
                  pagination={false}
                  style={{ background: '#1a1a1a' }}
                />
              )
            },
            {
              key: 'constructors',
              label: 'Constructors',
              children: constructorsLoading ? (
                <div className="flex justify-center items-center h-[60vh]">
                  <Spin size="large" />
                </div>
              ) : (
                <Table
                  dataSource={constructorStandings}
                  columns={constructorColumns}
                  rowKey={(r) => r.Constructor.constructorId}
                  pagination={false}
                  style={{ background: '#1a1a1a' }}
                />
              )
            }
          ]}
        />
      </Content>
    </Layout>
  )
}
