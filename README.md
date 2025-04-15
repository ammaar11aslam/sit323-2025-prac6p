# SIT323 Task 6.1P – Deploying a Node.js App on Google Kubernetes Engine (GKE)

## 📘 Overview

This task demonstrates deploying a containerized Node.js calculator microservice to a **Kubernetes cluster hosted on Google Kubernetes Engine (GKE)**. The application was previously containerized in Task 5.1P and pushed to Google Container Registry (GCR). This task highlights orchestration using Kubernetes in a cloud-native environment with public access.

---

## ⚙️ Tools & Services Used

- Node.js + Express
- Docker
- Google Cloud SDK
- Google Kubernetes Engine (GKE)
- Google Container Registry (GCR)
- kubectl

---

## 🚀 Deployment Steps

### 1. Set Google Cloud Project

```powershell
gcloud config set project distincton
```

### 2. Create a GKE Cluster

```powershell
gcloud container clusters create node-app-cluster --num-nodes=2 --zone=australia-southeast1-a
```

### 3. Authenticate kubectl with the Cluster

```powershell
gcloud container clusters get-credentials node-app-cluster --zone=australia-southeast1-a --project=distincton
```

### 4. Deploy the App to Kubernetes

```powershell
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

## 📁 Project Structure

```
sit323-2025-prac6p/
├── Dockerfile
├── server.js
├── package.json
├── deployment.yaml
├── service.yaml
├── README.md
└── screenshots/
```
