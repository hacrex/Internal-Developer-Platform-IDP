# HacRex Internal Developer Platform

A portfolio adaptation of the [Backstage Demo](https://github.com/backstage/demo), retained under the upstream Apache License 2.0. It demonstrates the building blocks of an Internal Developer Platform: catalog, documentation, templates, ownership, and integrations.

## What I use it to discuss

- How an IDP reduces repeated setup work without hiding operational responsibility.
- How a catalog establishes service ownership, lifecycle, documentation, and dependency visibility.
- How a software template can create a repository, CI pipeline, infrastructure request, alert link, and runbook reference.
- Why a production portal needs identity, secrets, database, backup, plugin governance, and an explicit support model.

## Local evaluation

```bash
yarn install --immutable
yarn dev
```

The runtime configuration still requires organisation-specific GitHub, OAuth, catalog, and secret settings. Do not commit these values. See [`docs/DEPLOYMENT_GUIDE.md`](docs/DEPLOYMENT_GUIDE.md) for the production adaptation checklist.

The historical upstream README is retained in [`docs/UPSTREAM_README.md`](docs/UPSTREAM_README.md).
