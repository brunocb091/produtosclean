
export function isBot() {
  if (typeof navigator === 'undefined') return true
  const ua = navigator.userAgent.toLowerCase()
  const bots = [
    'googlebot', 'bingbot', 'facebookexternalhit', 'twitterbot', 'slackbot',
    'duckduckbot', 'baiduspider', 'yandexbot', 'semrushbot', 'ahrefsbot', 'mj12bot',
    'crawler', 'spider', 'bot', 'headless', 'uptime', 'monitor'
  ]
  return bots.some(bot => ua.includes(bot))
}
