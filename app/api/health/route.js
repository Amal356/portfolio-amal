// Endpoint de santé utilisé par le HEALTHCHECK Docker et par le pipeline
export const dynamic = 'force-dynamic';

export function GET() {
  return Response.json({
    status: 'ok',
    version: process.env.APP_VERSION || 'dev',
    time: new Date().toISOString(),
  });
}
