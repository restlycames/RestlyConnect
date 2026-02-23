export default function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("profile-title", "RestlyConnect");
  res.setHeader("support-url", "https://t.me/restlyconnect");
  res.setHeader("profile-update-interval", "24");
  res.end('{"test": "ok"}');
}
