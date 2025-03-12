import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import bootstrap from './src/main.server';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get(
    '*.*',
    express.static(browserDistFolder, {
      maxAge: '1y',
    })
  );

  // Middleware para manejar rutas desconocidas antes de pasar a Angular
  server.use((req, res, next) => {
    const { originalUrl } = req;

    // Si la URL no existe en el frontend, forzamos la página de Not Found
    if (!matchAngularRoute(originalUrl)) {
      req.url = '/not-found'; // Sobreescribe la URL antes de procesarla
    }

    next();
  });

  // Función para verificar si la ruta existe en el enrutador de Angular
  function matchAngularRoute(requestPath: string): boolean {
    const angularRoutes = [
      '/',
      '/training',
      '/training/module/:secCourseId',
      '/training/e-learning/:courseId',
      '/training/e-learning/:courseId/module/:moduleId',
      '/profile/:id',
      '/admin-panel',
      '/community',
      '/in-progress',
      '/not-found',
    ];

    return angularRoutes.some((route) => {
      const normalizedRoute = route.replace(/:\w+/g, '[^/]+'); // Convierte parámetros dinámicos en regex
      return new RegExp(`^${normalizedRoute}$`).test(requestPath);
    });
  }

  // All regular routes use the Angular engine
  server.get('*', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
