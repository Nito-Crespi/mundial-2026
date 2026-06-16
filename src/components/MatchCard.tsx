import { useState } from 'react';
import { Card, Tag, Button, Modal, InputNumber, Space, Typography } from 'antd';
import {
  ClockCircleOutlined,
  EnvironmentOutlined,
  EditOutlined,
} from '@ant-design/icons';
import { Flag } from './Flag';
import type { Match } from '../types';
import { getTeam } from '../data/teams';
import { getStadium } from '../data/stadiums';
import { useFixtureStore } from '../store/useFixtureStore';
import { formatDateLong } from '../utils/helpers';

const { Text } = Typography;

interface Props {
  match: Match;
  showDate?: boolean;
}

const stageColor: Record<string, string> = {
  'Fase de Grupos': 'blue',
  Dieciseisavos: 'cyan',
  'Octavos de Final': 'geekblue',
  'Cuartos de Final': 'purple',
  Semifinales: 'magenta',
  'Tercer Puesto': 'orange',
  Final: 'gold',
};

export function MatchCard({ match, showDate = false }: Props) {
  const stadium = getStadium(match.stadiumId);
  const home = getTeam(match.homeTeam);
  const away = getTeam(match.awayTeam);
  const savedResult = useFixtureStore((s) => s.results[match.id]);
  const result = savedResult ?? match.result;
  const setResult = useFixtureStore((s) => s.setResult);
  const clearResult = useFixtureStore((s) => s.clearResult);

  const [editOpen, setEditOpen] = useState(false);
  const [homeGoals, setHomeGoals] = useState<number>(result?.homeGoals ?? 0);
  const [awayGoals, setAwayGoals] = useState<number>(result?.awayGoals ?? 0);

  const openEdit = () => {
    setHomeGoals(result?.homeGoals ?? 0);
    setAwayGoals(result?.awayGoals ?? 0);
    setEditOpen(true);
  };

  const save = () => {
    setResult(match.id, { homeGoals, awayGoals });
    setEditOpen(false);
  };

  const canEditResult = !match.isPlaceholder;

  return (
    <>
      <Card
        size="small"
        className="match-card"
        styles={{ body: { padding: 14 } }}
        style={{ borderRadius: 10 }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
            gap: 8,
            flexWrap: 'wrap',
          }}
        >
          <Space size={6} wrap>
            <Tag color={stageColor[match.stage] || 'default'}>{match.stage}</Tag>
            {match.group && <Tag color="green">Grupo {match.group}</Tag>}
            <Tag>#{match.id}</Tag>
          </Space>
          <Space size={4} style={{ color: '#64748b', fontSize: 12 }}>
            <ClockCircleOutlined />
            <Text type="secondary" style={{ fontSize: 12 }}>
              {match.time} ET
            </Text>
          </Space>
        </div>

        {showDate && (
          <Text
            type="secondary"
            style={{ fontSize: 12, display: 'block', marginBottom: 8 }}
          >
            {formatDateLong(match.date)}
          </Text>
        )}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
            gap: 12,
            padding: '10px 4px',
          }}
        >
          <div className="team-row" style={{ justifyContent: 'flex-end' }}>
            <span style={{ textAlign: 'right' }}>{home.name}</span>
            <Flag code={home.code} size="md" alt={home.name} />
          </div>

          {result ? (
            <span className="score-pill">
              {result.homeGoals} – {result.awayGoals}
            </span>
          ) : (
            <Text strong style={{ color: '#64748b' }}>
              vs
            </Text>
          )}

          <div className="team-row">
            <Flag code={away.code} size="md" alt={away.name} />
            <span>{away.name}</span>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 8,
            gap: 8,
            flexWrap: 'wrap',
          }}
        >
          <Space size={4} style={{ color: '#64748b', fontSize: 12 }}>
            <EnvironmentOutlined />
            <Text type="secondary" style={{ fontSize: 12 }}>
              {stadium?.name} · {stadium?.city}
            </Text>
          </Space>
          {canEditResult && (
            <Button
              size="small"
              icon={<EditOutlined />}
              type={result ? 'default' : 'primary'}
              ghost={!result}
              onClick={openEdit}
            >
              {result ? 'Editar' : 'Marcar resultado'}
            </Button>
          )}
        </div>
      </Card>

      <Modal
        title={`Resultado: ${home.name} vs ${away.name}`}
        open={editOpen}
        onCancel={() => setEditOpen(false)}
        onOk={save}
        okText="Guardar"
        cancelText="Cancelar"
        footer={[
          result && (
            <Button
              key="clear"
              danger
              onClick={() => {
                clearResult(match.id);
                setEditOpen(false);
              }}
            >
              Borrar resultado
            </Button>
          ),
          <Button key="cancel" onClick={() => setEditOpen(false)}>
            Cancelar
          </Button>,
          <Button key="save" type="primary" onClick={save}>
            Guardar
          </Button>,
        ]}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            justifyContent: 'center',
            padding: '12px 0',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <Flag code={home.code} size="lg" />
            <div style={{ marginTop: 8, fontWeight: 500 }}>{home.name}</div>
            <InputNumber
              min={0}
              max={20}
              value={homeGoals}
              onChange={(v) => setHomeGoals(v ?? 0)}
              style={{ marginTop: 8, width: 80 }}
            />
          </div>
          <div style={{ fontSize: 24, fontWeight: 600, color: '#64748b' }}>—</div>
          <div style={{ textAlign: 'center' }}>
            <Flag code={away.code} size="lg" />
            <div style={{ marginTop: 8, fontWeight: 500 }}>{away.name}</div>
            <InputNumber
              min={0}
              max={20}
              value={awayGoals}
              onChange={(v) => setAwayGoals(v ?? 0)}
              style={{ marginTop: 8, width: 80 }}
            />
          </div>
        </div>
      </Modal>
    </>
  );
}
