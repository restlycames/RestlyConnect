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
              "address": "5.188.140.37",
              "port": 443,
              "users": [
                {
                  "id": "da2d823f-f4e0-07d0-a4f7-f6e2fbeebe0f",
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
            "publicKey": "4CH3o5zOMcFNMbnwXnkAg0FFepmsc0QzhahXkUzb1ik",
            "shortId": "d8c6b58bcbb0c323",
            "spiderX": "",
            "serverName": "max.ru",
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
              "address": "5.188.140.244",
              "port": 443,
              "users": [
                {
                  "id": "f27f5ad9-c8e7-0bb8-a43b-4fce5aabe734",
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
            "publicKey": "4CH3o5zOMcFNMbnwXnkAg0FFepmsc0QzhahXkUzb1ik",
            "shortId": "d8c6b58bcbb0c323",
            "spiderX": "",
            "serverName": "max.ru",
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
              "address": "5.188.140.37",
              "port": 443,
              "users": [
                {
                  "id": "42f74a8c-f2cd-07d0-b5a9-78d93d0ca69b",
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
            "publicKey": "4CH3o5zOMcFNMbnwXnkAg0FFepmsc0QzhahXkUzb1ik",
            "shortId": "d8c6b58bcbb0c323",
            "spiderX": "",
            "serverName": "max.ru",
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
              "address": "51.250.76.178",
              "port": 443,
              "users": [
                {
                  "id": "f8154c8b-5ef9-43e5-b69d-3744a55f1b9c",
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
            "spiderX": "/",
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
              "address": "51.250.76.178",
              "port": 443,
              "users": [
                {
                  "id": "f8154c8b-5ef9-43e5-b69d-3744a55f1b9c",
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
            "spiderX": "/",
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
              "address": "109.120.189.71",
              "port": 443,
              "users": [
                {
                  "id": "3bb96984-fc3d-03e8-912c-aeccbeafb334",
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
            "publicKey": "4CH3o5zOMcFNMbnwXnkAg0FFepmsc0QzhahXkUzb1ik",
            "shortId": "d8c6b58bcbb0c323",
            "spiderX": "",
            "serverName": "max.ru",
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
              "address": "51.250.76.178",
              "port": 443,
              "users": [
                {
                  "id": "f8154c8b-5ef9-43e5-b69d-3744a55f1b9c",
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
            "spiderX": "/",
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
              "address": "5.188.140.92",
              "port": 443,
              "users": [
                {
                  "id": "3bb96984-fc3d-03e8-912c-aeccbeafb334",
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
            "publicKey": "4CH3o5zOMcFNMbnwXnkAg0FFepmsc0QzhahXkUzb1ik",
            "shortId": "d8c6b58bcbb0c323",
            "spiderX": "",
            "serverName": "max.ru",
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
              "address": "51.250.76.178",
              "port": 443,
              "users": [
                {
                  "id": "f8154c8b-5ef9-43e5-b69d-3744a55f1b9c",
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
            "spiderX": "/",
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
              "address": "51.250.92.19",
              "port": 443,
              "users": [
                {
                  "id": "f8154c8b-5ef9-43e5-b69d-3744a55f1b9c",
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
            "spiderX": "/",
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
              "address": "217.13.104.115",
              "port": 443,
              "users": [
                {
                  "id": "2dd1a15d-1426-413a-a3b8-a645788bc844",
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
            "publicKey": "HmnZvWf1xDzvps8H-juYYtHnWPZksvaUp6cMYV7TfSk",
            "shortId": "a20d3ed244c76426",
            "spiderX": "",
            "serverName": "sun6-22.userapi.com",
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
              "address": "51.250.71.116",
              "port": 443,
              "users": [
                {
                  "id": "f8154c8b-5ef9-43e5-b69d-3744a55f1b9c",
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
            "spiderX": "/",
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
              "address": "51.250.71.116",
              "port": 443,
              "users": [
                {
                  "id": "f8154c8b-5ef9-43e5-b69d-3744a55f1b9c",
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
            "spiderX": "/",
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
              "address": "84.201.173.72",
              "port": 443,
              "users": [
                {
                  "id": "fc4af04b-09c4-45af-9fd0-75b18b60253e",
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
            "publicKey": "mza5Hn1aolSz65qu-UwvBP3oesxMe25r11o4nxvikF0",
            "shortId": "64c1fe36c7846400",
            "spiderX": "",
            "serverName": "eh.vk.com",
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
              "address": "51.250.95.115",
              "port": 443,
              "users": [
                {
                  "id": "f8154c8b-5ef9-43e5-b69d-3744a55f1b9c",
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
            "spiderX": "/",
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
              "address": "51.250.92.19",
              "port": 443,
              "users": [
                {
                  "id": "f8154c8b-5ef9-43e5-b69d-3744a55f1b9c",
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
            "spiderX": "/",
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
              "address": "51.250.92.19",
              "port": 443,
              "users": [
                {
                  "id": "f8154c8b-5ef9-43e5-b69d-3744a55f1b9c",
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
            "spiderX": "/",
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
              "address": "51.250.92.19",
              "port": 443,
              "users": [
                {
                  "id": "f8154c8b-5ef9-43e5-b69d-3744a55f1b9c",
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
            "spiderX": "/",
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
              "address": "51.250.76.178",
              "port": 443,
              "users": [
                {
                  "id": "f8154c8b-5ef9-43e5-b69d-3744a55f1b9c",
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
            "spiderX": "/",
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
              "address": "51.250.71.116",
              "port": 443,
              "users": [
                {
                  "id": "f8154c8b-5ef9-43e5-b69d-3744a55f1b9c",
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
            "spiderX": "/",
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
              "address": "5.188.140.37",
              "port": 443,
              "users": [
                {
                  "id": "45223222-04c6-07d0-b5e6-486115d5968e",
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
            "publicKey": "4CH3o5zOMcFNMbnwXnkAg0FFepmsc0QzhahXkUzb1ik",
            "shortId": "d8c6b58bcbb0c323",
            "spiderX": "",
            "serverName": "max.ru",
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
              "address": "109.120.189.73",
              "port": 443,
              "users": [
                {
                  "id": "da2d823f-f4e0-07d0-a4f7-f6e2fbeebe0f",
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
            "publicKey": "4CH3o5zOMcFNMbnwXnkAg0FFepmsc0QzhahXkUzb1ik",
            "shortId": "d8c6b58bcbb0c323",
            "spiderX": "",
            "serverName": "max.ru",
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
              "address": "217.13.105.19",
              "port": 443,
              "users": [
                {
                  "id": "fe0f8774-4064-4d2c-a523-dcd7bf8809bf",
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
            "publicKey": "ZGwYjRp5RxlVpHUTPzi7pB4ZZuDU5FZEaFgBM71teiQ",
            "shortId": "0669a3e6b300d069",
            "spiderX": "/",
            "serverName": "eh.vk.com",
            "fingerprint": "randomized",
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
              "address": "146.185.240.4",
              "port": 443,
              "users": [
                {
                  "id": "da2d823f-f4e0-07d0-a4f7-f6e2fbeebe0f",
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
            "publicKey": "4CH3o5zOMcFNMbnwXnkAg0FFepmsc0QzhahXkUzb1ik",
            "shortId": "d8c6b58bcbb0c323",
            "spiderX": "",
            "serverName": "max.ru",
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
              "address": "217.13.105.19",
              "port": 443,
              "users": [
                {
                  "id": "ab3de021-5a92-400e-a3eb-2571de183bbe",
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
            "publicKey": "ZGwYjRp5RxlVpHUTPzi7pB4ZZuDU5FZEaFgBM71teiQ",
            "shortId": "0669a3e6b300d069",
            "spiderX": "/",
            "serverName": "eh.vk.com",
            "fingerprint": "randomized",
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
              "address": "37.139.33.216",
              "port": 443,
              "users": [
                {
                  "id": "30c04389-bbcb-431f-9d47-a8ad24406bd4",
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
            "publicKey": "eQXsYV276NoiN9SDwuloNrJkX-NU2tDtkMK6ntKQwlg",
            "shortId": "e9967082664482b7",
            "spiderX": "",
            "serverName": "max.ru",
            "fingerprint": "chrome",
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
              "address": "51.250.71.116",
              "port": 443,
              "users": [
                {
                  "id": "f8154c8b-5ef9-43e5-b69d-3744a55f1b9c",
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
            "spiderX": "/",
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
              "address": "84.201.155.146",
              "port": 443,
              "users": [
                {
                  "id": "5aa188ea-db1b-4121-82f8-4eb1452cc052",
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
            "publicKey": "CtX82DkTEpR5mNMPTpCHf2tkodeEDTjarulWEUUh4gY",
            "shortId": "",
            "spiderX": "",
            "serverName": "sun6-21.userapi.com",
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
              "address": "95.163.210.138",
              "port": 443,
              "users": [
                {
                  "id": "d6653eff-3e01-41f7-97bd-25ee2096908b",
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
            "publicKey": "KYlgK96xPZJq10GbhF-BaCXRxXc9XzxzfICdooYvMlg",
            "shortId": "b0c58c398abb6842",
            "spiderX": "",
            "serverName": "rbc.ru",
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
              "address": "109.120.189.73",
              "port": 443,
              "users": [
                {
                  "id": "f27f5ad9-c8e7-07d0-a43b-4fce5aabe734",
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
            "publicKey": "4CH3o5zOMcFNMbnwXnkAg0FFepmsc0QzhahXkUzb1ik",
            "shortId": "d8c6b58bcbb0c323",
            "spiderX": "",
            "serverName": "max.ru",
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
              "address": "84.201.154.74",
              "port": 443,
              "users": [
                {
                  "id": "5aa188ea-db1b-4121-82f8-4eb1452cc052",
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
            "publicKey": "3Sv23xq-91ymYjcCOXEBkQ-CRRC-KiB0PMNxjfehuHA",
            "shortId": "",
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
              "address": "109.120.188.145",
              "port": 443,
              "users": [
                {
                  "id": "8e0d168b-f984-07d0-865f-88b9a46fb48f",
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
            "publicKey": "4CH3o5zOMcFNMbnwXnkAg0FFepmsc0QzhahXkUzb1ik",
            "shortId": "d8c6b58bcbb0c323",
            "spiderX": "",
            "serverName": "max.ru",
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
              "address": "84.201.155.146",
              "port": 443,
              "users": [
                {
                  "id": "2812582e-28c4-45a0-ab70-2a5c4d87c47d",
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
            "publicKey": "CtX82DkTEpR5mNMPTpCHf2tkodeEDTjarulWEUUh4gY",
            "shortId": "",
            "spiderX": "",
            "serverName": "sun6-21.userapi.com",
            "fingerprint": "chrome",
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
              "address": "51.250.92.19",
              "port": 443,
              "users": [
                {
                  "id": "f8154c8b-5ef9-43e5-b69d-3744a55f1b9c",
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
            "spiderX": "/",
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
              "address": "109.120.188.156",
              "port": 443,
              "users": [
                {
                  "id": "f27f5ad9-c8e7-0bb8-a43b-4fce5aabe734",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "raw",
          "security": "reality",
          "realitySettings": {
            "publicKey": "4CH3o5zOMcFNMbnwXnkAg0FFepmsc0QzhahXkUzb1ik",
            "shortId": "d8c6b58bcbb0c323",
            "spiderX": "",
            "serverName": "max.ru",
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
              "address": "109.120.188.156",
              "port": 443,
              "users": [
                {
                  "id": "416d27c8-f1f6-0bb8-978d-31332344c8da",
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
            "publicKey": "4CH3o5zOMcFNMbnwXnkAg0FFepmsc0QzhahXkUzb1ik",
            "shortId": "d8c6b58bcbb0c323",
            "spiderX": "",
            "serverName": "max.ru",
            "fingerprint": "chrome",
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
              "address": "51.250.76.178",
              "port": 443,
              "users": [
                {
                  "id": "f8154c8b-5ef9-43e5-b69d-3744a55f1b9c",
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
            "spiderX": "/",
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
              "address": "212.233.89.0",
              "port": 443,
              "users": [
                {
                  "id": "e12acfdc-9ddc-44e9-a8e4-cd3b5007ce83",
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
            "publicKey": "b9VYqDf3qSA8mKFykAjuZno80239TMpr4512lcZLq24",
            "shortId": "7aaf7ba9",
            "spiderX": "/",
            "serverName": "eh.vk.com",
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
              "address": "51.250.71.116",
              "port": 443,
              "users": [
                {
                  "id": "f8154c8b-5ef9-43e5-b69d-3744a55f1b9c",
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
            "spiderX": "/",
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
        "s9"
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
            "s9"
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
        "protocol": "shadowsocks",
        "settings": {
          "servers": [
            {
              "address": "147.45.135.39",
              "port": 4205,
              "method": "chacha20-ietf-poly1305",
              "password": "c0Zy18nHmjcUfome1fYPhA"
            }
          ]
        }
      },
      {
        "tag": "s2",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "213.165.54.4",
              "port": 443,
              "users": [
                {
                  "id": "dadf2142-db7b-4547-997f-bd564ab7e84e",
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
            "publicKey": "vfmqSXTEjdIOgz43eZTNzBRztAvd1U1dDkSz_mnaSk4",
            "shortId": "82c8140feb118043",
            "spiderX": "",
            "serverName": "cdnjs.com",
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
              "address": "89.169.10.12",
              "port": 443,
              "users": [
                {
                  "id": "6202b230-417c-4d8e-b624-0f71afa9c75d",
                  "flow": "",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "ws",
          "wsSettings": {
            "path": "/?ed=2560&Telegram🇨🇳+@WangCai2",
            "headers": {
              "Host": "sni.111000.v6.navy"
            }
          },
          "security": "tls",
          "tlsSettings": {
            "serverName": "sni.111000.v6.navy",
            "fingerprint": "chrome"
          }
        }
      },
      {
        "tag": "s4",
        "protocol": "shadowsocks",
        "settings": {
          "servers": [
            {
              "address": "38.180.113.194",
              "port": 8119,
              "method": "aes-256-gcm",
              "password": "cdBIDV42DCwnfIN"
            }
          ]
        }
      },
      {
        "tag": "s5",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "213.165.54.4",
              "port": 443,
              "users": [
                {
                  "id": "25350755-d310-4264-bfdc-49228ab5ee25",
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
            "publicKey": "vfmqSXTEjdIOgz43eZTNzBRztAvd1U1dDkSz_mnaSk4",
            "shortId": "fc7a526a7e61ba3b",
            "spiderX": "",
            "serverName": "cdnjs.com",
            "fingerprint": "chrome",
            "show": false
          }
        }
      },
      {
        "tag": "s6",
        "protocol": "shadowsocks",
        "settings": {
          "servers": [
            {
              "address": "108.181.0.177",
              "port": 8388,
              "method": "chacha20-ietf-poly1305",
              "password": "G5p6ww4o67HB"
            }
          ]
        }
      },
      {
        "tag": "s7",
        "protocol": "shadowsocks",
        "settings": {
          "servers": [
            {
              "address": "154.53.57.143",
              "port": 443,
              "method": "aes-256-gcm",
              "password": "uwmRUOVM5ljNAtPj"
            }
          ]
        }
      },
      {
        "tag": "s8",
        "protocol": "shadowsocks",
        "settings": {
          "servers": [
            {
              "address": "154.53.63.42",
              "port": 80,
              "method": "aes-256-gcm",
              "password": "SM7WYtAwvBORXKjI"
            }
          ]
        }
      },
      {
        "tag": "s9",
        "protocol": "shadowsocks",
        "settings": {
          "servers": [
            {
              "address": "154.12.242.150",
              "port": 443,
              "method": "aes-256-gcm",
              "password": "7vZO55fXgXAJXa2F"
            }
          ]
        }
      },
      {
        "tag": "s10",
        "protocol": "shadowsocks",
        "settings": {
          "servers": [
            {
              "address": "156.244.8.155",
              "port": 5004,
              "method": "aes-256-gcm",
              "password": "g5MeD6Ft3CWlJId"
            }
          ]
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
    "remarks": "🇸🇪 LTE #5 РЕЗЕРВ | @restlyconnect",
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
              "address": "79.137.174.191",
              "port": 443,
              "users": [
                {
                  "id": "33f3d4ee-38de-4139-aa55-3a05def5d8c0",
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
            "publicKey": "EMS0wzISeSbEe4JABPD8EgDnyLXgDmrX4_lcfG6VVX4",
            "shortId": "c76ba2c2fb172e8b",
            "spiderX": "",
            "serverName": "tradingview.com",
            "fingerprint": "random",
            "show": false
          }
        }
      },
      {
        "tag": "s2",
        "protocol": "shadowsocks",
        "settings": {
          "servers": [
            {
              "address": "154.12.240.141",
              "port": 443,
              "method": "aes-256-gcm",
              "password": "mK7eN3z276Tr0vVA"
            }
          ]
        }
      },
      {
        "tag": "s3",
        "protocol": "shadowsocks",
        "settings": {
          "servers": [
            {
              "address": "switcher-nick-croquet.freesocks.work",
              "port": 443,
              "method": "chacha20-ietf-poly1305",
              "password": "9tqhMdIrTkgQ46PvhyAtMH"
            }
          ]
        }
      },
      {
        "tag": "s4",
        "protocol": "shadowsocks",
        "settings": {
          "servers": [
            {
              "address": "149.102.149.207",
              "port": 443,
              "method": "aes-256-gcm",
              "password": "umWwoQJEJGf74SLe"
            }
          ]
        }
      },
      {
        "tag": "s5",
        "protocol": "shadowsocks",
        "settings": {
          "servers": [
            {
              "address": "185.5.38.111",
              "port": 55988,
              "method": "chacha20-ietf-poly1305",
              "password": "AgxyePdT6DnALxzttQRzGHJP2bitAeHnbukf6aTjC9xdYkxQQ1YK71DKEmJNc3DY8CCq1z46oCy6Dc1oZi6Q4532Nv8Swcy7"
            }
          ]
        }
      },
      {
        "tag": "s6",
        "protocol": "shadowsocks",
        "settings": {
          "servers": [
            {
              "address": "mx2.drawnrisha.one",
              "port": 55988,
              "method": "chacha20-ietf-poly1305",
              "password": "vWgVt4dL6bwFutKm1D8WrjaAs2AWT535GfVMttHBg7rg6ZBFUAxGpvHc6hXjoBRKsyeyTESc1uU6y3BP3oenkTv9aefi27VN"
            }
          ]
        }
      },
      {
        "tag": "s7",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "45.144.51.170",
              "port": 443,
              "users": [
                {
                  "id": "94084183-8182-443b-8957-6fd70936dd74",
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
            "publicKey": "rTp9PEn36FtQFu32jWAPO3r-e1W2px3RGSuhR-L1DVM",
            "shortId": "",
            "spiderX": "",
            "serverName": "yahoo.com",
            "fingerprint": "chrome",
            "show": false
          }
        }
      },
      {
        "tag": "s8",
        "protocol": "shadowsocks",
        "settings": {
          "servers": [
            {
              "address": "mx2.drawnrisha.one",
              "port": 55988,
              "method": "chacha20-ietf-poly1305",
              "password": "3XNjxfSJbdo3YWsvrEG7E2hnZ85AP1qch9Dt8Fm4fZHeWEsFcnhKcoQgMNTdxridN2af1tzQVBt1S5oiSPCETFnhS3nmAYDa"
            }
          ]
        }
      },
      {
        "tag": "s9",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "190.93.244.238",
              "port": 2096,
              "users": [
                {
                  "id": "6202b230-417c-4d8e-b624-0f71afa9c75d",
                  "flow": "",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "ws",
          "wsSettings": {
            "path": "/?ed=2560&Telegram🇨🇳@WangCai2",
            "headers": {
              "Host": "sni.jpmj.dev"
            }
          },
          "security": "tls",
          "tlsSettings": {
            "serverName": "sni.jpmj.dev",
            "fingerprint": "chrome"
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
    "remarks": "🇸🇪 LTE #6 РЕЗЕРВ | @restlyconnect",
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
        "s9"
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
            "s9"
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
  res.setHeader("announce", "UPD: 03.03.2026 13:10 | tgk: @restlyconnect");
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.end(JSON.stringify(config));
};
