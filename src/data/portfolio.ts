export const capabilityLinks = [
  {
    eyebrow: '01 · 고객 환경',
    title: '같은 기능도 고객 환경마다 다르게 동작합니다.',
    description:
      '통신망, 권한, 외부 시스템과 배포 절차가 달라 코드가 같아도 검증 조건은 달라집니다.',
    href: '#experience',
  },
  {
    eyebrow: '02 · AI 답변',
    title: '한 질문을 고치면 다른 정상 답변이 깨질 수 있습니다.',
    description:
      '모델과 답변 규칙이 바뀔 때마다 실패 질문뿐 아니라 표현이 다른 질문과 기존 정상 답변도 다시 확인해야 합니다.',
    href: '#selected-work',
  },
  {
    eyebrow: '03 · AI 생성 코드',
    title: '코드가 만들어졌다는 사실만으로는 배포할 수 없습니다.',
    description:
      'AI가 만든 변경은 허용한 파일만 바꿨는지, 실제로 실행되는지와 기존 기능을 깨뜨리지 않는지 확인해야 합니다.',
    href: '#selected-work',
  },
  {
    eyebrow: '04 · 반복 업무',
    title: '사람마다 다른 방식으로 반복하면 결과도 달라집니다.',
    description:
      '반복 SQL 생성, 테스트 대상 선정과 운영 대응처럼 기준이 있는 일은 도구와 문서로 남겨야 다시 확인할 수 있습니다.',
    href: '#more-work',
  },
];

export const productExperience = [
  {
    period: '2026.07 — 현재',
    label: '고객 환경 검증',
    title: '서로 다른 상담 제품의 공존 조건 설계',
    summary:
      '구조가 다른 두 제품이 같은 고객 환경에서 동작할 수 있는 조건을 검토하고 있습니다.',
    scope: '문제 정의 · 공존 조건 설계 · 검증 기준과 전환 절차 작성',
  },
  {
    period: '2026.01 — 05',
    label: 'AI 제품 백엔드',
    title: 'AI 기능 개발과 품질 검증',
    summary:
      'Python/FastAPI 기반 AI 기능을 개발하고, 답변 오류와 테스트 공백을 다시 확인할 수 있는 구조를 만들었습니다.',
    scope: 'AI 백엔드 개발 · 답변 품질 검증 · 테스트 자동화',
  },
  {
    period: '2024.06 — 2025.03',
    label: '기업용 제품 운영',
    title: 'AWS 기반 상담 솔루션 고객사 운영',
    summary:
      '고객사별 설정과 요구사항을 공통 제품과 분리해 관리하고, 배포·모니터링·장애 대응을 맡았습니다.',
    scope: '고객사 설정 관리 · 요구사항 개발 · 배포 · 모니터링 · 장애 대응',
  },
  {
    period: '2023.02 — 2025.12',
    label: '금융권 고객사 내부망',
    title: '상담 시스템 구축·고도화와 외부 연동',
    summary:
      '요구사항 분석부터 Java/Spring 기능 개발, 고객사의 외부 업무 시스템 연동, 고객 검증과 운영 이행까지 수행했습니다.',
    scope: '요구사항 분석 · Java/Spring 개발 · 외부 연동 · 고객 검증 · 운영 이행',
  },
];

export const supportingWork = [
  {
    period: '2024.01 — 03',
    title: 'Slack 기반 사내 AI 챗봇 단독 개발',
    summary:
      '아이디어 제안부터 설계·개발·배포·운영을 맡고, 모델·비용 비교와 사용자 가이드, 사내 발표 자료를 작성했습니다.',
    evidence: '아이디어 제안 → 개발·배포 → 운영·사용자 안내',
    slug: null,
  },
  {
    period: '2026.03 — 05',
    title: 'AI 서비스 장애 구간과 외부 의존성 분리',
    summary:
      '고객이 전달한 발생 시각, 애플리케이션 로그와 외부 AI 제공사의 장애 기록을 대조해 내부 코드와 외부 호출 문제를 구분했습니다.',
    evidence: '애플리케이션 로그와 외부 제공사 장애 기록을 함께 대조',
    slug: null,
  },
  {
    period: '2026.02 — 03',
    title: '이미지·음성 입력을 AI 처리 흐름에 연결',
    summary:
      '이미지 설명을 검색·답변 흐름에 넣고, 음성 인식 후보를 품질·비용·하드웨어·제품 영향으로 비교해 시연 방식을 정했습니다.',
    evidence: '품질·비용·하드웨어·제품 영향을 함께 비교',
    slug: null,
  },
  {
    period: '2025.03 — 09',
    title: 'DB 권한·별칭 SQL 생성 자동화',
    summary:
      '테이블·뷰 등 DB 객체 유형별 규칙을 적용하는 Java 생성기를 만들어 반복 SQL을 같은 형식으로 다시 만들고 입력·결과 개수를 대조했습니다.',
    evidence: 'DB 객체 유형별 규칙 적용 · 입력과 생성 결과 개수 대조',
    slug: null,
  },
];

export const workingPrinciples = [
  '새 영역을 맡으면 작은 기능으로 동작을 확인한 뒤 작업 범위를 넓힙니다.',
  '어떤 선택을 했는지보다 왜 선택했는지와 어떻게 확인할지를 함께 기록합니다.',
  '장애와 이슈는 원인만 적지 않고 재현 조건과 다음 대응 절차까지 공유합니다.',
  '제가 직접 한 일, 팀이 함께 낸 결과와 AI가 만든 산출물을 구분해 설명합니다.',
];

export const skillGroups = [
  {
    label: 'Backend',
    values: 'Java · Spring Boot · Spring Web MVC · Python · FastAPI · REST API · Pydantic · SQLAlchemy',
  },
  {
    label: 'AI · LLM',
    values: 'LangGraph · LangChain · OpenAI API · RAG · Tool Calling · STT · Multimodal Input',
  },
  {
    label: 'Search · Data',
    values: 'Elasticsearch · BM25 · Metadata Filtering · PostgreSQL · Oracle · MyBatis',
  },
  {
    label: 'Architecture',
    values: 'Spring Cloud Gateway · BFF · Feign · Kafka · SSO/JWT · EAI',
  },
  {
    label: 'Test · Delivery',
    values: 'Pytest · JUnit 5 · Mockito · JaCoCo · SonarQube · Playwright · GitHub Actions · Jenkins',
  },
  {
    label: 'Operations',
    values: 'Docker · Kubernetes · Helm · ArgoCD · Linux · AWS · Zabbix · Slack',
  },
];
