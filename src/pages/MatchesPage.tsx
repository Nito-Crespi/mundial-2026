import { useMemo, useState } from "react";
import {
  Select,
  Input,
  Space,
  Empty,
  Typography,
  Row,
  Col,
  Button,
  Collapse,
} from "antd";
import { SearchOutlined, ClearOutlined } from "@ant-design/icons";
import { MATCHES } from "../data/matches";
import { STADIUMS } from "../data/stadiums";
import { GROUPS, TEAMS } from "../data/teams";
import { MatchCard } from "../components/MatchCard";
import {
  formatDateLong,
  groupMatches,
  uniqueSortedDates,
} from "../utils/helpers";
import type { Group, Stage } from "../types";

const { Title, Text } = Typography;

const STAGES: Stage[] = [
  "Fase de Grupos",
  "Dieciseisavos",
  "Octavos de Final",
  "Cuartos de Final",
  "Semifinales",
  "Tercer Puesto",
  "Final",
];

export function MatchesPage() {
  const [search, setSearch] = useState("");
  const [group, setGroup] = useState<Group | undefined>(undefined);
  const [stage, setStage] = useState<Stage | undefined>(undefined);
  const [stadium, setStadium] = useState<string | undefined>(undefined);
  const [team, setTeam] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<string | undefined>(undefined);

  const filtered = useMemo(() => {
    return MATCHES.filter((m) => {
      if (group && m.group !== group) return false;
      if (stage && m.stage !== stage) return false;
      if (stadium && m.stadiumId !== stadium) return false;
      if (team && m.homeTeam !== team && m.awayTeam !== team) return false;
      if (date && m.date !== date) return false;
      if (search.trim()) {
        const s = search.trim().toLowerCase();
        if (
          !m.homeTeam.toLowerCase().includes(s) &&
          !m.awayTeam.toLowerCase().includes(s)
        )
          return false;
      }
      return true;
    });
  }, [group, stage, stadium, team, date, search]);

  const dates = uniqueSortedDates(filtered);
  const byDate = groupMatches(filtered);

  const clearFilters = () => {
    setSearch("");
    setGroup(undefined);
    setStage(undefined);
    setStadium(undefined);
    setTeam(undefined);
    setDate(undefined);
  };

  const activeFilters =
    !!search || !!group || !!stage || !!stadium || !!team || !!date;

  return (
    <div>
      <Collapse
        defaultActiveKey={[]}
        style={{ marginBottom: 24, borderRadius: 12, background: "#fff" }}
        items={[
          {
            key: "filters",
            label: (
              <Space size="small">
                <Title level={4} style={{ margin: 0 }}>
                  Filtros
                </Title>
                {activeFilters && (
                  <Text type="secondary">
                    {filtered.length}{" "}
                    {filtered.length === 1 ? "partido" : "partidos"} encontrados
                  </Text>
                )}
              </Space>
            ),
            children: (
              <Row gutter={[12, 12]}>
                <Col xs={24} sm={12} md={8} lg={6}>
                  <Input
                    prefix={<SearchOutlined />}
                    placeholder="Buscar equipo…"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    allowClear
                  />
                </Col>
                <Col xs={24} sm={12} md={8} lg={5}>
                  <Select
                    placeholder="Grupo"
                    value={group}
                    onChange={(v) => setGroup(v)}
                    allowClear
                    style={{ width: "100%" }}
                    options={GROUPS.map((g) => ({
                      value: g,
                      label: `Grupo ${g}`,
                    }))}
                  />
                </Col>
                <Col xs={24} sm={12} md={8} lg={5}>
                  <Select
                    placeholder="Fase"
                    value={stage}
                    onChange={(v) => setStage(v)}
                    allowClear
                    style={{ width: "100%" }}
                    options={STAGES.map((s) => ({ value: s, label: s }))}
                  />
                </Col>
                <Col xs={24} sm={12} md={8} lg={4}>
                  <Select
                    placeholder="Equipo"
                    value={team}
                    onChange={(v) => setTeam(v)}
                    allowClear
                    showSearch
                    style={{ width: "100%" }}
                    options={TEAMS.map((t) => ({
                      value: t.name,
                      label: t.name,
                    }))}
                  />
                </Col>
                <Col xs={24} sm={12} md={8} lg={4}>
                  <Select
                    placeholder="Estadio"
                    value={stadium}
                    onChange={(v) => setStadium(v)}
                    allowClear
                    showSearch
                    style={{ width: "100%" }}
                    options={STADIUMS.map((s) => ({
                      value: s.id,
                      label: `${s.name} (${s.city})`,
                    }))}
                  />
                </Col>
                <Col xs={24} sm={12} md={8} lg={5}>
                  <Select
                    placeholder="Fecha"
                    value={date}
                    onChange={(v) => setDate(v)}
                    allowClear
                    showSearch
                    style={{ width: "100%" }}
                    options={uniqueSortedDates(MATCHES).map((d) => ({
                      value: d,
                      label: formatDateLong(d),
                    }))}
                  />
                </Col>
                {activeFilters && (
                  <Col xs={24}>
                    <Button icon={<ClearOutlined />} onClick={clearFilters}>
                      Limpiar filtros
                    </Button>
                  </Col>
                )}
              </Row>
            ),
          },
        ]}
      />

      {filtered.length === 0 ? (
        <Empty description="No hay partidos con esos filtros" />
      ) : (
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          {dates.map((d) => (
            <div key={d}>
              <Title
                level={5}
                style={{
                  textTransform: "capitalize",
                  marginBottom: 12,
                  paddingBottom: 8,
                  borderBottom: "2px solid #e2e8f0",
                }}
              >
                {formatDateLong(d)}
              </Title>
              <Row gutter={[16, 16]}>
                {byDate[d].map((m) => (
                  <Col key={m.id} xs={24} md={12} xl={8}>
                    <MatchCard match={m} />
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </Space>
      )}
    </div>
  );
}
