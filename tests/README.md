# QA Lab — Proyecto base (Playwright + Cucumber + Screenplay)

Proyecto mínimo para arrancar el laboratorio: **un solo escenario** que comprueba que Juice Shop
está en pie. Sirve de base para el pipeline de integración continua.

## Qué incluye

- **Un escenario** de healthcheck: abre la aplicación y verifica que cargó.
- **Playwright + Cucumber + Screenplay** con TypeScript, sin paso de compilación (`tsx`).
- **Informe HTML** en `reports/cucumber-report.html`.
- **Sin credenciales**: el healthcheck no inicia sesión, así que no depende de cuentas ni de datos.

## Requisitos

- Node.js 22 o superior.
- Chromium de Playwright:

```sh
npx playwright install chromium
```

## Cómo se ejecuta

```sh
npm ci
npx playwright install chromium
npm test
```

Para ver el navegador:

```sh
npm run test:headed
```

## La URL se configura, no se escribe

La dirección de la aplicación sale de una variable de entorno:

```text
BASE_URL = https://demo.owasp-juice.shop    ← por defecto
BASE_URL = http://localhost:3000            ← lo inyecta el pipeline
```

Ningún test tiene la URL escrita dentro. Cambiar de entorno es cambiar una variable.

## Estructura

```text
features/healthcheck.feature       # el escenario
step-definitions/healthcheck.steps.ts
juice/task/open_the_app.ts         # tarea: abrir la aplicación
juice/ui/home_page.ts              # página: comprobar que montó

screenplay/                        # el patrón (actor, stage, task)
test.setup.ts                      # hooks y baseURL
cucumber.js                        # configuración de Cucumber
```

## Screenplay, en una línea

El escenario describe **qué** se hace; el actor ejecuta tareas; las tareas usan páginas de UI.
El feature no conoce selectores. Con un solo escenario el patrón parece mucho aparato — se conserva
porque es la estructura sobre la que se añaden los flujos siguientes.

## Licencia

[MIT](LICENSE) © Cesar Daniel
