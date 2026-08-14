# Golden-Path Template Validation

The `service-with-observability` template is intentionally small. It creates a service skeleton with catalog metadata, a health endpoint, structured startup logging, a container definition, a CI test workflow, and a first-response runbook.

## Dry-run checklist

1. Start the portal locally with `yarn start`.
2. Navigate to **Create** and select **Service with Observability**.
3. Use a disposable GitHub destination and a valid Backstage Group owner.
4. Confirm the rendered repository contains `catalog-info.yaml`, `docs/runbook.md`, the CI workflow, `Dockerfile`, and `src/server.js`.
5. If the template fails, use the task record to identify the failing action and rerun only after correcting the parameter or integration configuration.

## Boundary

Publishing needs GitHub credentials and catalog registration permissions. This repository provides the template and validation process; it does not embed credentials or claim that generated services are automatically production-ready.
