// 스카이라이프 MBTI 찐친 퀴즈 게임 - 메인 애플리케이션

class MBTIQuizApp {
    constructor() {
        // MBTI 점수 초기화
        this.scores = {
            E: 0, I: 0,
            S: 0, N: 0,
            T: 0, F: 0,
            J: 0, P: 0
        };

        this.currentQuestion = 0;
        this.answers = [];

        // DOM 요소
        this.screens = {
            intro: document.getElementById('intro-screen'),
            quiz: document.getElementById('quiz-screen'),
            analyzing: document.getElementById('analyzing-screen'),
            result: document.getElementById('result-screen')
        };

        // 이벤트 바인딩
        this.bindEvents();
    }

    bindEvents() {
        // 시작 버튼
        document.getElementById('start-btn').addEventListener('click', () => {
            this.startQuiz();
        });

        // 다시하기 버튼
        document.getElementById('restart-btn').addEventListener('click', () => {
            this.resetQuiz();
        });

        // 공유하기 버튼
        document.getElementById('share-btn').addEventListener('click', () => {
            this.shareResult();
        });
    }

    showScreen(screenName) {
        Object.values(this.screens).forEach(screen => {
            screen.classList.remove('active');
        });
        this.screens[screenName].classList.add('active');
    }

    startQuiz() {
        this.currentQuestion = 0;
        this.answers = [];
        this.resetScores();
        this.showScreen('quiz');
        this.displayQuestion();
    }

    resetScores() {
        this.scores = {
            E: 0, I: 0,
            S: 0, N: 0,
            T: 0, F: 0,
            J: 0, P: 0
        };
    }

