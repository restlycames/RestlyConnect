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
              "address": "51.250.86.102",
              "port": 443,
              "users": [
                {
                  "id": "53b2c46d-bc0a-4696-9d87-6bfa77a60d1f",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "33554379411b3219",
            "spiderX": "",
            "serverName": "api-maps.yandex.ru",
            "fingerprint": "qq",
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
              "address": "51.250.86.102",
              "port": 443,
              "users": [
                {
                  "id": "b4f272ea-cd4f-4df9-9929-1c6b49c0b6ac",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "17f0f0e38f01af5a",
            "spiderX": "",
            "serverName": "api-maps.yandex.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s3",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.0.147",
              "port": 443,
              "users": [
                {
                  "id": "b4f272ea-cd4f-4df9-9929-1c6b49c0b6ac",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "65ce6cee3941af69",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s4",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.86.102",
              "port": 443,
              "users": [
                {
                  "id": "53b2c46d-bc0a-4696-9d87-6bfa77a60d1f",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "17802e8ff84f12df",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s5",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.0.147",
              "port": 443,
              "users": [
                {
                  "id": "53b2c46d-bc0a-4696-9d87-6bfa77a60d1f",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "2476f063981ffd92",
            "spiderX": "",
            "serverName": "api-maps.yandex.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s6",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.0.147",
              "port": 443,
              "users": [
                {
                  "id": "b4f272ea-cd4f-4df9-9929-1c6b49c0b6ac",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "17f0f0e38f01af5a",
            "spiderX": "",
            "serverName": "api-maps.yandex.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s7",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "5.188.115.178",
              "port": 443,
              "users": [
                {
                  "id": "b4f272ea-cd4f-4df9-9929-1c6b49c0b6ac",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "7426b0c03ef009dc",
            "spiderX": "",
            "serverName": "rutube.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s8",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.0.147",
              "port": 443,
              "users": [
                {
                  "id": "b4f272ea-cd4f-4df9-9929-1c6b49c0b6ac",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "7426b0c03ef009dc",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s9",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.0.147",
              "port": 443,
              "users": [
                {
                  "id": "53b2c46d-bc0a-4696-9d87-6bfa77a60d1f",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "4b523a98e1bbd15b",
            "spiderX": "",
            "serverName": "api-maps.yandex.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s10",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.65.209",
              "port": 443,
              "users": [
                {
                  "id": "53b2c46d-bc0a-4696-9d87-6bfa77a60d1f",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "43df3983229a1c73",
            "spiderX": "",
            "serverName": "api-maps.yandex.ru",
            "fingerprint": "qq",
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
    "remarks": "🇸🇪 LTE #1 | @restlyconnect",
    "burstObservatory": {
      "pingConfig": {
        "destination": "https://www.google.com/generate_204",
        "interval": "8s",
        "sampling": 2,
        "timeout": "3s"
      },
      "subjectSelector": [
        "s1",
        "s2",
        "s3",
        "s4",
        "s5",
        "s6",
        "s7",
        "s8",
        "s9",
        "s10"
      ]
    },
    "routing": {
      "balancers": [
        {
          "fallbackTag": "s1",
          "selector": [
            "s1",
            "s2",
            "s3",
            "s4",
            "s5",
            "s6",
            "s7",
            "s8",
            "s9",
            "s10"
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
  },
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
              "address": "51.250.86.102",
              "port": 443,
              "users": [
                {
                  "id": "53b2c46d-bc0a-4696-9d87-6bfa77a60d1f",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "048fe5c8be4bb687",
            "spiderX": "",
            "serverName": "api-maps.yandex.ru",
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
              "address": "37.139.34.145",
              "port": 443,
              "users": [
                {
                  "id": "aa33c2f4-46bc-4818-bf50-723a1e8d33d0",
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
            "publicKey": "zr8_rtHm86s_G1gfRwNtunStGngYZSdYkA3PyBFXpDg",
            "shortId": "04bf0403f96e5b4b",
            "spiderX": "",
            "serverName": "m.vk.ru",
            "fingerprint": "chrome",
            "show": false
          }
        }
      },
      {
        "tag": "s3",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.65.209",
              "port": 443,
              "users": [
                {
                  "id": "53b2c46d-bc0a-4696-9d87-6bfa77a60d1f",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "f85b0cdd7d20c84c",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s4",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.86.102",
              "port": 443,
              "users": [
                {
                  "id": "b4f272ea-cd4f-4df9-9929-1c6b49c0b6ac",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "3f200574d011010f",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s5",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.86.102",
              "port": 443,
              "users": [
                {
                  "id": "b4f272ea-cd4f-4df9-9929-1c6b49c0b6ac",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "d17bd238f23fba92",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s6",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.86.102",
              "port": 443,
              "users": [
                {
                  "id": "b4f272ea-cd4f-4df9-9929-1c6b49c0b6ac",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "c8597fb67d55d9c4",
            "spiderX": "",
            "serverName": "api-maps.yandex.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s7",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.0.147",
              "port": 443,
              "users": [
                {
                  "id": "53b2c46d-bc0a-4696-9d87-6bfa77a60d1f",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "65ce6cee3941af69",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s8",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.87.167",
              "port": 443,
              "users": [
                {
                  "id": "53b2c46d-bc0a-4696-9d87-6bfa77a60d1f",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "a76ea384b29a4f79",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s9",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.0.147",
              "port": 443,
              "users": [
                {
                  "id": "53b2c46d-bc0a-4696-9d87-6bfa77a60d1f",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "33554379411b3219",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s10",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.86.102",
              "port": 443,
              "users": [
                {
                  "id": "b4f272ea-cd4f-4df9-9929-1c6b49c0b6ac",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "2476f063981ffd92",
            "spiderX": "",
            "serverName": "api-maps.yandex.ru",
            "fingerprint": "qq",
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
    "remarks": "🇸🇪 LTE #2 | @restlyconnect",
    "burstObservatory": {
      "pingConfig": {
        "destination": "https://www.google.com/generate_204",
        "interval": "8s",
        "sampling": 2,
        "timeout": "3s"
      },
      "subjectSelector": [
        "s1",
        "s2",
        "s3",
        "s4",
        "s5",
        "s6",
        "s7",
        "s8",
        "s9",
        "s10"
      ]
    },
    "routing": {
      "balancers": [
        {
          "fallbackTag": "s1",
          "selector": [
            "s1",
            "s2",
            "s3",
            "s4",
            "s5",
            "s6",
            "s7",
            "s8",
            "s9",
            "s10"
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
  },
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
              "address": "51.250.65.209",
              "port": 443,
              "users": [
                {
                  "id": "eb071647-72a6-46be-8e89-ff3d228d52f6",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "2476f063981ffd92",
            "spiderX": "",
            "serverName": "api-maps.yandex.ru",
            "fingerprint": "qq",
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
              "address": "79.137.175.44",
              "port": 8443,
              "users": [
                {
                  "id": "aa33c2f4-46bc-4818-bf50-723a1e8d33d0",
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
            "publicKey": "zr8_rtHm86s_G1gfRwNtunStGngYZSdYkA3PyBFXpDg",
            "shortId": "28047c78b3f5ee2c",
            "spiderX": "",
            "serverName": "m.vk.ru",
            "fingerprint": "random",
            "show": false
          }
        }
      },
      {
        "tag": "s3",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.83.255",
              "port": 443,
              "users": [
                {
                  "id": "b4f272ea-cd4f-4df9-9929-1c6b49c0b6ac",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "87cc0414902bee2d",
            "spiderX": "",
            "serverName": "api-maps.yandex.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s4",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.0.147",
              "port": 443,
              "users": [
                {
                  "id": "53b2c46d-bc0a-4696-9d87-6bfa77a60d1f",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "95ec618532fa065e",
            "spiderX": "",
            "serverName": "api-maps.yandex.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s5",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.0.147",
              "port": 443,
              "users": [
                {
                  "id": "b4f272ea-cd4f-4df9-9929-1c6b49c0b6ac",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "048fe5c8be4bb687",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s6",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "5.188.115.178",
              "port": 443,
              "users": [
                {
                  "id": "b4f272ea-cd4f-4df9-9929-1c6b49c0b6ac",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "f85b0cdd7d20c84c",
            "spiderX": "",
            "serverName": "rutube.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s7",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "37.139.34.145",
              "port": 443,
              "users": [
                {
                  "id": "aa33c2f4-46bc-4818-bf50-723a1e8d33d0",
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
            "publicKey": "zr8_rtHm86s_G1gfRwNtunStGngYZSdYkA3PyBFXpDg",
            "shortId": "28047c78b3f5ee2c",
            "spiderX": "",
            "serverName": "m.vk.ru",
            "fingerprint": "chrome",
            "show": false
          }
        }
      },
      {
        "tag": "s8",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "37.139.34.145",
              "port": 8443,
              "users": [
                {
                  "id": "aa33c2f4-46bc-4818-bf50-723a1e8d33d0",
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
            "publicKey": "zr8_rtHm86s_G1gfRwNtunStGngYZSdYkA3PyBFXpDg",
            "shortId": "28047c78b3f5ee2c",
            "spiderX": "",
            "serverName": "m.vk.ru",
            "fingerprint": "random",
            "show": false
          }
        }
      },
      {
        "tag": "s9",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.83.255",
              "port": 443,
              "users": [
                {
                  "id": "b4f272ea-cd4f-4df9-9929-1c6b49c0b6ac",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "43df3983229a1c73",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s10",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.65.209",
              "port": 443,
              "users": [
                {
                  "id": "b4f272ea-cd4f-4df9-9929-1c6b49c0b6ac",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "a76ea384b29a4f79",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "qq",
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
    "remarks": "🇸🇪 LTE #3 | @restlyconnect",
    "burstObservatory": {
      "pingConfig": {
        "destination": "https://www.google.com/generate_204",
        "interval": "8s",
        "sampling": 2,
        "timeout": "3s"
      },
      "subjectSelector": [
        "s1",
        "s2",
        "s3",
        "s4",
        "s5",
        "s6",
        "s7",
        "s8",
        "s9",
        "s10"
      ]
    },
    "routing": {
      "balancers": [
        {
          "fallbackTag": "s1",
          "selector": [
            "s1",
            "s2",
            "s3",
            "s4",
            "s5",
            "s6",
            "s7",
            "s8",
            "s9",
            "s10"
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
  },
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
              "address": "51.250.0.147",
              "port": 443,
              "users": [
                {
                  "id": "eb071647-72a6-46be-8e89-ff3d228d52f6",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "6354585c37827955",
            "spiderX": "",
            "serverName": "ads.x5.ru",
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
              "address": "51.250.83.255",
              "port": 443,
              "users": [
                {
                  "id": "53b2c46d-bc0a-4696-9d87-6bfa77a60d1f",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "6354585c37827955",
            "spiderX": "",
            "serverName": "api-maps.yandex.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s3",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.83.255",
              "port": 443,
              "users": [
                {
                  "id": "53b2c46d-bc0a-4696-9d87-6bfa77a60d1f",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "33554379411b3219",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s4",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.65.209",
              "port": 443,
              "users": [
                {
                  "id": "b4f272ea-cd4f-4df9-9929-1c6b49c0b6ac",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "7426b0c03ef009dc",
            "spiderX": "",
            "serverName": "api-maps.yandex.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s5",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.65.209",
              "port": 443,
              "users": [
                {
                  "id": "b4f272ea-cd4f-4df9-9929-1c6b49c0b6ac",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "f85b0cdd7d20c84c",
            "spiderX": "",
            "serverName": "api-maps.yandex.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s6",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "37.139.33.15",
              "port": 8443,
              "users": [
                {
                  "id": "7825f2d1-cdc2-4186-9ad5-377afa912104",
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
            "publicKey": "7zd9mJilgjOrg_ohtw23Vmio-pdnYqeP_r-kiWt87Cg",
            "shortId": "2715592069f36fe7",
            "spiderX": "",
            "serverName": "m.vk.ru",
            "fingerprint": "random",
            "show": false
          }
        }
      },
      {
        "tag": "s7",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.83.255",
              "port": 443,
              "users": [
                {
                  "id": "b4f272ea-cd4f-4df9-9929-1c6b49c0b6ac",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "d17bd238f23fba92",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s8",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.83.255",
              "port": 443,
              "users": [
                {
                  "id": "53b2c46d-bc0a-4696-9d87-6bfa77a60d1f",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "2476f063981ffd92",
            "spiderX": "",
            "serverName": "api-maps.yandex.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s9",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.83.255",
              "port": 443,
              "users": [
                {
                  "id": "b4f272ea-cd4f-4df9-9929-1c6b49c0b6ac",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "3f200574d011010f",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s10",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.0.147",
              "port": 443,
              "users": [
                {
                  "id": "53b2c46d-bc0a-4696-9d87-6bfa77a60d1f",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "17f0f0e38f01af5a",
            "spiderX": "",
            "serverName": "api-maps.yandex.ru",
            "fingerprint": "qq",
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
    "remarks": "🇸🇪 LTE #4 | @restlyconnect",
    "burstObservatory": {
      "pingConfig": {
        "destination": "https://www.google.com/generate_204",
        "interval": "8s",
        "sampling": 2,
        "timeout": "3s"
      },
      "subjectSelector": [
        "s1",
        "s2",
        "s3",
        "s4",
        "s5",
        "s6",
        "s7",
        "s8",
        "s9",
        "s10"
      ]
    },
    "routing": {
      "balancers": [
        {
          "fallbackTag": "s1",
          "selector": [
            "s1",
            "s2",
            "s3",
            "s4",
            "s5",
            "s6",
            "s7",
            "s8",
            "s9",
            "s10"
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
  },
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
              "address": "51.250.83.255",
              "port": 443,
              "users": [
                {
                  "id": "b4f272ea-cd4f-4df9-9929-1c6b49c0b6ac",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "a76ea384b29a4f79",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "qq",
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
              "address": "5.188.115.178",
              "port": 443,
              "users": [
                {
                  "id": "b4f272ea-cd4f-4df9-9929-1c6b49c0b6ac",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "3f200574d011010f",
            "spiderX": "",
            "serverName": "rutube.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s3",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.65.209",
              "port": 443,
              "users": [
                {
                  "id": "53b2c46d-bc0a-4696-9d87-6bfa77a60d1f",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "e55fd8f9c9a9a0ca",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s4",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.83.255",
              "port": 443,
              "users": [
                {
                  "id": "53b2c46d-bc0a-4696-9d87-6bfa77a60d1f",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "048fe5c8be4bb687",
            "spiderX": "",
            "serverName": "api-maps.yandex.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s5",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.83.255",
              "port": 443,
              "users": [
                {
                  "id": "b4f272ea-cd4f-4df9-9929-1c6b49c0b6ac",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "048fe5c8be4bb687",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s6",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.83.255",
              "port": 443,
              "users": [
                {
                  "id": "53b2c46d-bc0a-4696-9d87-6bfa77a60d1f",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "a76ea384b29a4f79",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s7",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.65.209",
              "port": 443,
              "users": [
                {
                  "id": "53b2c46d-bc0a-4696-9d87-6bfa77a60d1f",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "2476f063981ffd92",
            "spiderX": "",
            "serverName": "api-maps.yandex.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s8",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.65.209",
              "port": 443,
              "users": [
                {
                  "id": "53b2c46d-bc0a-4696-9d87-6bfa77a60d1f",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "4a3ad88ff867a295",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s9",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "5.188.115.178",
              "port": 443,
              "users": [
                {
                  "id": "b4f272ea-cd4f-4df9-9929-1c6b49c0b6ac",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "6354585c37827955",
            "spiderX": "",
            "serverName": "rutube.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s10",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.65.209",
              "port": 443,
              "users": [
                {
                  "id": "53b2c46d-bc0a-4696-9d87-6bfa77a60d1f",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "048fe5c8be4bb687",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "chrome",
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
    "remarks": "🇸🇪 LTE #5 | @restlyconnect",
    "burstObservatory": {
      "pingConfig": {
        "destination": "https://www.google.com/generate_204",
        "interval": "8s",
        "sampling": 2,
        "timeout": "3s"
      },
      "subjectSelector": [
        "s1",
        "s2",
        "s3",
        "s4",
        "s5",
        "s6",
        "s7",
        "s8",
        "s9",
        "s10"
      ]
    },
    "routing": {
      "balancers": [
        {
          "fallbackTag": "s1",
          "selector": [
            "s1",
            "s2",
            "s3",
            "s4",
            "s5",
            "s6",
            "s7",
            "s8",
            "s9",
            "s10"
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
  },
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
              "address": "51.250.0.147",
              "port": 443,
              "users": [
                {
                  "id": "53b2c46d-bc0a-4696-9d87-6bfa77a60d1f",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "d17bd238f23fba92",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "qq",
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
              "address": "51.250.65.209",
              "port": 443,
              "users": [
                {
                  "id": "53b2c46d-bc0a-4696-9d87-6bfa77a60d1f",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "4b523a98e1bbd15b",
            "spiderX": "",
            "serverName": "api-maps.yandex.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s3",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.0.147",
              "port": 443,
              "users": [
                {
                  "id": "b4f272ea-cd4f-4df9-9929-1c6b49c0b6ac",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "43df3983229a1c73",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s4",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.86.102",
              "port": 443,
              "users": [
                {
                  "id": "53b2c46d-bc0a-4696-9d87-6bfa77a60d1f",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "95ec618532fa065e",
            "spiderX": "",
            "serverName": "api-maps.yandex.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s5",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.86.102",
              "port": 443,
              "users": [
                {
                  "id": "b4f272ea-cd4f-4df9-9929-1c6b49c0b6ac",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "87cc0414902bee2d",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s6",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.83.255",
              "port": 443,
              "users": [
                {
                  "id": "b4f272ea-cd4f-4df9-9929-1c6b49c0b6ac",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "4a3ad88ff867a295",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s7",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "79.137.175.44",
              "port": 443,
              "users": [
                {
                  "id": "aa33c2f4-46bc-4818-bf50-723a1e8d33d0",
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
            "publicKey": "zr8_rtHm86s_G1gfRwNtunStGngYZSdYkA3PyBFXpDg",
            "shortId": "28047c78b3f5ee2c",
            "spiderX": "",
            "serverName": "m.vk.ru",
            "fingerprint": "chrome",
            "show": false
          }
        }
      },
      {
        "tag": "s8",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "37.139.33.15",
              "port": 443,
              "users": [
                {
                  "id": "7825f2d1-cdc2-4186-9ad5-377afa912104",
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
            "publicKey": "7zd9mJilgjOrg_ohtw23Vmio-pdnYqeP_r-kiWt87Cg",
            "shortId": "2715592069f36fe7",
            "spiderX": "",
            "serverName": "m.vk.ru",
            "fingerprint": "chrome",
            "show": false
          }
        }
      },
      {
        "tag": "s9",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "5.188.115.178",
              "port": 443,
              "users": [
                {
                  "id": "b4f272ea-cd4f-4df9-9929-1c6b49c0b6ac",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "43df3983229a1c73",
            "spiderX": "",
            "serverName": "rutube.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s10",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.86.102",
              "port": 443,
              "users": [
                {
                  "id": "b4f272ea-cd4f-4df9-9929-1c6b49c0b6ac",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "4b523a98e1bbd15b",
            "spiderX": "",
            "serverName": "api-maps.yandex.ru",
            "fingerprint": "qq",
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
    "remarks": "🇸🇪 LTE #6 | @restlyconnect",
    "burstObservatory": {
      "pingConfig": {
        "destination": "https://www.google.com/generate_204",
        "interval": "8s",
        "sampling": 2,
        "timeout": "3s"
      },
      "subjectSelector": [
        "s1",
        "s2",
        "s3",
        "s4",
        "s5",
        "s6",
        "s7",
        "s8",
        "s9",
        "s10"
      ]
    },
    "routing": {
      "balancers": [
        {
          "fallbackTag": "s1",
          "selector": [
            "s1",
            "s2",
            "s3",
            "s4",
            "s5",
            "s6",
            "s7",
            "s8",
            "s9",
            "s10"
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
  },
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
              "address": "51.250.86.102",
              "port": 443,
              "users": [
                {
                  "id": "b4f272ea-cd4f-4df9-9929-1c6b49c0b6ac",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "17802e8ff84f12df",
            "spiderX": "",
            "serverName": "api-maps.yandex.ru",
            "fingerprint": "qq",
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
              "address": "5.188.115.178",
              "port": 443,
              "users": [
                {
                  "id": "b4f272ea-cd4f-4df9-9929-1c6b49c0b6ac",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "17802e8ff84f12df",
            "spiderX": "",
            "serverName": "rutube.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s3",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.65.209",
              "port": 443,
              "users": [
                {
                  "id": "53b2c46d-bc0a-4696-9d87-6bfa77a60d1f",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "17f0f0e38f01af5a",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s4",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "5.188.115.178",
              "port": 443,
              "users": [
                {
                  "id": "b4f272ea-cd4f-4df9-9929-1c6b49c0b6ac",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "c8597fb67d55d9c4",
            "spiderX": "",
            "serverName": "rutube.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s5",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "37.139.34.145",
              "port": 8443,
              "users": [
                {
                  "id": "aa33c2f4-46bc-4818-bf50-723a1e8d33d0",
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
            "publicKey": "zr8_rtHm86s_G1gfRwNtunStGngYZSdYkA3PyBFXpDg",
            "shortId": "04bf0403f96e5b4b",
            "spiderX": "",
            "serverName": "m.vk.ru",
            "fingerprint": "random",
            "show": false
          }
        }
      },
      {
        "tag": "s6",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.86.102",
              "port": 443,
              "users": [
                {
                  "id": "b4f272ea-cd4f-4df9-9929-1c6b49c0b6ac",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "f85b0cdd7d20c84c",
            "spiderX": "",
            "serverName": "api-maps.yandex.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s7",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.86.102",
              "port": 443,
              "users": [
                {
                  "id": "53b2c46d-bc0a-4696-9d87-6bfa77a60d1f",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "cd57a927f6b72d81",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s8",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.83.255",
              "port": 443,
              "users": [
                {
                  "id": "53b2c46d-bc0a-4696-9d87-6bfa77a60d1f",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "e55fd8f9c9a9a0ca",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s9",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.0.147",
              "port": 443,
              "users": [
                {
                  "id": "53b2c46d-bc0a-4696-9d87-6bfa77a60d1f",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "3f200574d011010f",
            "spiderX": "",
            "serverName": "api-maps.yandex.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s10",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.65.209",
              "port": 443,
              "users": [
                {
                  "id": "b4f272ea-cd4f-4df9-9929-1c6b49c0b6ac",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "d17bd238f23fba92",
            "spiderX": "",
            "serverName": "api-maps.yandex.ru",
            "fingerprint": "qq",
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
    "remarks": "🇸🇪 LTE #7 | @restlyconnect",
    "burstObservatory": {
      "pingConfig": {
        "destination": "https://www.google.com/generate_204",
        "interval": "8s",
        "sampling": 2,
        "timeout": "3s"
      },
      "subjectSelector": [
        "s1",
        "s2",
        "s3",
        "s4",
        "s5",
        "s6",
        "s7",
        "s8",
        "s9",
        "s10"
      ]
    },
    "routing": {
      "balancers": [
        {
          "fallbackTag": "s1",
          "selector": [
            "s1",
            "s2",
            "s3",
            "s4",
            "s5",
            "s6",
            "s7",
            "s8",
            "s9",
            "s10"
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
  },
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
              "address": "51.250.65.209",
              "port": 443,
              "users": [
                {
                  "id": "b4f272ea-cd4f-4df9-9929-1c6b49c0b6ac",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "2476f063981ffd92",
            "spiderX": "",
            "serverName": "api-maps.yandex.ru",
            "fingerprint": "qq",
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
              "address": "51.250.87.167",
              "port": 443,
              "users": [
                {
                  "id": "53b2c46d-bc0a-4696-9d87-6bfa77a60d1f",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "17f0f0e38f01af5a",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s3",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.86.102",
              "port": 443,
              "users": [
                {
                  "id": "53b2c46d-bc0a-4696-9d87-6bfa77a60d1f",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "7426b0c03ef009dc",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s4",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.65.209",
              "port": 443,
              "users": [
                {
                  "id": "b4f272ea-cd4f-4df9-9929-1c6b49c0b6ac",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "4a3ad88ff867a295",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s5",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "37.139.33.15",
              "port": 443,
              "users": [
                {
                  "id": "7825f2d1-cdc2-4186-9ad5-377afa912104",
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
            "publicKey": "7zd9mJilgjOrg_ohtw23Vmio-pdnYqeP_r-kiWt87Cg",
            "shortId": "f4b4a6365558ea2e",
            "spiderX": "",
            "serverName": "m.vk.ru",
            "fingerprint": "chrome",
            "show": false
          }
        }
      },
      {
        "tag": "s6",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.0.147",
              "port": 443,
              "users": [
                {
                  "id": "b4f272ea-cd4f-4df9-9929-1c6b49c0b6ac",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "f85b0cdd7d20c84c",
            "spiderX": "",
            "serverName": "api-maps.yandex.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s7",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "37.139.33.15",
              "port": 8443,
              "users": [
                {
                  "id": "7825f2d1-cdc2-4186-9ad5-377afa912104",
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
            "publicKey": "7zd9mJilgjOrg_ohtw23Vmio-pdnYqeP_r-kiWt87Cg",
            "shortId": "f4b4a6365558ea2e",
            "spiderX": "",
            "serverName": "m.vk.ru",
            "fingerprint": "random",
            "show": false
          }
        }
      },
      {
        "tag": "s8",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.86.102",
              "port": 443,
              "users": [
                {
                  "id": "53b2c46d-bc0a-4696-9d87-6bfa77a60d1f",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "e55fd8f9c9a9a0ca",
            "spiderX": "",
            "serverName": "api-maps.yandex.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s9",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "79.137.175.44",
              "port": 8443,
              "users": [
                {
                  "id": "aa33c2f4-46bc-4818-bf50-723a1e8d33d0",
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
            "publicKey": "zr8_rtHm86s_G1gfRwNtunStGngYZSdYkA3PyBFXpDg",
            "shortId": "04bf0403f96e5b4b",
            "spiderX": "",
            "serverName": "m.vk.ru",
            "fingerprint": "random",
            "show": false
          }
        }
      },
      {
        "tag": "s10",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "79.137.175.44",
              "port": 443,
              "users": [
                {
                  "id": "aa33c2f4-46bc-4818-bf50-723a1e8d33d0",
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
            "publicKey": "zr8_rtHm86s_G1gfRwNtunStGngYZSdYkA3PyBFXpDg",
            "shortId": "04bf0403f96e5b4b",
            "spiderX": "",
            "serverName": "m.vk.ru",
            "fingerprint": "chrome",
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
    "remarks": "🇸🇪 LTE #8 | @restlyconnect",
    "burstObservatory": {
      "pingConfig": {
        "destination": "https://www.google.com/generate_204",
        "interval": "8s",
        "sampling": 2,
        "timeout": "3s"
      },
      "subjectSelector": [
        "s1",
        "s2",
        "s3",
        "s4",
        "s5",
        "s6",
        "s7",
        "s8",
        "s9",
        "s10"
      ]
    },
    "routing": {
      "balancers": [
        {
          "fallbackTag": "s1",
          "selector": [
            "s1",
            "s2",
            "s3",
            "s4",
            "s5",
            "s6",
            "s7",
            "s8",
            "s9",
            "s10"
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
  },
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
              "address": "51.250.87.167",
              "port": 443,
              "users": [
                {
                  "id": "53b2c46d-bc0a-4696-9d87-6bfa77a60d1f",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "048fe5c8be4bb687",
            "spiderX": "",
            "serverName": "api-maps.yandex.ru",
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
              "address": "51.250.87.167",
              "port": 443,
              "users": [
                {
                  "id": "53b2c46d-bc0a-4696-9d87-6bfa77a60d1f",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "6354585c37827955",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s3",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.0.147",
              "port": 443,
              "users": [
                {
                  "id": "b4f272ea-cd4f-4df9-9929-1c6b49c0b6ac",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "4b523a98e1bbd15b",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s4",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.65.209",
              "port": 443,
              "users": [
                {
                  "id": "b4f272ea-cd4f-4df9-9929-1c6b49c0b6ac",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "33554379411b3219",
            "spiderX": "",
            "serverName": "api-maps.yandex.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s5",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.87.167",
              "port": 443,
              "users": [
                {
                  "id": "53b2c46d-bc0a-4696-9d87-6bfa77a60d1f",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "87cc0414902bee2d",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s6",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.87.167",
              "port": 443,
              "users": [
                {
                  "id": "53b2c46d-bc0a-4696-9d87-6bfa77a60d1f",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "c8597fb67d55d9c4",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s7",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.87.167",
              "port": 443,
              "users": [
                {
                  "id": "b4f272ea-cd4f-4df9-9929-1c6b49c0b6ac",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "87cc0414902bee2d",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s8",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.87.167",
              "port": 443,
              "users": [
                {
                  "id": "b4f272ea-cd4f-4df9-9929-1c6b49c0b6ac",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "d17bd238f23fba92",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s9",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.87.167",
              "port": 443,
              "users": [
                {
                  "id": "b4f272ea-cd4f-4df9-9929-1c6b49c0b6ac",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "95ec618532fa065e",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s10",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.87.167",
              "port": 443,
              "users": [
                {
                  "id": "b4f272ea-cd4f-4df9-9929-1c6b49c0b6ac",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "33554379411b3219",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "qq",
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
    "remarks": "🇸🇪 LTE #9 | @restlyconnect",
    "burstObservatory": {
      "pingConfig": {
        "destination": "https://www.google.com/generate_204",
        "interval": "8s",
        "sampling": 2,
        "timeout": "3s"
      },
      "subjectSelector": [
        "s1",
        "s2",
        "s3",
        "s4",
        "s5",
        "s6",
        "s7",
        "s8",
        "s9",
        "s10"
      ]
    },
    "routing": {
      "balancers": [
        {
          "fallbackTag": "s1",
          "selector": [
            "s1",
            "s2",
            "s3",
            "s4",
            "s5",
            "s6",
            "s7",
            "s8",
            "s9",
            "s10"
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
  },
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
              "address": "51.250.87.167",
              "port": 443,
              "users": [
                {
                  "id": "53b2c46d-bc0a-4696-9d87-6bfa77a60d1f",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "17802e8ff84f12df",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "qq",
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
              "address": "51.250.87.167",
              "port": 443,
              "users": [
                {
                  "id": "53b2c46d-bc0a-4696-9d87-6bfa77a60d1f",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "e55fd8f9c9a9a0ca",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s3",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.87.167",
              "port": 443,
              "users": [
                {
                  "id": "b4f272ea-cd4f-4df9-9929-1c6b49c0b6ac",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "4b523a98e1bbd15b",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s4",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "95.163.211.13",
              "port": 443,
              "users": [
                {
                  "id": "eb071647-72a6-46be-8e89-ff3d228d52f6",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "cd57a927f6b72d81",
            "spiderX": "",
            "serverName": "max.ru",
            "fingerprint": "chrome",
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
    "remarks": "🇸🇪 LTE #10 | @restlyconnect",
    "burstObservatory": {
      "pingConfig": {
        "destination": "https://www.google.com/generate_204",
        "interval": "8s",
        "sampling": 2,
        "timeout": "3s"
      },
      "subjectSelector": [
        "s1",
        "s2",
        "s3",
        "s4"
      ]
    },
    "routing": {
      "balancers": [
        {
          "fallbackTag": "s1",
          "selector": [
            "s1",
            "s2",
            "s3",
            "s4"
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
  res.setHeader("announce", "UPD: 23.02.2026 23:36 | tgk: @restlyconnect");
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.end(JSON.stringify(config));
};
