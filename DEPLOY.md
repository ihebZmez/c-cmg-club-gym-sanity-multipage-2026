# Deployment

Docker deployment and monitoring commands are maintained in [README_DOCKER.md](README_DOCKER.md).

Quick production start:

```bash
docker compose up --build --detach
```

The default site is available at <http://localhost:8080>. The container exposes a health endpoint at `/health` and automatically restarts unless stopped.
