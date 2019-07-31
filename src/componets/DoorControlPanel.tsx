import { Menu, Icon } from 'antd';
import React from 'react';
import withContext from '../contextWrapper';

const DoorControlPanel: React.FC = withContext(({actions, state}) => (
  <Menu theme="dark" onClick={actions.TAB_SELECT} selectedKeys={[state.menuTab]} mode="horizontal" style={{ lineHeight: '64px' }}>
    <Menu.Item key="light">
      <Icon type="bulb" />
      Свет
    </Menu.Item>
    <Menu.Item key="gate">
      <Icon type="gateway" />
      Ворота
    </Menu.Item>
  </Menu>
))

export default DoorControlPanel;