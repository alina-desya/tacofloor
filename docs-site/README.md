# TacoFloor Docs

The documentation site for [TacoFloor](../README.md) — waiter and manager guides plus the Tacos API reference, built with [Astro Starlight](https://starlight.astro.build).

## Structure

```
docs-site/
├── astro.config.mjs        # Sidebar + starlight-openapi config
└── src/content/docs/
    ├── index.mdx           # Landing page
    └── guides/
        ├── waiter-guide.md
        └── manager-guide.md
```

The **API Reference** section is generated automatically from [`../taco-api-openapi.yaml`](../taco-api-openapi.yaml) via [`starlight-openapi`](https://starlight-openapi.vercel.app/) — it isn't a content file, it's built at compile time.

## Commands

Run from `docs-site/`:

| Command           | Action                                       |
| :----------------- | :-------------------------------------------- |
| `npm install`       | Install dependencies                          |
| `npm run dev`       | Start local dev server at `localhost:4321`    |
| `npm run build`     | Build the production site to `./dist/`        |
| `npm run preview`   | Preview the build locally                     |
