# Project Status

## Portfolio Scope

A portfolio adaptation of the Backstage demo that illustrates an Internal Developer Platform: a software catalog, templates, documentation, and integrations that can support platform-engineering golden paths.

## Intended Deployment Path

Run locally with Yarn for evaluation. Production use requires organisation-specific identity, catalog, secrets, database, and Git provider configuration.

## Safety and Validation

This repository contains **non-production reference configuration** unless its deployment guide explicitly states otherwise. Review every Terraform plan and Kubernetes manifest in an isolated account, project, subscription, compartment, or cluster before use. Do not commit credentials, cloud access keys, API tokens, or live state files.

## What to Discuss in an Interview

Explain the architecture, the operational trade-offs, how you would validate a change, how you would roll it back, and the parts that require organisation-specific configuration.
