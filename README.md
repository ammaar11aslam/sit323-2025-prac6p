# SIT323-2025-Prac5D: Cloud Deployment of Calculator Microservice

## Overview

This project is a Node.js-based calculator microservice that performs basic and advanced operations such as:

- Addition, Subtraction, Multiplication, Division
- Exponentiation
- Square Root
- Modulo

It has been containerised using Docker and **published to Google Cloud's Container Registry** (GCR) for Task 5.2D.

---

## Docker & GCR Instructions

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

This publishes your Docker image to:

```
gcr.io/distincton/calculator:latest
```

---

## How to Pull & Run from GCR

From any machine with Docker:

```bash
docker pull gcr.io/distincton/calculator:latest
docker run -p 3000:3000 gcr.io/distincton/calculator:latest
```

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

Test URL:

```
http://localhost:3000/add?num1=10&num2=5
```

---

## Project Structure

```
sit323-2025-prac5d/
├── server.js
├── Dockerfile
├── package.json
├── docker-compose.yml (if applicable)
└── README.md
```

---

## GitHub Submission

Push everything to this repo:

```
https://github.com/ammaar11aslam/sit323-2025-prac5d
```

Then submit that link on OnTrack.

---

## Tech Stack

- Node.js + Express
- Docker
- Google Cloud SDK
- Google Container Registry (GCR)
