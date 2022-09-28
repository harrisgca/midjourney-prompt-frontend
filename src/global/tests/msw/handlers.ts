import { rest } from 'msw';
import categories from '@tests/fixtures/categories.1.json';
import mock404response from '@tests/fixtures/mock404response.json';

export const CATEGORIES = {
  ALL: {
    GET: rest.get('http://localhost:4000/api/v1/categories', async (_, res, ctx) => {
      return res(ctx.json(categories));
    }),
    GET_WITH_ERROR: rest.get('http://localhost:4000/api/v1/categories', async (_, res, ctx) => {
      return res(ctx.json(mock404response));
    }),
  },
};

export const handlers = [CATEGORIES.ALL.GET];
