(() => {
  const now = new Date().toISOString();
  const body = typeof $request.body === 'string'
    ? $request.body.slice(0, 4096)
    : ($request.bodyBytes ? `[binary ${( $request.bodyBytes.byteLength || $request.bodyBytes.length || 0 )} bytes]` : '');
  const payload = {
    tag: 'Apple Maps request',
    time: now,
    method: $request.method,
    url: $request.url,
    headers: $request.headers || {},
    bodyPreview: body
  };
  console.log(JSON.stringify(payload, null, 2));
  $done({});
})();
