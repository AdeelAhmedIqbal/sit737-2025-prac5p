# SIT737-2025-prac5p

This project demonstrates containerisation of a simple Node.js web application using Docker and Docker Compose.

## 📦 Requirements
- Docker
- Docker Compose
- Git
- Node.js

## 📁 Project Files
- `simpleserver.js` – Express server
- `Dockerfile` – Docker image build instructions
- `docker-compose.yml` – Service and health check config

## 🚀 How to Run

1. **Build Image**
```bash
docker build -t Adeel2k01/simpleserver .
```

2. **Run with Docker Compose**
```bash
docker-compose up -d
```

3. **Access App**  
Visit [http://localhost:3000](http://localhost:3000)

## ♻️ Health Check
Defined in `docker-compose.yml` using:
```yaml
healthcheck:
  test: ["CMD", "curl", "-f", "http://localhost:3000"]
  interval: 30s
  timeout: 10s
  retries: 3
```

## 🔄 Push Docker Image
```bash
docker tag Adeel2k01/simpleserver adeel2k01/simpleserver:latest
docker push adeel2k01/simpleserver:latest
```
## 👨‍💻 Author

**Adeel Ahmed Iqbal**  
**Student ID: 224404186**  
Deakin University

---
