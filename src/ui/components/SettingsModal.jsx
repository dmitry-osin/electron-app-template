import React from 'react'
import { Modal, Form, Select, Switch, InputNumber, Divider, Space, Typography } from 'antd'
import styled from 'styled-components'

const { Option } = Select
const { Title } = Typography

const StyledForm = styled(Form)`
  .ant-form-item {
    margin-bottom: 16px;
  }
`

const SectionTitle = styled(Title)`
  margin: 16px 0 8px 0 !important;
  font-size: 16px !important;
  color: #1890ff !important;
`

function SettingsModal({ visible, onOk, onCancel }) {
  const [form] = Form.useForm()

  const handleOk = () => {
    form.validateFields().then((values) => {
      console.log('Settings values:', values)
      onOk()
    })
  }

  const handleCancel = () => {
    form.resetFields()
    onCancel()
  }

  return (
    <Modal
      title="Settings"
      open={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      width={600}
      okText="Save"
      cancelText="Cancel"
    >
      <StyledForm
        form={form}
        layout="vertical"
        initialValues={{
          theme: 'light',
          language: 'en',
          autoSave: true,
          notifications: true,
          sound: false,
          windowWidth: 1200,
          windowHeight: 800
        }}
      >
        <SectionTitle level={5}>Appearance</SectionTitle>
        
        <Form.Item
          name="theme"
          label="Theme"
          rules={[{ required: true, message: 'Please select a theme!' }]}
        >
          <Select placeholder="Select theme">
            <Option value="light">Light</Option>
            <Option value="dark">Dark</Option>
            <Option value="auto">Auto (System)</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="language"
          label="Language"
          rules={[{ required: true, message: 'Please select a language!' }]}
        >
          <Select placeholder="Select language">
            <Option value="en">English</Option>
            <Option value="ru">Русский</Option>
            <Option value="es">Español</Option>
            <Option value="fr">Français</Option>
          </Select>
        </Form.Item>

        <Divider />

        <SectionTitle level={5}>Window</SectionTitle>
        
        <Space>
          <Form.Item
            name="windowWidth"
            label="Width"
            rules={[{ required: true, message: 'Please enter window width!' }]}
          >
            <InputNumber min={800} max={2560} />
          </Form.Item>

          <Form.Item
            name="windowHeight"
            label="Height"
            rules={[{ required: true, message: 'Please enter window height!' }]}
          >
            <InputNumber min={600} max={1440} />
          </Form.Item>
        </Space>

        <Divider />

        <SectionTitle level={5}>Features</SectionTitle>
        
        <Form.Item
          name="autoSave"
          label="Auto Save"
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>

        <Form.Item
          name="notifications"
          label="Enable Notifications"
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>

        <Form.Item
          name="sound"
          label="Sound Effects"
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>
      </StyledForm>
    </Modal>
  )
}

export default SettingsModal 