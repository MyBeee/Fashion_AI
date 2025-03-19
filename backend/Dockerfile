# ✅ 1. 가벼운 Node.js 20 버전 사용
FROM node:20-alpine

# ✅ 2. 작업 디렉토리 설정
WORKDIR /app

# ✅ 3. package.json 및 package-lock.json 먼저 복사 (캐싱 최적화)
COPY package*.json ./

# ✅ 4. TypeScript, Node.js 패키지 설치
RUN npm install

# ✅ 5. 나머지 모든 코드 복사
COPY . .

# ✅ 6. 환경 변수 파일 추가
COPY .env .env

# ✅ 7. TypeScript 빌드 실행 (🚨 dist/main.js가 생성되는지 확인)
RUN npm run build && ls -al dist/

# ✅ 8. 실행 권한 변경 제거 (필요 없음)
# RUN chmod +x ./dist/main.js  🚨 필요 없음

# ✅ 9. 포트 개방
EXPOSE 3000

# ✅ 10. 컨테이너 실행 시 서버 시작
CMD ["node", "dist/main.js"]
