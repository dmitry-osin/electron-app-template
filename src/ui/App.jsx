import React, { useState, useEffect } from 'react'
import { Layout, Menu, Button, Typography, App } from 'antd'
import {
  HomeOutlined,
  SettingOutlined,
  FileOutlined,
  UserOutlined,
  PlusOutlined,
  SaveOutlined,
  FolderOpenOutlined,
  InfoCircleOutlined
} from '@ant-design/icons'
import styled from 'styled-components'
import ContentArea from './components/ContentArea'
import SettingsModal from './components/SettingsModal'

const { Header, Sider, Content } = Layout
const { Title } = Typography

// Styled components
const StyledLayout = styled(Layout)`
  height: 100vh;
`

const StyledHeader = styled(Header)`
  background: #fff;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f0f0f0;
`

const StyledSider = styled(Sider)`
  background: #fff;
  border-right: 1px solid #f0f0f0;
`

const StyledContent = styled(Content)`
  padding: 24px;
  background: #fafafa;
  overflow-y: auto;
`

const HeaderActions = styled.div`
  display: flex;
  gap: 8px;
`

function Application() {
  const [collapsed, setCollapsed] = useState(false)
  const [selectedKey, setSelectedKey] = useState('1')
  const [settingsVisible, setSettingsVisible] = useState(false)
  const [appInfo, setAppInfo] = useState({})

  // Get notification instance from Ant Design App component
  const { notification } = App.useApp()

  useEffect(() => {
    // Get application information when loading
    if (window.electronAPI) {
      window.electronAPI.getAppName().then(name => {
        window.electronAPI.getAppVersion().then(version => {
          setAppInfo({ name, version })
        })
      })

      // Listen to menu actions
      window.electronAPI.onMenuAction((action) => {
        handleMenuAction(action)
      })

      // Listen to global hotkeys
      window.electronAPI.onGlobalShortcut((shortcut) => {
        handleGlobalShortcut(shortcut)
      })
    }
  }, [])

  const handleMenuAction = (action) => {
    switch (action) {
      case 'new':
        notification.info({ message: 'New File', description: 'Creating new file...' })
        break
      case 'open':
        notification.info({ message: 'Open File', description: 'Opening file...' })
        break
      case 'save':
        notification.info({ message: 'Save File', description: 'Saving file...' })
        break
      default:
        break
    }
  }

  const handleGlobalShortcut = (shortcut) => {
    switch (shortcut) {
      case 'new-window':
        notification.info({ message: 'Global Shortcut', description: 'New window shortcut triggered!' })
        break
      default:
        break
    }
  }

  const showSettings = () => {
    setSettingsVisible(true)
  }

  const handleSettingsOk = () => {
    setSettingsVisible(false)
    notification.success({ message: 'Settings', description: 'Settings saved successfully!' })
  }

  const handleSettingsCancel = () => {
    setSettingsVisible(false)
  }

  const menuItems = [
    {
      key: '1',
      icon: <HomeOutlined />,
      label: 'Home',
    },
    {
      key: '2',
      icon: <FileOutlined />,
      label: 'Files',
    },
    {
      key: '3',
      icon: <UserOutlined />,
      label: 'Profile',
    },
    {
      key: '4',
      icon: <InfoCircleOutlined />,
      label: 'About',
    },
  ]

  return (
    <StyledLayout>
      <StyledHeader>
        <Title level={3} style={{ margin: 0 }}>
          {appInfo.name || 'Electron App'} v{appInfo.version || '1.0.0'}
        </Title>
        <HeaderActions>
          <Button
            icon={<PlusOutlined />}
            onClick={() => handleMenuAction('new')}
          >
            New
          </Button>
          <Button
            icon={<FolderOpenOutlined />}
            onClick={() => handleMenuAction('open')}
          >
            Open
          </Button>
          <Button
            icon={<SaveOutlined />}
            onClick={() => handleMenuAction('save')}
            type="primary"
          >
            Save
          </Button>
          <Button
            icon={<SettingOutlined />}
            onClick={showSettings}
          >
            Settings
          </Button>
        </HeaderActions>
      </StyledHeader>

      <Layout>
        <StyledSider
          width={200}
          collapsible
          collapsed={collapsed}
          onCollapse={setCollapsed}
        >
          <Menu
            mode="inline"
            selectedKeys={[selectedKey]}
            style={{ height: '100%', borderRight: 0 }}
            items={menuItems}
            onClick={({ key }) => setSelectedKey(key)}
          />
        </StyledSider>

        <StyledContent>
          <ContentArea selectedKey={selectedKey} />
        </StyledContent>
      </Layout>

      <SettingsModal
        visible={settingsVisible}
        onOk={handleSettingsOk}
        onCancel={handleSettingsCancel}
      />
    </StyledLayout>
  )
}

export default Application 