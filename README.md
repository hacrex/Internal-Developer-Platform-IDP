# Internal Developer Platform

A Backstage-based developer portal with a local service template. The repository started from the [Backstage Demo](https://github.com/backstage/demo) and retains the upstream Apache 2.0 license and source attribution.

The template in `templates/service-with-observability/` creates a small Node.js service with a catalog record, health endpoint, Dockerfile, test workflow, and runbook. It is a practical starting point for a team that wants one consistent service setup without turning the portal into a collection of plugins.

## Run locally

```bash
yarn install
yarn start
```

Open **Create** and select **Service with Observability**. Use a disposable GitHub destination for the first run. Publishing and catalog registration require GitHub credentials and the matching Backstage integration settings.

## Configuration

`app-config.production.example.yaml` contains a minimal production-shaped configuration with external database, GitHub auth, and secret placeholders. It is an example only; keep real tokens and connection strings outside Git.

For a dry-run checklist, see `docs/GOLDEN_PATH_VALIDATION.md`.
