import { rest } from 'msw';
import categories1 from '@tests/fixtures/categories.1.json';
import prompts1 from '@tests/fixtures/prompts.1.json';
import mock404response from '@tests/fixtures/mock404response.json';
import { categoryUrls, promptUrls } from '@global/apis/urls';

export const CATEGORIES = {
  ALL: {
    GET: rest.get(categoryUrls.getAll(), async (_, res, ctx) => {
      return res(ctx.json(categories1));
    }),
    GET_WITH_ERROR: rest.get(categoryUrls.getAll(), async (_, res, ctx) => {
      return res(ctx.json(mock404response));
    }),
  },
};
export const PROMPTS = {
  ALL: {
    GET: rest.get(promptUrls.getAll(), async (_, res, ctx) => {
      return res(ctx.json(prompts1));
    }),
    GET_WITH_ERROR: rest.get(promptUrls.getAll(), async (_, res, ctx) => {
      return res(ctx.json(mock404response));
    }),
  },
};

export const handlers = [CATEGORIES.ALL.GET, PROMPTS.ALL.GET];
