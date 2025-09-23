# node-cicd-pipeline
Creation of an automated workflow to test, build, and deploy a Node.js project using GitHub Actions Node.js Routing App with Docker and CI/CD
A simple **Node.js Express routing app** containerized with Docker and automated with **GitHub Actions** for CI/CD.

---

## Features

- Node.js Express app with routing (`/` and `/users/:id`)
- Dockerized for easy deployment
- Automated CI/CD pipeline with GitHub Actions
- Versioned Docker images pushed to Docker Hub
- Jest + Supertest for automated testing(optional)

---

## Prerequisites

- [Node.js v18+](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm)
- [Docker](https://docs.docker.com/get-docker/)
- GitHub account with repository for CI/CD
- Docker Hub account

---

## Installation

Fork the repo or clone the repository:

```bash
git clone https://github.com/<your-username>/nodejs-demo-app.git
cd nodejs-demo-app/node_web_app
```

Install dependencies:
```bash
npm install
```
Running Locally
```bash
npm start
```
Tests are written with Jest + Supertest:
```bash
npm test
```
---


## Docker

Build Docker Image
```bash
docker build -t <your-dockerhub-registory>/node-web-app:v1.0 ./node_web_app
```
Run Docker Container
```bash
docker run -d -p 3000:3000 <your-dockerhub-registory>/node-web-app:v1.0
```
Visit: http://localhost:3000

Push to Docker Hub
```bash
echo "<your-password-or-token>" | docker login -u <your-docker-registory> --password-stdin
docker push <your-docker-registory>/node-web-app:v1.0
docker tag <your-docker-registory>/node-web-app:v1.0 <your-docker-registory>/node-web-app:latest
docker push <your-docker-registory>/node-web-app:latest
```
---
&nbsp;
# CI/CD Pipeline (GitHub Actions)

- Build and test on every commit to main
- Build and push Docker image only on version tags (v1.0.0)
- Automated testing ensures only working code is deployed

## Triggering a Release Create a version tag
```bash
git tag v1.0.0
git push origin v1.0.0
```
---
# GitHub Secrets

For CI/CD to push Docker images, add the following secrets in your repository settings:
<br><br>
Secret Name	Value
>  DOCKER_USERNAME	Your Docker Hub username<br>
>  DOCKER_PASSWORD	Your Docker Hub password/token

## Notes
...
Tests prevent broken builds from being deployed
