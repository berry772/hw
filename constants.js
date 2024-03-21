const 자음 = ["ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ", "ㄲ", "ㄸ", "ㅃ", "ㅆ", "ㅉ"]

const 모음 = ["ㅏ", "ㅑ", "ㅓ", "ㅕ", "ㅗ", "ㅛ", "ㅜ", "ㅠ", "ㅡ", "ㅣ", "ㅐ", "ㅒ", "ㅔ", "ㅖ", "ㅘ", "ㅙ", "ㅚ", "ㅝ", "ㅞ", "ㅟ", "ㅢ"]

const 조합 = [
    ["가", "나", "다", "라", "마", "바", "사", "아", "자", "차", "카", "타", "파", "하", "까", "따", "빠", "싸", "짜"],
    ["갸", "냐", "댜", "랴", "먀", "뱌", "샤", "야", "쟈", "챠", "캐", "턔", "퍄", "햐", "캬", "댸", "뺘", "쌰", "쨔"],
    ["거", "너", "더", "러", "머", "버", "서", "어", "저", "처", "커", "터", "퍼", "허", "컈", "떠", "뻐", "써", "쩌"],
    ["겨", "녀", "뎌", "려", "며", "벼", "셔", "여", "져", "쳐", "켜", "텨", "펴", "혀", "켜", "뗘", "뼈", "쎠", "쪄"],
    ["고", "노", "도", "로", "모", "보", "소", "오", "조", "초", "코", "토", "포", "호", "꼬", "또", "뽀", "쏘", "쪼"],
    ["교", "뇨", "됴", "료", "묘", "뵤", "쇼", "요", "죠", "쵸", "쿄", "툐", "표", "효", "꾜", "뚀", "뾰", "쑈", "쬬"],
    ["구", "누", "두", "루", "무", "부", "수", "우", "주", "추", "쿠", "투", "푸", "후", "꾸", "뚜", "뿌", "쑤", "쭈"],
    ["규", "뉴", "듀", "류", "뮤", "뷰", "슈", "유", "쥬", "츄", "큐", "튜", "퓨", "휴", "뀨", "뜌", "쀼", "쓔", "쮸"],
    ["그", "느", "드", "르", "므", "브", "스", "으", "즈", "츠", "크", "트", "프", "흐", "끄", "뜨", "쁘", "쓰", "쯔"],
    ["기", "니", "디", "리", "미", "비", "시", "이", "지", "치", "키", "티", "피", "히", "끼", "띠", "삐", "씨", "찌"],
    ["개", "내", "대", "래", "매", "배", "새", "애", "재", "채", "캐", "태", "패", "해", "깨", "때", "빼", "쌔", "째"],
    ["걔", "얘"],
    ["게", "네", "데", "레", "메", "베", "세", "에", "제", "체", "케", "테", "페", "헤", "께", "떼", "뻬", "쎄", "쩨"],
    ["계", "례", "셰", "예", "폐", "혜"],
    ["과", "놔", "돠", "롸", "뫄", "봐", "솨", "와", "좌", "촤", "콰", "화", "꽈", "쏴"],
    ["괘", "돼", "봬", "쇄", "왜", "홰", "꽤"],
    ["괴", "뇌", "되", "뢰", "뫼", "뵈", "쇠", "외", "죄", "최", "쾨", "퇴", "회", "꾀", "쐬", "쬐"],
    ["궈", "눠", "둬", "뤄", "뭐", "붜", "숴", "워", "줘", "춰", "쿼", "퉈", "풔", "훠", "꿔", "뚸", "뿨", "쒀", "쭤"],
    ["궤", "눼", "뒈", "뷔", "쉐", "웨", "췌", "퀘", "훼", "꿰"],
    ["귀", "뉘", "뒤", "뤼", "뮈", "뷔", "쉬", "위", "쥐", "취", "퀴", "튀", "퓌", "휘", "뀌", "뛰", "쀠", "쒸", "쮜"],
    ["긔", "늬", "의", "희", "띄", "씌"],
]

const 난이도 = {
    1: { 자음count: 14, 모음count: 10 },
    2: { 자음count: 19, 모음count: 10 },
    3: { 자음count: 19, 모음count: 21 },
}