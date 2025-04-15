# SIT323-2025-Prac5D/6.1P: Cloud & Kubernetes Deployment of Calculator Microservice

## Overview

This project is a Node.js-based calculator microservice that performs basic and advanced operations such as:

- Addition, Subtraction, Multiplication, Division
- Exponentiation
- Square Root
- Modulo

It has been:

- Containerised using Docker
- **Published to Google Cloud's Container Registry (GCR)** for Task 5.2D
- **Deployed to Kubernetes using Docker Desktop's built-in Kubernetes** for Task 6.1P

---

## Docker & GCR Instructions (Task 5.2D)

### Step 1: Build Docker Image

```bash
docker build -t sit323-2025-prac5p-web .
```

### Step 2: Tag the Image for GCR

```bash
docker tag sit323-2025-prac5p-web:latest gcr.io/distincton/calculator:latest
```

### Step 3: Authenticate & Push to GCR

```bash
gcloud auth login
gcloud config set project distincton
gcloud auth configure-docker
docker push gcr.io/distincton/calculator:latest
```

Published Image:

```
gcr.io/distincton/calculator:latest
```

---

## Kubernetes Deployment (Task 6.1P)

### Step 1: Enable Kubernetes in Docker Desktop

- Open Docker Desktop > Settings > Kubernetes
- Tick ✅ "Enable Kubernetes"
- Apply & Restart
- Wait for "Kubernetes is running"

### Step 2: Apply Kubernetes Configurations

```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

### Step 3: Verify Deployment

```bash
kubectl get pods
kubectl get services
```

### Step 4: Access the Service

```bash
kubectl port-forward service/node-app-service 8080:80
```

Open in browser: [http://localhost:8080](http://localhost:8080)

---

## API Endpoints (Test in Browser/Postman)

| Endpoint    | Example                    |
| ----------- | -------------------------- |
| Add         | `/add?num1=10&num2=5`      |
| Subtract    | `/subtract?num1=10&num2=5` |
| Multiply    | `/multiply?num1=10&num2=5` |
| Divide      | `/divide?num1=10&num2=5`   |
| Exponent    | `/exponent?base=2&power=3` |
| Square Root | `/sqrt?num=25`             |
| Modulo      | `/modulo?num1=10&num2=3`   |

Example URL:

```
http://localhost:8080/add?num1=10&num2=5
```

---

## Project Structure

```
sit323-2025-prac5d/
├── server.js
├── Dockerfile
├── package.json
├── deployment.yaml
├── service.yaml
├── README.md
└── screenshots/ (optional)
```
