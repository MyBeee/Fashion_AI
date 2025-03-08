# Node.js 18 기반 이미지 사용
FROM node:18

# 작업 디렉토리 설정
WORKDIR /app

# package.json 및 package-lock.json 복사 후 설치
COPY package*.json ./
RUN npm install

# 나머지 코드 복사
COPY . .

# .env 파일 추가
COPY .env .env

# ⚡ crypto 모듈 활성화 (이 부분 추가)
ENV NODE_OPTIONS="--experimental-global-webcrypto"

# 포트 설정
EXPOSE 3000

# NestJS 서버 실행
CMD ["npm", "run", "start"]
