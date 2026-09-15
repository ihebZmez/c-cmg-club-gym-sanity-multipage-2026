# Docker Operations Guide

This project is a Vite/React single-page application. The production image builds the app with Node and serves only the generated static files from Nginx. No Node process runs in production.

## Requirements

- Docker Engine 24+ with Docker Compose v2 (`docker compose version`)
- At least 256 MB available memory for a production build and container
- Ports `8080` (production) or `5173` (development) available

## Production

The production Compose file limits the web container to `128 MB` RAM and `0.50` CPU. Change the host port without changing the container:

```bash
APP_PORT=8088 docker compose up --build --detach
```

On PowerShell:

```powershell
$env:APP_PORT = "8088"
docker compose up --build --detach
```

The default URL is <http://localhost:8080>. The deployment helper builds, starts, and waits for a healthy container:

```bash
sh ./scripts/deploy.sh
```

Useful production commands:

```bash
docker compose ps
docker compose logs --follow --tail=100 web
docker compose restart web
docker compose pull
docker compose down
docker compose down --remove-orphans
docker image ls t-gym-multipage
```

Run an external health check from Linux/macOS/WSL or PowerShell:

```bash
sh ./scripts/healthcheck.sh
sh ./scripts/healthcheck.sh http://localhost:8080/health
```

```powershell
.\scripts\healthcheck.ps1
.\scripts\healthcheck.ps1 -Url http://localhost:8080/health
```

The health endpoint returns `200 OK` and `ok` at `/health`. It is used both by Docker and the helper scripts. A non-zero script exit code means the service should be treated as unavailable by CI or monitoring.

## Development With Hot Reload

The development override mounts the source tree and limits the Vite container to `512 MB` RAM and `1.00` CPU:

```bash
docker compose -f compose.dev.yaml up --build
```

Open <http://localhost:5173>. Stop it with:

```bash
docker compose -f compose.dev.yaml down
docker compose -f compose.dev.yaml down --volumes
```

## Configuration

| Variable | Default | Purpose |
| --- | --- | --- |
| `APP_PORT` | `8080` | Host port for production |
| `DEV_PORT` | `5173` | Host port for development |
| `ATTEMPTS` | `5` | Shell health-check attempts |
| `DELAY` | `2` | Seconds between shell attempts |

The container limits are intentionally conservative for a small VPS. Raise `mem_limit` or `cpus` in `compose.yaml` only when the host workload and traffic require it.

## Troubleshooting

Check the rendered Compose configuration:

```bash
docker compose config
```

Inspect the container and its health state:

```bash
docker compose ps
docker inspect --format '{{json .State.Health}}' "$(docker compose ps -q web)"
```

If a browser route returns 404, confirm that requests reach Nginx on the published port and that `docker/nginx.conf` is mounted by rebuilding the image:

```bash
docker compose build --no-cache
docker compose up --detach
```

For a clean local rebuild, remove only this project's container and image:

```bash
docker compose down --rmi local --volumes
```