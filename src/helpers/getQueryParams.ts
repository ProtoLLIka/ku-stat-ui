import type { QueryParams } from '@type/query-params';

export const getQueryParams = (): QueryParams => {
  const params = new URLSearchParams(window.location.search);

  return {
    id: params.get('id') || '',
  };
};
