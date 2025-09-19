export const USER_AGENT = 'Site Bussola da Gestao';

const apiBaseUrl = 'https://api.bussoladagestao.com.br/v1';

export const API_URL = process.env.API_URL || apiBaseUrl;
export const API_CLIENT_ID = process.env.API_CLIENT_ID || 'bg.clientId';
export const API_CLIENT_SECRET =
  process.env.API_CLIENT_SECRET || 'bg.clientSecret';

export const REDIS_API_TOKEN_KEY =
  process.env.REDIS_API_TOKEN_KEY || 'bg.apiClientToken';
