import axios, { isAxiosError } from 'axios';
import { NextRequest, NextResponse } from 'next/server';

import { API_URL } from '@/config/app';
import { getApiClientAccessToken } from '@/lib/api/accessToken';
import { HttpStatus } from '@/lib/consts';

async function handleRequest(req: NextRequest) {
  const accessToken = await getApiClientAccessToken();

  const url = new URL(API_URL + req.nextUrl.pathname.replace('/api', ''));
  url.search = req.nextUrl.search;

  const axiosHeaders = {
    Authorization: `Bearer ${accessToken}`,
    Accept: 'application/json',
    'Content-Type': req.headers.get('Content-Type') || 'application/json',
  };

  let requestBody: unknown;

  if (['POST', 'PUT', 'PATCH'].includes(req.method)) {
    const contentType = req.headers.get('Content-Type') || '';

    if (contentType.includes('application/json')) {
      requestBody = await req.json();
    } else {
      requestBody = await req.formData();
    }
  }

  try {
    const response = await axios({
      url: url.toString(),
      method: req.method,
      data: requestBody,
      headers: axiosHeaders,
    });

    if (response.status === HttpStatus.NO_CONTENT) {
      return new Response(null, { status: HttpStatus.NO_CONTENT });
    }

    return NextResponse.json(response.data, { status: response.status });
  } catch (err) {
    if (isAxiosError(err)) {
      const response = err.response;
      const json = await response?.data;

      if (response && json) {
        return NextResponse.json(json, { status: response?.status });
      }
    }

    console.log(err);

    return NextResponse.json({ message: 'Server Error' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  return handleRequest(req);
}

export async function POST(req: NextRequest) {
  return handleRequest(req);
}

export async function PUT(req: NextRequest) {
  return handleRequest(req);
}

export async function PATCH(req: NextRequest) {
  return handleRequest(req);
}

export async function DELETE(req: NextRequest) {
  return handleRequest(req);
}
