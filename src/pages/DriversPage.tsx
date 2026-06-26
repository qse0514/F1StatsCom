import { useState } from 'react'
import { useDrivers } from '../hooks/useDrivers'
import { Card, Row, Col, Spin, Layout, Typography, Modal, Divider } from 'antd'
import type { Driver } from '../types/driver'
import NavBar from '../Components/NavBar'

const { Content } = Layout

function DriversPage() {
  const { data, isLoading, error } = useDrivers()
  const [selectedDriver, setSelectedDriver] = useState<Driver | null>(null)

  return (
      <Layout style={{ minHeight: '100vh', background: '#0a0a0a' }}>
        <NavBar selectedKey="2" />

        <Content style={{ background: '#1a1a1a', padding: '24px' }}>

          <Typography.Title
            style={{
              color: 'white',
              paddingLeft: '8px',
              borderLeft: '4px solid #FF1E00',
              marginBottom: '24px'
            }}
          >
            Current Grid
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

          <Row gutter={[12, 12]} style={{ marginTop: '12px' }}>
            {data?.map((driver) => (
              <Col key={driver.driver_number} xs={12} sm={8} md={6} lg={4}>
                <Card
                  hoverable
                  onClick={() => setSelectedDriver(driver)}
                  cover={
                    <img
                      src={driver.headshot_url}
                      alt={driver.full_name}
                      className="h-24 object-contain w-full"
                    />
                  }
                  style={{
                    background: '#1a1a1a',
                    borderTop: `4px solid #${driver.team_colour}`,
                    transition: 'transform 0.2s',
                  }}
                  className="hover:scale-105 cursor-pointer"
                  styles={{ body: { padding: '6px' } }}
                >
                  <Card.Meta
                    title={<span className="text-white text-xs">{driver.full_name}</span>}
                    description={
                      <div className="flex flex-col gap-1">
                        <span className="text-gray-400 text-xs">{driver.team_name}</span>
                        <span className="text-gray-400 text-xs">#{driver.driver_number}</span>
                      </div>
                    }
                  />
                </Card>
              </Col>
            ))}
          </Row>

          {/* MODAL */}
          <Modal
            open={selectedDriver !== null}
            onCancel={() => setSelectedDriver(null)}
            footer={null}
            centered
            styles={{
              body: { background: '#1a1a1a', padding: 0 },
              wrapper: { backdropFilter: 'blur(4px)' }  // ✅ 'mask' → 'wrapper'
            }}
          >
            {selectedDriver && (
              <div className="flex flex-col items-center p-6">

                {/* Team colour top bar */}
                <div
                  className="w-full h-1 mb-4"
                  style={{ background: `#${selectedDriver.team_colour}` }}
                />

                {/* Driver Image */}
                <img
                  src={selectedDriver.headshot_url}
                  alt={selectedDriver.full_name}
                  className="h-48 object-contain mb-2"
                />

                {/* Driver Number Badge */}
                <span
                  className="text-4xl font-black italic mb-2"
                  style={{ color: `#${selectedDriver.team_colour}` }}
                >
                  #{selectedDriver.driver_number}
                </span>

                {/* Driver Name */}
                <Typography.Title level={2} style={{ color: 'white', margin: 0 }}>
                  {selectedDriver.full_name}
                </Typography.Title>

                {/* Team Name */}
                <span
                  className="text-lg font-bold mt-1"
                  style={{ color: `#${selectedDriver.team_colour}`, fontSize: '1.4rem' }}
                >
                  {selectedDriver.team_name}
                </span>

                <Divider style={{ borderColor: '#333' }} />

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 w-full text-white">
                  
                  <div className="flex flex-col items-center bg-[#111] rounded-lg p-3">
                    <span className="text-gray-400 text-xs uppercase mb-1">Acronym</span>
                    <span className="text-xl font-bold">{selectedDriver.name_acronym}</span>
                  </div>

                  <div className="flex flex-col items-center bg-[#111] rounded-lg p-3">
                    <span className="text-gray-400 text-xs uppercase mb-1">Country</span>
                    <span className="text-xl font-bold">{selectedDriver.country_code ?? 'N/A'}</span>
                  </div>

                  <div className="flex flex-col items-center bg-[#111] rounded-lg p-3">
                    <span className="text-gray-400 text-xs uppercase mb-1">Number</span>
                    <span
                      className="text-xl font-bold"
                      style={{ color: `#${selectedDriver.team_colour}` }}
                    >
                      {selectedDriver.driver_number}
                    </span>
                  </div>

                </div>

                <Divider style={{ borderColor: '#333' }} />

              </div>
            )}
          </Modal>

        </Content>
      </Layout>
  )
}

export default DriversPage