import React from 'react'
import { Card, Typography, Space, Button, List, Avatar, Tag } from 'antd'
import { 
  FileTextOutlined, 
  UserOutlined, 
  HomeOutlined,
  StarOutlined,
  ClockCircleOutlined
} from '@ant-design/icons'
import styled from 'styled-components'
import About from './About'

const { Title, Paragraph, Text } = Typography

const StyledCard = styled(Card)`
  margin-bottom: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`

const WelcomeSection = styled.div`
  text-align: center;
  padding: 40px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  margin-bottom: 24px;
`

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  margin-top: 24px;
`

const FeatureCard = styled(Card)`
  text-align: center;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-4px);
  }
`

function ContentArea({ selectedKey }) {
  const renderHomeContent = () => (
    <div>
      <WelcomeSection>
        <Title level={1} style={{ color: 'white', marginBottom: 16 }}>
          Welcome to Electron App!
        </Title>
        <Paragraph style={{ color: 'white', fontSize: 18, marginBottom: 24 }}>
          A modern desktop application built with Electron, React, and Ant Design
        </Paragraph>
        <Space size="large">
          <Button type="primary" size="large" icon={<FileTextOutlined />}>
            Create New File
          </Button>
          <Button size="large" icon={<UserOutlined />}>
            View Profile
          </Button>
        </Space>
      </WelcomeSection>

      <Title level={2}>Features</Title>
      <FeatureGrid>
        <FeatureCard>
          <HomeOutlined style={{ fontSize: 48, color: '#1890ff', marginBottom: 16 }} />
          <Title level={4}>Modern UI</Title>
          <Paragraph>Built with Ant Design components for a professional look</Paragraph>
        </FeatureCard>
        
        <FeatureCard>
          <StarOutlined style={{ fontSize: 48, color: '#52c41a', marginBottom: 16 }} />
          <Title level={4}>Hot Reload</Title>
          <Paragraph>Fast development with Vite hot module replacement</Paragraph>
        </FeatureCard>
        
        <FeatureCard>
          <ClockCircleOutlined style={{ fontSize: 48, color: '#faad14', marginBottom: 16 }} />
          <Title level={4}>Real-time</Title>
          <Paragraph>Instant updates and real-time synchronization</Paragraph>
        </FeatureCard>
      </FeatureGrid>
    </div>
  )

  const renderFilesContent = () => (
    <div>
      <Title level={2}>Files</Title>
      <StyledCard>
        <List
          itemLayout="horizontal"
          dataSource={[
            {
              title: 'Document 1.docx',
              description: 'Last modified: 2 hours ago',
              avatar: <Avatar icon={<FileTextOutlined />} style={{ backgroundColor: '#1890ff' }} />,
              tag: 'Document'
            },
            {
              title: 'Presentation.pptx',
              description: 'Last modified: 1 day ago',
              avatar: <Avatar icon={<FileTextOutlined />} style={{ backgroundColor: '#52c41a' }} />,
              tag: 'Presentation'
            },
            {
              title: 'Spreadsheet.xlsx',
              description: 'Last modified: 3 days ago',
              avatar: <Avatar icon={<FileTextOutlined />} style={{ backgroundColor: '#faad14' }} />,
              tag: 'Spreadsheet'
            }
          ]}
          renderItem={(item) => (
            <List.Item
              actions={[
                <Button key="edit" type="link">Edit</Button>,
                <Button key="delete" type="link" danger>Delete</Button>
              ]}
            >
              <List.Item.Meta
                avatar={item.avatar}
                title={item.title}
                description={item.description}
              />
              <Tag color="blue">{item.tag}</Tag>
            </List.Item>
          )}
        />
      </StyledCard>
    </div>
  )

  const renderProfileContent = () => (
    <div>
      <Title level={2}>Profile</Title>
      <StyledCard>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <div style={{ textAlign: 'center' }}>
            <Avatar size={120} icon={<UserOutlined />} style={{ backgroundColor: '#1890ff' }} />
            <Title level={3} style={{ marginTop: 16 }}>John Doe</Title>
            <Text type="secondary">Software Developer</Text>
          </div>
          
          <div>
            <Title level={4}>Personal Information</Title>
            <Paragraph>
              <Text strong>Email:</Text> john.doe@example.com
            </Paragraph>
            <Paragraph>
              <Text strong>Location:</Text> New York, USA
            </Paragraph>
            <Paragraph>
              <Text strong>Experience:</Text> 5+ years
            </Paragraph>
          </div>
          
          <div>
            <Title level={4}>Skills</Title>
            <Space wrap>
              <Tag color="blue">React</Tag>
              <Tag color="green">Electron</Tag>
              <Tag color="orange">JavaScript</Tag>
              <Tag color="purple">Node.js</Tag>
              <Tag color="red">TypeScript</Tag>
            </Space>
          </div>
        </Space>
      </StyledCard>
    </div>
  )

  const renderAboutContent = () => (
    <About />
  )

  const renderContent = () => {
    switch (selectedKey) {
      case '1':
        return renderHomeContent()
      case '2':
        return renderFilesContent()
      case '3':
        return renderProfileContent()
      case '4':
        return renderAboutContent()
      default:
        return renderHomeContent()
    }
  }

  return (
    <div>
      {renderContent()}
    </div>
  )
}

export default ContentArea 