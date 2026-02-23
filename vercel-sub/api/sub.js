module.exports = (req, res) => {
  const config = [
    {
      "burstObservatory": {
        "pingConfig": {
          "destination": "https://www.google.com/generate_204",
          "interval": "8s",
          "sampling": 2,
          "timeout": "3s"
        },
        "subjectSelector": ["ru1","ru2","ru3","ru4","ru5"]
      },
      "dns": {
        "queryStrategy": "UseIPv4",
        "servers": [
          "https+local://1.1.1.1/dns-query",
          "https+local://8.8.8.8/dns-query",
          "77.88.8.8"
        ]
      },
      "inbounds": [
        {
          "listen": "127.0.0.1",
          "port": 10808,
          "protocol": "socks",
          "settings": { "udp": true },
          "tag": "socks"
        },
        {
          "listen": "127.0.0.1",
          "port": 10809,
          "protocol": "http",
          "tag": "http"
        }
      ],
      "meta": null,
      "outbounds": [
        {
          "protocol": "vless",
          "settings": {
            "vnext": [{
              "address": "51.250.86.102",
              "port": 443,
              "users": [{
                "encryption": "none",
                "flow": "xtls-rprx-vision",
                "id": "53b2c46d-bc0a-4696-9d87-6bfa77a60d1f"
              }]
            }]
          },
          "streamSettings": {
            "network": "tcp",
            "realitySettings": {
              "fingerprint": "chrome",
              "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
              "serverName": "api-maps.yandex.ru",
              "shortId": "33554379411b3219"
            },
            "security": "reality"
          },
          "tag": "ru1"
        },
        { "protocol": "freedom", "tag": "direct" },
        { "protocol": "blackhole", "tag": "block" }
      ],
      "remarks": "Config 1",
      "routing": {
        "balancers": [{
          "fallbackTag": "ru1",
          "selector": ["ru1","ru2","ru3","ru4","ru5"],
          "strategy": {
            "settings": {
              "baselines": ["2s"],
              "expected": 1,
              "maxRTT": "3s",
              "tolerance": 0.3
            },
            "type": "leastLoad"
          },
          "tag": "auto_ru"
        }],
        "domainStrategy": "IPIfNonMatch",
        "rules": [
          {
            "outboundTag": "block",
            "protocol": ["bittorrent"],
            "type": "field"
          },
          {
            "balancerTag": "auto_ru",
            "inboundTag": ["socks","http"],
            "network": "tcp,udp",
            "type": "field"
          }
        ]
      }
    }
  ];

  const titleB64 = Buffer.from("RestlyConnect").toString("base64");
  const announceB64 = Buffer.from("UPD: 22.02.2026 22:15 | tgk @restlyconnect").toString("base64");

  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("profile-title", titleB64);
  res.setHeader("support-url", "https://t.me/restlyconnect");
  res.setHeader("profile-update-interval", "24");
  res.setHeader("announce", announceB64);
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.end(JSON.stringify(config));
};
