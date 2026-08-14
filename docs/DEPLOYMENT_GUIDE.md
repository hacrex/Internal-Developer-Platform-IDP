# Local and Production Deployment Guide

## Local Evaluation

```bash
yarn install --immutable
yarn dev
```

The demo requires the environment variables described in `app-config.yaml` for GitHub integration and OAuth features. Keep credentials in local environment files or a secret manager; never commit them.

## Production Adaptation Checklist

1. Replace upstream catalog locations, GitHub organisation settings, and support links with internal sources.
2. Configure authentication, a managed database, secrets, and a production base URL.
3. Add an organisation-specific software template that creates a repository, CI pipeline, ownership record, and deployment metadata.
4. Define on-call ownership, backup, upgrade, and plugin-review processes before operating the platform.
