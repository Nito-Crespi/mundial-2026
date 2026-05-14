import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import {
  CalendarOutlined,
  TrophyOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';

export function Navigation() {
  const location = useLocation();

  return (
    <Menu
      mode="horizontal"
      selectedKeys={[location.pathname]}
      style={{
        marginBottom: 24,
        borderRadius: 10,
        padding: '4px 12px',
        background: '#ffffff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
      }}
      items={[
        {
          key: '/',
          icon: <CalendarOutlined />,
          label: <Link to="/">Partidos</Link>,
        },
        {
          key: '/grupos',
          icon: <TrophyOutlined />,
          label: <Link to="/grupos">Grupos</Link>,
        },
        {
          key: '/estadios',
          icon: <EnvironmentOutlined />,
          label: <Link to="/estadios">Estadios</Link>,
        },
      ]}
    />
  );
}
