# The Jutas Project

A monorepo for the Jutas comic and web app, built with Bun, TypeScript, and Svelte.

## Project Structure

- **index.ts**: Main entry point for bundling and orchestration.
- **apps/**: Contains subprojects:
  - **bundler/**: Handles code bundling and related logic.
  - **web/**: Svelte-based web application, with tests and build scripts.
- **comics/**: Data, images, instructions, and output for comic projects.
- **library/**: Shared types and schemas for use across apps.

## Getting Started

### Install dependencies

```bash
bun install
```

### Run the main bundler

```bash
bun run bundle
```

### Build the web app

```bash
bun run build:web
```

### Run tests

- Bundler tests:
  ```bash
  bun run test:bundler
  ```
- Web app tests:
  ```bash
  bun run test:web
  ```
- All tests:
  ```bash
  bun run test
  ```

## Scripts

- `bundle`: Runs the main bundler (index.ts)
- `build:web`: Builds the web app
- `test:bundler`: Runs bundler tests
- `test:web`: Runs web app tests
- `test`: Runs all tests
- `prepare`: Sets up git hooks with Husky

## Technologies
- Bun (JavaScript runtime)
- TypeScript
- Svelte (web app)
- Husky (git hooks)
- Zod (validation)

## Workspaces
This repo uses Bun workspaces for modular development:
- `apps/*`
- `library/*`

## License
See individual app folders for license details.

---