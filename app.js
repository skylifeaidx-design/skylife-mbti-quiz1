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
        this.activeQuestions = []; // 이번 회차에 사용할 질문들
        this.expectedMbti = '';    // 유저가 선택한 예상 MBTI

        // DOM 요소
        this.screens = {
            intro: document.getElementById('intro-screen'),
            quiz: document.getElementById('quiz-screen'),
            analyzing: document.getElementById('analyzing-screen'),
            result: document.getElementById('result-screen')
        };

        // 이벤트 바인딩
        this.bindEvents();

        // 배너 초기화
        this.initBanner();

        // 딥링크 확인
        this.checkDeepLink();
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

        // 공유 버튼
        document.getElementById('kakao-share-btn').addEventListener('click', () => this.shareToKakao());
        document.getElementById('teams-share-btn').addEventListener('click', () => this.shareToTeams());
        document.getElementById('save-image-btn').addEventListener('click', () => this.saveAsImage());
        document.getElementById('copy-link-btn').addEventListener('click', () => this.copyLink());

        // 뒤로가기 버튼
        document.getElementById('back-btn').addEventListener('click', () => {
            this.goBack();
        });
    }

    checkDeepLink() {
        const urlParams = new URLSearchParams(window.location.search);
        const mbtiParam = urlParams.get('mbti');

        if (mbtiParam && mbtiTypes[mbtiParam.toUpperCase()]) {
            this.showResult(mbtiParam.toUpperCase());
        }
    }

    showScreen(screenName) {
        Object.values(this.screens).forEach(screen => {
            screen.classList.remove('active');
        });
        this.screens[screenName].classList.add('active');
    }

    startQuiz() {
        // 예상 MBTI 획득
        const select = document.getElementById('expected-mbti-select');
        this.expectedMbti = select ? select.value : '';

        // [Validation] 예상 MBTI 미선택 시 경고 팝업
        if (!this.expectedMbti) {
            const customAlert = document.getElementById('custom-alert');
            if (customAlert) {
                customAlert.classList.add('active');
            } else {
                alert('본인이 생각하는 MBTI를 입력하고 시작해주세요!');
            }
            return;
        }

        // 질문 랜덤화 (20개 중 10개 선택)
        this.activeQuestions = this.shuffleArray([...quizQuestions]).slice(0, 10);

        this.currentQuestion = 0;
        this.answers = [];
        this.resetScores();
        this.showScreen('quiz');
        this.displayQuestion();
    }

    // 배열 셔플 (Fisher-Yates)
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
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
        const question = this.activeQuestions[this.currentQuestion];
        const questionNum = this.currentQuestion + 1;
        const totalQuestions = this.activeQuestions.length;

        // 진행 상태 업데이트
        document.getElementById('question-number').textContent = `${questionNum} / ${totalQuestions}`;
        document.getElementById('progress-fill').style.width = `${(questionNum / totalQuestions) * 100}%`;

        // 뒤로가기 버튼 상태 제어
        const backBtn = document.getElementById('back-btn');
        if (this.currentQuestion === 0) {
            backBtn.disabled = true;
        } else {
            backBtn.disabled = false;
        }

        // 질문 표시
        const emojis = ['💼', '🗣️', '💡', '📊', '🤝', '⚖️', '⏰', '✈️', '🎉', '🌙', '📅', '💬', '🚀', '🔥', '🛡️', '🎯', '📢', '🔍', '⚙️', '🌟'];
        const currentEmoji = emojis[this.activeQuestions[this.currentQuestion].id - 1] || '💼';
        document.getElementById('question-emoji').textContent = currentEmoji;
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

        if (this.currentQuestion < this.activeQuestions.length) {
            // 다음 질문으로
            this.displayQuestion();
        } else {
            // 분석 화면으로 이동
            this.showAnalyzing();
        }
    }

    goBack() {
        if (this.currentQuestion > 0) {
            // 이전 답변 제거
            const lastAnswer = this.answers.pop();

            // 점수 차감
            if (lastAnswer) {
                this.scores[lastAnswer.value]--;
            }

            // 질문 인덱스 감소
            this.currentQuestion--;

            // 질문 다시 표시
            this.displayQuestion();
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
            '📡 30.2°E 무궁화 위성 신호 최적화 중...',
            '📺 Skylife UI/UX 업무 패턴 분석 중...',
            '🚀 셋톱박스 지능형 로그 기반 성향 파악...',
            '🔍 가입자 경험(CX) 데이터 기반 찐친 매칭...',
            '✨ 스카라이프 최고의 동료 케미 계산 완료!'
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

    getComparisonFeedback(expected, actual) {
        if (!expected) return { score: 0, message: "사전 선택이 없어 분석을 시작합니다! 🚀" };

        let matchCount = 0;
        for (let i = 0; i < 4; i++) {
            if (expected[i] === actual[i]) matchCount++;
        }

        const score = (matchCount / 4) * 100;
        let message = "";

        if (score === 100) {
            message = "자기이해 마스터! 스카이라이프에서의 본인 모습을 완벽히 알고 계시네요. 🎯";
        } else if (score >= 75) {
            message = "스스로를 아주 잘 알고 계시군요! 업무 스타일이 매우 뚜렷합니다. ✨";
        } else if (score >= 50) {
            message = "본인도 몰랐던 의외의 모습이 발견되었어요! 새로운 발견입니다. 💡";
        } else if (score >= 25) {
            message = "생각보다 유연한 업무 스타일을 가지고 계시네요! 반전 매력의 소유자입니다. 🌈";
        } else {
            message = "완전히 새로운 발견! 이 퀴즈가 당신의 숨은 잠재력을 찾아냈을지도 몰라요. 💫";
        }

        return { score, message };
    }

    showResult(forcedMbti = null) {
        const mbti = forcedMbti || this.calculateMBTI();
        const typeInfo = mbtiTypes[mbti];
        const compatibility = compatibilityScores[mbti];

        // 결과 화면 표시
        this.showScreen('result');

        // 결과 페이지로 스크롤 상단 이동
        window.scrollTo(0, 0);

        // 기본 정보
        document.getElementById('result-emoji').textContent = typeInfo.emoji;
        document.getElementById('result-type').textContent = mbti;
        document.getElementById('result-title').textContent = typeInfo.name;
        document.getElementById('result-description').textContent = typeInfo.description;

        // MBTI 비교 렌더링
        const expectedDisplay = document.getElementById('expected-mbti-display');
        const actualDisplay = document.getElementById('actual-mbti-display');

        if (expectedDisplay) expectedDisplay.textContent = this.expectedMbti || '미선택';
        if (actualDisplay) actualDisplay.textContent = mbti;

        // 자기이해 지수 및 메시지 업데이트
        const feedback = this.getComparisonFeedback(this.expectedMbti, mbti);
        const matchScoreEl = document.getElementById('match-score');
        const matchMessageEl = document.getElementById('match-message');
        const matchSection = document.getElementById('self-match-section');

        if (matchScoreEl) matchScoreEl.textContent = `${feedback.score}%`;
        if (matchMessageEl) matchMessageEl.textContent = feedback.message;
        if (!this.expectedMbti && matchSection) {
            matchSection.style.display = 'none'; // 예상 MBTI 미선택 시 섹션 숨김
        }

        // 대표 인물 렌더링
        this.renderRepresentatives(typeInfo.representatives);

        // 장점 목록
        const strengthsList = document.getElementById('strengths-list');
        strengthsList.innerHTML = typeInfo.strengths.map(s => `<li>${s}</li>`).join('');

        // 단점 목록
        const weaknessesList = document.getElementById('weaknesses-list');
        weaknessesList.innerHTML = typeInfo.weaknesses.map(w => `<li>${w}</li>`).join('');

        // 호환성 차트
        this.renderCompatibility(mbti, compatibility, typeInfo);

        // 추천 팀 목록 렌더링 (확장된 구조)
        const teamsContainer = document.getElementById('recommended-teams-list');
        if (teamsContainer && typeInfo.recommendedTeams) {
            teamsContainer.innerHTML = typeInfo.recommendedTeams.map((team, idx) => `
                <div class="team-item">
                    <div class="team-item-header">
                        <span class="team-item-name">${team.name}</span>
                        <span class="team-item-badge">추천 ${idx + 1}</span>
                    </div>
                    <p class="team-item-reason">${team.reason}</p>
                </div>
            `).join('');
        }

        // 비추천 팀 렌더링 (확장된 구조)
        const notRecommendedContainer = document.getElementById('not-recommended-teams-list');
        if (notRecommendedContainer && typeInfo.notRecommendedTeams) {
            notRecommendedContainer.innerHTML = typeInfo.notRecommendedTeams.map((team, idx) => `
                <div class="team-item">
                    <div class="team-item-header">
                        <span class="team-item-name">${team.name}</span>
                        <span class="team-item-badge">주의 ${idx + 1}</span>
                    </div>
                    <p class="team-item-reason">${team.reason}</p>
                </div>
            `).join('');
        }

        // 동료 위로 메시지
        document.getElementById('colleague-message').textContent = typeInfo.colleagueMessage;
    }

    // (기존 렌더링 메서드들 생략 - 그대로 유지)

    renderRepresentatives(representatives) {
        const container = document.getElementById('representatives-container');
        if (!container || !representatives) return;

        container.innerHTML = representatives.map(rep => `
            <div class="representative-card">
                <div class="rep-image-container">
                    <img src="${rep.image}" alt="${rep.name}" class="rep-image" onerror="this.src='https://api.dicebear.com/7.x/avataaars/svg?seed=${rep.name}&backgroundColor=F0F0F0'">
                </div>
                <div class="rep-info">
                    <span class="rep-name">${rep.name}</span>
                    <span class="rep-title">${rep.title}</span>
                </div>
            </div>
        `).join('');
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

        // 스크롤 상단으로
        window.scrollTo(0, 0);

        // URL 파라미터 제거 (선택 사항 - 다시 하기 클릭 시 깔끔하게)
        const newUrl = window.location.origin + window.location.pathname;
        window.history.replaceState({}, document.title, newUrl);

        // 분석 화면 초기화
        const circleProgress = document.getElementById('circle-progress');
        if (circleProgress) circleProgress.style.strokeDashoffset = '565.48';
        const percentageEl = document.getElementById('progress-percentage');
        if (percentageEl) percentageEl.textContent = '0%';

        this.showScreen('intro');
    }

    // ========== 배너 로직 ==========
    initBanner() {
        const slider = document.getElementById('banner-slider');
        const dots = document.querySelectorAll('#banner-dots .dot');
        if (!slider) return;

        let currentIndex = 0;
        const bannerCount = 5;

        setInterval(() => {
            currentIndex = (currentIndex + 1) % bannerCount;
            this.updateBanner(slider, dots, currentIndex);
        }, 4000); // 4초마다 전환
    }

    updateBanner(slider, dots, index) {
        if (!slider || !dots) return;

        slider.style.transform = `translateX(-${index * 100}%)`;

        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    getDeepLinkUrl() {
        const mbti = document.getElementById('result-type').textContent;
        const baseUrl = window.location.origin + window.location.pathname;
        return `${baseUrl}?mbti=${mbti}`;
    }

    shareToKakao() {
        const mbti = document.getElementById('result-type').textContent;
        const typeInfo = mbtiTypes[mbti];
        const shareTitle = `내 스카이라이프 찐친은? "${typeInfo.name}" (${mbti})`;
        const shareUrl = this.getDeepLinkUrl();

        const kakaoUrl = `https://sharer.kakao.com/talk/friends/picker/link?app_key=SKYLIFE_MBTI&short_url=${encodeURIComponent(shareUrl)}`;
        window.open(kakaoUrl, '_blank');
    }

    shareToTeams() {
        const mbti = document.getElementById('result-type').textContent;
        const typeInfo = mbtiTypes[mbti];
        const shareText = `나의 스카이라이프 찐친 유형은 "${typeInfo.name}" (${mbti})! 🎉 당신의 찐친 유형도 확인해보세요!`;
        const shareUrl = this.getDeepLinkUrl();

        const teamsUrl = `https://teams.microsoft.com/share?text=${encodeURIComponent(shareText)}&href=${encodeURIComponent(shareUrl)}`;
        window.open(teamsUrl, '_blank');
    }

    copyLink() {
        const shareUrl = this.getDeepLinkUrl();

        navigator.clipboard.writeText(shareUrl).then(() => {
            alert('결과 페이지 링크가 복사되었습니다! 📋');
        }).catch(err => {
            console.error('링크 복사 실패:', err);
            const textArea = document.createElement("textarea");
            textArea.value = shareUrl;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("copy");
            document.body.removeChild(textArea);
            alert('결과 페이지 링크가 복사되었습니다! 📋');
        });
    }

    saveAsImage() {
        const target = document.getElementById('result-card-content');
        if (!target) return;

        const originalPadding = target.style.padding;
        target.style.padding = '20px'; // 캡처 시 여백 확보

        html2canvas(target, {
            useCORS: true, // 외부 이미지(DiceBear 등) 허용
            backgroundColor: "#ffffff",
            scale: 2 // 고화질
        }).then(canvas => {
            target.style.padding = originalPadding;

            const link = document.createElement('a');
            const mbti = document.getElementById('result-type').textContent;
            link.download = `skylife_mbti_${mbti}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        }).catch(err => {
            console.error('이미지 저장 실패:', err);
            alert('이미지 저장 중 오류가 발생했습니다.');
        });
    }
}

// 앱 초기화
document.addEventListener('DOMContentLoaded', () => {
    new MBTIQuizApp();
});
