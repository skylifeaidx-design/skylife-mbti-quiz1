// 스카이라이프 MBTI 찐친 퀴즈 데이터

// 20개의 퀴즈 질문 (다양한 직장생활 에피소드 기반)
const quizQuestions = [
    {
        id: 1,
        question: "새로 입사한 동료가 점심시간에 같이 먹자고 했어요. 당신의 반응은?",
        dimension: "EI",
        options: [
            { text: "좋아요! 다른 팀 사람들도 불러서 시끌벅적하게 먹을까요?", value: "E", emoji: "🎉" },
            { text: "네, 좋아요. 조용한 곳에서 오붓하게 대화하며 먹고 싶어요", value: "I", emoji: "☕" }
        ]
    },
    {
        id: 2,
        question: "팀 회의에서 새로운 아이디어를 공유해야 해요. 어떻게 하시겠어요?",
        dimension: "EI",
        options: [
            { text: "바로 손들고 발표해요! 토론이 활발해지는 분위기를 즐겨요", value: "E", emoji: "🙋" },
            { text: "미리 생각을 정리해서 메일로 공유하거나, 차례가 오면 말해요", value: "I", emoji: "📝" }
        ]
    },
    {
        id: 3,
        question: "새로운 프로젝트를 기획할 때, 첫 단계에서 당신은?",
        dimension: "SN",
        options: [
            { text: "기존의 성공 사례와 구체적인 수치 데이터를 먼저 분석해요", value: "S", emoji: "📊" },
            { text: "비슷한 사례는 없지만, 새로운 미래 트렌드와 가능성을 상상해요", value: "N", emoji: "💡" }
        ]
    },
    {
        id: 4,
        question: "업무 보고서를 작성할 때 당신이 더 공들이는 부분은?",
        dimension: "SN",
        options: [
            { text: "실행 가능한 구체적인 액션 플랜과 꼼꼼한 세부 수치", value: "S", emoji: "📈" },
            { text: "프로젝트의 근본적인 목적과 앞으로 가져올 파급 효과", value: "N", emoji: "🔮" }
        ]
    },
    {
        id: 5,
        question: "친한 동료가 큰 실수를 해서 침울해하고 있어요. 당신의 첫 마디는?",
        dimension: "TF",
        options: [
            { text: "일단 해결부터 해야 하니까 원인을 같이 분석하고 도와줄게요", value: "T", emoji: "🔍" },
            { text: "많이 당황했죠? 그럴 수도 있어요. 맛있는 거 먹으러 가요", value: "F", emoji: "💝" }
        ]
    },
    {
        id: 6,
        question: "중요한 의사결정을 내려야 하는 상황, 어떤 기준을 따르나요?",
        dimension: "TF",
        options: [
            { text: "객관적인 원칙과 논리적인 타당성이 가장 중요해요", value: "T", emoji: "⚖️" },
            { text: "팀원들의 사기와 주변 사람들에게 미칠 영향이 중요해요", value: "F", emoji: "🤝" }
        ]
    },
    {
        id: 7,
        question: "일주일 뒤가 큰 행사에요. 당신의 현재 상태는?",
        dimension: "JP",
        options: [
            { text: "이미 체크리스트를 기반으로 모든 준비가 착착 끝난 상태예요", value: "J", emoji: "✅" },
            { text: "큰 가닥은 잡았고, 남은 기간 집중해서 디테일을 채울 계획이에요", value: "P", emoji: "⏰" }
        ]
    },
    {
        id: 8,
        question: "출장을 가기 전날 밤, 짐을 싸는 당신의 스타일은?",
        dimension: "JP",
        options: [
            { text: "일정별 옷차림까지 다 정해서 꼼꼼하게 리스트대로 준비해요", value: "J", emoji: "📋" },
            { text: "가장 필요한 것만 일단 넣고, 나머지는 가서 상황 봐서 챙겨요", value: "P", emoji: "🎒" }
        ]
    },
    {
        id: 9,
        question: "전사 워크숍 참여 시간 중, 당신이 선호하는 보너스 타임은?",
        dimension: "EI",
        options: [
            { text: "처음 본 타 팀 사람들과 친해질 수 있는 네트워킹 시간", value: "E", emoji: "🗣️" },
            { text: "자유롭게 휴식을 취하거나 조용히 풍경을 즐기는 개인 시간", value: "I", emoji: "🌿" }
        ]
    },
    {
        id: 10,
        question: "퇴근 30분 전, 갑작스러운 협업 요청이 왔어요. 당신은?",
        dimension: "JP",
        options: [
            { text: "오늘 계획이 어그러져서 불편하지만, 일단 일정 조율을 해봐요", value: "J", emoji: "📅" },
            { text: "그럴 수도 있죠! 유연하게 일정을 조정해서 바로 대응해요", value: "P", emoji: "🔄" }
        ]
    },
    {
        id: 11,
        question: "새로운 사내 복지 아이디어를 낼 때, 당신의 스타일은?",
        dimension: "SN",
        options: [
            { text: "현실적으로 당장 실현 가능하고 직원들이 바로 혜택을 볼 수 있는 것", value: "S", emoji: "🛠️" },
            { text: "조금 파격적이어도 5년 뒤 10년 뒤의 기업 문화를 바꿀 만한 것", value: "N", emoji: "🚀" }
        ]
    },
    {
        id: 12,
        question: "동료의 상을 당했을 때 조문을 가야 해요. 당신의 마음가짐은?",
        dimension: "TF",
        options: [
            { text: "가서 슬픔을 나누고 위로해주는 진정성이 가장 중요해요", value: "F", emoji: "🖤" },
            { text: "예의를 갖추고 필요한 도움을 주는 실무적인 배려가 중요해요", value: "T", emoji: "👔" }
        ]
    },
    {
        id: 13,
        question: "팀 회식 자리를 정해야 한다면 어디가 좋을까요?",
        dimension: "EI",
        options: [
            { text: "최신 유행하고 활기찬 핫플레이스!", value: "E", emoji: "🕺" },
            { text: "조용히 대화에 집중할 수 있는 아늑한 레스토랑", value: "I", emoji: "🕯️" }
        ]
    },
    {
        id: 14,
        question: "업무 메뉴얼이 새로 생겼어요. 당신은 어떻게 하시겠어요?",
        dimension: "SN",
        options: [
            { text: "하나하나 꼼꼼히 정독하고 그대로 따라가려고 노력해요", value: "S", emoji: "📖" },
            { text: "큰 가닥만 파악한 뒤 제 스타일대로 응용해서 활용해요", value: "N", emoji: "🎨" }
        ]
    },
    {
        id: 15,
        question: "후배가 제안한 아이디어가 말도 안 된다고 생각될 때?",
        dimension: "TF",
        options: [
            { text: "비현실적인 이유를 논리적으로 설명하고 다시 생각해보라고 해요", value: "T", emoji: "🙅" },
            { text: "신선한 발상이라고 칭찬해주고 다른 방향으로 부드럽게 유도해요", value: "F", emoji: "🙏" }
        ]
    },
    {
        id: 16,
        question: "업무 공간을 정리하는 당신의 습관은?",
        dimension: "JP",
        options: [
            { text: "늘 물건이 제자리에 있어야 마음이 편하고 업무 효율이 올라가요", value: "J", emoji: "🏗️" },
            { text: "좀 어질러져 있어도 제가 어디에 뒀는지만 알면 상관없어요", value: "P", emoji: "🌀" }
        ]
    },
    {
        id: 17,
        question: "모르는 번호로 전화가 왔어요. 당신은 어떻게 하나요?",
        dimension: "EI",
        options: [
            { text: "누군지 궁금해서 바로 받아요", value: "E", emoji: "📞" },
            { text: "일단 안 받고, 나중에 문자를 보내거나 번호를 검색해 봐요", value: "I", emoji: "🔍" }
        ]
    },
    {
        id: 18,
        question: "여행 계획을 세울 때 당신의 모습은?",
        dimension: "JP",
        options: [
            { text: "시간 단위로 일정을 짜고 예약을 미리 다 해둬야 해요", value: "J", emoji: "📍" },
            { text: "꼭 가야 할 곳 몇 군데만 정하고 나머지는 발길 닿는 대로 가요", value: "P", emoji: "👟" }
        ]
    },
    {
        id: 19,
        question: "영화나 드라마를 볼 때 더 끌리는 장르는?",
        dimension: "SN",
        options: [
            { text: "현실적이고 공감 가는 일상물이나 실화 기반 영화", value: "S", emoji: "🎥" },
            { text: "독특한 세계관의 판타지나 미스테리 SF 영화", value: "N", emoji: "🛸" }
        ]
    },
    {
        id: 20,
        question: "선물을 고를 때 당신의 기준은?",
        dimension: "TF",
        options: [
            { text: "상대방에게 정말 필요하고 실용적인 물건", value: "T", emoji: "🎁" },
            { text: "상대방의 취향과 정성이 느껴지는 감성적인 물건", value: "F", emoji: "💌" }
        ]
    }
];


