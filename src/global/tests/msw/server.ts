import { setupServer } from 'msw/node';
import { handlers } from './handlers';

export const server = setupServer(...handlers);

export const mswJestSetup = () => {
  beforeAll(() =>
    server.listen({
      onUnhandledRequest(req) {
        console.error('Found an unhandled %s request to %s', req.method, req.url.href);
      },
    }),
  );
  afterEach(() => {
    server.resetHandlers();
    jest.clearAllMocks();
  });
  afterAll(() => server.close());
  return server;
};
