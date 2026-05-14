# Despliegue en Cloudflare Pages (Free)

Esta guia deja el proyecto listo para publicar en Cloudflare Pages en modo estatico.

## Estado actual del proyecto

- Framework: Astro 6
- Salida: estatica (no se detecto SSR ni API routes)
- Comando de build: `npm run build`
- Directorio de salida: `dist`

Con esta arquitectura no necesitas `@astrojs/cloudflare` para Pages.
Ese adapter solo es necesario si luego activas SSR/Functions.

## Integracion agregada en este repo

Se agregaron scripts en `package.json`:

- `npm run cf:pages:create`
- `npm run cf:pages:deploy`
- `npm run cf:pages:deploy:preview`

## Opcion A (Recomendada): Git Integration en Cloudflare Pages

Usa esta opcion si quieres CI/CD automatico en cada push.

1. Sube el proyecto a GitHub o GitLab.
2. En Cloudflare Dashboard entra a `Workers & Pages`.
3. Clic en `Create application` > `Pages` > `Connect to Git`.
4. Selecciona tu repositorio.
5. En configuracion de build usa:
   - Production branch: `main`
   - Build command: `npm run build`
   - Build directory: `dist`
6. En Variables de entorno (build), agrega:
   - `NODE_VERSION=22`
7. Clic en `Save and Deploy`.

Notas:
- Pages hara redeploy automatico en cada commit.
- Tendras URLs de preview para ramas/PR.

## Opcion B: Direct Upload con Wrangler (CLI)

Usa esta opcion si quieres desplegar manualmente desde local.

### 1) Login en Cloudflare

```bash
npx wrangler login
```

### 2) Crear el proyecto de Pages (una sola vez)

```bash
npm run cf:pages:create
```

Te pedira:
- Nombre del proyecto (`<tu-proyecto>.pages.dev`)
- Rama de produccion (`main` normalmente)

### 3) Desplegar a produccion

```bash
npm run cf:pages:deploy
```

### 4) Desplegar preview manual

```bash
npm run cf:pages:deploy:preview
```

## Verificaciones recomendadas antes de publicar

```bash
npm ci
npm run build
```

## Troubleshooting rapido

- Si falla instalacion por Node: confirma `NODE_VERSION=22` en Pages.
- Si hay problemas de rutas: revisa redirects de Astro en `astro.config.mjs`.
- Si mas adelante agregas SSR/API routes: instala adapter cloudflare con:

```bash
npx astro add cloudflare
```

Y migra flujo a Pages Functions/Workers segun docs oficiales.

## Referencias oficiales (actualizadas)

- Cloudflare Astro guide (Pages):
  https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/
- Pages Git integration:
  https://developers.cloudflare.com/pages/get-started/git-integration/
- Pages Direct Upload:
  https://developers.cloudflare.com/pages/get-started/direct-upload/
- Astro deploy to Cloudflare:
  https://docs.astro.build/en/guides/deploy/cloudflare/
