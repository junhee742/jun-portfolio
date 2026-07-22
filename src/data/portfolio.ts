export const capabilityLinks = [
  {
    eyebrow: 'Enterprise Backend',
    title: '고객 환경에서 서비스가 동작할 조건을 찾습니다.',
    description:
      '내부망, 권한, 인증, EAI·기간계와 배포 절차를 기능 개발과 같은 범위에서 확인합니다.',
    href: '#experience',
  },
  {
    eyebrow: 'AI Quality',
    title: '운영에서 발견된 실패를 다음 변경의 검증 기준으로 남깁니다.',
    description:
      '모델과 프롬프트가 바뀌어도 같은 입력으로 답변과 라우팅을 다시 확인할 수 있게 만듭니다.',
    href: '#selected-work',
  },
  {
    eyebrow: 'RAG Systems',
    title: 'LLM이 제안할 영역과 코드가 결정할 영역을 나눕니다.',
    description:
      '검색 후보는 LLM이 제안하고, 실제 필터·fallback·실패 처리는 코드와 테스트가 맡습니다.',
    href: '#selected-work',
  },
  {
    eyebrow: 'Verified Automation',
    title: 'AI 생성 결과를 검증하기 전에는 외부로 발행하지 않습니다.',
    description:
      '수정 경계, 격리 작업공간과 품질 게이트를 두어 실패한 변경이 branch나 PR로 퍼지지 않게 합니다.',
    href: '#selected-work',
  },
];

export const productExperience = [
  {
    period: '2026.07 — 현재',
    label: '현재 업무 · 고객사 구축',
    title: '금융권 상담 시스템과 제품 공존 구조',
    summary:
      '구조가 다른 상담 제품이 고객 환경에서 함께 동작하도록 DB·스케줄러·외부 지식 연동의 경계를 설계하고 검증하고 있습니다.',
    contributions: [
      '요구사항과 고객 환경의 망·권한·DB·배포 조건 분석',
      '공유 DB에서 스케줄러 테이블 충돌 지점과 설정 기반 격리안 설계',
      '검증 시나리오, 수용 기준, 전환·롤백·모니터링 기준 수립',
      '고객 운영환경 반영 전 내부 검증 결과와 운영 성과를 분리해 관리',
    ],
  },
  {
    period: '2026.01 — 05',
    label: 'AI 제품 · Agent/RAG',
    title: '상담·협업 MSA 기반 AI 제품 백엔드',
    summary:
      'Python/FastAPI 기반 Agent·RAG 기능과 Java/Spring 기반 상담 플랫폼 사이의 요청·검색·이벤트 흐름을 다뤘습니다.',
    contributions: [
      '반복 오답을 원문·의미 변형·기존 정상 답변·라우팅 평가군으로 구성',
      'RAG 검색 범위 schema, metadata filter와 no-result fallback 설계',
      '공유 문서 수집·색인의 동시 처리, 파일 실패 격리와 retry 경계 개선',
      '이미지 질의와 STT를 Agent workflow에 연결하고 모델 설정·접근 제어 안정화',
    ],
  },
  {
    period: '2024.06 — 2025.03',
    label: '클라우드 운영',
    title: 'AWS 기반 상담 솔루션 약 40개 고객사 운영',
    summary:
      '고객사별 설정과 요구사항을 공통 제품과 분리해 관리하고, 배포·모니터링·장애 대응을 맡았습니다.',
    contributions: [
      'SSL 인증서 갱신, 소규모 요구사항 개발과 고객사별 배포',
      'AWS EC2·RDS·VPC·ELB 환경과 Linux 애플리케이션 운영',
      'Zabbix·Slack 24시간 알림을 활용한 장애 대응',
      '이슈와 대응 절차를 문서화해 단독 운영의 연속성 확보',
    ],
  },
  {
    period: '2023.02 — 2025.12',
    label: '금융권 온프레미스',
    title: '상담 시스템 구축·고도화와 외부 연동',
    summary:
      '요구사항 분석부터 Java/Spring 기능 개발, EAI·기간계 연동, 고객 검증과 운영 이행까지 수행했습니다.',
    contributions: [
      'mapper 약 300개 전환, 취약점 약 60개 조치와 부하 테스트 수행',
      '최대 동시 상담 200건·총 46,000건 테스트에서 95th percentile 약 20% 개선',
      '이메일 상담 시스템의 정보계 EAI·DRM·메일 연동 후 일평균 약 200–400건 운영',
      '고객사 단독 상주 프로젝트에서 요구사항 협의부터 테스트·배포까지 수행',
      '3명 개발 인력으로 기능 포팅과 신규 커스터마이징 141건 수행',
    ],
  },
];

