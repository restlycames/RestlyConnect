module.exports = (req, res) => {
  const config = [
  {
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
        "settings": {
          "udp": true
        },
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
        "tag": "s1",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "87.239.108.204",
              "port": 2443,
              "users": [
                {
                  "id": "18521157-83f3-4a21-8ebb-88454d1ed5b2",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "43MxR6rbzZrI-XTL-B_lPwbl4-Mr5v0mumP5wleUYjs",
            "shortId": "2f7cbec60e",
            "spiderX": "",
            "serverName": "www.ads.x5.ru",
            "fingerprint": "chrome",
            "show": false
          }
        }
      },
      {
        "tag": "s2",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "84.201.160.103",
              "port": 8081,
              "users": [
                {
                  "id": "e466a81b-72ca-40fd-8789-078a76d4a337",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "QHkXBS2ENHV0khgY9VBYi8_9bpfqnUYDcfQN4cW5Qg0",
            "shortId": "4326",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "edge",
            "show": false
          }
        }
      },
      {
        "protocol": "freedom",
        "tag": "direct"
      },
      {
        "protocol": "blackhole",
        "tag": "block"
      }
    ],
    "remarks": "🇷🇺#1 LTE | @restlyconnect",
    "burstObservatory": {
      "pingConfig": {
        "destination": "https://www.google.com/generate_204",
        "interval": "8s",
        "sampling": 2,
        "timeout": "3s"
      },
      "subjectSelector": [
        "s1",
        "s2"
      ]
    },
    "routing": {
      "balancers": [
        {
          "fallbackTag": "s1",
          "selector": [
            "s1",
            "s2"
          ],
          "strategy": {
            "settings": {
              "baselines": [
                "2s"
              ],
              "expected": 1,
              "maxRTT": "3s",
              "tolerance": 0.3
            },
            "type": "leastLoad"
          },
          "tag": "auto_bal"
        }
      ],
      "domainStrategy": "IPIfNonMatch",
      "rules": [
        {
          "outboundTag": "block",
          "protocol": [
            "bittorrent"
          ],
          "type": "field"
        },
        {
          "balancerTag": "auto_bal",
          "inboundTag": [
            "socks",
            "http"
          ],
          "network": "tcp,udp",
          "type": "field"
        }
      ]
    }
  }
];

  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("profile-title", "RestlyConnect");
  res.setHeader("support-url", "https://t.me/restlyconnect");
  res.setHeader("profile-update-interval", "24");
  res.setHeader("announce", "UPD: 15.03.2026 21:14 | tgk: @restlyconnect");
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.end(JSON.stringify(config));
};
