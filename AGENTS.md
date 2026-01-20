# AGENTS.md — User Interface Plane (UIP)

This file defines NON-NEGOTIABLE rules for AI agents working in the
User Interface Plane (UIP) repository.

UIP contains all client-facing applications and shared frontend packages.
Violating these rules is a correctness failure, even if the UI appears to work.

---

## Repository Structure

```
apps/
├── web-app/ # Main application (React + Vite)
├── portal/ # Portal site (Next.js)
packages/
├── ui/ # Shared UI components
└── api-client/ # Generated API client
```

This structure is intentional and must be preserved.

---

## Responsibilities and Boundaries

UIP is responsible for:
- Rendering and user interaction
- Client-side state management
- Calling PCP HTTP APIs
- Consuming SSE streams from PCP

UIP MUST NOT:
- Contain business logic
- Implement backend workflows
- Call internal services directly
- Reinterpret or reorder streaming events

UIP treats PCP as its only backend dependency.

---

## Generated Code (Critical Rule)

The `packages/api-client` package is GENERATED code.

Rules:
- MUST NOT manually edit generated files
- MUST regenerate the client from platform-apis when contracts change
- MUST NOT add application logic to the generated client

If generated code appears incorrect, the fix belongs in platform-apis,
not in UIP.

---

## API Client Generation

The API client is generated using orval from OpenAPI definitions.

Agents MUST:
- Regenerate the client using the documented orval command
- Commit regenerated output as-is
- Avoid formatting or refactoring generated files

Agents MUST NOT:
- Hand-edit API client code
- Patch types or endpoints locally
- Fork client logic for convenience

---

## Package and App Boundaries

- apps/web-app and apps/portal consume shared packages
- Shared UI components live in packages/ui
- Application-specific logic lives in the app directories
- packages/ui MUST NOT depend on application-specific code
- packages/api-client MUST NOT depend on UI code

---

## Tooling Rules (Strict)

This repository uses pnpm and a pnpm workspace.
Agents MUST use pnpm correctly.

### Install and Run Commands
```sh
pnpm install
pnpm -r lint
pnpm -r test
pnpm -r build
```

Use workspace-aware commands when possible.

---

## Dependency Management (Critical Rule)

- MUST NOT manually edit package.json to add dependencies
- MUST add dependencies using pnpm commands

Required usage:
```sh
pnpm add <package> --filter <workspace>
pnpm add -D <package> --filter <workspace>
```

Rationale:
- Manual edits frequently introduce incorrect versions
- pnpm ensures consistent workspace dependency resolution

Manual dependency edits are considered a tooling violation.

---

## Coding Conventions

- Prefer explicit types over any
- Avoid implicit as casts
- Keep components small and focused
- Avoid business logic in UI components
- No hidden side effects in rendering
- Prefer composition over inheritance

---

## Streaming and Event Handling

- SSE event types and semantics are defined in platform-apis
- UIP MUST NOT reinterpret event meaning
- UIP MUST NOT reorder streamed events
- Error handling must preserve original event intent

UIP is a consumer of streamed events, not an authority.

---

## Agent Workflow (Required)

1. **PLAN FIRST**
   - Identify which app or package is affected
   - Identify whether generated code is involved
   - List commands required to regenerate or validate

2. **STOP AND ASK** before proceeding if:
   - a contract change is required
   - generated client output is unexpected
   - shared packages require structural changes
   - scope expands beyond the work order

3. **IMPLEMENT WITH MINIMAL DIFF**
   - Avoid unrelated refactors
   - Do not move code across packages without instruction
   - Do not touch generated files except via regeneration

4. **VERIFY**
   - Run lint, test, and build commands
   - Verify that workspace builds remain clean

---

## Mandatory Stop Conditions

Agents MUST STOP and report if:
- generated client code appears incorrect
- a dependency change affects multiple workspaces
- streaming semantics are unclear
- UI logic drifts into business logic

---

## Guiding Principle

> UIP exists to present data and interactions, not to decide behavior.
> Clarity and correctness matter more than visual polish.