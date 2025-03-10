# Node.js 18 기반 이미지 사용
FROM node:18

# 작업 디렉토리 설정
WORKDIR /app

# package.json 및 package-lock.json 복사 후 설치
COPY package*.json ./
RUN npm install

# 나머지 코드 복사
COPY . .

# 포트 설정
EXPOSE 3000

# Next.js 실행
CMD ["npm", "run", "dev"]
