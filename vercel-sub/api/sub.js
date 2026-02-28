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
        "tag": "s2",
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
        "tag": "s3",
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
        "tag": "s4",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "5.188.141.67",
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
        "tag": "s6",
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
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "4CH3o5zOMcFNMbnwXnkAg0FFepmsc0QzhahXkUzb1ik",
            "shortId": "d8c6b58bcbb0c323",
            "spiderX": "",
            "serverName": "max.ru",
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
              "address": "5.188.141.18",
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
        "tag": "s9",
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
        "tag": "s10",
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
              "address": "84.201.131.144",
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
            "serverName": "sun6-22.userapi.com",
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
        "tag": "s5",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "89.208.228.139",
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
        "tag": "s7",
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
        "tag": "s8",
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
        "tag": "s9",
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
        "tag": "s10",
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
        "tag": "s4",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "89.208.228.167",
              "port": 443,
              "users": [
                {
                  "id": "17c4e377-ea15-0bb8-98b2-3e348c9ff5d9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
        "tag": "s6",
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
        "tag": "s8",
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
                  "id": "17c4e377-ea15-0bb8-98b2-3e348c9ff5d9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
        "tag": "s2",
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
        "tag": "s4",
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
              "address": "access-fl11.agveit.pro",
              "port": 443,
              "users": [
                {
                  "id": "ffc7f5a9-a1f5-446b-abe0-a841a04f4240",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "MWyWBA3FkRbHpx22T5whQ8HwYwBYw1FPbWO6XleQyxE",
            "shortId": "84c765699d5339c8",
            "spiderX": "",
            "serverName": "queuev4.vk.com",
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
              "address": "37.139.33.125",
              "port": 443,
              "users": [
                {
                  "id": "17c4e377-ea15-0bb8-98b2-3e348c9ff5d9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "91.217.10.166",
              "port": 9443,
              "users": [
                {
                  "id": "1b56fcd0-2bdf-4d1e-a09f-736e39baa1b4",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "WvNaAxI0W__qfUKbtysH4IwF155YENlv3PG6crCmPkA",
            "shortId": "",
            "spiderX": "",
            "serverName": "api.avito.ru",
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
        "tag": "s3",
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
        "tag": "s4",
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
              "address": "95.163.210.159",
              "port": 80,
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
        "tag": "s7",
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
        "tag": "s8",
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
        "tag": "s9",
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
        "tag": "s10",
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
              "address": "109.120.188.156",
              "port": 443,
              "users": [
                {
                  "id": "17c4e377-ea15-0bb8-98b2-3e348c9ff5d9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
        "tag": "s5",
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
        "tag": "s6",
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
        "tag": "s7",
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
        "tag": "s8",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "178.154.222.55",
              "port": 8443,
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
        "tag": "s9",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "5.188.141.131",
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
              "address": "109.120.189.142",
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
        "tag": "s3",
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
        "tag": "s4",
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
            "shortId": "4b523a98e1bbd15b",
            "spiderX": "",
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
            "shortId": "d17bd238f23fba92",
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
            "shortId": "a76ea384b29a4f79",
            "spiderX": "/",
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
            "shortId": "e55fd8f9c9a9a0ca",
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
        "tag": "s2",
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
        "tag": "s3",
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
        "tag": "s4",
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
              "address": "51.250.43.209",
              "port": 8080,
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
              "address": "95.163.210.159",
              "port": 443,
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
        "tag": "s7",
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
            "shortId": "87cc0414902bee2d",
            "spiderX": "",
            "serverName": "ads.x5.ru",
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
              "address": "51.250.43.209",
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
        "tag": "s10",
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
        "tag": "s2",
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
        "tag": "s5",
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
              "address": "109.120.189.145",
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
        "tag": "s7",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "178.154.222.55",
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
        "tag": "s8",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "5.188.141.131",
              "port": 443,
              "users": [
                {
                  "id": "17c4e377-ea15-0bb8-98b2-3e348c9ff5d9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "89.208.228.139",
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
        "tag": "s3",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.43.209",
              "port": 8080,
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
        "tag": "s4",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "37.139.33.125",
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
        "tag": "s5",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "access-fl21.agveit.pro",
              "port": 443,
              "users": [
                {
                  "id": "ffc7f5a9-a1f5-446b-abe0-a841a04f4240",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "mrJIDpjeflH1MlMAay2yTm7A4hb89ZrJR7xtJufisAE",
            "shortId": "b68b2c6feedc0c05",
            "spiderX": "",
            "serverName": "queuev4.vk.com",
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
              "address": "94.131.105.12",
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
            "publicKey": "Z84J2IelR9ch3k8VtlVhhs5ycBUlXA7wHBWcBrjqnAw",
            "shortId": "6ba85179e30d4fc2",
            "spiderX": "",
            "serverName": "stats.vk-portal.net",
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
            "shortId": "17802e8ff84f12df",
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
              "address": "95.163.210.159",
              "port": 443,
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
              "address": "37.139.33.125",
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
            "spiderX": "/T.me/ProxyVPN11-T.me/ProxyVPN11-T.me/ProxyVPN11-T.me/ProxyVPN11-T.me/ProxyVPN11-T.me/ProxyVPN11-T.me/ProxyVPN11-T.me/ProxyVPN11",
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
              "address": "95.163.208.234",
              "port": 8443,
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
        "tag": "s3",
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
        "tag": "s4",
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
        "tag": "s5",
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
        "tag": "s6",
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
        "tag": "s8",
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
            "shortId": "4a3ad88ff867a295",
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
              "address": "45.86.70.95",
              "port": 8443,
              "users": [
                {
                  "id": "1e45a266-9a04-47af-b703-e53a67373cc9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "zQ3SBKNWRtAsrnU-Y2XiSEHodF_sgZ3UsKNfmIwRbjI",
            "shortId": "9ff26c38f9b488",
            "spiderX": "/",
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
            "shortId": "33554379411b3219",
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
        "tag": "s6",
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
        "tag": "s7",
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
            "shortId": "17f0f0e38f01af5a",
            "spiderX": "/",
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
              "address": "95.163.210.159",
              "port": 8080,
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
        "tag": "s10",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "access-fl6.agveit.pro",
              "port": 443,
              "users": [
                {
                  "id": "ffc7f5a9-a1f5-446b-abe0-a841a04f4240",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "lt5gNjKRGZ9LL-z53OgfKn4-LRVqL_yZUEC3xwOrbwY",
            "shortId": "02c9f1564ed801ac",
            "spiderX": "",
            "serverName": "queuev4.vk.com",
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
              "address": "95.163.211.13",
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
        "tag": "s3",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "178.154.222.55",
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
        "tag": "s4",
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
        "tag": "s8",
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
        "tag": "s9",
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
        "tag": "s10",
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
  }
];

  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("profile-title", "RestlyConnect");
  res.setHeader("support-url", "https://t.me/restlyconnect");
  res.setHeader("profile-update-interval", "24");
  res.setHeader("announce", "UPD: 28.02.2026 18:59 | tgk: @restlyconnect");
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.end(JSON.stringify(config));
};
