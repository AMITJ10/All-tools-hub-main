const CANONICAL_HOST = "calculatorapps.net";
const REDIRECTABLE_HOSTS = new Set([
  CANONICAL_HOST,
  `www.${CANONICAL_HOST}`,
]);

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const hostname = url.hostname.toLowerCase();
  const shouldForceCanonicalHost =
    REDIRECTABLE_HOSTS.has(hostname) || hostname.endsWith(".pages.dev");
  const shouldForceHttps = url.protocol === "http:";

  if (shouldForceHttps || hostname !== CANONICAL_HOST) {
    if (shouldForceCanonicalHost) {
      url.protocol = "https:";
      url.hostname = CANONICAL_HOST;
      return Response.redirect(url.toString(), 301);
    }
  }

  return context.next();
}