// 16가지 MBTI 유형별 정보 (직장인 특성 반영, 동료 위로 메시지 포함)
const mbtiTypes = {
    INTJ: {
        name: "스카이라이프의 전략가",
        emoji: "🎯",
        color: "#6B5B95",
        description: "냉철한 분석력과 장기적 비전으로 조직을 이끄는 전략적 사고의 달인",
        strengths: [
            "회의에서 핵심을 짚어내는 통찰력이 뛰어나요",
            "복잡한 프로젝트도 체계적으로 정리해서 추진해요",
            "감정에 휘둘리지 않고 객관적으로 판단해요",
            "혼자서도 묵묵히 높은 퀄리티의 결과물을 만들어요",
            "업무 효율을 개선하는 아이디어를 자주 제안해요",
            "장기적인 관점에서 팀의 방향을 제시해요",
            "빠르게 문제의 본질을 파악하고 해결책을 찾아요",
            "불필요한 회의나 업무를 줄이는 데 능숙해요",
            "데이터를 기반으로 설득력 있게 보고해요",
            "목표가 정해지면 끝까지 밀고 나가는 추진력이 있어요"
        ],
        weaknesses: [
            "팀원들의 감정보다 성과에 집중하는 경향이 있어요",
            "완벽을 추구하다 야근이 잦아질 수 있어요",
            "회식이나 사내 행사에 참여가 소극적일 수 있어요",
            "다른 사람의 피드백을 방어적으로 받아들일 때가 있어요",
            "팀 협업보다 개인 작업을 선호할 수 있어요",
            "자신의 의견이 맞다고 고집할 때가 있어요",
            "업무 외 사적인 대화가 어색할 수 있어요",
            "느긋한 동료의 업무 속도에 답답함을 느낄 수 있어요",
            "의사결정에 시간을 많이 쓰는 편이에요",
            "세부적인 실무보다 큰 그림에 집중하는 경향이 있어요"
        ],
        bestMatch: ["ENFP", "ENTP"],
        worstMatch: ["ESFP", "ISFP"],
        recommendedTeams: [
            { name: "전략기획실", reason: "전사 중장기 전략 수립 및 사업 포트폴리오 최적화 업무 (표준업무: 전략기획)" },
            { name: "미래전략TF", reason: "신사업 기회 발굴 및 시장 트렌드 분석을 통한 비전 제시 (표준업무: 사업개발)" },
            { name: "기술기획팀", reason: "차세대 방송 플랫폼 기술 로드맵 수립 및 기술 검토 (표준업무: 기술기획)" },
            { name: "데이터분석팀", reason: "빅데이터 기반 고객 행동 패턴 분석 및 인사이트 도출 (표준업무: 데이터분석)" },
            { name: "재무관리팀", reason: "정교한 수치 기반의 손익 관리 및 경영 리스크 분석 (표준업무: 재무분석)" }
        ],
        notRecommendedTeam: "고객센터혁신팀 / 대외협력팀",
        notTeamReason: "감정 소모가 큰 고객 응대와 잦은 대인 관계 업무가 부담될 수 있음",
        colleagueMessage: "\"당신의 전략적 사고는 팀에 없어서는 안 될 자산이에요. 가끔은 완벽하지 않아도 괜찮으니, 쉬어가면서 해요. 우리가 곁에 있잖아요.\"",
        representatives: [
            { name: "지드래곤", title: "가수/프로듀서", image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/G-Dragon_at_G-Dragon_World_Tour_in_Singapore%2C_2013-06-29_02.jpg" },
            { name: "일론 머스크", title: "테슬라 CEO", image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_2015.jpg" },
            { name: "강동원", title: "배우", image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Kang_Dong-won_at_%22The_Priests%22_showcase_on_October_12th%2C_2015.jpg" }
        ]
    },
    INTP: {
        name: "스카이라이프의 아이디어 뱅크",
        emoji: "💡",
        color: "#88B04B",
        description: "창의적인 문제 해결책과 논리적인 분석으로 조직에 영감을 주는 사색가",
        strengths: [
            "기발한 아이디어로 고정관념을 깨뜨려요",
            "문제가 생기면 논리적인 근거를 찾아 해결해요",
            "새로운 기술이나 지식을 습득하는 속도가 빨라요",
            "남들이 보지 못하는 비효율적인 부분을 찾아내요",
            "장기적인 관점에서 혁신적인 대안을 제시해요",
            "감정에 치우치지 않고 객관적으로 상황을 봐요",
            "복잡한 시스템이나 구조를 이해하는 능력이 탁월해요",
            "수평적인 커뮤니케이션을 선호하고 타인의 자유를 존중해요",
            "간섭받지 않는 환경에서 최고의 성과를 내요",
            "필요한 정보만 핵심적으로 전달하는 능력이 있어요"
        ],
        weaknesses: [
            "세부적인 실무 진행이나 마감 처리에 약할 수 있어요",
            "아이디어 구상은 좋아하지만 실행 단계에서 지칠 때가 있어요",
            "반복적인 루틴 업무에 쉽게 지루함을 느껴요",
            "다른 사람의 감정적인 호소에 공감하기 어려워해요",
            "결론이 나지 않는 회의를 견디기 힘들어해요",
            "가끔은 지나치게 냉소적으로 보일 수 있어요",
            "팀워크보다 개인적인 연구나 작업을 선호해요",
            "자신의 논리가 맞다고 판단되면 고집을 꺾지 않아요",
            "사교적인 모임이나 잡담을 시간 낭비로 느낄 수 있어요",
            "설명이 너무 복잡해서 동료들이 이해하기 어려울 때가 있어요"
        ],
        bestMatch: ["ENTJ", "ESTJ"],
        worstMatch: ["ESFJ", "ISFJ"],
        recommendedTeams: [
            { name: "기술개발부", reason: "차세대 방송 송출 시스템 개발 및 아키텍처 설계 (표준업무: 시스템개발)" },
            { name: "디지털혁신본부", reason: "AI 및 클라우드 기반 디지털 전환 프로세스 설계 (표준업무: IT전략기획)" },
            { name: "콘텐츠연구소", reason: "미디어 시장 트렌드 분석 및 콘텐츠 수급 알고리즘 연구 (표준업무: 미디어연구)" },
            { name: "보안운영팀", reason: "논리적 취약점 분석 및 전사 보안 시스템 고도화 (표준업무: 정보보안)" },
            { name: "서비스품질관리팀", reason: "데이터 기반 서비스 오류 패턴 분석 및 근본 원인 해결 (표준업무: 품질관리)" }
        ],
        notRecommendedTeam: "인사팀 / 총무팀",
        notTeamReason: "반복적인 루틴과 꼼꼼한 규정 관리가 답답하게 느껴질 수 있음",
        colleagueMessage: "\"당신의 천재적인 아이디어는 우리 팀을 항상 깨어 있게 해요. 혼자 고민하지 말고 가끔은 우리와 나눠봐요. 함께라면 더 멋진 결과가 나올 거예요.\"",
        representatives: [
            { name: "BTS 진", title: "가수", image: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Kim_Seok-jin_at_The_Fact_Music_Awards_on_April_24%2C_2019.jpg" },
            { name: "빌 게이츠", title: "마이크로소프트 창업자", image: "https://upload.wikimedia.org/wikipedia/commons/a/af/Bill_Gates_2017.jpg" },
            { name: "알베르트 아인슈타인", title: "물리학자", image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg" }
        ]
    },
    ENTJ: {
        name: "스카이라이프의 리더",
        emoji: "🚀",
        color: "#DD4124",
        description: "강력한 추진력과 결단력으로 목표를 향해 팀을 이끄는 카리스마 리더",
        strengths: [
            "목표 달성을 위해서라면 어떤 장애물도 돌파해요",
            "프로젝트 전체를 진두지휘하는 리더십이 탁월해요",
            "비효율적인 구조를 과감하게 개선해요",
            "단기 성과뿐만 아니라 장기적인 비전을 제시해요",
            "어려운 의사결정도 빠르게 내릴 수 있어요",
            "팀원들에게 명확한 가이드라인과 동기를 부여해요",
            "위기 상황에서 당황하지 않고 대안을 마련해요",
            "회의 시간을 효율적으로 관리하고 결론을 끌어내요",
            "경쟁적인 환경에서 더 높은 에너지를 발휘해요",
            "자신감이 넘쳐서 팀 전체의 사기를 높여줘요"
        ],
        weaknesses: [
            "목표에 집중하느라 팀원들의 감정을 놓칠 수 있어요",
            "가끔은 독단적인 결정으로 보일 때가 있어요",
            "업무 속도가 느린 동료를 보면 답답함을 참지 못해요",
            "지나친 야망으로 인해 번아웃이 올 수 있어요",
            "세세한 감성적 배려보다 논리적인 결과만 중시해요",
            "팀원들의 의견을 비판적으로 평가하는 경향이 있어요",
            "자신의 권위에 도전하는 상황에 민감하게 반응해요",
            "사적인 대화보다는 업무적인 대화만 선호해요",
            "강한 에너지 때문에 주변 동료들이 압박감을 느낄 수 있어요",
            "타협하기보다 끝까지 자신의 방식을 고수하려 해요"
        ],
        bestMatch: ["INTP", "INFJ"],
        worstMatch: ["ISFP", "ESFP"],
        recommendedTeams: [
            { name: "영업기획부", reason: "전사 영업 목표 수립 및 유통망 확장 관리 (표준업무: 영업전략)" },
            { name: "사업전략본부", reason: "글로벌 비즈니스 모델 발굴 및 대형 제휴 추진 (표준업무: 사업전략)" },
            { name: "유선사업팀", reason: "인터넷/TV 상품 경쟁력 강화 및 목표 달성 리딩 (표준업무: 상품기획)" },
            { name: "경영개선실", reason: "전사 조직 운영 효율화 및 프로세스 혁신 주도 (표준업무: 경영혁신)" },
            { name: "무선사업팀", reason: "MVNO 시장 점유율 확대를 위한 공격적 마케팅 전략 실행 (표준업무: 가입자유치)" }
        ],
        notRecommendedTeam: "운영지원팀 / 고객지원팀",
        notTeamReason: "정적인 운영 업무나 감성적인 지원 업무에 지루함을 느낄 수 있음",
        colleagueMessage: "\"당신의 리더십은 우리를 항상 바른 방향으로 이끌어줘요. 가끔은 우리 뒤를 보며 조금 천천히 걸어도 괜찮아요. 우리는 당신을 믿고 따라갈게요.\"",
        representatives: [
            { name: "스티브 잡스", title: "애플 창업자", image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Steve_Jobs_Headshot_2010-edit.jpg" },
            { name: "고든 램지", title: "셰프/사업가", image: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Gordon_Ramsay_2011.jpg" },
            { name: "백종원", title: "요리연구가/사업가", image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/%EB%B0%B1%EC%A2%85%EC%9B%90.jpg" }
        ]
    },
    ENTP: {
        name: "스카이라이프의 사이다",
        emoji: "🔥",
        color: "#009B77",
        description: "막힌 업무를 뚫어주는 논쟁과 아이디어의 달인, 변화를 두려워하지 않는 혁신가",
        strengths: [
            "기존의 방식에서 벗어나 새로운 가능성을 발견해요",
            "논리적인 반론으로 문제의 허점을 정확히 짚어내요",
            "위기 상황에서도 유머를 잃지 않고 분위기를 반전시켜요",
            "어떤 주제로든 토론이 가능할 정도로 지식이 넓어요",
            "브레인스토밍 단계에서 최고의 에너지를 보여줘요",
            "변화와 도전을 즐기며 조직에 활력을 불어넣어요",
            "상황 판단이 매우 빨라 임기응변에 능숙해요",
            "다른 사람의 눈치를 보지 않고 소신 있게 발언해요",
            "어려운 과제일수록 승부욕이 자극되어 열심히 해요",
            "여러 가지 일을 동시에 추진하는 멀티태스킹 능력이 있어요"
        ],
        weaknesses: [
            "단조롭고 반복적인 업무는 금방 싫증을 내요",
            "아이디어는 많지만 마무리가 부족할 때가 있어요",
            "직설적인 화법으로 동료들에게 상처를 줄 수 있어요",
            "조직의 엄격한 규율이나 절차를 따르는 걸 힘들어해요",
            "가끔은 논쟁 그 자체를 즐기느라 시간을 낭비하기도 해요",
            "디테일한 업무보다 큰 흐름에만 집중하는 경향이 있어요",
            "업무 리스트를 관리하고 계획대로 진행하는 데 약해요",
            "상사의 권위적인 태도에 저항감을 표현할 수 있어요",
            "기분파적인 성향이 있어 업무 기복이 나타날 수 있어요",
            "본인이 흥미 없는 일에는 성과가 크게 낮아질 수 있어요"
        ],
        bestMatch: ["INFJ", "INTJ"],
        worstMatch: ["ISFJ", "ESFJ"],
        recommendedTeams: [
            { name: "콘텐츠전략팀", reason: "신규 미디어 콘텐츠 트렌드 분석 및 수급 전략 기획 (표준업무: 콘텐츠기획)" },
            { name: "서비스기획실", reason: "사용자 중심의 차세대 TV UI/UX 혁신 아이디어 제안 (표준업무: 서비스디자인)" },
            { name: "마케팅랩", reason: "기발한 바이럴 마케팅 캠페인 기획 및 광고 집행 (표준업무: 광고기획)" },
            { name: "브랜드혁신TF", reason: "기업 브랜드 이미지 쇄신을 위한 실험적인 캠페인 추진 (표준업무: 브랜드매니지먼트)" },
            { name: "플랫폼사업진흥팀", reason: "새로운 가입자 유치 모델 발굴 및 제휴 채널 다각화 (표준업무: 채널사업)" }
        ],
        notRecommendedTeam: "법무팀 / 세무팀",
        notTeamReason: "경직된 법률 검토와 세무 절차 준수가 답답할 수 있음",
        colleagueMessage: "\"당신의 거침없는 아이디어는 우리 팀의 사이다예요! 가끔은 열띤 토론 후에 우리와 함께 커피 한잔해요. 당신의 에너지가 우리에겐 꼭 필요하거든요.\"",
        representatives: [
            { name: "지코", title: "가수/프로듀서", image: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Zico_at_the_KBS_Song_Festival%2C_2015-12-30.jpg" },
            { name: "로버트 다우니 주니어", title: "배우/아이언맨", image: "https://upload.wikimedia.org/wikipedia/commons/9/94/Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg" },
            { name: "토마스 에디슨", title: "발명가", image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Thomas_Edison2.jpg" }
        ]
    },

    INFJ: {
        name: "스카이라이프의 선지자",
        emoji: "🌊",
        color: "#5B5EA6",
        description: "따뜻한 공감 능력과 통찰력으로 조직의 화합과 미래를 내다보는 옹호자",
        strengths: [
            "팀원들의 속마음을 잘 헤아려주는 공감력이 있어요",
            "보이지 않는 의미와 원리를 파악하는 통찰력이 깊어요",
            "어떤 상황에서도 예의를 지키며 조화롭게 소통해요",
            "맡은 일에 대해선 끝까지 완수하는 책임감이 강해요",
            "조직이 나아가야 할 올바른 가치에 대해 깊이 고민해요",
            "동료들의 성장과 발전을 진심으로 돕고 응원해요",
            "어려운 부탁도 부드럽게 거절하거나 조율하는 지혜가 있어요",
            "섬세한 관찰력으로 팀 분위기의 변화를 빨리 알아차려요",
            "데이터 이면의 사람들을 생각하는 휴머니즘이 있어요",
            "묵묵히 자기 자리를 지키며 선한 영향력을 끼쳐요"
        ],
        weaknesses: [
            "속마음을 잘 드러내지 않아 동료들이 오해할 수 있어요",
            "타인의 감정에 너무 예민하게 반응해서 쉽게 지칠 수 있어요",
            "지나친 완벽주의로 인해 의사결정이 늦어질 때가 있어요",
            "자신의 신념과 부딪히는 상황에서 큰 스트레스를 받아요",
            "피드백이나 비판을 개인적인 공격으로 받아들일 수 있어요",
            "한 번에 너무 많은 생각을 하느라 실행력이 떨어질 때가 있어요",
            "팀원 간의 불화가 생기면 본인 탓인 것 같아 괴로워해요",
            "거절하는 것을 힘들어해서 과도한 업무를 맡기도 해요",
            "현실적인 실무보다 이상적인 가치에 집중하는 성향이 있어요",
            "혼자만의 시간이 부족하면 심리적으로 불안해질 수 있어요"
        ],
        bestMatch: ["ENFP", "ENTP"],
        worstMatch: ["ESTP", "ISTP"],
        recommendedTeams: [
            { name: "브랜드커뮤니케이션실", reason: "기업 철학 및 가치 중심의 브랜드 스토리텔링 및 홍보 (표준업무: 브랜드홍보)" },
            { name: "사회공헌TF", reason: "지역 사회 상생 및 ESG 경영 관련 가치 창출 프로젝트 추진 (표준업무: CSR)" },
            { name: "윤리경영팀", reason: "사내 공정 가치 확립 및 임직원 대상 윤리 교육/가이드 수립 (표준업무: 준법감시)" },
            { name: "인재육성팀", reason: "구성원들의 성장과 심리적 안정을 돕는 교육 프로그램 기획 (표준업무: HRD)" },
            { name: "콘텐츠심의팀", reason: "방송 콘텐츠의 가치 기준 준수 여부 및 공익성 검토 (표준업무: 정책심의)" }
        ],
        notRecommendedTeam: "구매팀 / 물류센터",
        notTeamReason: "수치와 효율 중심의 냉정한 협상이 정서적으로 힘들 수 있음",
        colleagueMessage: "\"당신의 따뜻한 말 한마디는 우리 팀의 안식처예요. 남들을 챙기는 만큼 자신도 꼭 돌봐주세요. 당신이 행복해야 우리 팀도 행복하니까요.\"",
        representatives: [
            { name: "신세경", title: "배우", image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Shin_Se-kyung_at_%22The_Bride_of_Habaek%22_showcase%2C_June_2017._02.jpg" },
            { name: "베네딕트 컴버배치", title: "배우/셜록", image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Benedict_Cumberbatch_by_Gage_Skidmore.jpg" },
            { name: "마하트마 간디", title: "평화운동가", image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg" }
        ]
    },
    INFP: {
        name: "스카이라이프의 예술가",
        emoji: "🎨",
        color: "#F7CAC9",
        description: "남다른 감수성과 아이디어로 조직에 따스함과 창의성을 더하는 중재자",
        strengths: [
            "남들이 생각지도 못한 감성적인 기획안을 잘 짜요",
            "어떤 사람과도 부드럽게 대화하는 포용력이 있어요",
            "자기가 가치 있다고 믿는 일에는 엄청난 열정을 보여줘요",
            "모든 팀원들이 소외되지 않도록 세심하게 배려해요",
            "상대의 잠재력을 발견하고 독려하는 데 능숙해요",
            "조직 문화를 더 따뜻하고 즐겁게 만드는 데 기여해요",
            "글쓰기나 디자인 등 표현력이 필요한 업무에 강해요",
            "비판보다는 긍정적인 피드백으로 동료의 사기를 높여요",
            "항상 배우려는 자세로 새로운 분야에도 열려 있어요",
            "팀의 화합을 위해 기꺼이 자신을 양보하는 마음이 있어요"
        ],
        weaknesses: [
            "감수성이 풍부해서 업무상 비판에 상처받기 쉬워요",
            "계획적이고 체계적으로 업무를 관리하는 게 힘들어요",
            "결정적인 순간에 우유부단하게 행동할 때가 있어요",
            "현실적인 제약보다는 자신의 이상을 더 중요하게 생각해요",
            "싫은 소리를 못해서 혼자 끙끙 앓는 경우가 많아요",
            "마감 기한을 지키는 데 어려움을 느낄 수 있어요",
            "너무 많은 사람과 함께 일하면 에너지가 금방 방전돼요",
            "세부적인 숫자나 데이터 확인 업무를 귀찮아해요",
            "팀원 간의 갈등 상황을 회피하려는 성향이 있어요",
            "가끔은 현실과 동떨어진 아이디어를 내서 실행이 어려워요"
        ],
        bestMatch: ["ENFJ", "ENTJ"],
        worstMatch: ["ESTJ", "ISTJ"],
        recommendedTeams: [
            { name: "디자인팀", reason: "사용자 감성을 자극하는 TV UI 및 그래픽 디자인 제작 (표준업무: 시각디자인)" },
            { name: "광고기획팀", reason: "공감을 불러일으키는 카피라이팅 및 영상 광고 스토리 기획 (표준업무: 매체기획)" },
            { name: "콘텐츠제작실", reason: "독창적인 소재 발굴 및 감성적인 미디어 프로그램 제작 (표준업무: 연출출)" },
            { name: "조직문화팀", reason: "직원들의 유대감을 높이는 사내 이벤트 및 힐링 공간 기획 (표준업무: 기업문화)" },
            { name: "사용자경험팀", reason: "심층 면접 기반의 고객 페르소나 정의 및 니즈 분석 (표준업무: UX리서치)" }
        ],
        notRecommendedTeam: "재무팀 / 감사실",
        notTeamReason: "딱딱한 수치 관리와 엄격한 규정 적용이 맞지 않을 수 있음",
        colleagueMessage: "\"당신의 독창적인 생각은 우리 팀의 보물이에요. 가끔 세상이 너무 차갑게 느껴져도 우리가 당신을 지켜줄게요. 당신의 따뜻한 꿈을 계속 응원해요.\"",
        representatives: [
            { name: "아이유", title: "가수/배우", image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/IU_at_%22Broker%22_VIP_Premiere%2C_2_June_2022.jpg" },
            { name: "뷔(BTS)", title: "가수", image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/V_at_the_2021_The_Fact_Music_Awards.jpg" },
            { name: "조앤 롤링", title: "작가/해리포터", image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/J._K._Rowling_2010.jpg" }
        ]
    },
    ENFJ: {
        name: "스카이라이프의 인싸",
        emoji: "🌟",
        color: "#F7786B",
        description: "사람들을 이끌어가는 타고난 카리스마와 따뜻한 인간미를 가진 활동가",
        strengths: [
            "팀원들의 에너지를 하나로 모으는 응집력이 뛰어나요",
            "다른 사람의 감정을 읽고 적절하게 대응하는 능력이 탁월해요",
            "발표나 보고를 할 때 흡입력 있게 말을 잘해요",
            "조직 내에서 소통의 가교 역할을 든든하게 해내요",
            "어려운 일도 동기부여를 통해 함께 극복하게 만들어요",
            "언제나 긍정적이고 밝은 모습으로 팀 분위기를 메이킹해요",
            "타인의 성장을 진심으로 기뻐하고 아낌없이 도와줘요",
            "공동의 목표를 위해 헌신하고 솔선수범하는 자세가 있어요",
            "넓은 인맥을 바탕으로 업무 협조를 잘 이끌어내요",
            "조직 문화를 혁신하는 프로젝트에서 큰 역량을 발휘해요"
        ],
        weaknesses: [
            "남들을 챙기느라 정작 자신의 업무를 놓칠 때가 있어요",
            "타인의 비판이나 반응에 지나치게 신경을 써서 스트레스를 받아요",
            "팀원 모두를 만족시키려다 의사결정이 뎌뎌지기도 해요",
            "감정에 치우쳐서 객관적인 판단을 내리지 못할 때가 있어요",
            "동료들의 부탁을 거절하지 못해 번아웃이 올 위험이 커요",
            "다른 사람들도 본인처럼 열정적일 것이라 기대하고 실망해요",
            "문제를 회피하지 않고 해결하려다 오지랖으로 보일 수 있어요",
            "업무의 효율성보다는 관계의 화합을 최우선으로 둬요",
            "혼자 일하는 환경에서는 성과가 잘 나지 않고 외로워해요",
            "갈등이 생기면 이를 중재하느라 에너지를 너무 많이 써요"
        ],
        bestMatch: ["INFP", "ISFP"],
        worstMatch: ["ISTP", "ESTP"],
        recommendedTeams: [
            { name: "HRD팀", reason: "전사 교육 체계 수립 및 구성원 역량 강화 프로그램 주도 (표준업무: 교육기획)" },
            { name: "인재채용본부", reason: "스카이라이프의 비전 전파 및 협업 중심의 우수 인재 영입 (표준업무: 채용)" },
            { name: "사내커뮤니케이션실", reason: "경영진-직원 간 소통 활성화 및 화합의 문화 조성 (표준업무: 사내홍보)" },
            { name: "고객만족팀", reason: "고객 접점 서비스 마인드 교육 및 고객 경험 개선 캠페인 (표준업무: CS기획)" },
            { name: "사업파트너협력팀", reason: "대외 파트너사와의 유대 강화 및 원활한 협업 관계 구축 (표준업무: 파트너십)" }
        ],
        notRecommendedTeam: "정보보안팀 / 인프라관리팀",
        notTeamReason: "기계적인 보안 관리와 폐쇄적인 업무 환경이 답답할 수 있음",
        colleagueMessage: "\"당신 덕분에 우리 팀이 하나로 뭉칠 수 있어요. 우리를 위해 애쓰는 것도 좋지만, 때로는 자신의 마음도 먼저 살펴봐 주세요. 당신의 웃음이 우리의 힘입니다!\"",
        representatives: [
            { name: "임영웅", title: "가수", image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Lim_Young-woong_in_2021.png" },
            { name: "버락 오바마", title: "전 미국 대통령", image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/President_Barack_Obama.jpg" },
            { name: "오프라 윈프리", title: "방송인/사업가", image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Oprah_Winfrey_%282012%29.jpg" }
        ]
    },
    ENFP: {
        name: "스카이라이프의 아이디어 뱅크",
        emoji: "🌈",
        color: "#EFC050",
        description: "자유로운 사고와 무한한 상상력으로 조직에 활력과 재미를 주는 활동가",
        strengths: [
            "항상 새로운 시각으로 문제를 바라보고 대안을 찾아요",
            "처음 만난 사람과도 금방 친해지는 친화력이 엄청나요",
            "팀의 에너지가 떨어졌을 때 분위기를 띄우는 일등공신이에요",
            "다양한 분야에 대한 관심이 많아 융복합적 사고에 능해요",
            "동료들의 장점을 잘 찾아내고 진심으로 칭찬해줘요",
            "일에 재미를 붙이면 누구보다 폭발적인 에너지를 쏟아요",
            "규제나 틀에 얽매이지 않고 자유롭게 의견을 개진해요",
            "변화에 유연하고 새로운 업무 환경에 적응이 빨라요",
            "사람들의 마음을 움직이는 스토리텔링 능력이 탁월해요",
            "팀원들을 즐겁게 만드는 이벤트나 깜짝 아이디어가 많아요"
        ],
        weaknesses: [
            "단순 반복 업무나 꼼꼼함이 필요한 서류 작업에 취약해요",
            "마감 시간을 지키는 데 어려움을 겪고 뒤로 미루는 경향이 있어요",
            "감정 기복이 심해서 업무 성과가 일정하지 않을 수 있어요",
            "한 가지 일에 진득하게 집중하기보다 새로운 것에 눈을 돌려요",
            "타인의 시선이나 인정에 민감하게 반응하고 쉽게 상처받아요",
            "계획을 세우는 것보다는 즉흥적으로 행동하는 걸 선호해요",
            "말이 앞서고 실행이 따르지 않아 동료들에게 불신을 줄 수 있어요",
            "업무의 우선순위를 정하는 걸 어려워하고 산만해지기 쉬워요",
            "자신의 생각과 다른 딱딱한 조직 문화에서 큰 스트레스를 받아요",
            "결론을 짓거나 정리하는 마무리 단계에서 힘이 빠지곤 해요"
        ],
        bestMatch: ["INFJ", "INTJ"],
        worstMatch: ["ISTJ", "ESTJ"],
        recommendedTeams: [
            { name: "홍보팀", reason: "언론 네트워크 구축 및 대외 이미지 제고를 위한 창의적 기사 기획 (표준업무: 대외홍보)" },
            { name: "마케팅커뮤니케이션실", reason: "트렌디한 소셜 미디어 캠페인 및 고객 참여형 이벤트 기획 (표준업무: 마케팅)" },
            { name: "서비스디자인팀", reason: "뻔하지 않은 새로운 서비스 컨셉 도출 및 사용자 경험 혁신 (표준업무: 서비스디자인)" },
            { name: "방송기획팀", reason: "새로운 예능/교양 프로그램 포맷 발굴 및 기획 참여 (표준업무: 방송기획기)" },
            { name: "가입자증대TF", reason: "톡톡 튀는 아이디어로 새로운 타겟층 공략 및 가입 유도 (표준업무: 프로모션)" }
        ],
        notRecommendedTeam: "품질관리팀 / 정산팀",
        notTeamReason: "꼼꼼한 검수업무와 반복되는 정산 작업이 업무 흥미를 떨어뜨림",
        colleagueMessage: "\"당신과 함께 있으면 업무 시간이 순식간에 지나가요! 당신의 밝은 에너지가 우리 팀의 비타민입니다. 가끔은 실수를 해도 괜찮아요, 우리가 있잖아요!\"",
        representatives: [
            { name: "이효리", title: "가수/방송인", image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Lee_Hyo-ri_at_%22Soul_Wonder%22_showcase%2C_July_2013._02.jpg" },
            { name: "로빈 윌리엄스", title: "배우/코미디언", image: "https://upload.wikimedia.org/wikipedia/commons/5/59/Robin_Williams_2011a_%28cropped%29.jpg" },
            { name: "월트 디즈니", title: "디즈니 창업자", image: "https://upload.wikimedia.org/wikipedia/commons/d/df/Walt_Disney_1946.JPG" }
        ]
    },

    ISTJ: {
        name: "스카이라이프의 믿음직한 프로",
        emoji: "🏆",
        color: "#45B8AC",
        description: "철저한 책임감과 성실함으로 조직의 든든한 버팀목이 되는 신뢰의 아이콘",
        strengths: [
            "맡은 일은 끝까지 책임지고 완수해요",
            "마감을 철저히 지켜요",
            "정확하고 꼼꼼하게 업무를 처리해요",
            "안정적이고 일관된 성과를 내요",
            "회사 규정과 절차를 잘 지켜요",
            "문서 정리와 기록 관리를 잘해요",
            "믿고 맡길 수 있는 든든한 동료예요",
            "급하지 않게 차분히 업무를 진행해요",
            "현실적이고 실용적인 해결책을 제시해요",
            "시간 약속을 철저히 지켜요"
        ],
        weaknesses: [
            "새로운 방식보다 익숙한 방법을 선호해요",
            "감정을 표현하는 게 어색해요",
            "융통성이 부족하다는 말을 들을 때가 있어요",
            "갑작스러운 변화에 적응하기 어려워요",
            "규칙에서 벗어나는 것에 불편함을 느껴요",
            "창의적인 아이디어를 내는 게 어려워요",
            "감정적인 지원보다 실용적인 조언을 해요",
            "변화보다는 유지를 선호해요",
            "위험을 감수하기보다 안전한 선택을 해요",
            "같은 방식으로 접근해 신선함이 부족해요"
        ],
        bestMatch: ["ESFP", "ESTP"],
        worstMatch: ["ENFP", "ENTP"],
        recommendedTeams: [
            { name: "회계팀", reason: "전사 예산 집행 관리 및 정확한 결산 업무 수행 (표준업무: 회계정산)" },
            { name: "정산관리팀", reason: "방송/통신 서비스 가입자 매출 정산 및 수수료 검증 (표준업무: 매출관리)" },
            { name: "구매팀", reason: "투명하고 체계적인 구매 절차 준수 및 협력업체 계약 관리 (표준업무: 구매관리)" },
            { name: "감사실", reason: "사내 규정 준수 여부 점검 및 원칙 기반의 리스크 예방 (표준업무: 내부감사)" },
            { name: "시설관리팀", reason: "매뉴얼 기반의 안전한 시설 운영 및 정기 점검 업무 (표준업무: 관재)" }
        ],
        notRecommendedTeam: "브랜드혁신TF / 미디어UX팀",
        notTeamReason: "빈번한 변화와 창의적 실험이 요구되는 환경이 불편할 수 있음",
        colleagueMessage: "\"당신이 있어서 우리 팀이 안정적으로 굴러가요. 묵묵히 해주는 모든 일, 다 보고 있어요. 정말 고마워요.\"",
        representatives: [
            { name: "민지(뉴진스)", title: "가수", image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/NewJeans_Minji_at_the_KBS_Song_Festival%2C_2022-12-16.jpg" },
            { name: "제프 베조스", title: "아마존 창업자", image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Jeff_Bezos_at_the_2017_Amazon_Web_Services_Summit_%28cropped%29.jpg" },
            { name: "엘리자베스 2세", title: "영국 여왕", image: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Queen_Elizabeth_II_in_March_2015.jpg" }
        ]
    },
    ISFJ: {
        name: "스카이라이프의 따뜻한 실무자",
        emoji: "🤗",
        color: "#955251",
        description: "세심한 배려와 헌신으로 동료들의 든든한 지원군이 되는 팀의 수호자",
        strengths: [
            "동료의 생일이나 기념일을 기억해요",
            "맡은 일을 성실하게 수행해요",
            "팀 화합을 위해 조용히 노력해요",
            "믿고 맡길 수 있는 든든한 지원군이에요",
            "세심하게 다른 사람을 배려해요",
            "겸손하게 자신의 역할을 해내요",
            "힘들어하는 동료를 먼저 알아채요",
            "안정적인 서포트로 팀을 뒤에서 받쳐줘요",
            "감사하는 마음을 표현할 줄 알아요",
            "조용하지만 확실하게 팀에 기여해요"
        ],
        weaknesses: [
            "자기 의견을 주장하기 어려워해요",
            "너무 책임감이 강해서 스스로를 혹사해요",
            "칭찬이나 인정을 잘 못 받아들여요",
            "변화보다는 현재 상태를 유지하려 해요",
            "거절을 잘 못해서 일이 쌓여요",
            "자신의 욕구보다 남을 우선해요",
            "갈등 상황을 피하려고 해요",
            "일이 과해도 도움을 요청하기 어려워해요",
            "인정받고 싶은 욕구가 있지만 티내지 않아요",
            "자신의 가치를 낮게 평가해요"
        ],
        bestMatch: ["ESFP", "ESTP"],
        worstMatch: ["ENTP", "INTP"],
        recommendedTeams: [
            { name: "경영지원팀", reason: "사내 임직원 복리후생 관리 및 쾌적한 근무 환경 지원 (표준업무: 급여/복리)" },
            { name: "서비스지원팀", reason: "대리점 및 파트너사 대상 교육 지원 및 행정 업무 처리 (표준업무: 영업지원)" },
            { name: "고객지원팀", reason: "고객 문의에 대한 성실한 응대 및 고객 만족도 향상 지원 (표준업무: CS지원)" },
            { name: "총무팀", reason: "전사 자산 관리 및 원활한 사무 환경 조성을 위한 세심한 서포트 (표준업무: 자산관리)" },
            { name: "비서실", reason: "경영진의 일정을 세심하게 관리하고 조용히 내조하는 역할 (표준업무: 수행비서)" }
        ],
        notRecommendedTeam: "영업총괄 / 브랜드혁신TF",
        notTeamReason: "공격적 목표와 빠른 변화에 대한 압박이 스트레스가 될 수 있음",
        colleagueMessage: "\"당신이 조용히 챙겨주는 것들, 다 느끼고 있어요. 이번엔 당신이 챙김을 받을 차례예요. 우리가 곁에 있을게요.\"",
        representatives: [
            { name: "박보영", title: "배우", image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Park_Bo-young_at_%22On_Your_Wedding_Day%22_showcase_%28cropped%29.jpg" },
            { name: "정해인", title: "배우", image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Jung_Hae-in_at_%22Tune_in_for_Love%22_press_conference%2C_July_2019.jpg" },
            { name: "앤 해서웨이", title: "배우", image: "https://upload.wikimedia.org/wikipedia/commons/2/22/Anne_Hathaway_at_the_Met_Gala_2023_01.jpg" }
        ]
    },
    ESTJ: {
        name: "스카이라이프의 추진력 대장",
        emoji: "🎖️",
        color: "#B565A7",
        description: "명확한 목표와 강한 추진력으로 조직을 성공으로 이끄는 실행가",
        strengths: [
            "목표와 마감이 정해지면 확실하게 완수해요",
            "업무를 체계적으로 정리하고 관리해요",
            "명확하게 지시하고 피드백해요",
            "책임감 있게 팀을 이끌어요",
            "효율적으로 자원과 시간을 관리해요",
            "규칙과 기준을 명확하게 세워요",
            "불확실한 상황에서도 결단력 있게 행동해요",
            "실행력이 뛰어나요",
            "조직의 질서와 구조를 유지해요",
            "결과로 보여주는 스타일이에요"
        ],
        weaknesses: [
            "융통성이 부족하다는 말을 들을 수 있어요",
            "팀원의 감정보다 업무 진행을 우선해요",
            "권위적으로 보일 때가 있어요",
            "새로운 아이디어보다 검증된 방법을 선호해요",
            "세부 사항에 너무 집착할 수 있어요",
            "비판에 방어적으로 반응해요",
            "스트레스를 잘 풀지 못해요",
            "감정적인 지원보다 해결책을 제시해요",
            "모든 것을 통제하려는 경향이 있어요",
            "쉬지 않고 일하는 경향이 있어요"
        ],
        bestMatch: ["ISFP", "ISTP"],
        worstMatch: ["INFP", "ENFP"],
        recommendedTeams: [
            { name: "영업기획팀", reason: "명확한 실적 목표 수립 및 유통 채널별 성과 지표 관리 (표준업무: 성과관리)" },
            { name: "요금관리팀", reason: "요금 체계 확립 및 회수 프로세스 관리 (표준업무: 과금정책)" },
            { name: "운영지원본부", reason: "전사 지원 체계 구축 및 매뉴얼 기반의 효율적 조직 운영 (표준업무: 운영기획기)" },
            { name: "물류센터", reason: "셋톱박스 및 기자재 수급 관리 및 재고 회전 효율화 (표준업무: 물류운영)" },
            { name: "품질관리팀", reason: "엄격한 서비스 품질 기준 수립 및 장애 예방 프로세스 확립 (표준업무: 품질관리)" }
        ],
        notRecommendedTeam: "미디어UX팀 / 홍보CSR팀",
        notTeamReason: "창의적이고 감성적인 접근이 필요한 업무가 어려울 수 있음",
        colleagueMessage: "\"당신의 추진력 덕분에 우리가 목표를 달성할 수 있어요. 가끔은 속도를 늦춰도 괜찮아요. 우리가 함께 가고 있으니까요.\"",
        representatives: [
            { name: "김구라", title: "방송인", image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Kim_Gura.png" },
            { name: "박명수", title: "방송인", image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Park_Myeong-su_in_2014.png" },
            { name: "헨리 포드", title: "포드 모터 창업자", image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Henry_ford_1919.jpg" }
        ]
    },
    ESFJ: {
        name: "스카이라이프의 케어 매니저",
        emoji: "💕",
        color: "#92A8D1",
        description: "따뜻한 마음과 섬세한 배려로 모두를 챙기는 조직의 어머니 같은 존재",
        strengths: [
            "팀 분위기를 밝고 화목하게 만들어요",
            "동료들을 세심하게 챙겨요",
            "협력하고 조율하는 능력이 뛰어나요",
            "팀 행사를 잘 기획하고 진행해요",
            "갈등이 생기면 중재자 역할을 해요",
            "서비스 마인드가 뛰어나요",
            "충직하고 헌신적인 팀원이에요",
            "사내 네트워크가 넓어요",
            "사람 중심으로 생각하고 행동해요",
            "힘든 동료를 먼저 위로해요"
        ],
        weaknesses: [
            "비판에 예민하고 상처받기 쉬워요",
            "갈등을 피하려다 중요한 문제를 넘길 수 있어요",
            "인정받고 싶은 욕구가 강해요",
            "변화보다는 익숙한 것을 선호해요",
            "다른 사람을 위해 자신을 희생해요",
            "모든 사람을 만족시키려 해요",
            "거절을 잘 못해서 일이 많아져요",
            "다른 사람의 평가에 의존해요",
            "걱정이 많아 스트레스를 받아요",
            "개인 시간보다 팀을 우선해요"
        ],
        bestMatch: ["ISFP", "ISTP"],
        worstMatch: ["INTP", "INTJ"],
        recommendedTeams: [
            { name: "고객센터혁신팀", reason: "고객 접점 상담 품질 개선 및 상담사 케어/교육 (표준업무: CS관리)" },
            { name: "DX지원팀", reason: "새로운 시스템 도입 시 임직원 적응 지원 및 교육 (표준업무: 변화관리)" },
            { name: "대외커뮤니케이션팀", reason: "언론사 및 외부 유관기관과 원만하게 소통 기조 유지 (표준업무: PR)" },
            { name: "총무복지팀", reason: "임직원 만족도 향상을 위한 다양한 사내 복지 프로그램 운영 (표준업무: 복리후생지원)" },
            { name: "영업채널관리팀", reason: "대리점주 및 외부 채널들과의 유대 강화 및 애로사항 해결 (표준업무: 파트너사업)" }
        ],
        notRecommendedTeam: "기술전략팀 / 미래전략TF",
        notTeamReason: "독립적이고 추상적인 전략 업무보다 사람과 함께하는 역할에 적합",
        colleagueMessage: "\"당신이 챙겨줘서 우리 팀이 따뜻해요. 이젠 당신도 쉬어도 돼요. 우리가 당신을 챙길게요.\"",
        representatives: [
            { name: "테일러 스위프트", title: "가수", image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Taylor_Swift_at_the_2023_MTV_Video_Music_Awards_01.jpg" },
            { name: "지민(BTS)", title: "가수", image: "https://upload.wikimedia.org/wikipedia/commons/d/de/Park_Ji-min_at_The_Fact_Music_Awards_on_April_24%2C_2019.jpg" },
            { name: "제니퍼 가너", title: "배우", image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Jennifer_Garner_by_Gage_Skidmore.jpg" }
        ]
    },

    ISTP: {
        name: "스카이라이프의 문제해결 달인",
        emoji: "🔧",
        color: "#6B4226",
        description: "냉철한 분석력과 실용적 해결책으로 어려운 문제도 척척 해결하는 해결사",
        strengths: [
            "급한 시스템 오류도 침착하게 해결해요",
            "실용적이고 효율적인 방법을 찾아요",
            "위기 상황에서 냉정하게 대처해요",
            "혼자서도 업무를 잘 처리해요",
            "기술적인 문제에 강해요",
            "빠르게 상황을 분석하고 대응해요",
            "불필요한 절차를 줄이는 방법을 찾아요",
            "현실적인 해결책을 제시해요",
            "도구나 시스템을 잘 다뤄요",
            "유연하게 새로운 환경에 적응해요"
        ],
        weaknesses: [
            "감정을 표현하는 게 어색해요",
            "장기적인 계획보다 당장의 문제에 집중해요",
            "회사 규칙이나 절차에 답답함을 느껴요",
            "팀 협업보다 개인 작업을 선호해요",
            "인내심이 부족할 때가 있어요",
            "장기적인 프로젝트에 헌신하기 어려워요",
            "감정적인 지원보다 논리적 해결을 해요",
            "사회적인 의무나 행사에 참여가 소극적이에요",
            "정해진 루틴을 싫어해요",
            "자기 생각을 잘 표현하지 않아요"
        ],
        bestMatch: ["ESTJ", "ENTJ"],
        worstMatch: ["ENFJ", "INFJ"],
        recommendedTeams: [
            { name: "IT운영팀", reason: "전사 방송/IT 시스템의 안정적 운영 및 장애 긴급 대응 (표준업무: 시스템운영)" },
            { name: "디바이스개발팀", reason: "셋톱박스 및 홈 기기 하드웨어 검증 및 연동 테스트 (표준업무: 단말개발)" },
            { name: "네트워크관리팀", reason: "통신 인프라 및 네트워크 장비 유지 보수 (표준업무: 인프라관리)" },
            { name: "보안기술팀", reason: "실제적인 보안 취약점 점검 및 보안 솔루션 운영 (표준업무: 보안기술)" },
            { name: "미디어운용센터", reason: "방송 송출 장비 관리 및 실시간 기술 모니터링 (표준업무: 송출기술)" }
        ],
        notRecommendedTeam: "인사팀 / 홍보CSR팀",
        notTeamReason: "감정적 교류와 사회적 활동이 많은 업무가 불편할 수 있음",
        colleagueMessage: "\"문제가 생기면 당신이 있어서 든든해요. 말수가 적어도 당신의 실력은 다 알아요. 고마워요.\"",
        representatives: [
            { name: "김연아", title: "피겨스케이팅 선수", image: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Kim_Yuna_at_the_PyeongChang_2018_Welcome_Ceremony.jpg" },
            { name: "톰 크루즈", title: "배우", image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Tom_Cruise_by_Gage_Skidmore_2.jpg" },
            { name: "베어 그릴스", title: "생존 전문가", image: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bear_Grylls_2011.jpg" }
        ]
    },
    ISFP: {
        name: "스카이라이프의 힐링 담당자",
        emoji: "🌸",
        color: "#DFCFBE",
        description: "순수한 감성과 유연함으로 조직에 평화를 가져다주는 힐링 전문가",
        strengths: [
            "팀에 편안하고 평화로운 분위기를 만들어요",
            "상황에 맞게 유연하게 대처해요",
            "진정성 있는 태도로 신뢰를 쌓아요",
            "갈등 없이 조화롭게 일해요",
            "섬세한 감각으로 디테일을 잡아요",
            "현재에 집중하고 최선을 다해요",
            "동료를 조용히 지원해요",
            "억지스럽지 않은 자연스러운 친화력이 있어요",
            "자신만의 스타일로 일해요",
            "열린 마음으로 다양성을 존중해요"
        ],
        weaknesses: [
            "자기 의견을 강하게 주장하기 어려워해요",
            "장기적인 계획을 세우기 어려워해요",
            "스트레스를 혼자 삭이는 경향이 있어요",
            "갈등 상황을 피하려 해요",
            "결정을 내리기까지 시간이 걸려요",
            "비판에 상처받기 쉬워요",
            "논리적으로 설명하는 게 어려울 때가 있어요",
            "시간 관리가 느슨해질 수 있어요",
            "경쟁적인 환경에서 위축돼요",
            "추상적인 논의나 회의에 지칠 수 있어요"
        ],
        bestMatch: ["ESFJ", "ESTJ"],
        worstMatch: ["ENTJ", "INTJ"],
        recommendedTeams: [
            { name: "플랫폼사업팀", reason: "사용자 친화적인 방송 서비스 기획 및 실무 지원 (표준업무: 서비스운영)" },
            { name: "콘텐츠수급팀", reason: "감성적인 안목으로 인기 영화/VOD 리스트업 및 관리 (표준업무: 콘텐츠운영)" },
            { name: "미디어운용팀", reason: "현장에 어우러지는 방송 송출 보조 및 실무 지원 (표준업무: 기술지원)" },
            { name: "영업지원팀", reason: "대리점 및 파트너사 현장에 필요한 실용적인 업무 서포트 (표준업무: 대리점지원)" },
            { name: "디자인실", reason: "차분하고 조화로운 톤앤매너의 홍보물 및 콘텐츠 제작 (표준업무: 디자인지원)" }
        ],
        notRecommendedTeam: "경영기획총괄 / 영업기획팀",
        notTeamReason: "공격적 목표와 경쟁적 환경이 에너지를 소진시킬 수 있음",
        colleagueMessage: "\"당신이 있으면 마음이 편해져요. 조용히 팀을 지켜주는 당신, 정말 소중해요. 자신을 더 믿어도 돼요.\"",
        representatives: [
            { name: "정국(BTS)", title: "가수", image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Jungkook_at_the_2019_The_Fact_Music_Awards.jpg" },
            { name: "백현(EXO)", title: "가수", image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Byun_Baek-hyun_at_The_Fact_Music_Awards_on_April_24%2C_2019.png" },
            { name: "마이클 잭슨", title: "가수", image: "https://upload.wikimedia.org/wikipedia/commons/3/31/Michael_Jackson_in_1984.jpg" }
        ]
    },
    ESTP: {
        name: "스카이라이프의 액션 히어로",
        emoji: "⚡",
        color: "#D65076",
        description: "뛰어난 순발력과 행동력으로 현장에서 빛나는 에너지 넘치는 실행가",
        strengths: [
            "위기 상황에서 빠르게 대응해요",
            "고객이나 파트너를 설득하는 능력이 뛰어나요",
            "새로운 도전을 두려워하지 않아요",
            "현장에서 바로 문제를 해결해요",
            "실용적으로 일을 처리해요",
            "에너지 넘치게 프로젝트를 추진해요",
            "관찰력이 뛰어나 상황을 빠르게 파악해요",
            "즉흥적으로 좋은 판단을 내려요",
            "위험을 감수하고 새로운 시도를 해요",
            "영업이나 협상에서 성과를 내요"
        ],
        weaknesses: [
            "장기 계획을 세우고 따르기 어려워요",
            "인내심이 부족해 답답해할 때가 있어요",
            "위험한 결정을 쉽게 할 수 있어요",
            "감정의 깊이 있는 대화가 어색해요",
            "규칙을 무시하는 경향이 있어요",
            "세부 사항을 놓칠 때가 있어요",
            "충동적으로 결정할 때가 있어요",
            "책임을 피하려 할 수 있어요",
            "반복적인 업무를 싫어해요",
            "감정적인 지원보다 행동으로 보여줘요"
        ],
        bestMatch: ["ISTJ", "ISFJ"],
        worstMatch: ["INFJ", "INTJ"],
        recommendedTeams: [
            { name: "유선사업팀", reason: "현장 밀착형 영업 전략 실행 및 가입자 유치 주도 (표준업무: 현장영업)" },
            { name: "무선사업팀", reason: "모바일 시장 환경 변화에 따른 기민한 마케팅 대응 (표준업무: 마케팅실행)" },
            { name: "B2B영업팀", reason: "기업 고객 발굴을 위한 공격적인 제휴 및 협상 수행 (표준업무: 법인영업)" },
            { name: "방송프로모션팀", reason: "대규모 시청자 참여 행사 기획 및 현장 운영 총괄 (표준업무: 프로모션)" },
            { name: "유통망관리팀", reason: "전국 대리점 현장 방문 점검 및 영업 활력 제고 (표준업무: 유통망지원)" }
        ],
        notRecommendedTeam: "전략기획실 / 기술전략팀",
        notTeamReason: "장기적 전략 수립과 추상적 분석 업무가 지루할 수 있음",
        colleagueMessage: "\"당신의 행동력이 팀을 움직여요! 가끔 속도를 늦춰도 괜찮아요. 우리가 옆에서 함께 달릴게요.\"",
        representatives: [
            { name: "강호동", title: "방송인", image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Kang_Ho-dong.png" },
            { name: "마돈나", title: "가수", image: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Madonna_Rebel_Heart_Tour_2015_-_Stockholm_%2823051472299%29_%28cropped%29.jpg" },
            { name: "에미넴", title: "가수", image: "https://upload.wikimedia.org/wikipedia/commons/7/74/Eminem_2022.jpg" }
        ]
    },
    ESFP: {
        name: "스카이라이프의 무대 위 스타",
        emoji: "🌟",
        color: "#FF6F61",
        description: "밝은 에너지와 뛰어난 엔터테인먼트 능력으로 조직의 스타가 되는 분위기 장인",
        strengths: [
            "회식이나 팀 행사에서 분위기를 띄워요",
            "긍정적인 에너지로 팀을 밝게 해요",
            "즉흥적으로 문제를 해결해요",
            "팀의 사기를 높이는 역할을 해요",
            "새로운 환경에도 빠르게 적응해요",
            "현장에서 빠르게 소통해요",
            "재미있고 활기찬 업무 분위기를 만들어요",
            "관찰력이 좋아 분위기를 읽어요",
            "실용적으로 일을 처리해요",
            "갑작스러운 상황에도 당황하지 않아요"
        ],
        weaknesses: [
            "장기적인 목표를 세우기 어려워요",
            "깊이 있는 분석보다 직감에 의존해요",
            "즉흥적으로 결정해서 후회할 때가 있어요",
            "집중력이 분산되기 쉬워요",
            "세부 계획을 세우는 게 약해요",
            "책임감이 부족해 보일 때가 있어요",
            "기분에 따라 업무 효율이 달라져요",
            "규칙을 따르기 싫어해요",
            "심층적인 업무에 집중하기 어려워요",
            "미래 준비보다 현재를 즐겨요"
        ],
        bestMatch: ["ISTJ", "ISFJ"],
        worstMatch: ["INTJ", "INTP"],
        recommendedTeams: [
            { name: "디지털영업팀", reason: "라이브 커머스 및 SNS 기반의 활기찬 고객 소통과 유입 유도 (표준업무: 온라인영업)" },
            { name: "대외협력팀", reason: "방송 유관 단체 및 미디어 파트너사와의 친화적인 네트워크 형성 (표준업무: 대외협력)" },
            { name: "SNS마케팅팀", reason: "재미있고 톡톡 튀는 쇼츠 영상 및 콘텐츠 제작 참여 (표준업무: SNS운영)" },
            { name: "사내행사기획팀", reason: "임직원 사기 진작을 위한 다큐멘터리/행사 기획 및 진행 (표준업무: 사내문화)" },
            { name: "고객참여프로그램팀", reason: "시청자 대상 견학 및 체험 프로그램 운영/가이드 (표준업무: 체험마케팅)" }
        ],
        notRecommendedTeam: "회계팀 / IT운영팀",
        notTeamReason: "반복적이고 독립적인 업무 환경이 답답할 수 있음",
        colleagueMessage: "\"당신 덕분에 회사 오는 게 즐거워요! 그 밝은 에너지, 잃지 마세요. 우리 팀의 햇살이니까요.\"",
        representatives: [
            { name: "비(Rain)", title: "가수/배우", image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Rain_%28singer%29_in_2015.png" },
            { name: "엘비스 프레슬리", title: "가수", image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Elvis_Presley_1956_%28cropped%29.jpg" },
            { name: "마릴린 먼로", title: "배우", image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Marilyn_Monroe_Publicity_Photo_1953.jpg" }
        ]
    },

};

// 찐친력 (호환성) 점수 매트릭스
const compatibilityScores = {
    INTJ: { ENFP: 95, ENTP: 90, INFJ: 85, ENTJ: 80, INFP: 75, INTP: 70, ISFP: 40, ESFP: 35 },
    INTP: { ENTJ: 95, ESTJ: 90, ENFJ: 85, INTJ: 80, ENTP: 75, INFJ: 70, ESFJ: 40, ISFJ: 35 },
    ENTJ: { INTP: 95, ISTP: 90, ENFP: 85, INTJ: 80, ENTP: 75, INFJ: 70, ISFP: 40, INFP: 35 },
    ENTP: { INTJ: 95, INFJ: 90, ENFP: 85, ENTJ: 80, INTP: 75, ENFJ: 70, ISTJ: 40, ISFJ: 35 },
    INFJ: { ENTP: 95, ENFP: 90, INTJ: 85, INFP: 80, ENTJ: 75, ENFJ: 70, ESTP: 40, ISTP: 35 },
    INFP: { ENFJ: 95, ENTJ: 90, INFJ: 85, ENFP: 80, INTJ: 75, INTP: 70, ESTJ: 40, ISTJ: 35 },
    ENFJ: { INFP: 95, ISFP: 90, ENFP: 85, INTJ: 80, ENTP: 75, INFJ: 70, ISTP: 40, INTP: 35 },
    ENFP: { INTJ: 95, INFJ: 90, ENTJ: 85, ENTP: 80, ENFJ: 75, INFP: 70, ISTJ: 40, ESTJ: 35 },
    ISTJ: { ESFP: 95, ESTP: 90, ISFJ: 85, ESTJ: 80, ISTP: 75, ISFP: 70, ENFP: 40, ENTP: 35 },
    ISFJ: { ESFP: 95, ESTP: 90, ISTJ: 85, ESFJ: 80, ISFP: 75, ISTP: 70, ENTP: 40, INTP: 35 },
    ESTJ: { ISFP: 95, ISTP: 90, ISTJ: 85, ESFJ: 80, ESTP: 75, ESFP: 70, INFP: 40, ENFP: 35 },
    ESFJ: { ISFP: 95, ISTP: 90, ISFJ: 85, ESTJ: 80, ESFP: 75, ESTP: 70, INTP: 40, INTJ: 35 },
    ISTP: { ESTJ: 95, ENTJ: 90, ESFJ: 85, ESTP: 80, ISTJ: 75, ISFJ: 70, ENFJ: 40, INFJ: 35 },
    ISFP: { ESFJ: 95, ESTJ: 90, ENFJ: 85, ESFP: 80, ISFJ: 75, ISTJ: 70, ENTJ: 40, INTJ: 35 },
    ESTP: { ISTJ: 95, ISFJ: 90, ISTP: 85, ESFP: 80, ESTJ: 75, ESFJ: 70, INFJ: 40, INTJ: 35 },
    ESFP: { ISTJ: 95, ISFJ: 90, ESTP: 85, ISFP: 80, ESFJ: 75, ESTJ: 70, INTJ: 40, INTP: 35 }
};
