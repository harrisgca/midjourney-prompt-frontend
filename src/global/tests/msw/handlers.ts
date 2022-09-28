import { rest } from 'msw';
import categories from '@tests/fixtures/categories.1.json';

export const handlers = [
  rest.get('http://localhost:4000/api/v1/categories', async (_, res, ctx) => {
    return res(ctx.json(categories));
  }),
];
