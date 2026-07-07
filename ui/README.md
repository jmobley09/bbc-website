# Bible Baptist Church UI

Static Next.js frontend for the BBC website.

## Commands

```bash
npm install
npm run dev
npm run typecheck
npm run build
```

`npm run build` exports the static site to `out/`, which is the folder Azure Static Web Apps can deploy for the UI.

## Pages

- `/`
- `/about`
- `/services`
- `/calendar`
- `/contact`

Future API work can live outside this folder, for example at a root-level `api/` folder for Azure Static Web Apps managed functions.
