# Service Runbook

## Health check

`GET /healthz` returns a JSON response when the process is available.

## First response to an incident

1. Confirm the deployment revision and recent configuration changes.
2. Check application logs for `service_started` and request errors.
3. Confirm the service endpoint and readiness path.
4. Roll back the deployment if customer impact continues and a low-risk fix is not available.

## Ownership

The generated Backstage catalog record is the source of ownership and system context. Update it when the owning team changes.
