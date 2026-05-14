import { Card, Row, Col, Typography, Tag, Space, Button, List } from 'antd';
import {
  EnvironmentOutlined,
  GlobalOutlined,
  CalendarOutlined,
} from '@ant-design/icons';
import { STADIUMS } from '../data/stadiums';
import { MATCHES } from '../data/matches';
import { formatDateLong } from '../utils/helpers';

const { Title, Text, Paragraph } = Typography;

const COUNTRY_FLAG: Record<string, string> = {
  México: 'mx',
  Canadá: 'ca',
  'Estados Unidos': 'us',
};

function flagUrl(code: string) {
  return `https://flagcdn.com/w40/${code}.png`;
}

export function StadiumsPage() {
  return (
    <div>
      <Text type="secondary" style={{ display: 'block', marginBottom: 16 }}>
        16 estadios distribuidos entre Estados Unidos, Canadá y México. Haz clic
        en "Ver en mapa" para abrir Google Maps en la ubicación del estadio.
      </Text>

      <Row gutter={[16, 16]}>
        {STADIUMS.map((s) => {
          const matches = MATCHES.filter((m) => m.stadiumId === s.id);
          const mapUrl = `https://www.google.com/maps/search/?api=1&query=${s.lat},${s.lng}`;
          const countryCode = COUNTRY_FLAG[s.country];
          return (
            <Col key={s.id} xs={24} md={12} xl={8}>
              <Card
                style={{ borderRadius: 12, height: '100%' }}
                styles={{ body: { padding: 16 } }}
              >
                <Space align="start" style={{ width: '100%' }}>
                  {countryCode && (
                    <img
                      src={flagUrl(countryCode)}
                      alt={s.country}
                      style={{
                        width: 36,
                        height: 26,
                        borderRadius: 4,
                        boxShadow: '0 1px 2px rgba(0,0,0,0.15)',
                      }}
                    />
                  )}
                  <div style={{ flex: 1 }}>
                    <Title level={5} style={{ margin: 0 }}>
                      {s.name}
                    </Title>
                    <Paragraph
                      type="secondary"
                      style={{ margin: 0, fontSize: 13 }}
                    >
                      <EnvironmentOutlined /> {s.city}, {s.country}
                    </Paragraph>
                  </div>
                </Space>

                <Space style={{ marginTop: 12, marginBottom: 12 }}>
                  <Tag color="blue">
                    <CalendarOutlined /> {matches.length}{' '}
                    {matches.length === 1 ? 'partido' : 'partidos'}
                  </Tag>
                  <Tag>
                    {s.lat.toFixed(3)}, {s.lng.toFixed(3)}
                  </Tag>
                </Space>

                <Button
                  type="primary"
                  ghost
                  icon={<GlobalOutlined />}
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  block
                  style={{ marginBottom: 12 }}
                >
                  Ver en mapa
                </Button>

                <List
                  size="small"
                  dataSource={matches.slice(0, 5)}
                  renderItem={(m) => (
                    <List.Item style={{ padding: '6px 0' }}>
                      <Text style={{ fontSize: 12 }}>
                        <strong>#{m.id}</strong> · {formatDateLong(m.date)} ·{' '}
                        {m.time}
                        <br />
                        {m.homeTeam} vs {m.awayTeam}
                      </Text>
                    </List.Item>
                  )}
                />
                {matches.length > 5 && (
                  <Text type="secondary" style={{ fontSize: 12 }}>
                    +{matches.length - 5} más…
                  </Text>
                )}
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
