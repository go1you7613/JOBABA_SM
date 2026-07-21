# JOBABA_SM

잡아바 러닝센터 온라인교육 수요조사 이벤트 페이지입니다.

- 매일 휴대전화번호 및 개인정보 수집·이용 동의 후 투표 제출
- 개인정보 동의 버전과 동의 시각을 Google Apps Script 제출 payload에 포함
- 투표 결과는 사용자에게 비공개
- PC·모바일 강의 목록 가독성 개선

## 배포 파일

- `index.html`: 수요조사 이벤트 페이지
- `hero-demand-survey-foreground.png`: 상단 hero 전경 이미지
- `hero-demand-survey.svg`: hero 이미지 원본 소스

문서 파일과 원자료 파일은 배포 대상에서 제외했습니다.

## 개인정보 제출 payload

기존 투표 데이터와 함께 `phone`, `privacyConsent`, `privacyConsentVersion`, `consentedAt`을 전송합니다. Apps Script와 Google Sheet에서 해당 필드를 저장하도록 서버 측 컬럼 매핑을 확인해야 합니다.
