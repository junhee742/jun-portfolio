export const provenResults = [
  {
    value: "54/54",
    label: "AI 답변 회귀검증 통과",
    note: "변경 전 44/54",
    slug: "prompt-regression",
  },
  {
    value: "80.7%",
    label: "한 서비스 코드 실행 범위",
    note: "테스트 755개",
    slug: "ai-test-automation-worker",
  },
  {
    value: "21/21",
    label: "예약 작업 정확히 한 번씩",
    note: "중복 0건",
    slug: "enterprise-chatbot-modernization",
  },
  {
    value: "8시간 → 1시간",
    label: "반복 SQL 작성 시간",
    note: "DB 객체 450개",
    slug: null,
  },
];

export const careerSummary = {
  company: "(주)스펙트라 제품개발부",
  period: "2022.11 — 현재",
  note: "번갈아 맡기도, 나란히 맡기도 했습니다.",
};

export const careerTracks = [
  {
    id: "ai-product",
    label: "AI 제품 · LLM",
    period: "2026.01 — 07",
    summary:
      "Agent·RAG 기능을 만들고, 모델이 바뀌어도 다시 확인할 기준을 남겼습니다.",
    stack: [
      "Python",
      "FastAPI",
      "LangGraph",
      "LangChain",
      "Elasticsearch",
      "OpenAI API",
    ],
    items: [
      {
        title: "AI 답변 회귀검증",
        line: "실패한 질문만 고치지 않고, 표현을 바꾼 질문과 기존 정상 답변까지 함께 재실행했습니다.",
        metric: "고정 원문 44/54 → 54/54",
        slug: "prompt-regression",
      },
      {
        title: "검색 범위를 제어하는 RAG",
        line: "LLM은 검색 후보만 제안하고, 실제 필터와 대체 경로는 코드가 정하게 했습니다.",
        metric: "변경 경로 4곳 정적 검사·테스트",
        slug: "rag-search-ingestion",
      },
      {
        title: "이미지·음성 입력을 Agent에 연결",
        line: "LangGraph에 이미지 설명 노드를 붙이고, 음성 인식 후보를 비용·하드웨어까지 놓고 비교했습니다.",
        metric: "STT 후보 6개 비교 후 선택",
        slug: null,
      },
      {
        title: "Slack 사내 AI 챗봇 단독 개발",
        line: "아이디어 제안부터 설계·개발·배포·운영까지 혼자 맡았습니다.",
        metric: "18명 · 33개 스레드 · 233개 댓글",
        slug: null,
      },
    ],
  },
  {
    id: "enterprise",
    label: "고객사 구축 · 연동",
    period: "2023.02 — 현재",
    summary:
      "기능을 만들기 전에 망, 권한, 연동 대상과 운영 반영 절차부터 맞췄습니다.",
    stack: [
      "Java",
      "Spring Boot",
      "Spring Web MVC",
      "Oracle",
      "MyBatis",
      "EAI",
      "Quartz",
    ],
    items: [
      {
        title: "금융권 상담 시스템 구축",
        line: "방화벽과 테스트 계정이 안 열리면 코드가 완성돼도 검증이 시작되지 않아, 개발 순서를 뒤집었습니다.",
        metric: "모바일·브라우저 8개 조합 검증",
        slug: "financial-customer-system",
      },
      {
        title: "공유 DB의 예약 작업 분리",
        line: "새 DB 계정도 새 API도 만들지 않고, 충돌 지점을 테이블 하나로 좁혀 설정으로 갈랐습니다.",
        metric: "예정 실행 21/21 · 중복 0건",
        slug: "enterprise-chatbot-modernization",
      },
    ],
  },
  {
    id: "quality",
    label: "테스트 · 개발 생산성",
    period: "2025.03 — 2026.06",
    summary:
      "빨리 만드는 자동화보다, 검증을 통과한 결과만 나가는 자동화를 우선했습니다.",
    stack: [
      "Python",
      "Pytest",
      "JUnit 5",
      "Mockito",
      "GitHub Actions",
      "SonarQube",
    ],
    items: [
      {
        title: "AI 테스트 자동화",
        line: "'코드를 만들었다'와 '반영해도 된다'를 같은 성공으로 보지 않고, 생성과 발행 사이에 검증 단계를 넣었습니다.",
        metric: "코드 실행 범위 80.7% · 테스트 755개",
        slug: "ai-test-automation-worker",
      },
      {
        title: "DB 권한·synonym SQL 생성 자동화",
        line: "DB 객체를 유형별로 분류해 규칙에 맞는 SQL을 뽑는 Java 생성기를 만들었습니다.",
        metric: "객체 450개 · 8시간 → 1시간 미만",
        slug: null,
      },
    ],
  },
  {
    id: "operations",
    label: "운영 · 안정화",
    period: "2024.06 — 2026.05",
    summary:
      "장애를 한 범주로 묶지 않고, 로그와 시간대를 대조해 원인 범위를 좁혔습니다.",
    stack: ["AWS", "Docker", "Kubernetes", "Linux", "Zabbix", "PostgreSQL"],
    items: [
      {
        title: "AWS 기반 상담 솔루션 고객사 운영",
        line: "고객사별 설정을 공통 제품과 분리해 관리하고, Zabbix·Slack 알림부터 대응 기록까지 단독으로 이어갔습니다.",
        metric: "약 40개 고객사 운영",
        slug: null,
      },
      {
        title: "AI 서비스 장애의 외부 의존성 분리",
        line: "애플리케이션 로그와 외부 LLM 제공사의 장애 기록을 같은 시간대로 맞춰 원인을 갈랐습니다.",
        metric: "50초 이상 74건을 외부 호출로 확정",
        slug: null,
      },
    ],
  },
];

export const workingPrinciples = [
  "개발 전에 막힐 조건부터 확인합니다. 금융권 구축에서는 방화벽과 테스트 계정을 먼저 연 뒤 기능 개발을 시작했습니다.",
  "LLM이 제안할 영역과 코드가 보장할 영역을 나눕니다. RAG에서는 모델이 후보만 내고, 필터 적용 여부는 코드가 정합니다.",
  "확인한 범위만 말합니다. 한 서비스에서 나온 80.7%를 전체 서비스의 결과로 쓰지 않았습니다.",
];

export const skillGroups = [
  {
    label: "Backend",
    values:
      "Java · Spring Boot · Spring Web MVC · Python · FastAPI · REST API · Pydantic · SQLAlchemy",
  },
  {
    label: "AI · LLM",
    values:
      "LangGraph · LangChain · OpenAI API · RAG · Tool Calling · STT · Multimodal Input",
  },
  {
    label: "Search · Data",
    values:
      "Elasticsearch · BM25 · Metadata Filtering · PostgreSQL · Oracle · MyBatis",
  },
  {
    label: "Architecture",
    values: "Spring Cloud Gateway · BFF · Feign · Kafka · SSO/JWT · EAI",
  },
  {
    label: "Test · Delivery",
    values:
      "Pytest · JUnit 5 · Mockito · JaCoCo · SonarQube · Playwright · GitHub Actions · Jenkins",
  },
  {
    label: "Operations",
    values:
      "Docker · Kubernetes · Helm · ArgoCD · Linux · AWS · Zabbix · Slack",
  },
];
