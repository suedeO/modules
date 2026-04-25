(() => {
  const now = new Date().toISOString();
  const headers = $response.headers || {};
  const contentType = headers['Content-Type'] || headers['content-type'] || '';
  const bodyPreview = typeof $response.body === 'string'
    ? $response.body.slice(0, 12000)
    : ($response.bodyBytes ? `[binary ${( $response.bodyBytes.byteLength || $response.bodyBytes.length || 0 )} bytes]` : '');
  const payload = {
    tag: 'Apple Maps response',
    time: now,
    url: $request.url,
    status: $response.status || $response.statusCode,
    contentType,
    headers,
    bodyPreview
  };
  console.log(JSON.stringify(payload, null, 2));
  $done({});
})();
