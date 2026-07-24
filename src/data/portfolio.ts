export const capabilityLinks = [
  {
    eyebrow: '고객사 백엔드',
    title: '개발 전에 망·권한·외부 연동 조건부터 확인합니다.',
    description:
      '기능을 만든 뒤 고객 환경에서 막히지 않도록 통신, 계정, 테스트 환경과 배포 일정을 먼저 확인했습니다.',
    href: '#experience',
  },
  {
    eyebrow: 'AI 답변 품질',
    title: '운영에서 발견한 오류를 다음 변경의 테스트로 남깁니다.',
    description:
      '고객이 전달한 실패 질문과 기존 정상 답변을 함께 보관해, 모델이나 프롬프트가 바뀔 때 같은 질문으로 다시 확인했습니다.',
    href: '#selected-work',
  },
  {
    eyebrow: 'AI 테스트 자동화',
    title: 'AI가 만든 변경도 실행 결과를 확인한 뒤에만 내보냅니다.',
    description:
      'AI가 만든 테스트를 원본과 분리한 환경에서 실행하고, 기준을 통과하지 못하면 검토용 브랜치를 만들기 전에 멈췄습니다.',
    href: '#selected-work',
  },
  {
    eyebrow: '역할과 근거',
    title: '직접 한 일과 AI에 맡긴 일을 구분해 설명합니다.',
    description:
      '제가 문제와 검증 기준을 설계하고 AI가 구현한 경우에는, 구현 결과를 제 코딩 성과처럼 합치지 않습니다.',
    href: '#evidence',
  },
];

export const productExperience = [
  {
    period: '2026.07 — 현재',
    label: '현재 · 고객 환경 검증',
    title: '서로 다른 상담 제품을 한 고객 환경에서 함께 운영',
    summary:
      '구조가 다른 두 상담 제품이 같은 고객 환경에서 동작할 수 있도록, 공유 데이터베이스의 예약 작업 충돌을 줄이는 조건을 설계하고 있습니다.',
    contributions: [
      '같은 데이터베이스를 쓰는 두 제품의 예약 작업 기록이 섞일 조건을 분석했습니다.',
      '별도 인프라를 추가하기 전에 테이블 이름을 제품별로 나누는 방안을 설계했습니다.',
      '적용 여부를 판단할 테스트 조건과 전환·복구·모니터링 기준을 작성했습니다.',
      '구현과 실행은 AI 코딩 도구가 맡고, 저는 문제 정의와 결과 판정을 맡았습니다.',
    ],
  },
  {
    period: '2026.01 — 05',
    label: 'AI 제품 백엔드',
    title: 'AI 답변 오류를 다시 확인할 수 있는 검증 구조로 전환',
    summary:
      'Python/FastAPI 기반 AI 기능을 개발하며, 반복되는 답변 오류와 테스트 공백을 다음 변경에서도 다시 확인할 수 있는 구조로 바꿨습니다.',
    contributions: [
      '반복된 답변 오류를 실패 질문, 표현을 바꾼 질문과 기존 정상 답변으로 나눠 다시 실행했습니다.',
      '답변 생성과 질문 종류를 분류하는 경로를 따로 확인해 실패 원인을 좁혔습니다.',
      '서비스마다 다른 테스트 규칙을 설정으로 나누고, AI가 만든 테스트를 별도로 검증했습니다.',
      '검증에 실패한 변경은 검토용 브랜치를 만들기 전에 멈추도록 자동화했습니다.',
    ],
  },
  {
    period: '2024.06 — 2025.03',
    label: 'B2B 제품 운영',
    title: 'AWS 기반 상담 솔루션 고객사 운영',
    summary:
      '고객사별 설정과 요구사항을 공통 제품과 분리해 관리하고, 배포·모니터링·장애 대응을 맡았습니다.',
    contributions: [
      '고객사별 설정과 변경 요청을 공통 제품 코드와 분리해 관리했습니다.',
      '인증서 갱신, 소규모 요구사항 개발과 고객사별 배포를 맡았습니다.',
      'AWS의 서버·데이터베이스·네트워크 환경과 Linux 애플리케이션을 운영했습니다.',
      '모니터링 알림을 확인해 장애에 대응하고, 이슈와 대응 절차를 문서로 남겼습니다.',
    ],
  },
  {
    period: '2023.02 — 2025.12',
    label: '금융권 고객사 내부망',
    title: '상담 시스템 구축·고도화와 외부 연동',
    summary:
      '요구사항 분석부터 Java/Spring 기능 개발, 고객사의 외부 업무 시스템 연동, 고객 검증과 운영 이행까지 수행했습니다.',
    contributions: [
      '요구사항을 화면, API, 데이터, 외부 시스템과 배포 조건으로 나눠 확인했습니다.',
      '고객 정보, 문서 보안, 메일과 공휴일 정보를 상담 시스템에 연결했습니다.',
      '고객 환경의 통신·권한 조건을 맞추고 현업 테스트에서 발견된 문제를 반영했습니다.',
      '모바일과 여러 브라우저에서 고객 화면을 확인한 뒤 운영환경 배포까지 맡았습니다.',
    ],
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

export const evidenceGroups = [
  {
    title: '고객 환경을 포함한 백엔드 개발',
    description:
      '기능뿐 아니라 통신, 계정, 외부 시스템, 테스트 환경과 배포 절차를 같은 작업 범위에서 확인했습니다.',
    items: ['통신·권한·외부 시스템 조건 확인', '고객 검증과 운영환경 배포', '모니터링과 장애 대응 절차 문서화'],
  },
  {
    title: 'AI 답변 재검증',
    description:
      '고객이 전달한 답변 오류를 기준 질문과 기대 답안으로 남기고, 변경 전후를 같은 질문으로 비교했습니다.',
    items: ['실패한 질문 재실행', '표현을 바꾼 질문 별도 확인', '기존 정상 답변과 질문 분류 경로 확인'],
  },
  {
    title: '검증을 통과한 자동화',
    description:
      'AI가 만든 테스트는 원본과 분리한 환경에서 실행하고, 허용한 파일만 바뀌었는지 확인한 뒤 검토용 브랜치로 보냈습니다.',
    items: ['518개 후보에서 실제 대상 1개 선택', '선택 대상의 AI 보완·검증 통과', '한 서비스의 자동 검증 성공 · 코드 실행 범위 80.7% · 테스트 755개'],
  },
  {
    title: 'AI와 사람의 역할 구분',
    description:
      'AI를 구현 도구로 쓴 사례에서는 문제와 통과 조건을 누가 정했고, 누가 코드를 만들고 실행했는지 구분했습니다.',
    items: ['제가 문제와 통과 조건을 설계', 'AI 코딩 도구가 구현·검증 실행', '제가 결과를 검토하고 적용 방향 판단'],
  },
];

export const workingPrinciples = [
  '기능을 만들기 전에 통신 경로, 권한, 외부 시스템과 배포 절차를 먼저 확인합니다.',
  'AI에는 후보와 초안을 맡기고, 실제 검색 범위와 발행 여부는 코드와 테스트로 확인합니다.',
  '고객이 전달한 오류와 장애 로그를 다음 변경에서 다시 실행할 데이터와 테스트로 남깁니다.',
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