export const supportingWork = [
  {
    period: '2026.07 — 현재',
    title: '공유 DB 환경의 스케줄러 격리',
    summary:
      '두 제품이 같은 DB 스키마를 사용할 때 충돌 지점을 scheduler table로 좁히고, 소스 수정 대신 table prefix와 설치 DDL을 분리했습니다.',
    evidence: '21/21 실행 구간 · 중복 0건 · 16시간 내부 검증',
    slug: 'enterprise-chatbot-modernization',
  },
  {
    period: '2026.03 — 05',
    title: 'AI 서비스 장애 구간과 외부 의존성 분리',
    summary:
      '고객 발생 시각, 애플리케이션 로그와 외부 LLM provider incident를 대조해 내부 로직과 외부 호출 문제를 구분했습니다.',
    evidence: '50초 이상 74건 · 90초 이상 18건 분석',
    slug: null,
  },
  {
    period: '2026.02 — 03',
    title: '이미지·음성 입력을 Agent workflow에 연결',
    summary:
      '이미지 설명 노드를 검색·답변 흐름에 연결하고, STT 후보를 품질·비용·하드웨어·의존성 기준으로 비교해 데모 방식을 결정했습니다.',
    evidence: 'STT 후보 6개 비교 · 이미지 질의·세션 복구 구현',
    slug: null,
  },
  {
    period: '2025.03 — 09',
    title: 'DB 권한·synonym SQL 생성 자동화',
    summary:
      '객체 유형별 규칙을 적용하는 Java generator를 만들어 반복 SQL을 같은 기준으로 재생성하고 입력·결과 개수를 대조했습니다.',
    evidence: '약 450개 객체 · 3,000줄 이상 · 8시간 이상 → 1시간 미만',
    slug: null,
  },
  {
    period: '2024.01 — 03',
    title: 'Slack 기반 사내 AI 챗봇 단독 개발',
    summary:
      '아이디어 제안부터 설계·개발·배포·운영을 맡고, 모델·비용 보고서와 사용자 가이드, Tech Talk 자료까지 작성했습니다.',
    evidence: '18명 · 33개 스레드 · 233개 댓글 · 발표 설문 37명',
    slug: null,
  },
];

export const evidenceGroups = [
  {
    title: '고객 환경과 운영 이행',
    description:
      '요구사항, 연동 대상, 테스트 조합과 운영 반영 절차를 함께 기록해 기능 구현과 실제 적용 범위를 구분합니다.',
    items: ['8개 모바일·브라우저 조합 검증', 'AWS 약 40개 고객사 운영 기록', '부하 테스트와 운영 이행 기록'],
  },
  {
    title: 'AI 품질과 검색 판단',
    description:
      '실패 질문, 기대 결과, 실행 경로와 변경 전후 결과를 남겨 프롬프트나 검색 변경을 같은 기준으로 다시 실행합니다.',
    items: ['LLM 회귀 평가군과 결과 리포트', 'RAG 검색·fallback 테스트', '파일별 수집·색인 실패와 retry 결과'],
  },
  {
    title: '검증 가능한 자동화',
    description:
      '저장소 contract, 격리 작업공간, 검증 명령과 발행 기록으로 AI가 만든 변경의 허용 범위와 결과를 확인합니다.',
    items: ['518개 후보에서 대상 선택 기록', 'AI 보완·검증 통과 기록', 'CI·coverage·test report'],
  },
  {
    title: '문서화와 공유',
    description:
      '결과물만 남기지 않고 선택 기준, 사용 방법과 운영 경계를 보고서·가이드·runbook으로 정리합니다.',
    items: ['AI 모델·비용 비교 보고서', '사용자 가이드와 Tech Talk 자료', '전환·모니터링·롤백 runbook'],
  },
];

export const workingPrinciples = [
  '개발 전에 통신 경로, 권한, 연동 대상과 운영 반영 절차처럼 막힐 조건부터 확인합니다.',
  'LLM에는 후보와 초안을 맡기고, 검색 범위·발행 여부·검증 통과 조건은 코드와 테스트가 결정하게 합니다.',
  '고객 오답과 장애 로그를 평가 데이터, 테스트와 반복 실행 절차로 바꿉니다.',
  '직접 설계·판단한 범위와 AI가 생성·실행한 범위를 분리해 검토합니다.',
  '한 서비스의 결과를 전체 서비스로 확대하거나 내부 검증을 고객 운영 성과로 표현하지 않습니다.',
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
