import React, { useState, useEffect } from 'react'
import { Card, Typography, Space, Avatar, Divider, List, Tag, Row, Col, Button } from 'antd'
import { 
  UserOutlined, 
  GithubOutlined, 
  MailOutlined,
  GlobalOutlined,
} from '@ant-design/icons'
import styled from 'styled-components'

const { Title, Paragraph, Text } = Typography

const StyledCard = styled(Card)`
  margin-bottom: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`

const AuthorSection = styled.div`
  text-align: center;
  padding: 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  margin-bottom: 24px;
`

const TechInfoCard = styled(Card)`
  height: 100%;
  .ant-card-body {
    padding: 16px;
  }
`

const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  
  .label {
    font-weight: 500;
    color: #666;
  }
  
  .value {
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    background: #f5f5f5;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 12px;
  }
`

function About() {
  const [appInfo, setAppInfo] = useState({})
  const [systemInfo, setSystemInfo] = useState({})
  const [processVersions, setProcessVersions] = useState({})

  useEffect(() => {
    try {
      // Get application information
      if (window.electronAPI && window.electronAPI.getAppName && window.electronAPI.getAppVersion) {
        window.electronAPI.getAppName().then(name => {
          window.electronAPI.getAppVersion().then(version => {
            setAppInfo({ name, version })
          }).catch(() => {
            setAppInfo({ name: 'Electron App Template', version: '1.0.0' })
          })
        }).catch(() => {
          setAppInfo({ name: 'Electron App Template', version: '1.0.0' })
        })
      } else {
        // Fallback for browser environment
        setAppInfo({ name: 'Electron App Template', version: '1.0.0' })
      }

      // Get process versions
      if (window.electronAPI && window.electronAPI.getProcessVersions) {
        window.electronAPI.getProcessVersions().then(versions => {
          setProcessVersions(versions)
        }).catch(() => {
          // Fallback if not available
          setProcessVersions({})
        })
      } else {
        // Fallback for browser environment
        setProcessVersions({})
      }
    } catch (error) {
      console.warn('Error initializing About component:', error)
      // Set fallback values
      setAppInfo({ name: 'Electron App Template', version: '1.0.0' })
      setProcessVersions({})
    }

    // Collect system information
    const collectSystemInfo = () => {
      const info = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        cookieEnabled: navigator.cookieEnabled,
        onLine: navigator.onLine,
        screenResolution: `${screen.width}x${screen.height}`,
        colorDepth: screen.colorDepth,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        dateTime: new Date().toLocaleString(),
        memory: navigator.deviceMemory ? `${navigator.deviceMemory} GB` : 'Unknown',
        cores: navigator.hardwareConcurrency || 'Unknown'
      }
      setSystemInfo(info)
    }

    collectSystemInfo()
  }, [])

  const authorInfo = {
    name: 'Dmitry Osin',
    email: 'd@osin.pro',
    github: 'github.com/dmitry-osin',
    website: 'osin.pro',
    role: 'Senior Software Developer',
    location: 'Russia, Moscow',
    experience: '12+ years',
    skills: ['Java', 'Kotlin', 'Spring', 'Spring Data JPA', 'Clojure', 'React', 'Electron', 'Node.js', 'TypeScript']
  }

  const techStack = [
    { name: 'Electron', version: '28.0.0', description: 'Cross-platform desktop app framework' },
    { name: 'React', version: '18.2.0', description: 'UI library for building interfaces' },
    { name: 'Vite', version: '7.1.1', description: 'Fast build tool and dev server' },
    { name: 'Ant Design', version: '5.12.8', description: 'Enterprise UI design system' },
    { name: 'Styled Components', version: '6.1.6', description: 'CSS-in-JS styling solution' },
    { name: 'Node.js', version: processVersions.node || 'Unknown', description: 'JavaScript runtime' },
    { name: 'V8', version: processVersions.v8 || 'Unknown', description: 'JavaScript engine' },
    { name: 'Chromium', version: processVersions.chrome || 'Unknown', description: 'Browser engine' }
  ]

  const openExternalLink = (url) => {
    try {
      if (window.electronAPI && window.electronAPI.openExternal) {
        window.electronAPI.openExternal(url)
      } else {
        window.open(url, '_blank')
      }
    } catch (error) {
      console.warn('Error opening external link:', error)
      window.open(url, '_blank')
    }
  }

  return (
    <div>
      <Title level={2}>About</Title>
      
      {/* Author Section */}
      <AuthorSection>
        <Avatar size={120} icon={<UserOutlined />} style={{ backgroundColor: 'rgba(255,255,255,0.2)', marginBottom: 16 }} />
        <Title level={1} style={{ color: 'white', marginBottom: 8 }}>
          {authorInfo.name}
        </Title>
        <Paragraph style={{ color: 'white', fontSize: 18, marginBottom: 16 }}>
          {authorInfo.role} • {authorInfo.location} • {authorInfo.experience} experience
        </Paragraph>
        <Space size="large">
          <Button 
            type="primary" 
            ghost 
            icon={<MailOutlined />}
            onClick={() => openExternalLink(`mailto:${authorInfo.email}`)}
          >
            Contact
          </Button>
          <Button 
            ghost 
            icon={<GithubOutlined />}
            onClick={() => openExternalLink(`https://${authorInfo.github}`)}
          >
            GitHub
          </Button>
          <Button 
            ghost 
            icon={<GlobalOutlined />}
            onClick={() => openExternalLink(`https://${authorInfo.website}`)}
          >
            Website
          </Button>
        </Space>
      </AuthorSection>

      {/* Skills */}
      <StyledCard>
        <Title level={4}>Skills & Expertise</Title>
        <Space wrap>
          {authorInfo.skills.map(skill => (
            <Tag key={skill} color="blue" style={{ fontSize: '14px', padding: '4px 12px' }}>
              {skill}
            </Tag>
          ))}
        </Space>
      </StyledCard>

      {/* Application Info */}
      <StyledCard>
        <Title level={4}>Application Information</Title>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <InfoItem>
              <span className="label">Application:</span>
              <span className="value">{appInfo.name || 'Electron App Template'}</span>
            </InfoItem>
            <InfoItem>
              <span className="label">Version:</span>
              <span className="value">{appInfo.version || '1.0.0'}</span>
            </InfoItem>
            <InfoItem>
              <span className="label">Environment:</span>
              <span className="value">{process.env.NODE_ENV || 'development'}</span>
            </InfoItem>
          </Col>
          <Col xs={24} sm={12}>
            <InfoItem>
              <span className="label">Build Date:</span>
              <span className="value">{new Date().toLocaleDateString()}</span>
            </InfoItem>
            <InfoItem>
              <span className="label">License:</span>
              <span className="value">MIT</span>
            </InfoItem>
            <InfoItem>
              <span className="label">Repository:</span>
              <span className="value">github.com/dmitry-osin/electron-app-template</span>
            </InfoItem>
          </Col>
        </Row>
      </StyledCard>

      {/* Technology Stack */}
      <StyledCard>
        <Title level={4}>Technology Stack</Title>
        <Row gutter={[16, 16]}>
          {techStack.map(tech => (
            <Col xs={24} sm={12} md={8} key={tech.name}>
              <TechInfoCard size="small">
                <div style={{ textAlign: 'center' }}>
                  <Title level={5} style={{ marginBottom: 8 }}>{tech.name}</Title>
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    v{tech.version}
                  </Text>
                  <Paragraph style={{ fontSize: '12px', marginTop: 8, marginBottom: 0 }}>
                    {tech.description}
                  </Paragraph>
                </div>
              </TechInfoCard>
            </Col>
          ))}
        </Row>
      </StyledCard>

      {/* System Information */}
      <StyledCard>
        <Title level={4}>System Information</Title>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <Title level={5}>Platform & Browser</Title>
            <InfoItem>
              <span className="label">Platform:</span>
              <span className="value">{systemInfo.platform}</span>
            </InfoItem>
            <InfoItem>
              <span className="label">Language:</span>
              <span className="value">{systemInfo.language}</span>
            </InfoItem>
            <InfoItem>
              <span className="label">User Agent:</span>
              <span className="value" style={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {systemInfo.userAgent}
              </span>
            </InfoItem>
            <InfoItem>
              <span className="label">Online:</span>
              <span className="value">{systemInfo.onLine ? 'Yes' : 'No'}</span>
            </InfoItem>
          </Col>
          <Col xs={24} sm={12}>
            <Title level={5}>Display & Performance</Title>
            <InfoItem>
              <span className="label">Screen:</span>
              <span className="value">{systemInfo.screenResolution}</span>
            </InfoItem>
            <InfoItem>
              <span className="label">Color Depth:</span>
              <span className="value">{systemInfo.colorDepth} bit</span>
            </InfoItem>
            <InfoItem>
              <span className="label">Memory:</span>
              <span className="value">{systemInfo.memory}</span>
            </InfoItem>
            <InfoItem>
              <span className="label">CPU Cores:</span>
              <span className="value">{systemInfo.cores}</span>
            </InfoItem>
          </Col>
        </Row>
        
        <Divider />
        
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <InfoItem>
              <span className="label">Timezone:</span>
              <span className="value">{systemInfo.timezone}</span>
            </InfoItem>
            <InfoItem>
              <span className="label">Current Time:</span>
              <span className="value">{systemInfo.dateTime}</span>
            </InfoItem>
          </Col>
          <Col xs={24} sm={12}>
            <InfoItem>
              <span className="label">Cookies:</span>
              <span className="value">{systemInfo.cookieEnabled ? 'Enabled' : 'Disabled'}</span>
            </InfoItem>
          </Col>
        </Row>
      </StyledCard>

      {/* Footer */}
      <StyledCard style={{ textAlign: 'center', background: '#fafafa' }}>
        <Paragraph style={{ marginBottom: 8 }}>
          Made with ❤️ by <Text strong>{authorInfo.name}</Text>
        </Paragraph>
        <Paragraph style={{ fontSize: '12px', color: '#666', marginBottom: 0 }}>
          This project is open source and available under the MIT License
        </Paragraph>
      </StyledCard>
    </div>
  )
}

export default About 