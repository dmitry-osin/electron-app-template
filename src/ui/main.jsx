import React from 'react'
import ReactDOM from 'react-dom/client'
import { App as UIApp } from 'antd'
import Application from './App'
import './index.css'

// Initialize application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UIApp
      theme={{
        token: {
          colorPrimary: '#1890ff',
          borderRadius: 6,
        },
      }}
    >
      <Application />
    </UIApp>
  </React.StrictMode>
) 