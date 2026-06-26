import { useState } from 'react'
import { Layout, Card, Row, Col, Modal, Tag, Spin, Typography } from 'antd'
import { useRaceResults } from '../hooks/useRaceResults'
import NavBar from '../Components/NavBar'
import type { Race } from '../types/race'

const { Content } = Layout

export default function RacesPage() {
  const { data: races, isLoading, error } = useRaceResults()
  const [selectedRace, setSelectedRace] = useState<Race | null>(null)

  const podiumColors: Record<string, string> = {
    '1': '#FFD700',  // 金
    '2': '#C0C0C0',  // 银
    '3': '#CD7F32',  // 铜
  }

  const currentYear = new Date().getFullYear()

  return (
      <Layout style={{ minHeight: '100vh', background: '#0a0a0a' }}>
        <NavBar selectedKey="3" />

        <Content style={{ padding: '24px', background: '#1a1a1a' }}>
          <Typography.Title
            style={{
              color: 'white',
              paddingLeft: '8px',
              borderLeft: '4px solid #FF1E00',
              marginBottom: '24px'
            }}
          >
            {currentYear} Season
          </Typography.Title>

          {isLoading && (
            <div className="flex justify-center items-center h-[60vh]">
              <Spin size="large" />
            </div>
          )}

          {error && (
            <div className="flex justify-center items-center h-[60vh] text-white">
              Something went wrong!
            </div>
          )}

          <Row gutter={[16, 16]}>
            {races?.map((race) => (
              <Col key={race.round} xs={24} sm={12} lg={8}>
                <Card
                  hoverable
                  onClick={() => setSelectedRace(race)}
                  style={{ background: '#1a1a1a', border: '1px solid #333' }}
                  className="hover:scale-105 transition-transform cursor-pointer"
                  styles={{ body: { padding: '16px' } }}
                >
                  <p className="text-red-500 font-bold text-lg">Round {race.round}</p>
                  <p className="text-white font-semibold">{race.raceName}</p>
                  <p className="text-zinc-400">{race.Circuit.Location.locality}, {race.Circuit.Location.country}</p>
                  <p className="text-zinc-400">{race.date}</p>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Modal - Podium */}
          <Modal
            open={selectedRace !== null}
            onCancel={() => setSelectedRace(null)}
            footer={null}
            centered
            styles={{
              body: { background: '#1a1a1a', padding: 0 },
              wrapper: { backdropFilter: 'blur(4px)' }
            }}
          >
            {selectedRace && (
              <div className="flex flex-col p-6">
                {/* Red accent bar */}
                <div className="w-full h-1 mb-4 rounded" style={{ background: '#FF1E00' }} />

                {/* Race title */}
                <Typography.Title level={3} style={{ color: 'white', margin: '0 0 4px' }}>
                  {selectedRace.raceName}
                </Typography.Title>
                <span className="text-zinc-400 text-sm mb-6">
                  {selectedRace.Circuit.Location.locality}, {selectedRace.Circuit.Location.country} &middot; {selectedRace.date}
                </span>

                {/* Podium results */}
                <div className="flex flex-col gap-3">
                  {selectedRace.Results.slice(0, 3).map((result) => (
                    <div
                      key={result.position}
                      className="flex items-center gap-3 p-4 rounded-lg transition-all duration-200 hover:scale-[1.02] hover:brightness-125 cursor-default"
                      style={{ background: '#111', border: `1px solid ${podiumColors[result.position]}22` }}
                    >
                      <Tag style={{
                        color: podiumColors[result.position],
                        borderColor: podiumColors[result.position],
                        background: 'transparent',
                        fontWeight: 'bold',
                        fontSize: '14px',
                        minWidth: '40px',
                        textAlign: 'center',
                      }}>
                        P{result.position}
                      </Tag>
                      <div className="flex flex-col">
                        <span className="text-white font-semibold">
                          {result.Driver.givenName} {result.Driver.familyName}
                        </span>
                        <span className="text-zinc-400 text-sm">{result.Constructor.name}</span>
                      </div>
                      <span className="ml-auto text-yellow-400 font-bold">{result.points} pts</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Modal>

        </Content>
      </Layout>
  )
}
