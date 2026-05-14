import { useMemo } from 'react';
import { Card, Row, Col, Table, Typography, Tag, Space, Tooltip } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Flag } from '../components/Flag';
import { MatchCard } from '../components/MatchCard';
import { GROUPS } from '../data/teams';
import { MATCHES } from '../data/matches';
import { useFixtureStore } from '../store/useFixtureStore';
import { computeGroupStandings } from '../utils/helpers';
import { getTeam } from '../data/teams';
import type { Group, GroupStanding } from '../types';

const { Title, Text } = Typography;

function GroupBlock({ group }: { group: Group }) {
  const results = useFixtureStore((s) => s.results);

  const standings = useMemo(
    () => computeGroupStandings(group, results),
    [group, results]
  );

  const matches = useMemo(
    () => MATCHES.filter((m) => m.group === group && !m.isPlaceholder),
    [group]
  );

  const columns: ColumnsType<GroupStanding> = [
    {
      title: '#',
      key: 'rank',
      width: 44,
      render: (_, __, idx) => {
        const colors = ['#16a34a', '#22c55e', '#f59e0b', '#9ca3af'];
        return (
          <Tag
            color={colors[idx]}
            style={{ fontWeight: 600, fontSize: 12, margin: 0 }}
          >
            {idx + 1}
          </Tag>
        );
      },
    },
    {
      title: 'Equipo',
      dataIndex: 'team',
      key: 'team',
      render: (name: string) => {
        const t = getTeam(name);
        return (
          <Space>
            <Flag code={t.code} size="sm" />
            <span style={{ fontWeight: 500 }}>{name}</span>
          </Space>
        );
      },
    },
    { title: <Tooltip title="Jugados">PJ</Tooltip>, dataIndex: 'played', width: 50, align: 'center' },
    { title: <Tooltip title="Ganados">G</Tooltip>, dataIndex: 'won', width: 44, align: 'center' },
    { title: <Tooltip title="Empatados">E</Tooltip>, dataIndex: 'drawn', width: 44, align: 'center' },
    { title: <Tooltip title="Perdidos">P</Tooltip>, dataIndex: 'lost', width: 44, align: 'center' },
    { title: <Tooltip title="Goles a favor">GF</Tooltip>, dataIndex: 'goalsFor', width: 50, align: 'center' },
    { title: <Tooltip title="Goles en contra">GC</Tooltip>, dataIndex: 'goalsAgainst', width: 50, align: 'center' },
    {
      title: <Tooltip title="Diferencia de goles">DG</Tooltip>,
      dataIndex: 'goalDifference',
      width: 50,
      align: 'center',
      render: (v: number) => (v > 0 ? `+${v}` : v),
    },
    {
      title: <Tooltip title="Puntos">Pts</Tooltip>,
      dataIndex: 'points',
      width: 60,
      align: 'center',
      render: (v: number) => <strong>{v}</strong>,
    },
  ];

  return (
    <Card
      style={{ borderRadius: 12 }}
      styles={{ body: { padding: 16 } }}
      title={
        <Space>
          <Tag color="green" style={{ fontSize: 14, padding: '2px 10px' }}>
            Grupo {group}
          </Tag>
        </Space>
      }
    >
      <Table
        dataSource={standings}
        columns={columns}
        rowKey="team"
        pagination={false}
        size="small"
        style={{ marginBottom: 16 }}
      />

      <Title level={5} style={{ marginTop: 16, marginBottom: 8 }}>
        Partidos del grupo
      </Title>
      <Space direction="vertical" size="small" style={{ width: '100%' }}>
        {matches.map((m) => (
          <MatchCard key={m.id} match={m} showDate />
        ))}
      </Space>
    </Card>
  );
}

export function GroupsPage() {
  return (
    <div>
      <Text type="secondary" style={{ display: 'block', marginBottom: 16 }}>
        Marca los resultados de cada partido para ver cómo se actualizan los
        puntos y la tabla de posiciones. Los datos se guardan en tu navegador.
      </Text>
      <Row gutter={[16, 16]}>
        {GROUPS.map((g) => (
          <Col key={g} xs={24} lg={12}>
            <GroupBlock group={g} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