    displayQuestion() {
        const question = quizQuestions[this.currentQuestion];
        const questionNum = this.currentQuestion + 1;
        const totalQuestions = quizQuestions.length;

        // 진행 상태 업데이트
        document.getElementById('question-number').textContent = `${questionNum} / ${totalQuestions}`;
        document.getElementById('progress-fill').style.width = `${(questionNum / totalQuestions) * 100}%`;

        // 질문 표시
        const emojis = ['💼', '🗣️', '💡', '📊', '🤝', '⚖️', '⏰', '✈️', '🎉', '🌙'];
        document.getElementById('question-emoji').textContent = emojis[this.currentQuestion];
        document.getElementById('question-text').textContent = question.question;

        // 선택지 생성
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';

        question.options.forEach((option, index) => {
            const optionCard = document.createElement('div');
            optionCard.className = 'option-card';
            optionCard.innerHTML = `
                <span class="option-emoji">${option.emoji}</span>
                <span class="option-text">${option.text}</span>
            `;
            optionCard.addEventListener('click', () => {
                this.selectOption(option.value, question.dimension);
            });
            optionsContainer.appendChild(optionCard);
        });

        // 애니메이션 효과
        optionsContainer.querySelectorAll('.option-card').forEach((card, i) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.transition = 'all 0.3s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, i * 100);
        });
    }

    selectOption(value, dimension) {
        // 점수 기록
        this.scores[value]++;
        this.answers.push({
            question: this.currentQuestion,
            value: value,
            dimension: dimension
        });

        this.currentQuestion++;

        if (this.currentQuestion < quizQuestions.length) {
            // 다음 질문으로
            this.displayQuestion();
        } else {
            // 분석 화면으로 이동
            this.showAnalyzing();
        }
    }

    showAnalyzing() {
        this.showScreen('analyzing');
        this.animateProgress();
    }

    animateProgress() {
        const circleProgress = document.getElementById('circle-progress');
        const percentageEl = document.getElementById('progress-percentage');
        const tipEl = document.getElementById('analyzing-tip');

        const tips = [
            '업무 스타일을 분석 중...',
            '의사소통 패턴을 확인 중...',
            '팀워크 성향을 파악 중...',
            '찐친 매칭을 계산 중...',
            '최적의 팀을 추천 준비 중...'
        ];

        const circumference = 2 * Math.PI * 90; // 565.48
        let progress = 0;
        let tipIndex = 0;

        const interval = setInterval(() => {
            progress += 2;

            const offset = circumference - (progress / 100) * circumference;
            circleProgress.style.strokeDashoffset = offset;
            percentageEl.textContent = `${progress}%`;

            // 팁 변경
            if (progress % 20 === 0 && tipIndex < tips.length) {
                tipEl.textContent = tips[tipIndex];
                tipEl.style.animation = 'none';
                tipEl.offsetHeight; // reflow
                tipEl.style.animation = 'fadeInOut 3s infinite';
                tipIndex++;
            }

            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    this.showResult();
                }, 500);
            }
        }, 50);
    }

    calculateMBTI() {
        let mbti = '';

        mbti += this.scores.E >= this.scores.I ? 'E' : 'I';
        mbti += this.scores.S >= this.scores.N ? 'S' : 'N';
        mbti += this.scores.T >= this.scores.F ? 'T' : 'F';
        mbti += this.scores.J >= this.scores.P ? 'J' : 'P';

        return mbti;
    }

    showResult() {
        const mbti = this.calculateMBTI();
        const typeInfo = mbtiTypes[mbti];
        const compatibility = compatibilityScores[mbti];

        // 결과 화면 표시
        this.showScreen('result');

        // 기본 정보
        document.getElementById('result-emoji').textContent = typeInfo.emoji;
        document.getElementById('result-type').textContent = mbti;
        document.getElementById('result-title').textContent = typeInfo.name;
        document.getElementById('result-description').textContent = typeInfo.description;

        // 캐릭터 이미지 (placeholder 사용)
        const characterImg = document.getElementById('character-image');
        characterImg.src = this.getCharacterImage(mbti);
        characterImg.alt = `${mbti} 캐릭터`;

        // 장점 목록
        const strengthsList = document.getElementById('strengths-list');
        strengthsList.innerHTML = typeInfo.strengths.map(s => `<li>${s}</li>`).join('');

        // 단점 목록
        const weaknessesList = document.getElementById('weaknesses-list');
        weaknessesList.innerHTML = typeInfo.weaknesses.map(w => `<li>${w}</li>`).join('');

        // 호환성 차트
        this.renderCompatibility(mbti, compatibility, typeInfo);

        // 추천 팀
        document.getElementById('team-name').textContent = typeInfo.recommendedTeam;
        document.getElementById('team-reason').textContent = typeInfo.teamReason;

        // 비추천 팀
        document.getElementById('not-team-name').textContent = typeInfo.notRecommendedTeam;
        document.getElementById('not-team-reason').textContent = typeInfo.notTeamReason;

        // 동료 위로 메시지
        document.getElementById('colleague-message').textContent = typeInfo.colleagueMessage;
    }

    getCharacterImage(mbti) {
        // MBTI 유형별 캐릭터 이미지 URL (placeholder)
        const characterImages = {
            'INTJ': 'https://api.dicebear.com/7.x/avataaars/svg?seed=strategist&backgroundColor=6B5B95&accessories=prescription02&clothing=blazerAndShirt',
            'INTP': 'https://api.dicebear.com/7.x/avataaars/svg?seed=ideabank&backgroundColor=88B04B&accessories=prescription01&clothing=hoodie',
            'ENTJ': 'https://api.dicebear.com/7.x/avataaars/svg?seed=leader&backgroundColor=DD4124&clothing=blazerAndSweater&clothingColor=262e33',
            'ENTP': 'https://api.dicebear.com/7.x/avataaars/svg?seed=innovator&backgroundColor=009B77&clothing=overall&accessories=round',
            'INFJ': 'https://api.dicebear.com/7.x/avataaars/svg?seed=charisma&backgroundColor=5B5EA6&hairColor=2c1b18&clothing=blazerAndShirt',
            'INFP': 'https://api.dicebear.com/7.x/avataaars/svg?seed=creator&backgroundColor=F7CAC9&accessories=prescription02&hairColor=d6b370',
            'ENFJ': 'https://api.dicebear.com/7.x/avataaars/svg?seed=insider&backgroundColor=F7786B&clothing=blazerAndShirt&accessories=sunglasses',
            'ENFP': 'https://api.dicebear.com/7.x/avataaars/svg?seed=energy&backgroundColor=EFC050&clothing=hoodie&hairColor=b58143',
            'ISTJ': 'https://api.dicebear.com/7.x/avataaars/svg?seed=pro&backgroundColor=45B8AC&clothing=blazerAndSweater&accessories=prescription01',
            'ISFJ': 'https://api.dicebear.com/7.x/avataaars/svg?seed=supporter&backgroundColor=955251&clothing=collarAndSweater',
            'ESTJ': 'https://api.dicebear.com/7.x/avataaars/svg?seed=driver&backgroundColor=B565A7&clothing=blazerAndShirt&accessories=kurt',
            'ESFJ': 'https://api.dicebear.com/7.x/avataaars/svg?seed=caremanager&backgroundColor=92A8D1&clothing=collarAndSweater',
            'ISTP': 'https://api.dicebear.com/7.x/avataaars/svg?seed=solver&backgroundColor=6B4226&accessories=sunglasses&clothing=hoodie',
            'ISFP': 'https://api.dicebear.com/7.x/avataaars/svg?seed=healer&backgroundColor=DFCFBE&hairColor=b58143&clothing=overall',
            'ESTP': 'https://api.dicebear.com/7.x/avataaars/svg?seed=action&backgroundColor=D65076&accessories=wayfarers&clothing=graphicShirt',
            'ESFP': 'https://api.dicebear.com/7.x/avataaars/svg?seed=star&backgroundColor=FF6F61&clothing=hoodie&accessories=sunglasses'
        };

        return characterImages[mbti] || characterImages['INTJ'];
    }

    renderCompatibility(mbti, compatibility, typeInfo) {
        const grid = document.getElementById('compatibility-grid');
        grid.innerHTML = '';

        // Best matches (잘 맞는 유형)
        typeInfo.bestMatch.forEach(type => {
            const score = compatibility[type] || 85;
            grid.innerHTML += this.createCompatBar(type, score, 'high');
        });

        // Worst matches (안 맞는 유형)
        typeInfo.worstMatch.forEach(type => {
            const score = compatibility[type] || 40;
            grid.innerHTML += this.createCompatBar(type, score, 'low');
        });

        // 애니메이션 적용
        setTimeout(() => {
            grid.querySelectorAll('.compat-bar').forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width;
            });
        }, 100);
    }

    createCompatBar(type, score, level) {
        return `
            <div class="compat-item">
                <span class="compat-type">${type}</span>
                <div class="compat-bar-container">
                    <div class="compat-bar ${level}" data-width="${score}%" style="width: 0%"></div>
                </div>
                <span class="compat-score ${level}">${score}%</span>
            </div>
        `;
    }

    resetQuiz() {
        this.currentQuestion = 0;
        this.answers = [];
        this.resetScores();

        // 분석 화면 초기화
        document.getElementById('circle-progress').style.strokeDashoffset = '565.48';
        document.getElementById('progress-percentage').textContent = '0%';

        this.showScreen('intro');
    }

    shareResult() {
        const mbti = this.calculateMBTI();
        const typeInfo = mbtiTypes[mbti];

        const shareText = `나의 스카이라이프 찐친 유형은 "${typeInfo.name}" (${mbti})! 🎉\n당신의 찐친 유형도 확인해보세요! 💚\n#스카이라이프찐친테스트 #MBTI`;

        if (navigator.share) {
            navigator.share({
                title: '내 스카이라이프 찐친을 찾아라!',
                text: shareText,
                url: window.location.href
            }).catch(console.error);
        } else {
            // 클립보드 복사 fallback
            navigator.clipboard.writeText(shareText).then(() => {
                alert('결과가 클립보드에 복사되었습니다! 📋');
            }).catch(() => {
                alert(shareText);
            });
        }
    }
}

// 앱 초기화
document.addEventListener('DOMContentLoaded', () => {
    new MBTIQuizApp();
});
