# Python 3.9 기반 AI 모델 컨테이너
FROM python:3.9

WORKDIR /app

# 기본 패키지 설치 (빈 requirements.txt 사용 가능)
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["python", "main.py"]
