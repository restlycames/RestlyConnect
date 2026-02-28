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
              "address": "109.120.189.145",
              "port": 443,
              "users": [
                {
                  "id": "080556c0-0117-07d0-b1d9-3708fa8ab8c4",
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
        "tag": "s2",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "5.188.141.18",
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
          "network": "raw",
          "security": "reality",
          "realitySettings": {
            "publicKey": "4CH3o5zOMcFNMbnwXnkAg0FFepmsc0QzhahXkUzb1ik",
            "shortId": "d8c6b58bcbb0c323",
            "spiderX": "/AKBARCONFIG/AKBARCONFIG/AKBARCONFIG//AKBARCONFIG/AKBARCONFIG/AKBARCONFIG/AKBARCONFIG//AKBARCONFIG",
            "serverName": "max.ru",
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
              "address": "5.188.141.18",
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
        "tag": "s4",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "37.139.34.115",
              "port": 443,
              "users": [
                {
                  "id": "642e5ad8-bd76-07d0-8b5c-b4d0628f07bc",
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
              "address": "5.188.141.67",
              "port": 443,
              "users": [
                {
                  "id": "080556c0-0117-07d0-b1d9-3708fa8ab8c4",
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
        "tag": "s6",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "109.120.189.145",
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
        "tag": "s7",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "109.120.189.160",
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
        "tag": "s8",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "89.208.228.139",
              "port": 52006,
              "users": [
                {
                  "id": "080556c0-0117-07d0-b1d9-3708fa8ab8c4",
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
        "tag": "s9",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "37.139.34.115",
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
        "tag": "s10",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "37.139.33.223",
              "port": 52006,
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
              "address": "5.188.141.67",
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
        "tag": "s2",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "109.120.182.39",
              "port": 443,
              "users": [
                {
                  "id": "ce13ec9d-0f04-49c0-9877-0e7d1e657895",
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
            "publicKey": "cGzNRbN_zruI3CVTDukB2nOqWWEj7kgkay24f2fdLmQ",
            "shortId": "0f917152a871e9c0",
            "spiderX": "",
            "serverName": "maviks.ru",
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
              "address": "109.120.189.145",
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
        "tag": "s4",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "37.139.33.223",
              "port": 52006,
              "users": [
                {
                  "id": "080556c0-0117-07d0-b1d9-3708fa8ab8c4",
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
        "tag": "s5",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "109.120.189.160",
              "port": 443,
              "users": [
                {
                  "id": "642e5ad8-bd76-07d0-8b5c-b4d0628f07bc",
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
        "tag": "s6",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "37.139.33.223",
              "port": 52006,
              "users": [
                {
                  "id": "642e5ad8-bd76-07d0-8b5c-b4d0628f07bc",
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
              "address": "109.120.189.160",
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
              "address": "89.208.228.139",
              "port": 52006,
              "users": [
                {
                  "id": "416d27c8-f1f6-07d0-978d-31332344c8da",
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
        "tag": "s9",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "5.188.141.131",
              "port": 443,
              "users": [
                {
                  "id": "080556c0-0117-0bb8-b1d9-3708fa8ab8c4",
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
        "tag": "s10",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "89.208.228.139",
              "port": 52006,
              "users": [
                {
                  "id": "a0d3d9d3-d0aa-07d0-b802-da6a5f8d918d",
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
              "address": "109.120.189.160",
              "port": 443,
              "users": [
                {
                  "id": "080556c0-0117-07d0-b1d9-3708fa8ab8c4",
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
        "tag": "s2",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "5.188.141.18",
              "port": 443,
              "users": [
                {
                  "id": "080556c0-0117-07d0-b1d9-3708fa8ab8c4",
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
              "address": "5.188.141.67",
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
        "tag": "s4",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "37.139.33.223",
              "port": 52006,
              "users": [
                {
                  "id": "a0d3d9d3-d0aa-07d0-b802-da6a5f8d918d",
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
              "address": "109.120.189.160",
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
        "tag": "s6",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "109.120.188.156",
              "port": 443,
              "users": [
                {
                  "id": "8e0d168b-f984-0bb8-865f-88b9a46fb48f",
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
              "address": "37.139.34.115",
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
        "tag": "s8",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.95.176",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
              "address": "37.139.33.125",
              "port": 443,
              "users": [
                {
                  "id": "080556c0-0117-0bb8-b1d9-3708fa8ab8c4",
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
        "tag": "s10",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "84.201.131.144",
              "port": 443,
              "users": [
                {
                  "id": "d7e0cd97-a245-48aa-87b0-8539068e36ba",
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
            "shortId": "d1579a8745398e34",
            "spiderX": "",
            "serverName": "sun6-22.userapi.com",
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
              "address": "37.139.33.125",
              "port": 443,
              "users": [
                {
                  "id": "8e0d168b-f984-0bb8-865f-88b9a46fb48f",
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
        "tag": "s2",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "89.208.228.167",
              "port": 443,
              "users": [
                {
                  "id": "8e0d168b-f984-0bb8-865f-88b9a46fb48f",
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
        "tag": "s3",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "5.188.141.18",
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
            "spiderX": "/AKBARCONFIG/AKBARCONFIG/AKBARCONFIG//AKBARCONFIG/AKBARCONFIG/AKBARCONFIG/AKBARCONFIG//AKBARCONFIG",
            "serverName": "max.ru",
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
              "address": "51.250.80.61",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
        "tag": "s5",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "89.208.228.167",
              "port": 443,
              "users": [
                {
                  "id": "080556c0-0117-0bb8-b1d9-3708fa8ab8c4",
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
        "tag": "s6",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "109.120.189.142",
              "port": 443,
              "users": [
                {
                  "id": "080556c0-0117-0bb8-b1d9-3708fa8ab8c4",
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
              "address": "5.188.141.131",
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
              "address": "5.188.141.67",
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
        "tag": "s9",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "109.120.189.142",
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
        "tag": "s10",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.74.146",
              "port": 443,
              "users": [
                {
                  "id": "34536d24-0423-441e-956d-3b585e3daeb1",
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
            "shortId": "d1579a8745398e34",
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
              "address": "51.250.90.103",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
              "address": "51.250.68.142",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
            "spiderX": "/",
            "serverName": "api-maps.yandex.ru",
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
              "address": "51.250.80.61",
              "port": 443,
              "users": [
                {
                  "id": "b7dd5972-263a-4331-8ee5-c747e773b434",
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
              "address": "51.250.95.176",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
            "fingerprint": "chrome",
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
              "address": "51.250.68.142",
              "port": 443,
              "users": [
                {
                  "id": "b7dd5972-263a-4331-8ee5-c747e773b434",
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
        "tag": "s6",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "95.163.210.173",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
            "spiderX": "/",
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
              "address": "5.188.141.131",
              "port": 443,
              "users": [
                {
                  "id": "8e0d168b-f984-0bb8-865f-88b9a46fb48f",
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
        "tag": "s8",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "37.139.34.115",
              "port": 443,
              "users": [
                {
                  "id": "080556c0-0117-07d0-b1d9-3708fa8ab8c4",
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
        "tag": "s9",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "37.139.33.223",
              "port": 52006,
              "users": [
                {
                  "id": "416d27c8-f1f6-07d0-978d-31332344c8da",
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
        "tag": "s10",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.65.209",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
              "address": "51.250.3.183",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
              "address": "51.250.68.142",
              "port": 443,
              "users": [
                {
                  "id": "b7dd5972-263a-4331-8ee5-c747e773b434",
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
        "tag": "s3",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "109.120.189.145",
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
            "spiderX": "/T.me/ProxyVPN11-T.me/ProxyVPN11-T.me/ProxyVPN11-T.me/ProxyVPN11-T.me/ProxyVPN11-T.me/ProxyVPN11-T.me/ProxyVPN11-T.me/ProxyVPN11",
            "serverName": "max.ru",
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
              "address": "ru1.cyphervpn.pro",
              "port": 443,
              "users": [
                {
                  "id": "5e80ffa4-13fd-11f1-a5fb-0242ac110002",
                  "flow": "",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "xhttp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "OQ_KzPy2ZWRFWv87Eeh4tV27Z3TWMBHlCTNjoP6mEEY",
            "shortId": "5bfa0c",
            "spiderX": "",
            "serverName": "web.max.ru",
            "fingerprint": "chrome",
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
              "address": "51.250.4.119",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
              "address": "89.208.228.167",
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
              "address": "51.250.80.61",
              "port": 443,
              "users": [
                {
                  "id": "b7dd5972-263a-4331-8ee5-c747e773b434",
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
              "address": "9.cdnconn.com",
              "port": 1443,
              "users": [
                {
                  "id": "e384913f-8863-47b4-8858-a84b68abb4a6",
                  "flow": "",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "xhttp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "UoWP-cohTBmadLBP2fE823VBq8UvXI1qvRTKaaJnnRA",
            "shortId": "cb78164bcc0adb7b",
            "spiderX": "",
            "serverName": "sun6-21.userapi.com",
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
              "address": "37.139.34.115",
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
        "tag": "s10",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "109.120.188.156",
              "port": 443,
              "users": [
                {
                  "id": "080556c0-0117-0bb8-b1d9-3708fa8ab8c4",
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
              "address": "51.250.65.209",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
              "address": "51.250.80.61",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
              "address": "158.160.171.167",
              "port": 443,
              "users": [
                {
                  "id": "53fa2131-611e-413f-8b1a-3aed45529a52",
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
            "publicKey": "w8WltGLAGvOi6tsvnTQ80309byZo0Wo_Gs3fr8F6ixE",
            "shortId": "331a54c7ab4b",
            "spiderX": "",
            "serverName": "84.img.avito.st",
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
              "address": "51.250.95.176",
              "port": 443,
              "users": [
                {
                  "id": "b7dd5972-263a-4331-8ee5-c747e773b434",
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
            "spiderX": "/",
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
              "address": "109.120.189.142",
              "port": 443,
              "users": [
                {
                  "id": "080556c0-0117-0bb8-b1d9-3708fa8ab8c4",
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
              "address": "5.188.141.18",
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
              "address": "109.120.191.46",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
            "serverName": "m.vk.com",
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
              "address": "109.120.191.46",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
            "spiderX": "/",
            "serverName": "m.vk.com",
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
              "address": "51.250.3.183",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
            "fingerprint": "chrome",
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
              "address": "37.139.33.223",
              "port": 52006,
              "users": [
                {
                  "id": "17c4e377-ea15-07d0-98b2-3e348c9ff5d9",
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
              "address": "109.120.190.78",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
            "spiderX": "/",
            "serverName": "m.vk.com",
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
              "address": "51.250.0.147",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
              "address": "109.120.189.142",
              "port": 443,
              "users": [
                {
                  "id": "8e0d168b-f984-0bb8-865f-88b9a46fb48f",
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
        "tag": "s4",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.87.167",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
              "address": "89.208.228.167",
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
              "address": "ru2.cyphervpn.pro",
              "port": 443,
              "users": [
                {
                  "id": "5e80ffa4-13fd-11f1-a5fb-0242ac110002",
                  "flow": "",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "xhttp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "AEdiOO2LEUGgBYuy7XiHnihpDwSxFrAA7etkMDZ5hjw",
            "shortId": "5bfa0c",
            "spiderX": "/",
            "serverName": "web.max.ru",
            "fingerprint": "firefox",
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
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
              "address": "109.120.191.46",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
            "spiderX": "/",
            "serverName": "m.vk.com",
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
              "address": "109.120.190.78",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
            "serverName": "m.vk.com",
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
                  "id": "b7dd5972-263a-4331-8ee5-c747e773b434",
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
              "address": "95.163.210.173",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
            "serverName": "max.ru",
            "fingerprint": "random",
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
              "address": "109.120.191.46",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
            "serverName": "m.vk.com",
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
              "address": "51.250.95.176",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
              "address": "51.250.83.255",
              "port": 443,
              "users": [
                {
                  "id": "b7dd5972-263a-4331-8ee5-c747e773b434",
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
        "tag": "s5",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.83.255",
              "port": 443,
              "users": [
                {
                  "id": "b7dd5972-263a-4331-8ee5-c747e773b434",
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
              "address": "95.163.208.234",
              "port": 8443,
              "users": [
                {
                  "id": "a001c9c4-ece2-4dc1-9658-cbad90fcd2e0",
                  "flow": "",
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
            "publicKey": "FvOly67pgEBE5pxHE939c23pmLgjmXTb3M7TI9TAQ2Q",
            "shortId": "7dbf7d3233971d5c",
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
              "address": "51.250.87.167",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
              "address": "51.250.65.209",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
            "spiderX": "/",
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
              "address": "95.163.210.159",
              "port": 443,
              "users": [
                {
                  "id": "621d5f40-707c-40f0-8b5c-253d38e1d0cb",
                  "flow": "",
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
            "publicKey": "FvOly67pgEBE5pxHE939c23pmLgjmXTb3M7TI9TAQ2Q",
            "shortId": "7dbf7d3233971d5c",
            "spiderX": "",
            "serverName": "max.ru",
            "fingerprint": "chrome",
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
              "address": "95.163.210.173",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
            "spiderX": "/",
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
              "address": "37.139.33.125",
              "port": 443,
              "users": [
                {
                  "id": "a0d3d9d3-d0aa-0bb8-b802-da6a5f8d918d",
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
              "address": "51.250.87.167",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
              "address": "51.250.83.255",
              "port": 443,
              "users": [
                {
                  "id": "b7dd5972-263a-4331-8ee5-c747e773b434",
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
              "address": "109.120.190.78",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
            "serverName": "m.vk.com",
            "fingerprint": "chrome",
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
              "address": "51.250.95.176",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
              "address": "51.250.68.142",
              "port": 443,
              "users": [
                {
                  "id": "b7dd5972-263a-4331-8ee5-c747e773b434",
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
              "address": "51.250.3.183",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
              "address": "109.120.191.46",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
            "serverName": "m.vk.com",
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
              "address": "51.250.80.61",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
              "address": "51.250.95.176",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
              "address": "178.17.59.41",
              "port": 8080,
              "users": [
                {
                  "id": "a001c9c4-ece2-4dc1-9658-cbad90fcd2e0",
                  "flow": "",
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
            "publicKey": "w28tNIWZCfW4X9aQDLwXECK3pU59zihJ0GIMA13u5X8",
            "shortId": "",
            "spiderX": "",
            "serverName": "max.ru",
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
              "address": "51.250.0.147",
              "port": 443,
              "users": [
                {
                  "id": "b7dd5972-263a-4331-8ee5-c747e773b434",
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
              "address": "95.163.210.173",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
              "address": "51.250.80.61",
              "port": 443,
              "users": [
                {
                  "id": "b7dd5972-263a-4331-8ee5-c747e773b434",
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
        "tag": "s5",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.90.103",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
              "address": "95.163.211.13",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
              "address": "51.250.4.119",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
              "address": "178.154.224.33",
              "port": 443,
              "users": [
                {
                  "id": "400c1f85-9d3a-444a-8a50-81b11f3b4c20",
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
            "publicKey": "66kZLshj9fxAIQA7NsABohNwgiOcY71enc6as_Frqw0",
            "shortId": "3c1523da43287ec4",
            "spiderX": "",
            "serverName": "ads.x5.ru",
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
              "address": "51.250.0.147",
              "port": 443,
              "users": [
                {
                  "id": "b7dd5972-263a-4331-8ee5-c747e773b434",
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
            "fingerprint": "chrome",
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
              "address": "95.163.210.159",
              "port": 443,
              "users": [
                {
                  "id": "a001c9c4-ece2-4dc1-9658-cbad90fcd2e0",
                  "flow": "",
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
            "publicKey": "FvOly67pgEBE5pxHE939c23pmLgjmXTb3M7TI9TAQ2Q",
            "shortId": "7dbf7d3233971d5c",
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
    "remarks": "🇸🇪 LTE #11 | @restlyconnect",
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
              "address": "51.250.4.119",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
              "address": "51.250.4.119",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
              "address": "51.250.3.183",
              "port": 443,
              "users": [
                {
                  "id": "b7dd5972-263a-4331-8ee5-c747e773b434",
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
        "tag": "s4",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.3.183",
              "port": 443,
              "users": [
                {
                  "id": "b7dd5972-263a-4331-8ee5-c747e773b434",
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
        "tag": "s5",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.65.209",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
        "tag": "s6",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.87.167",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
        "tag": "s7",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "109.120.190.78",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
            "serverName": "m.vk.com",
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
        "tag": "s9",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.95.176",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
        "tag": "s10",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "109.120.191.46",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
            "spiderX": "/",
            "serverName": "m.vk.com",
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
    "remarks": "🇸🇪 LTE #12 | @restlyconnect",
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
              "address": "51.250.65.209",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
            "spiderX": "/",
            "serverName": "ads.x5.ru",
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
              "address": "51.250.68.142",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
              "address": "51.250.65.209",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
            "fingerprint": "chrome",
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
              "address": "95.163.210.159",
              "port": 80,
              "users": [
                {
                  "id": "ccdf58c8-b9d4-4bc7-a55e-e6965cc71fc7",
                  "flow": "",
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
            "publicKey": "w28tNIWZCfW4X9aQDLwXECK3pU59zihJ0GIMA13u5X8",
            "shortId": "",
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
              "address": "51.250.90.103",
              "port": 443,
              "users": [
                {
                  "id": "b7dd5972-263a-4331-8ee5-c747e773b434",
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
              "address": "109.120.190.78",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
            "serverName": "m.vk.com",
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
              "address": "51.250.95.176",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
              "address": "51.250.0.147",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
            "fingerprint": "chrome",
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
              "address": "51.250.80.61",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
    "remarks": "🇸🇪 LTE #13 | @restlyconnect",
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
              "address": "51.250.68.142",
              "port": 443,
              "users": [
                {
                  "id": "b7dd5972-263a-4331-8ee5-c747e773b434",
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
        "tag": "s2",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.4.119",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
            "spiderX": "/",
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
              "address": "51.250.95.176",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
            "serverName": "api-maps.yandex.ru",
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
              "address": "51.250.83.255",
              "port": 443,
              "users": [
                {
                  "id": "b7dd5972-263a-4331-8ee5-c747e773b434",
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
        "tag": "s5",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.80.61",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
            "publicKey": "FkmYFobwxLMLEktYXywmjthuEYCZggITsxwPNasTKUg",
            "shortId": "048fe5c8be4bb687",
            "spiderX": "/",
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
              "address": "51.250.3.183",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
            "spiderX": "/",
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
                  "id": "b7dd5972-263a-4331-8ee5-c747e773b434",
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
        "tag": "s8",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.90.103",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
        "tag": "s9",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.87.167",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
        "tag": "s10",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.87.167",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
    "remarks": "🇸🇪 LTE #14 | @restlyconnect",
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
              "address": "51.250.90.103",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
              "address": "51.250.90.103",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
              "address": "109.120.190.78",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
            "serverName": "m.vk.com",
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
              "address": "51.250.4.119",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
            "spiderX": "/",
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
              "address": "51.250.95.176",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
        "tag": "s6",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.80.61",
              "port": 443,
              "users": [
                {
                  "id": "b7dd5972-263a-4331-8ee5-c747e773b434",
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
              "address": "51.250.87.167",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
              "address": "51.250.0.147",
              "port": 443,
              "users": [
                {
                  "id": "b7dd5972-263a-4331-8ee5-c747e773b434",
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
        "tag": "s9",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.4.119",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
        "tag": "s10",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.87.167",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
    "remarks": "🇸🇪 LTE #15 | @restlyconnect",
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
              "address": "51.250.95.176",
              "port": 443,
              "users": [
                {
                  "id": "b7dd5972-263a-4331-8ee5-c747e773b434",
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
        "tag": "s2",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "95.163.208.234",
              "port": 8443,
              "users": [
                {
                  "id": "ccdf58c8-b9d4-4bc7-a55e-e6965cc71fc7",
                  "flow": "",
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
            "publicKey": "FvOly67pgEBE5pxHE939c23pmLgjmXTb3M7TI9TAQ2Q",
            "shortId": "7dbf7d3233971d5c",
            "spiderX": "",
            "serverName": "max.ru",
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
                  "id": "b7dd5972-263a-4331-8ee5-c747e773b434",
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
              "address": "95.163.210.173",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
            "spiderX": "/",
            "serverName": "max.ru",
            "fingerprint": "chrome",
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
              "address": "51.250.3.183",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
              "address": "45.15.128.75",
              "port": 8443,
              "users": [
                {
                  "id": "fad2b7e0-d80c-4b7b-a84f-d86e0e49f627",
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
            "publicKey": "BSsqyfTD-avgb1CyUdy_qJA95HwyMadBMJt7-EQjggk",
            "shortId": "e473bbc75224b9df",
            "spiderX": "/",
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
              "address": "51.250.3.183",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
            "spiderX": "/",
            "serverName": "api-maps.yandex.ru",
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
              "address": "51.250.65.209",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
            "spiderX": "/",
            "serverName": "api-maps.yandex.ru",
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
              "address": "51.250.80.61",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
            "fingerprint": "chrome",
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
              "address": "79.137.174.199",
              "port": 8443,
              "users": [
                {
                  "id": "b9a3bffe-04a3-4ec4-8cc6-4cd2cdc96ec2",
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
            "publicKey": "AnxWLJuRRDt5_RtfvKhd11toTA2qsPATu2sBKsryWSU",
            "shortId": "fe1bba2e",
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
    "remarks": "🇸🇪 LTE #16 | @restlyconnect",
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
              "address": "94.131.105.12",
              "port": 20,
              "users": [
                {
                  "id": "a001c9c4-ece2-4dc1-9658-cbad90fcd2e0",
                  "flow": "",
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
            "publicKey": "Z84J2IelR9ch3k8VtlVhhs5ycBUlXA7wHBWcBrjqnAw",
            "shortId": "6ba85179e30d4fc2",
            "spiderX": "",
            "serverName": "st.ozone.ru",
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
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
        "tag": "s3",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.68.142",
              "port": 443,
              "users": [
                {
                  "id": "b7dd5972-263a-4331-8ee5-c747e773b434",
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
        "tag": "s4",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "95.163.211.13",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
            "spiderX": "/",
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
              "address": "95.163.211.13",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
              "address": "51.250.90.103",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
        "tag": "s7",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "95.163.210.159",
              "port": 8080,
              "users": [
                {
                  "id": "ccdf58c8-b9d4-4bc7-a55e-e6965cc71fc7",
                  "flow": "",
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
            "publicKey": "w28tNIWZCfW4X9aQDLwXECK3pU59zihJ0GIMA13u5X8",
            "shortId": "",
            "spiderX": "",
            "serverName": "max.ru",
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
              "address": "51.250.4.119",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
              "address": "51.250.4.119",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
        "tag": "s10",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.87.167",
              "port": 443,
              "users": [
                {
                  "id": "b7dd5972-263a-4331-8ee5-c747e773b434",
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
    "remarks": "🇸🇪 LTE #17 | @restlyconnect",
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
              "address": "95.163.210.173",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
              "address": "51.250.4.119",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
              "address": "51.250.4.119",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
            "spiderX": "/",
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
              "address": "109.120.191.46",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
            "serverName": "m.vk.com",
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
              "address": "51.250.4.119",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
              "address": "95.163.211.13",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
              "address": "51.250.68.142",
              "port": 443,
              "users": [
                {
                  "id": "b7dd5972-263a-4331-8ee5-c747e773b434",
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
        "tag": "s8",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "95.163.208.234",
              "port": 8443,
              "users": [
                {
                  "id": "4bc1f812-c4a5-4085-8e86-270061cdc1c8",
                  "flow": "",
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
            "publicKey": "FvOly67pgEBE5pxHE939c23pmLgjmXTb3M7TI9TAQ2Q",
            "shortId": "7dbf7d3233971d5c",
            "spiderX": "",
            "serverName": "max.ru",
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
              "address": "109.120.190.78",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
            "serverName": "m.vk.com",
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
              "address": "51.250.95.176",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
        "protocol": "freedom",
        "tag": "direct"
      },
      {
        "protocol": "blackhole",
        "tag": "block"
      }
    ],
    "remarks": "🇸🇪 LTE #18 | @restlyconnect",
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
              "address": "51.250.80.61",
              "port": 443,
              "users": [
                {
                  "id": "b7dd5972-263a-4331-8ee5-c747e773b434",
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
        "tag": "s2",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "109.120.191.46",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
            "serverName": "m.vk.com",
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
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
            "spiderX": "/",
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
              "address": "51.250.87.167",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
            "fingerprint": "edge",
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
              "address": "95.163.210.173",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
            "spiderX": "/",
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
              "address": "51.250.90.103",
              "port": 443,
              "users": [
                {
                  "id": "b7dd5972-263a-4331-8ee5-c747e773b434",
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
            "spiderX": "/",
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
              "address": "51.250.0.147",
              "port": 443,
              "users": [
                {
                  "id": "b7dd5972-263a-4331-8ee5-c747e773b434",
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
              "address": "51.250.83.255",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
              "address": "51.250.65.209",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
              "address": "95.163.210.173",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
    "remarks": "🇸🇪 LTE #19 | @restlyconnect",
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
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
        "tag": "s2",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.80.61",
              "port": 443,
              "users": [
                {
                  "id": "b7dd5972-263a-4331-8ee5-c747e773b434",
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
        "tag": "s3",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.0.147",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
            "spiderX": "/",
            "serverName": "api-maps.yandex.ru",
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
              "address": "51.250.0.147",
              "port": 443,
              "users": [
                {
                  "id": "b7dd5972-263a-4331-8ee5-c747e773b434",
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
              "address": "51.250.90.103",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
        "tag": "s6",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.4.119",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
              "address": "51.250.3.183",
              "port": 443,
              "users": [
                {
                  "id": "b7dd5972-263a-4331-8ee5-c747e773b434",
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
        "tag": "s8",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.4.119",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
            "spiderX": "/",
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
              "address": "95.163.210.173",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
            "serverName": "max.ru",
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
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
        "protocol": "freedom",
        "tag": "direct"
      },
      {
        "protocol": "blackhole",
        "tag": "block"
      }
    ],
    "remarks": "🇸🇪 LTE #20 | @restlyconnect",
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
              "address": "95.163.210.173",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
              "address": "51.250.83.255",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
        "tag": "s3",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.65.209",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
              "address": "51.250.65.209",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
            "spiderX": "/",
            "serverName": "ads.x5.ru",
            "fingerprint": "chrome",
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
              "address": "51.250.90.103",
              "port": 443,
              "users": [
                {
                  "id": "b7dd5972-263a-4331-8ee5-c747e773b434",
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
            "spiderX": "/",
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
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
              "address": "51.250.83.255",
              "port": 443,
              "users": [
                {
                  "id": "b7dd5972-263a-4331-8ee5-c747e773b434",
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
              "address": "51.250.87.167",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
            "spiderX": "/",
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
              "address": "51.250.4.119",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
        "tag": "s10",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.65.209",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
        "protocol": "freedom",
        "tag": "direct"
      },
      {
        "protocol": "blackhole",
        "tag": "block"
      }
    ],
    "remarks": "🇸🇪 LTE #21 | @restlyconnect",
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
              "address": "51.250.95.176",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
        "tag": "s2",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.83.255",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
        "tag": "s3",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "109.120.190.78",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
            "spiderX": "/",
            "serverName": "m.vk.com",
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
              "address": "51.250.90.103",
              "port": 443,
              "users": [
                {
                  "id": "b7dd5972-263a-4331-8ee5-c747e773b434",
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
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
            "spiderX": "/",
            "serverName": "api-maps.yandex.ru",
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
                  "id": "b7dd5972-263a-4331-8ee5-c747e773b434",
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
        "tag": "s7",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "95.163.211.13",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
            "spiderX": "/",
            "serverName": "max.ru",
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
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
        "tag": "s9",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.87.167",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
            "spiderX": "/",
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
              "address": "95.163.211.13",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
    "remarks": "🇸🇪 LTE #22 | @restlyconnect",
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
              "address": "95.163.211.13",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
            "spiderX": "/",
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
              "address": "95.163.210.159",
              "port": 80,
              "users": [
                {
                  "id": "a001c9c4-ece2-4dc1-9658-cbad90fcd2e0",
                  "flow": "",
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
            "publicKey": "w28tNIWZCfW4X9aQDLwXECK3pU59zihJ0GIMA13u5X8",
            "shortId": "",
            "spiderX": "",
            "serverName": "max.ru",
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
              "address": "95.163.210.173",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
              "address": "51.250.0.147",
              "port": 443,
              "users": [
                {
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
            "serverName": "api-maps.yandex.ru",
            "fingerprint": "chrome",
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
                  "id": "64aafe63-ef36-4da5-8bf9-838d767bfe74",
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
        "tag": "s6",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "109.120.190.78",
              "port": 443,
              "users": [
                {
                  "id": "72adc5b8-146a-4bfe-921b-5c9e1df016e0",
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
            "serverName": "m.vk.com",
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
    "remarks": "🇸🇪 LTE #23 | @restlyconnect",
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
        "s6"
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
            "s6"
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
              "address": "82.38.31.122",
              "port": 8080,
              "method": "chacha20-ietf-poly1305",
              "password": "oZIoA69Q8yhcQV8ka3Pa3A"
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
              "address": "5.cdnconn.com",
              "port": 23335,
              "users": [
                {
                  "id": "e384913f-8863-47b4-8858-a84b68abb4a6",
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
            "publicKey": "7Gi8eiUU9TIVbGuvSU16gl5-Aqt7tcCSB9x6CSxyvik",
            "shortId": "67b1e94e4dd1ef90",
            "spiderX": "",
            "serverName": "icloud.com",
            "fingerprint": "edge",
            "show": false
          }
        }
      },
      {
        "tag": "s3",
        "protocol": "shadowsocks",
        "settings": {
          "servers": [
            {
              "address": "82.38.31.101",
              "port": 8080,
              "method": "chacha20-ietf-poly1305",
              "password": "oZIoA69Q8yhcQV8ka3Pa3A"
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
              "address": "51.11.190.36",
              "port": 443,
              "method": "chacha20-ietf-poly1305",
              "password": "W74XFALLLuw6m5IA"
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
              "address": "77.110.116.135",
              "port": 19521,
              "method": "chacha20-ietf-poly1305",
              "password": "071J2n0EGL4DCXVfpicD2l"
            }
          ]
        }
      },
      {
        "tag": "s6",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "185.147.26.13",
              "port": 23335,
              "users": [
                {
                  "id": "e384913f-8863-47b4-8858-a84b68abb4a6",
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
            "publicKey": "7Gi8eiUU9TIVbGuvSU16gl5-Aqt7tcCSB9x6CSxyvik",
            "shortId": "67b1e94e4dd1ef90",
            "spiderX": "",
            "serverName": "icloud.com",
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
              "address": "185.147.26.13",
              "port": 23335,
              "users": [
                {
                  "id": "e384913f-8863-47b4-8858-a84b68abb4a6",
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
            "publicKey": "7Gi8eiUU9TIVbGuvSU16gl5-Aqt7tcCSB9x6CSxyvik",
            "shortId": "",
            "spiderX": "",
            "serverName": "icloud.com",
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
              "address": "82.38.31.186",
              "port": 8080,
              "method": "chacha20-ietf-poly1305",
              "password": "k1dBOmOB4oqi7Ump37a1bQ"
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
              "address": "185.147.26.21",
              "port": 23335,
              "users": [
                {
                  "id": "e384913f-8863-47b4-8858-a84b68abb4a6",
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
            "publicKey": "7Gi8eiUU9TIVbGuvSU16gl5-Aqt7tcCSB9x6CSxyvik",
            "shortId": "67b1e94e4dd1ef90",
            "spiderX": "",
            "serverName": "icloud.com",
            "fingerprint": "edge",
            "show": false
          }
        }
      },
      {
        "tag": "s10",
        "protocol": "shadowsocks",
        "settings": {
          "servers": [
            {
              "address": "82.38.31.62",
              "port": 8080,
              "method": "chacha20-ietf-poly1305",
              "password": "oZIoA69Q8yhcQV8ka3Pa3A"
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
    "remarks": "🇸🇪 LTE #24 РЕЗЕРВ | @restlyconnect",
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
        "protocol": "shadowsocks",
        "settings": {
          "servers": [
            {
              "address": "admin.c1.havij.co",
              "port": 443,
              "method": "chacha20-ietf-poly1305",
              "password": "1kVr0KATIJI7mwOF"
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
              "address": "185.147.26.14",
              "port": 23335,
              "users": [
                {
                  "id": "e384913f-8863-47b4-8858-a84b68abb4a6",
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
            "publicKey": "7Gi8eiUU9TIVbGuvSU16gl5-Aqt7tcCSB9x6CSxyvik",
            "shortId": "",
            "spiderX": "",
            "serverName": "icloud.com",
            "fingerprint": "edge",
            "show": false
          }
        }
      },
      {
        "tag": "s3",
        "protocol": "shadowsocks",
        "settings": {
          "servers": [
            {
              "address": "82.38.31.69",
              "port": 8080,
              "method": "chacha20-ietf-poly1305",
              "password": "oZIoA69Q8yhcQV8ka3Pa3A"
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
              "address": "admin.c1.webramz.co",
              "port": 443,
              "method": "chacha20-ietf-poly1305",
              "password": "W74XFALLLuw6m5IA"
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
              "address": "185.147.26.22",
              "port": 23335,
              "users": [
                {
                  "id": "e384913f-8863-47b4-8858-a84b68abb4a6",
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
            "publicKey": "7Gi8eiUU9TIVbGuvSU16gl5-Aqt7tcCSB9x6CSxyvik",
            "shortId": "",
            "spiderX": "",
            "serverName": "icloud.com",
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
              "address": "51.159.103.137",
              "port": 18290,
              "method": "aes-128-gcm",
              "password": "mBl1fYhX88xk3K39IePrRnmsQDvb1h4f"
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
              "address": "185.147.26.26",
              "port": 23335,
              "users": [
                {
                  "id": "e384913f-8863-47b4-8858-a84b68abb4a6",
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
            "publicKey": "7Gi8eiUU9TIVbGuvSU16gl5-Aqt7tcCSB9x6CSxyvik",
            "shortId": "67b1e94e4dd1ef90",
            "spiderX": "",
            "serverName": "icloud.com",
            "fingerprint": "edge",
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
              "address": "209.46.102.22",
              "port": 8388,
              "method": "chacha20-ietf-poly1305",
              "password": "1hhrqrokj3ag"
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
              "address": "pl-10gb-1.atlanta-internet.com",
              "port": 608,
              "users": [
                {
                  "id": "647e8609-caf9-490e-9e1c-cbe35c010633",
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
            "publicKey": "FscaEWx0paNBzL7GWHj4Fll7Xc-KxdhKgTthBAnByWI",
            "shortId": "",
            "spiderX": "",
            "serverName": "pl-10gb-1.atlanta-internet.com",
            "fingerprint": "random",
            "show": false
          }
        }
      },
      {
        "tag": "s10",
        "protocol": "shadowsocks",
        "settings": {
          "servers": [
            {
              "address": "82.38.31.199",
              "port": 8080,
              "method": "chacha20-ietf-poly1305",
              "password": "k1dBOmOB4oqi7Ump37a1bQ"
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
    "remarks": "🇸🇪 LTE #25 РЕЗЕРВ | @restlyconnect",
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
              "address": "185.147.26.29",
              "port": 23335,
              "users": [
                {
                  "id": "e384913f-8863-47b4-8858-a84b68abb4a6",
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
            "publicKey": "7Gi8eiUU9TIVbGuvSU16gl5-Aqt7tcCSB9x6CSxyvik",
            "shortId": "67b1e94e4dd1ef90",
            "spiderX": "",
            "serverName": "icloud.com",
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
              "address": "185.147.26.28",
              "port": 23335,
              "users": [
                {
                  "id": "e384913f-8863-47b4-8858-a84b68abb4a6",
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
            "publicKey": "7Gi8eiUU9TIVbGuvSU16gl5-Aqt7tcCSB9x6CSxyvik",
            "shortId": "67b1e94e4dd1ef90",
            "spiderX": "",
            "serverName": "icloud.com",
            "fingerprint": "chrome",
            "show": false
          }
        }
      },
      {
        "tag": "s3",
        "protocol": "shadowsocks",
        "settings": {
          "servers": [
            {
              "address": "149.102.132.186",
              "port": 80,
              "method": "aes-256-gcm",
              "password": "YhzqOeJsfuZ9rkkc"
            }
          ]
        }
      },
      {
        "tag": "s4",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "185.147.26.26",
              "port": 23335,
              "users": [
                {
                  "id": "e384913f-8863-47b4-8858-a84b68abb4a6",
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
            "publicKey": "7Gi8eiUU9TIVbGuvSU16gl5-Aqt7tcCSB9x6CSxyvik",
            "shortId": "",
            "spiderX": "",
            "serverName": "icloud.com",
            "fingerprint": "chrome",
            "show": false
          }
        }
      },
      {
        "tag": "s5",
        "protocol": "shadowsocks",
        "settings": {
          "servers": [
            {
              "address": "195.154.202.112",
              "port": 18292,
              "method": "aes-128-gcm",
              "password": "Hc2yn6UjVCbaPO33TQ93MUtofOLRHm7A"
            }
          ]
        }
      },
      {
        "tag": "s6",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "104.21.34.189",
              "port": 443,
              "users": [
                {
                  "id": "03896a37-db8f-44ed-8ce1-45a1577f6da6",
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
            "path": "/eyJqdW5rIjoiZzIxRUF6V2JFOW5IRyIsInByb3RvY29sIjoidmwiLCJtb2RlIjoicHJveHlpcCIsInBhbmVsSVBzIjpbXX0=?ed=2560",
            "headers": {
              "Host": "stipulations.gelatin.workers.dev"
            }
          },
          "security": "tls",
          "tlsSettings": {
            "serverName": "stipulations.gelatin.workers.dev",
            "fingerprint": "randomized"
          }
        }
      },
      {
        "tag": "s7",
        "protocol": "shadowsocks",
        "settings": {
          "servers": [
            {
              "address": "82.38.31.184",
              "port": 8080,
              "method": "chacha20-ietf-poly1305",
              "password": "k1dBOmOB4oqi7Ump37a1bQ"
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
              "address": "149.102.152.25",
              "port": 80,
              "method": "aes-256-gcm",
              "password": "RLUoaU4nh8b8Mqq7"
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
              "address": "51.105.5.48",
              "port": 443,
              "method": "chacha20-ietf-poly1305",
              "password": "1kVr0KATIJI7mwOF"
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
              "address": "149.102.132.180",
              "port": 80,
              "method": "aes-256-gcm",
              "password": "ZTiO11KwZG3S7aET"
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
    "remarks": "🇸🇪 LTE #26 РЕЗЕРВ | @restlyconnect",
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
              "address": "185.147.26.28",
              "port": 23335,
              "users": [
                {
                  "id": "e384913f-8863-47b4-8858-a84b68abb4a6",
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
            "publicKey": "7Gi8eiUU9TIVbGuvSU16gl5-Aqt7tcCSB9x6CSxyvik",
            "shortId": "",
            "spiderX": "",
            "serverName": "icloud.com",
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
              "address": "172.67.215.168",
              "port": 443,
              "users": [
                {
                  "id": "03896a37-db8f-44ed-8ce1-45a1577f6da6",
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
            "path": "/eyJqdW5rIjoiZzIxRUF6V2JFOW5IRyIsInByb3RvY29sIjoidmwiLCJtb2RlIjoicHJveHlpcCIsInBhbmVsSVBzIjpbXX0=?ed=2560",
            "headers": {
              "Host": "stipulations.gelatin.workers.dev"
            }
          },
          "security": "tls",
          "tlsSettings": {
            "serverName": "stipulations.gelatin.workers.dev",
            "fingerprint": "randomized"
          }
        }
      },
      {
        "tag": "s3",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "46.235.186.203",
              "port": 443,
              "users": [
                {
                  "id": "a0d3d9d3-d0aa-07d0-b802-da6a5f8d918d",
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
            "path": "//",
            "headers": {
              "Host": "lk-cdn.deploy-assure.ru"
            }
          },
          "security": "tls",
          "tlsSettings": {
            "serverName": "lk-cdn.deploy-assure.ru",
            "fingerprint": "chrome"
          }
        }
      },
      {
        "tag": "s4",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "185.147.26.22",
              "port": 23335,
              "users": [
                {
                  "id": "e384913f-8863-47b4-8858-a84b68abb4a6",
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
            "publicKey": "7Gi8eiUU9TIVbGuvSU16gl5-Aqt7tcCSB9x6CSxyvik",
            "shortId": "67b1e94e4dd1ef90",
            "spiderX": "",
            "serverName": "icloud.com",
            "fingerprint": "edge",
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
              "address": "155.212.215.3",
              "port": 23335,
              "users": [
                {
                  "id": "e384913f-8863-47b4-8858-a84b68abb4a6",
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
            "publicKey": "7Gi8eiUU9TIVbGuvSU16gl5-Aqt7tcCSB9x6CSxyvik",
            "shortId": "",
            "spiderX": "",
            "serverName": "icloud.com",
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
              "address": "193.46.81.207",
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
            "publicKey": "ca5sfJNcjkh3oNt51hRexXbGWgITAqCprGSU-YKCJBA",
            "shortId": "4daa022e84f8edf2",
            "spiderX": "",
            "serverName": "de.cdn.stun.su",
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
              "address": "172.67.216.218",
              "port": 443,
              "users": [
                {
                  "id": "03896a37-db8f-44ed-8ce1-45a1577f6da6",
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
            "path": "/eyJqdW5rIjoiZzIxRUF6V2JFOW5IRyIsInByb3RvY29sIjoidmwiLCJtb2RlIjoicHJveHlpcCIsInBhbmVsSVBzIjpbXX0=?ed=2560",
            "headers": {
              "Host": "stipulations.gelatin.workers.dev"
            }
          },
          "security": "tls",
          "tlsSettings": {
            "serverName": "stipulations.gelatin.workers.dev",
            "fingerprint": "randomized"
          }
        }
      },
      {
        "tag": "s8",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "172.67.67.139",
              "port": 443,
              "users": [
                {
                  "id": "ad3b1a22-3678-43a4-a0c2-ddd5b7da5b5a",
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
            "path": "/",
            "headers": {
              "Host": "20251127.ldvsmms.dpdns.org"
            }
          },
          "security": "tls",
          "tlsSettings": {
            "serverName": "20251127.ldvsmms.dpdns.org",
            "fingerprint": "chrome"
          }
        }
      },
      {
        "tag": "s9",
        "protocol": "shadowsocks",
        "settings": {
          "servers": [
            {
              "address": "51.11.190.36",
              "port": 443,
              "method": "chacha20-ietf-poly1305",
              "password": "1kVr0KATIJI7mwOF"
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
              "address": "82.38.31.148",
              "port": 8080,
              "method": "chacha20-ietf-poly1305",
              "password": "oZIoA69Q8yhcQV8ka3Pa3A"
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
    "remarks": "🇸🇪 LTE #27 РЕЗЕРВ | @restlyconnect",
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
        "protocol": "shadowsocks",
        "settings": {
          "servers": [
            {
              "address": "149.102.149.207",
              "port": 80,
              "method": "aes-256-gcm",
              "password": "umWwoQJEJGf74SLe"
            }
          ]
        }
      },
      {
        "tag": "s2",
        "protocol": "shadowsocks",
        "settings": {
          "servers": [
            {
              "address": "212.57.115.240",
              "port": 35615,
              "method": "chacha20-ietf-poly1305",
              "password": "N1taxNlHBx4m6kO1yioPOW60B"
            }
          ]
        }
      },
      {
        "tag": "s3",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "155.212.215.3",
              "port": 23335,
              "users": [
                {
                  "id": "e384913f-8863-47b4-8858-a84b68abb4a6",
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
            "publicKey": "7Gi8eiUU9TIVbGuvSU16gl5-Aqt7tcCSB9x6CSxyvik",
            "shortId": "67b1e94e4dd1ef90",
            "spiderX": "",
            "serverName": "icloud.com",
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
              "address": "185.147.26.29",
              "port": 23335,
              "users": [
                {
                  "id": "e384913f-8863-47b4-8858-a84b68abb4a6",
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
            "publicKey": "7Gi8eiUU9TIVbGuvSU16gl5-Aqt7tcCSB9x6CSxyvik",
            "shortId": "",
            "spiderX": "",
            "serverName": "icloud.com",
            "fingerprint": "chrome",
            "show": false
          }
        }
      },
      {
        "tag": "s5",
        "protocol": "shadowsocks",
        "settings": {
          "servers": [
            {
              "address": "154.38.176.7",
              "port": 80,
              "method": "aes-256-gcm",
              "password": "nKeE2ZFWVaE4DyjR"
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
              "address": "212.192.14.226",
              "port": 41968,
              "method": "chacha20-ietf-poly1305",
              "password": "gC7aQv9DsENaVfKzTPDKYV"
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
              "address": "194.233.94.119",
              "port": 80,
              "method": "aes-256-gcm",
              "password": "8t2xeemUtyui4zAv"
            }
          ]
        }
      },
      {
        "tag": "s8",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "185.147.26.14",
              "port": 23335,
              "users": [
                {
                  "id": "e384913f-8863-47b4-8858-a84b68abb4a6",
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
            "publicKey": "7Gi8eiUU9TIVbGuvSU16gl5-Aqt7tcCSB9x6CSxyvik",
            "shortId": "67b1e94e4dd1ef90",
            "spiderX": "",
            "serverName": "icloud.com",
            "fingerprint": "chrome",
            "show": false
          }
        }
      },
      {
        "tag": "s9",
        "protocol": "trojan",
        "settings": {
          "servers": [
            {
              "address": "80.173.231.254",
              "port": 12420,
              "password": "wp9IsiY82uQhcmgNC1eoBM"
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "tls",
          "tlsSettings": {
            "serverName": "www.semanticstaplegun.click",
            "fingerprint": "chrome"
          }
        }
      },
      {
        "tag": "s10",
        "protocol": "shadowsocks",
        "settings": {
          "servers": [
            {
              "address": "209.126.5.209",
              "port": 80,
              "method": "aes-256-gcm",
              "password": "kEVKj1xvgzeEn8AV"
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
    "remarks": "🇸🇪 LTE #28 РЕЗЕРВ | @restlyconnect",
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
              "address": "nl.131311.xyz",
              "port": 29381,
              "users": [
                {
                  "id": "548dd0b6-6204-472d-921a-bd75894bce99",
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
            "publicKey": "X4wgZvyhhu8lgb1w0guY88dufgISNHH0vOvDugXJHB4",
            "shortId": "44646286",
            "spiderX": "",
            "serverName": "learn.microsoft.com",
            "fingerprint": "firefox",
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
              "address": "104.20.57.74",
              "port": 443,
              "users": [
                {
                  "id": "ad3b1a22-3678-43a4-a0c2-ddd5b7da5b5a",
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
            "path": "/",
            "headers": {
              "Host": "20251127.ldvsmms.dpdns.org"
            }
          },
          "security": "tls",
          "tlsSettings": {
            "serverName": "20251127.ldvsmms.dpdns.org",
            "fingerprint": "chrome"
          }
        }
      },
      {
        "tag": "s3",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "45.145.40.26",
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
            "publicKey": "ca5sfJNcjkh3oNt51hRexXbGWgITAqCprGSU-YKCJBA",
            "shortId": "4daa022e84f8edf2",
            "spiderX": "",
            "serverName": "de.cdn.stun.su",
            "fingerprint": "chrome",
            "show": false
          }
        }
      },
      {
        "tag": "s4",
        "protocol": "shadowsocks",
        "settings": {
          "servers": [
            {
              "address": "194.233.75.190",
              "port": 443,
              "method": "aes-256-gcm",
              "password": "qKvfX7yQnT99OMu3"
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
              "address": "162.159.44.22",
              "port": 443,
              "users": [
                {
                  "id": "ad3b1a22-3678-43a4-a0c2-ddd5b7da5b5a",
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
            "path": "/",
            "headers": {
              "Host": "20251127.ldvsmms.dpdns.org"
            }
          },
          "security": "tls",
          "tlsSettings": {
            "serverName": "20251127.ldvsmms.dpdns.org",
            "fingerprint": "chrome"
          }
        }
      },
      {
        "tag": "s6",
        "protocol": "shadowsocks",
        "settings": {
          "servers": [
            {
              "address": "154.53.60.197",
              "port": 80,
              "method": "aes-256-gcm",
              "password": "8rb580EBG4l7tO8K"
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
              "address": "194.233.94.119",
              "port": 443,
              "method": "aes-256-gcm",
              "password": "8t2xeemUtyui4zAv"
            }
          ]
        }
      },
      {
        "tag": "s8",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "144.31.4.213",
              "port": 608,
              "users": [
                {
                  "id": "647e8609-caf9-490e-9e1c-cbe35c010633",
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
            "publicKey": "FscaEWx0paNBzL7GWHj4Fll7Xc-KxdhKgTthBAnByWI",
            "shortId": "",
            "spiderX": "",
            "serverName": "pl-10gb-1.atlanta-internet.com",
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
              "address": "104.18.86.181",
              "port": 443,
              "users": [
                {
                  "id": "ad3b1a22-3678-43a4-a0c2-ddd5b7da5b5a",
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
            "path": "/",
            "headers": {
              "Host": "20251127.ldvsmms.dpdns.org"
            }
          },
          "security": "tls",
          "tlsSettings": {
            "serverName": "20251127.ldvsmms.dpdns.org",
            "fingerprint": "chrome"
          }
        }
      },
      {
        "tag": "s10",
        "protocol": "shadowsocks",
        "settings": {
          "servers": [
            {
              "address": "62.146.171.57",
              "port": 80,
              "method": "aes-256-gcm",
              "password": "jd9FR12wprKPNJHg"
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
    "remarks": "🇸🇪 LTE #29 РЕЗЕРВ | @restlyconnect",
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
              "address": "46.235.186.203",
              "port": 443,
              "users": [
                {
                  "id": "8e0d168b-f984-07d0-865f-88b9a46fb48f",
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
            "path": "//",
            "headers": {
              "Host": "lk-cdn.deploy-assure.ru"
            }
          },
          "security": "tls",
          "tlsSettings": {
            "serverName": "lk-cdn.deploy-assure.ru",
            "fingerprint": "chrome"
          }
        }
      },
      {
        "tag": "s2",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "85.192.26.199",
              "port": 11289,
              "users": [
                {
                  "id": "563e2d29-0120-4fe3-b3ac-a6bfd81714bb",
                  "flow": "",
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
            "publicKey": "hOjTSwilETXS2r_qiigTT5UhRUF-WA1K8vdmnT4gviA",
            "shortId": "2f3afc77",
            "spiderX": "/",
            "serverName": "google.com",
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
              "address": "46.235.186.203",
              "port": 443,
              "users": [
                {
                  "id": "642e5ad8-bd76-07d0-8b5c-b4d0628f07bc",
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
            "path": "//",
            "headers": {
              "Host": "lk-cdn.deploy-assure.ru"
            }
          },
          "security": "tls",
          "tlsSettings": {
            "serverName": "lk-cdn.deploy-assure.ru",
            "fingerprint": "chrome"
          }
        }
      },
      {
        "tag": "s4",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "xhamster.com",
              "port": 2053,
              "users": [
                {
                  "id": "8c4604ef-749c-4b56-adf1-7da405002a21",
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
            "path": "/?ed=2048",
            "headers": {
              "Host": "qyi.fqjd663.ggff.net"
            }
          },
          "security": "tls",
          "tlsSettings": {
            "serverName": "qyi.fqjd663.ggff.net",
            "fingerprint": "randomized"
          }
        }
      },
      {
        "tag": "s5",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "nl1.cyphervpn.pro",
              "port": 443,
              "users": [
                {
                  "id": "5e80ffa4-13fd-11f1-a5fb-0242ac110002",
                  "flow": "",
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
            "publicKey": "EBI5fH-oKyTjvrp7myw7nEGldBpwWth_aEruQ9Msci8",
            "shortId": "5bfa0c",
            "spiderX": "/",
            "serverName": "nl1.cyphervpn.pro",
            "fingerprint": "firefox",
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
              "address": "185.147.26.35",
              "port": 23335,
              "users": [
                {
                  "id": "e384913f-8863-47b4-8858-a84b68abb4a6",
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
            "publicKey": "7Gi8eiUU9TIVbGuvSU16gl5-Aqt7tcCSB9x6CSxyvik",
            "shortId": "67b1e94e4dd1ef90",
            "spiderX": "",
            "serverName": "icloud.com",
            "fingerprint": "chrome",
            "show": false
          }
        }
      },
      {
        "tag": "s7",
        "protocol": "shadowsocks",
        "settings": {
          "servers": [
            {
              "address": "154.12.242.150",
              "port": 80,
              "method": "aes-256-gcm",
              "password": "7vZO55fXgXAJXa2F"
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
              "address": "154.12.240.141",
              "port": 80,
              "method": "aes-256-gcm",
              "password": "mK7eN3z276Tr0vVA"
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
              "address": "meow-amsterdam.nethcloud.top",
              "port": 443,
              "users": [
                {
                  "id": "d6415904-ebd7-43da-a4a0-26a627aa20fb",
                  "flow": "",
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
            "publicKey": "1HeKf_8KDjfzXfUi9P7WBaGStMvr96TKdUbofpkwBzQ",
            "shortId": "8bd29483ded126b4",
            "spiderX": "",
            "serverName": "wikihow.com",
            "fingerprint": "chrome",
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
              "address": "104.160.42.64",
              "port": 38334,
              "users": [
                {
                  "id": "c9d7993a-d7fc-4ce5-9877-6567f174f1ef",
                  "flow": "",
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
            "publicKey": "xuPFNxANd1sLkWSgmtHKYs4Ha_IHOPYbTw75zyQIcgs",
            "shortId": "253c19",
            "spiderX": "",
            "serverName": "tesla.com",
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
    "remarks": "🇸🇪 LTE #30 РЕЗЕРВ | @restlyconnect",
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
        "protocol": "shadowsocks",
        "settings": {
          "servers": [
            {
              "address": "46.250.254.170",
              "port": 443,
              "method": "aes-256-gcm",
              "password": "BedufgztHO3B5Kqe"
            }
          ]
        }
      },
      {
        "tag": "s2",
        "protocol": "shadowsocks",
        "settings": {
          "servers": [
            {
              "address": "94.72.127.55",
              "port": 80,
              "method": "aes-256-gcm",
              "password": "wlJSF0fC8uqB5Gm5"
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
              "address": "154.53.57.143",
              "port": 80,
              "method": "aes-256-gcm",
              "password": "uwmRUOVM5ljNAtPj"
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
              "address": "154.26.155.172",
              "port": 80,
              "method": "aes-256-gcm",
              "password": "SL4vzcvhBHhTWivD"
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
              "address": "103.106.228.175",
              "port": 8009,
              "method": "aes-256-gcm",
              "password": "XKFKl2rULjIp74"
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
              "address": "94.72.127.58",
              "port": 80,
              "method": "aes-256-gcm",
              "password": "jJHq807bQ7TM0yOh"
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
              "address": "us.192542.xyz",
              "port": 47282,
              "users": [
                {
                  "id": "548dd0b6-6204-472d-921a-bd75894bce99",
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
            "publicKey": "BkVtuHsgeZG2rJ5a_mBRwTsGZAKLHfj4_i3ebbfXml8",
            "shortId": "965dcd8b",
            "spiderX": "",
            "serverName": "www.ucla.edu",
            "fingerprint": "firefox",
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
              "address": "31.170.22.193",
              "port": 47997,
              "users": [
                {
                  "id": "92a44118-95ea-47e3-bca7-95352f484077",
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
            "publicKey": "cFora2YYa3aZdpWW8vMD9iX97qRKtyLzXv4pWgXoh20",
            "shortId": "ead461",
            "spiderX": "",
            "serverName": "apple.com",
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
              "address": "bj.131311.xyz",
              "port": 30011,
              "users": [
                {
                  "id": "548dd0b6-6204-472d-921a-bd75894bce99",
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
            "publicKey": "H3Ct3p5A6Av_rEZE1v8OxtMDIB7rXM08IiHoDuki-HQ",
            "shortId": "de94d2fa",
            "spiderX": "",
            "serverName": "sg.131311.xyz",
            "fingerprint": "ios",
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
              "address": "bj.131311.xyz",
              "port": 30028,
              "users": [
                {
                  "id": "548dd0b6-6204-472d-921a-bd75894bce99",
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
            "publicKey": "V17q6kBvaQkWTzM0kUOYDAO_TVSjVJhhyA6VW3pqWQg",
            "shortId": "8b9a5f13",
            "spiderX": "",
            "serverName": "limeejp.131311.xyz",
            "fingerprint": "safari",
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
    "remarks": "🇸🇪 LTE #31 РЕЗЕРВ | @restlyconnect",
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
              "address": "116.80.44.144",
              "port": 27724,
              "users": [
                {
                  "id": "ebd8539d-e249-4a39-8f90-e8585e8cc35e",
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
            "publicKey": "rYH4wPTVzSwtpXgI3U7YxppIP6oudD-425vT7pyhj1w",
            "shortId": "",
            "spiderX": "",
            "serverName": "www.yahoo.co.jp",
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
              "address": "bj.131311.xyz",
              "port": 30010,
              "users": [
                {
                  "id": "548dd0b6-6204-472d-921a-bd75894bce99",
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
            "publicKey": "vWcI0cbWDFw7_r8X8Nwg94n8grrmKcDER1WpRppEx04",
            "shortId": "9743e49a",
            "spiderX": "",
            "serverName": "d1--ov-gotcha07.bilivideo.com",
            "fingerprint": "chrome",
            "show": false
          }
        }
      },
      {
        "tag": "s3",
        "protocol": "shadowsocks",
        "settings": {
          "servers": [
            {
              "address": "46.250.254.170",
              "port": 80,
              "method": "aes-256-gcm",
              "password": "BedufgztHO3B5Kqe"
            }
          ]
        }
      },
      {
        "tag": "s4",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "116.80.44.144",
              "port": 27724,
              "users": [
                {
                  "id": "ebd8539d-e249-4a39-8f90-e8585e8cc35e",
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
            "publicKey": "rYH4wPTVzSwtpXgI3U7YxppIP6oudD-425vT7pyhj1w",
            "shortId": "",
            "spiderX": "",
            "serverName": "www.yahoo.co.jp",
            "fingerprint": "chrome",
            "show": false
          }
        }
      },
      {
        "tag": "s5",
        "protocol": "shadowsocks",
        "settings": {
          "servers": [
            {
              "address": "154.223.16.41",
              "port": 4444,
              "method": "aes-256-gcm",
              "password": "pKEW8JPByTVTLtM"
            }
          ]
        }
      },
      {
        "tag": "s6",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "bj.131311.xyz",
              "port": 30131,
              "users": [
                {
                  "id": "548dd0b6-6204-472d-921a-bd75894bce99",
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
            "publicKey": "UO-3rpzHj9I4z-ZP2ZYnSQBSEdxhKkCFKIpzJuuPeTc",
            "shortId": "7db124ff",
            "spiderX": "",
            "serverName": "jpbw.131311.xyz",
            "fingerprint": "safari",
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
              "address": "84.201.128.76",
              "port": 443,
              "users": [
                {
                  "id": "400c1f85-9d3a-444a-8a50-81b11f3b4c20",
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
            "publicKey": "66kZLshj9fxAIQA7NsABohNwgiOcY71enc6as_Frqw0",
            "shortId": "3c1523da43287ec4",
            "spiderX": "",
            "serverName": "smartcaptcha.yandexcloud.net",
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
              "address": "media.mothyleela.cfd",
              "port": 40521,
              "method": "chacha20-ietf-poly1305",
              "password": "2WkRGh6tAv8UmsHh4i3F6zosj2dzA6sCzXbwq4TdXteztMfyA5aZcLy5jY5Z7FZ3QQMcTVwM7TvibdvzYircC7iDZafp2U6z"
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
              "address": "media.mothyleela.cfd",
              "port": 40521,
              "method": "chacha20-ietf-poly1305",
              "password": "LYW2w9fwdrwj2qC9NyTBuBNKQJUvkKnCp9UxVnFW6LqeSpiCcnzV1cMohBUnCCWBkjkp83rV9wWeYQQqUZwMuYu1YyCt17tW"
            }
          ]
        }
      },
      {
        "tag": "s10",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "bj.131311.xyz",
              "port": 30000,
              "users": [
                {
                  "id": "548dd0b6-6204-472d-921a-bd75894bce99",
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
            "publicKey": "zQ4Hsy7oS4lBC1XwnxLli3hy2EzfUBRcmEDW6kHc7hc",
            "shortId": "0d3e9a53",
            "spiderX": "",
            "serverName": "hytron1.131311.xyz",
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
    "remarks": "🇸🇪 LTE #32 РЕЗЕРВ | @restlyconnect",
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
              "address": "bj.131311.xyz",
              "port": 30004,
              "users": [
                {
                  "id": "548dd0b6-6204-472d-921a-bd75894bce99",
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
            "publicKey": "WBeSKEjMI3XDm5P4hR2Ll_CX5MxNkrJ-3gjDBZKpqDk",
            "shortId": "879c22cf",
            "spiderX": "",
            "serverName": "learn.microsoft.com",
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
              "address": "193.46.81.73",
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
            "publicKey": "ca5sfJNcjkh3oNt51hRexXbGWgITAqCprGSU-YKCJBA",
            "shortId": "4daa022e84f8edf2",
            "spiderX": "",
            "serverName": "de.cdn.stun.su",
            "fingerprint": "chrome",
            "show": false
          }
        }
      },
      {
        "tag": "s3",
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
        "tag": "s4",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "31.170.22.193",
              "port": 47997,
              "users": [
                {
                  "id": "7177f5c4-f26a-4ab5-820f-62cb6ba649f7",
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
            "publicKey": "cFora2YYa3aZdpWW8vMD9iX97qRKtyLzXv4pWgXoh20",
            "shortId": "ead461",
            "spiderX": "",
            "serverName": "apple.com",
            "fingerprint": "chrome",
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
              "address": "bj.131311.xyz",
              "port": 30014,
              "users": [
                {
                  "id": "548dd0b6-6204-472d-921a-bd75894bce99",
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
            "publicKey": "SEhWbptIrw_kv9iT7YnJfkfb3bVd0lYGHmLiIE9WcV8",
            "shortId": "943267ba",
            "spiderX": "",
            "serverName": "bageus.131311.xyz",
            "fingerprint": "firefox",
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
              "address": "bj.131311.xyz",
              "port": 30006,
              "users": [
                {
                  "id": "548dd0b6-6204-472d-921a-bd75894bce99",
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
            "publicKey": "sOiTt1s_Thc6RBiJt9WnaXV3h47i3tvqoHMPJxSYcmQ",
            "shortId": "70a381bd",
            "spiderX": "",
            "serverName": "sakura-us.131311.xyz",
            "fingerprint": "safari",
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
              "address": "bj.131311.xyz",
              "port": 30013,
              "users": [
                {
                  "id": "548dd0b6-6204-472d-921a-bd75894bce99",
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
            "publicKey": "DeozPD7vUXPDhDu6pourZFfuxdcMiPF-G7PJmJj7QUQ",
            "shortId": "13cb9df1",
            "spiderX": "",
            "serverName": "learn.microsoft.com",
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
              "address": "bj.131311.xyz",
              "port": 30009,
              "users": [
                {
                  "id": "548dd0b6-6204-472d-921a-bd75894bce99",
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
            "publicKey": "9X-wTDg3TJChZsb_PQ_ilvI2Ai03V9klj9Mn69wwtDg",
            "shortId": "8d4a1005",
            "spiderX": "",
            "serverName": "learn.microsoft.com",
            "fingerprint": "edge",
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
              "address": "31.170.22.193",
              "port": 47997,
              "users": [
                {
                  "id": "b3172ad4-d309-47b2-9e1a-12fbc16fd963",
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
            "publicKey": "cFora2YYa3aZdpWW8vMD9iX97qRKtyLzXv4pWgXoh20",
            "shortId": "ead461",
            "spiderX": "/",
            "serverName": "apple.com",
            "fingerprint": "qq",
            "show": false
          }
        }
      },
      {
        "tag": "s10",
        "protocol": "shadowsocks",
        "settings": {
          "servers": [
            {
              "address": "82.38.31.190",
              "port": 8080,
              "method": "chacha20-ietf-poly1305",
              "password": "k1dBOmOB4oqi7Ump37a1bQ"
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
    "remarks": "🇸🇪 LTE #33 РЕЗЕРВ | @restlyconnect",
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
        "protocol": "shadowsocks",
        "settings": {
          "servers": [
            {
              "address": "144.126.145.77",
              "port": 80,
              "method": "aes-256-gcm",
              "password": "QzM0NfuMNngbVnZK"
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
              "address": "bj.131311.xyz",
              "port": 30007,
              "users": [
                {
                  "id": "548dd0b6-6204-472d-921a-bd75894bce99",
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
            "publicKey": "j-7j9aoeZOrWyOiENJX9DRhCH-xzEFXcTY0IrDQTWxY",
            "shortId": "31271175",
            "spiderX": "",
            "serverName": "alice-us.131311.xyz",
            "fingerprint": "firefox",
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
              "address": "bj.131311.xyz",
              "port": 30048,
              "users": [
                {
                  "id": "548dd0b6-6204-472d-921a-bd75894bce99",
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
            "publicKey": "o375zKhPAac36_KTn4Q2sBCRGP2w_nJn3i2ZKl4KDU0",
            "shortId": "54eaa3a2",
            "spiderX": "",
            "serverName": "learn.microsoft.com",
            "fingerprint": "chrome",
            "show": false
          }
        }
      },
      {
        "tag": "s4",
        "protocol": "trojan",
        "settings": {
          "servers": [
            {
              "address": "153.121.65.107",
              "port": 4920,
              "password": "262f1d150049457ac1d6e66b020fa980"
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "tls",
          "tlsSettings": {
            "serverName": "www.nintendogames.net",
            "fingerprint": "chrome"
          }
        }
      },
      {
        "tag": "s5",
        "protocol": "shadowsocks",
        "settings": {
          "servers": [
            {
              "address": "107.181.147.235",
              "port": 40521,
              "method": "chacha20-ietf-poly1305",
              "password": "Z94FoM1xpW3CJzixME8CjJEFBiCFhKSWfLzT6E92Pjh7y73YfNrwPju46Gd4HE85eXSjNiTtiAYc6WTskuhxZZFebd4rcXfp"
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
              "address": "185.5.38.111",
              "port": 55988,
              "method": "chacha20-ietf-poly1305",
              "password": "bg9rGNza4dcmnDAXMiBaa4pUf9q8fc2EDePQ96UDfJrmohfvK7L27bLsJW2jikJPw97LYW76ypYK347TtUKZ6ebkw5Zf6C4s"
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
              "address": "185.5.38.111",
              "port": 55988,
              "method": "chacha20-ietf-poly1305",
              "password": "wUcoYw1SAVnxhKb1PGmqe69uCJjggJoDogXfPCmDCkvhnM1mJbExnxJethPBEiC49dsUdurRBCn9gh2U231vYAyYPSwtYAaw"
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
              "address": "185.5.38.111",
              "port": 55988,
              "method": "chacha20-ietf-poly1305",
              "password": "ZEZ2bfFbViC9usN1WB4xqvyzEuUhPA2uuUYZmjKAWTQc3mErhCaVHmZbbWgVG9oi1VHhz12KP2gAWC8LZJ4imWhypAD9PG3u"
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
              "address": "185.5.38.111",
              "port": 55988,
              "method": "chacha20-ietf-poly1305",
              "password": "2CYTbbAxJMWdzMxePpCMDjkub13CDxU2BqaJzb1Zt3HBYGWsfKwNgQKhzEa7uAJut74Bj4fhiwJ6CKFBu4MiQ43QEe9xD2u7"
            }
          ]
        }
      },
      {
        "tag": "s10",
        "protocol": "trojan",
        "settings": {
          "servers": [
            {
              "address": "220.130.58.136",
              "port": 31101,
              "password": "bef1e608-83df-4935-8169-8a345f5643e9"
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "tls",
          "tlsSettings": {
            "serverName": "green2.cdntencentmusic.com",
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
    "remarks": "🇸🇪 LTE #34 РЕЗЕРВ | @restlyconnect",
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
        "protocol": "shadowsocks",
        "settings": {
          "servers": [
            {
              "address": "107.181.151.147",
              "port": 43669,
              "method": "chacha20-ietf-poly1305",
              "password": "23sUrwRcTBEAvxLS6VM6Aay57KQbws1upDAxr7Btf4hXu4gaUQW4BPbComjJjStM2JqJLDwVkteXL8V33k8eWkZR4UB8intz"
            }
          ]
        }
      },
      {
        "tag": "s2",
        "protocol": "shadowsocks",
        "settings": {
          "servers": [
            {
              "address": "mx2.drawnrisha.one",
              "port": 55988,
              "method": "chacha20-ietf-poly1305",
              "password": "UoaSgFv5z3i7XKz6h1KXCSZQmCa463i1smTuZv5tqVnRQvHa3RBFCXuefGzjGCDikoMNz64kELgiC8i7WtXy6t6CNzsd8kLG"
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
    "remarks": "🇸🇪 LTE #35 РЕЗЕРВ | @restlyconnect",
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
  res.setHeader("announce", "UPD: 28.02.2026 23:36 | tgk: @restlyconnect");
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.end(JSON.stringify(config));
};
