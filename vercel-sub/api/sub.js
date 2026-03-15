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
              "address": "109.120.190.254",
              "port": 443,
              "users": [
                {
                  "id": "65259548-1d98-07d0-a7f9-1937927c68e9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "109.120.188.201",
              "port": 443,
              "users": [
                {
                  "id": "65259548-1d98-07d0-a7f9-1937927c68e9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "5.188.143.51",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-07d0-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "146.185.242.72",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-07d0-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "5.188.143.49",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-1b58-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "89.208.231.133",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-07d0-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "89.208.229.144",
              "port": 443,
              "users": [
                {
                  "id": "65259548-1d98-0bb8-a7f9-1937927c68e9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "109.120.190.247",
              "port": 443,
              "users": [
                {
                  "id": "65259548-1d98-07d0-a7f9-1937927c68e9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "5.188.141.139",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-07d0-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "5.188.140.178",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-07d0-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
    "remarks": "🇷🇺#1 LTE | @restlyconnect",
    "burstObservatory": {
      "pingConfig": {
        "destination": "https://www.google.com/generate_204",
        "interval": "1s",
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
              "address": "37.139.34.228",
              "port": 443,
              "users": [
                {
                  "id": "65259548-1d98-07d0-a7f9-1937927c68e9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "89.208.229.144",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-07d0-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "109.120.191.8",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-03e8-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "89.208.229.144",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-0bb8-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "37.139.35.50",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-07d0-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "5.188.141.239",
              "port": 443,
              "users": [
                {
                  "id": "65259548-1d98-2710-a7f9-1937927c68e9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "89.208.231.91",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-07d0-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "37.139.35.50",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-2710-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "pl.vpnpplvpn.top",
              "port": 443,
              "users": [
                {
                  "id": "41c1ad13-8363-4722-94ff-8e7ab4602ba1",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "yEay1KzCLVZfYOIDhyJiqVIY2MIHaz8nCdSt9TeKIWY",
            "shortId": "a897aa6a992b7acc",
            "spiderX": "",
            "serverName": "waw.vpnforppl.top",
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
              "address": "146.185.240.88",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-01f4-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
    "remarks": "🇷🇺#2 LTE | @restlyconnect",
    "burstObservatory": {
      "pingConfig": {
        "destination": "https://www.google.com/generate_204",
        "interval": "1s",
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
              "address": "146.185.240.139",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-03e8-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "109.120.191.8",
              "port": 443,
              "users": [
                {
                  "id": "65259548-1d98-03e8-a7f9-1937927c68e9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "37.139.34.90",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-07d0-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "5.188.141.170",
              "port": 443,
              "users": [
                {
                  "id": "65259548-1d98-07d0-a7f9-1937927c68e9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
            "serverName": "sun6-22.userapi.com",
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
              "address": "5.188.141.137",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-2710-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "109.120.188.115",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-03e8-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "109.120.191.8",
              "port": 443,
              "users": [
                {
                  "id": "65259548-1d98-01f4-a7f9-1937927c68e9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "109.120.191.8",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-01f4-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "51.250.94.211",
              "port": 443,
              "users": [
                {
                  "id": "cc58e2af-0244-440c-987a-90f424662eb0",
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
            "publicKey": "xBU5EmUOBUUZTUwgq5Td9MeMNGbV_64SGpSD79af7Q4",
            "shortId": "879359db",
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
              "address": "90.156.216.193",
              "port": 8443,
              "users": [
                {
                  "id": "5b58ff6d-ab11-4929-8994-2db366fc70ee",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "8qHRGcCezzSu4S-Cz9l19BNRLWm4MkaSwZV3dNrLEwc",
            "shortId": "d037f6f67cc90016",
            "spiderX": "",
            "serverName": "rbc.ru",
            "fingerprint": "random",
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
    "remarks": "🇷🇺#3 LTE | @restlyconnect",
    "burstObservatory": {
      "pingConfig": {
        "destination": "https://www.google.com/generate_204",
        "interval": "1s",
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
              "address": "83.166.248.68",
              "port": 443,
              "users": [
                {
                  "id": "45686761-5a47-40c0-a982-a06233f9d64e",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "GP8Kqy3mEM26xh2VFg2TzRRlYZEOdEggGnajFqWVtyY",
            "shortId": "9f8c375b65b54c79",
            "spiderX": "",
            "serverName": "rustyanchor.cvs-a.com",
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
              "address": "5.188.142.57",
              "port": 443,
              "users": [
                {
                  "id": "65259548-1d98-07d0-a7f9-1937927c68e9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "146.185.240.139",
              "port": 443,
              "users": [
                {
                  "id": "65259548-1d98-01f4-a7f9-1937927c68e9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "146.185.240.139",
              "port": 443,
              "users": [
                {
                  "id": "65259548-1d98-03e8-a7f9-1937927c68e9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "51.250.10.215",
              "port": 7443,
              "users": [
                {
                  "id": "7fc953d6-ae75-46fb-a970-10b57d513487",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "BTkKaFt2xac4xAHn3EXrBKV0d8ItHSfciMFnxg57BGA",
            "shortId": "fd88bd27db4cc661",
            "spiderX": "",
            "serverName": "eh.vk.com",
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
              "address": "nexustech.cvs-a.com",
              "port": 443,
              "users": [
                {
                  "id": "45686761-5a47-40c0-a982-a06233f9d64e",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "cjNBGKxK4oVwHZKhaXP1nF7lBGAgyU88SLk8otOClFc",
            "shortId": "4c61a231d5b63985",
            "spiderX": "",
            "serverName": "nexustech.cvs-a.com",
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
              "address": "146.185.242.113",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-1f40-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "5.188.142.57",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-07d0-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "ledgerco.cvs-a.com",
              "port": 443,
              "users": [
                {
                  "id": "45686761-5a47-40c0-a982-a06233f9d64e",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "vOd_NI6gy70Kk8fbRE-NtVdoRw7sjwaYWFnLlHFm9So",
            "shortId": "9284369e884d2c5d",
            "spiderX": "",
            "serverName": "ledgerco.cvs-a.com",
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
              "address": "94.126.207.245",
              "port": 443,
              "users": [
                {
                  "id": "56022eef-4ade-4240-b0cc-eb006797e7ac",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "V32osv0u9T3QItvyk4UgK-mjJuXkXLn4u_3pbk8eNgs",
            "shortId": "9339",
            "spiderX": "",
            "serverName": "api.vk.com",
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
    "remarks": "🇷🇺#4 LTE | @restlyconnect",
    "burstObservatory": {
      "pingConfig": {
        "destination": "https://www.google.com/generate_204",
        "interval": "1s",
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
              "address": "5.188.143.49",
              "port": 443,
              "users": [
                {
                  "id": "65259548-1d98-1f40-a7f9-1937927c68e9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "89.208.229.10",
              "port": 443,
              "users": [
                {
                  "id": "65259548-1d98-1f40-a7f9-1937927c68e9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "90.156.216.193",
              "port": 8443,
              "users": [
                {
                  "id": "f8087787-3c62-490b-a67a-8bf36ddd4f3e",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "8qHRGcCezzSu4S-Cz9l19BNRLWm4MkaSwZV3dNrLEwc",
            "shortId": "445ab326fc7c90ac",
            "spiderX": "",
            "serverName": "rbc.ru",
            "fingerprint": "random",
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
              "address": "83.166.252.150",
              "port": 59999,
              "users": [
                {
                  "id": "1609d73a-aad5-4215-b25d-908e3e3412de",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "x0t1otRGBv62aJKGNbsQRJGtwh-sp6CEScFS6S8y3EM",
            "shortId": "a1b2c3d4",
            "spiderX": "",
            "serverName": "yastatic.net",
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
              "address": "83.166.255.111",
              "port": 48444,
              "users": [
                {
                  "id": "5c1aa0fb-a26c-4649-bc1d-1da3ab14a222",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "FApUbcJurXfV5Y3PG2xRycl1R7y0CxwmUU7FRgUpzG0",
            "shortId": "2f19c0a1",
            "spiderX": "",
            "serverName": "eh.vk.com",
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
              "address": "94.131.104.93",
              "port": 8443,
              "users": [
                {
                  "id": "cadadce7-0daa-44c1-9f7a-05fe4ebcbb30",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "7HejPU15kdTl9QG_8AygEM3w0ythsbhG6q_SwUumyR0",
            "shortId": "f1071c148a5aefc4",
            "spiderX": "",
            "serverName": "rbc.ru",
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
              "address": "37.139.34.90",
              "port": 443,
              "users": [
                {
                  "id": "65259548-1d98-07d0-a7f9-1937927c68e9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "5.188.142.210",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-0bb8-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "146.185.242.124",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-07d0-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "rustyanchor.cvs-a.com",
              "port": 443,
              "users": [
                {
                  "id": "45686761-5a47-40c0-a982-a06233f9d64e",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "GP8Kqy3mEM26xh2VFg2TzRRlYZEOdEggGnajFqWVtyY",
            "shortId": "9f8c375b65b54c79",
            "spiderX": "",
            "serverName": "rustyanchor.cvs-a.com",
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
    "remarks": "🇷🇺#5 LTE | @restlyconnect",
    "burstObservatory": {
      "pingConfig": {
        "destination": "https://www.google.com/generate_204",
        "interval": "1s",
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
              "address": "109.120.190.247",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-07d0-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "5.188.141.170",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-07d0-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
            "serverName": "sun6-22.userapi.com",
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
              "address": "5.188.141.137",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-0bb8-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "45.15.147.36",
              "port": 8443,
              "users": [
                {
                  "id": "44816d87-c65b-4add-b24b-9f9528ebb780",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "2Vuelt7UwEFxyDOOWq3SlU26qDO8t6E7afKnZYqXVQM",
            "shortId": "5491ee0b49e7113b",
            "spiderX": "",
            "serverName": "sni.ru-pq-01.com",
            "fingerprint": "random",
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
              "address": "194.104.94.197",
              "port": 8443,
              "users": [
                {
                  "id": "45b65e9b-4700-475d-b5db-b52ced3a2825",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "rSSwQsGBtFQ1R3Clbg4wtd_3Fqn6JWJ06UajczdrO2A",
            "shortId": "6c889aef11f9e2f5",
            "spiderX": "",
            "serverName": "swe.pagervpn.online",
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
              "address": "89.208.230.42",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-0bb8-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "89.208.231.91",
              "port": 443,
              "users": [
                {
                  "id": "65259548-1d98-07d0-a7f9-1937927c68e9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "5.188.141.170",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-2af8-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
            "serverName": "sun6-22.userapi.com",
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
              "address": "194.36.39.57",
              "port": 8443,
              "users": [
                {
                  "id": "cadadce7-0daa-44c1-9f7a-05fe4ebcbb30",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "7HejPU15kdTl9QG_8AygEM3w0ythsbhG6q_SwUumyR0",
            "shortId": "f1071c148a5aefc4",
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
              "address": "146.185.240.88",
              "port": 443,
              "users": [
                {
                  "id": "65259548-1d98-01f4-a7f9-1937927c68e9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
    "remarks": "🇷🇺#6 LTE | @restlyconnect",
    "burstObservatory": {
      "pingConfig": {
        "destination": "https://www.google.com/generate_204",
        "interval": "1s",
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
              "address": "5.188.140.178",
              "port": 443,
              "users": [
                {
                  "id": "65259548-1d98-07d0-a7f9-1937927c68e9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "193.43.146.11",
              "port": 8443,
              "users": [
                {
                  "id": "cadadce7-0daa-44c1-9f7a-05fe4ebcbb30",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "7HejPU15kdTl9QG_8AygEM3w0ythsbhG6q_SwUumyR0",
            "shortId": "f1071c148a5aefc4",
            "spiderX": "",
            "serverName": "rbc.ru",
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
              "address": "193.43.146.28",
              "port": 8443,
              "users": [
                {
                  "id": "cadadce7-0daa-44c1-9f7a-05fe4ebcbb30",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "7HejPU15kdTl9QG_8AygEM3w0ythsbhG6q_SwUumyR0",
            "shortId": "f1071c148a5aefc4",
            "spiderX": "",
            "serverName": "rbc.ru",
            "fingerprint": "random",
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
              "address": "84.201.131.127",
              "port": 443,
              "users": [
                {
                  "id": "d8832127-2d9a-4d23-b4dc-4832617c192f",
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
            "publicKey": "uVsDY3ft-suwyGt5qSR5-rlzGJbx9QtwYg4zXPf8-Q4",
            "shortId": "ecbdb663f870",
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
              "address": "51.250.110.102",
              "port": 443,
              "users": [
                {
                  "id": "45b65e9b-4700-475d-b5db-b52ced3a2825",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "73as9TxE3BluRyOFwd6_cLBQuF-flH_I1nRuyQxy4ik",
            "shortId": "b88d9c5d2154b575",
            "spiderX": "",
            "serverName": "ads.x5.ru",
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
              "address": "82.22.40.58",
              "port": 8443,
              "users": [
                {
                  "id": "5c1aa0fb-a26c-4649-bc1d-1da3ab14a222",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "98GUVpWw96tdeGtjIOHXmkklpeA72qQQJoxxyfJ1yTo",
            "shortId": "deadbeef",
            "spiderX": "",
            "serverName": "ya.ru",
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
              "address": "89.208.229.144",
              "port": 443,
              "users": [
                {
                  "id": "65259548-1d98-2710-a7f9-1937927c68e9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "89.208.229.144",
              "port": 443,
              "users": [
                {
                  "id": "65259548-1d98-07d0-a7f9-1937927c68e9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "146.185.242.113",
              "port": 443,
              "users": [
                {
                  "id": "65259548-1d98-1f40-a7f9-1937927c68e9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "85.239.33.203",
              "port": 7443,
              "users": [
                {
                  "id": "45b65e9b-4700-475d-b5db-b52ced3a2825",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "2VVgsWdhsGOHo3vqkxxcsubdx6h-ACcBumaYDxsutBs",
            "shortId": "2c1fa8fc44c2273b",
            "spiderX": "",
            "serverName": "api.whitehero.ru",
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
    "remarks": "🇷🇺#7 LTE | @restlyconnect",
    "burstObservatory": {
      "pingConfig": {
        "destination": "https://www.google.com/generate_204",
        "interval": "1s",
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
              "address": "89.208.229.10",
              "port": 443,
              "users": [
                {
                  "id": "65259548-1d98-1b58-a7f9-1937927c68e9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "72.56.111.154",
              "port": 443,
              "users": [
                {
                  "id": "d0babb8a-d953-4661-a231-c1ea7005fa21",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "PfGssDs5ytIrnYZHz2f596v3k5OBZuq5-ZRGsoO0WVY",
            "shortId": "b5c4298cd0",
            "spiderX": "/A5zzpQ8ZAJbMVsN",
            "serverName": "www.apple.com",
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
              "address": "130.193.41.243",
              "port": 8443,
              "users": [
                {
                  "id": "ea00433c-fef9-4e06-a93e-e6e7a900b864",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "Qddpg8luihgzgx4g4uMJklXzlrMCd8L1igJSWrRUvSc",
            "shortId": "1929ef620e9b34f5",
            "spiderX": "",
            "serverName": "rbc.ru",
            "fingerprint": "random",
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
              "address": "5.188.140.55",
              "port": 443,
              "users": [
                {
                  "id": "bea7a5db-bb02-4bcd-bece-62832eb1bc94",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "SbVKOEMjK0sIlbwg4akyBg5mL5KZwwB-ed4eEE7YnRc",
            "shortId": "6ba85179e30d4fc2",
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
              "address": "91.218.122.10",
              "port": 443,
              "users": [
                {
                  "id": "64aa8b21-b0f9-27e6-a51c-3770a8aa6764",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "yom9KP2ytaVYsKof-Wp5-M78ykcF4RV8YmWYpiGKamI",
            "shortId": "",
            "spiderX": "",
            "serverName": "speed.cloudflare.com",
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
              "address": "5.188.141.137",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-07d0-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "5.188.141.69",
              "port": 443,
              "users": [
                {
                  "id": "961011c9-1244-414e-ba25-75479b35b553",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "SbVKOEMjK0sIlbwg4akyBg5mL5KZwwB-ed4eEE7YnRc",
            "shortId": "6ba85179e30d4fc2",
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
              "address": "84.201.131.127",
              "port": 8443,
              "users": [
                {
                  "id": "35eeaf14-ae13-44a7-90f1-c7b2c65fa4b3",
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
            "publicKey": "BeUXC4bxfBxf1yYnqiqkR8ZKszaYqSSDFVa7E-hr-0A",
            "shortId": "f6bfa7bdfcc95bc5",
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
              "address": "yt.node.vpnpplvpn.top",
              "port": 443,
              "users": [
                {
                  "id": "41c1ad13-8363-4722-94ff-8e7ab4602ba1",
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
            "publicKey": "V79PDGag0UzOlSyK7Pa2t7YJeSRJhCN78P9vewwlznU",
            "shortId": "dcbff9e3d495c78e",
            "spiderX": "",
            "serverName": "ru.vpnforppl.top",
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
              "address": "146.185.242.246",
              "port": 8448,
              "users": [
                {
                  "id": "b850fcbb-80ed-4fe0-b408-49dd124c0577",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "Ox4BT0R5103EpplP2y6TIVv0VC-xBR2-YT6EJ4YmkUw",
            "shortId": "",
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
    "remarks": "🇷🇺#8 LTE | @restlyconnect",
    "burstObservatory": {
      "pingConfig": {
        "destination": "https://www.google.com/generate_204",
        "interval": "1s",
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
              "address": "37.139.32.191",
              "port": 443,
              "users": [
                {
                  "id": "65259548-1d98-0bb8-a7f9-1937927c68e9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "ru.node.vpnpplvpn.top",
              "port": 443,
              "users": [
                {
                  "id": "41c1ad13-8363-4722-94ff-8e7ab4602ba1",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "V79PDGag0UzOlSyK7Pa2t7YJeSRJhCN78P9vewwlznU",
            "shortId": "a897aa6a992b7acc",
            "spiderX": "",
            "serverName": "ru.vpnforppl.top",
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
              "address": "81.200.149.211",
              "port": 443,
              "users": [
                {
                  "id": "3b040ae8-7a50-4e1f-8ac2-7f583b41bec8",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "pgG2grngQEtOFJImLfz0AEm-O2IodM2jCY4aMCYQI1U",
            "shortId": "b2a6e3d42f05c3d1",
            "spiderX": "/",
            "serverName": "m.vk.com",
            "fingerprint": "random",
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
              "address": "quarenty.site",
              "port": 8443,
              "users": [
                {
                  "id": "ef3e2141-14d9-4764-8960-e7fe539c9bc6",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "zii4nGNapnFKL6SN8GzWNqFlElBvUCUFUThEP0kFH04",
            "shortId": "205748bc0f24a747",
            "spiderX": "",
            "serverName": "rbc.ru",
            "fingerprint": "random",
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
              "address": "5.188.141.170",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-03e8-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
            "serverName": "sun6-22.userapi.com",
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
              "address": "176.109.108.201",
              "port": 443,
              "users": [
                {
                  "id": "8330693c-4f84-43cb-b3be-e9bb02a5dae9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "1F5YLZnYpHAPtK9h0sAENt7AuK-r2gTxdQdYn-a-dnI",
            "shortId": "21342134",
            "spiderX": "",
            "serverName": "apple.com",
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
              "address": "83.166.252.150",
              "port": 59999,
              "users": [
                {
                  "id": "5c1aa0fb-a26c-4649-bc1d-1da3ab14a222",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "x0t1otRGBv62aJKGNbsQRJGtwh-sp6CEScFS6S8y3EM",
            "shortId": "2f19c0a1",
            "spiderX": "",
            "serverName": "yastatic.net",
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
              "address": "77.81.65.10",
              "port": 443,
              "users": [
                {
                  "id": "64aa8b21-b0f9-27e6-a51c-3770a8aa6764",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "SkPIAkSI8R1LY1hynsZZcxKkPmJKU11DAMncccLEdjI",
            "shortId": "",
            "spiderX": "",
            "serverName": "speed.cloudflare.com",
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
              "address": "89.169.172.4",
              "port": 443,
              "users": [
                {
                  "id": "a7415cf2-f71b-47e5-8bf8-8c9fed29fda7",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
            "serverName": "rbc.ru",
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
              "address": "37.139.35.9",
              "port": 6443,
              "users": [
                {
                  "id": "a3eb272d-c792-4c0e-9a00-0e381fb43eb8",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "TXyXvlKqYwNyAUBRq5rajKl2jbmeJjtvzfoeZH8VgUo",
            "shortId": "",
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
    "remarks": "🇷🇺#9 LTE | @restlyconnect",
    "burstObservatory": {
      "pingConfig": {
        "destination": "https://www.google.com/generate_204",
        "interval": "1s",
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
              "address": "130.193.41.243",
              "port": 8443,
              "users": [
                {
                  "id": "ea00433c-fef9-4e06-a93e-e6e7a900b864",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "Qddpg8luihgzgx4g4uMJklXzlrMCd8L1igJSWrRUvSc",
            "shortId": "887c0d72e771a934",
            "spiderX": "",
            "serverName": "rbc.ru",
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
              "address": "85.239.33.203",
              "port": 8443,
              "users": [
                {
                  "id": "45b65e9b-4700-475d-b5db-b52ced3a2825",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "HTbFBW8eYXG2kQYn2BhyIXiv6zw-AwrM98gkO7VLX2g",
            "shortId": "0d5c7800e2c5d3e2",
            "spiderX": "",
            "serverName": "api.whitehero.ru",
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
              "address": "146.185.240.88",
              "port": 443,
              "users": [
                {
                  "id": "65259548-1d98-03e8-a7f9-1937927c68e9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "5.188.143.49",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-1f40-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "109.120.189.133",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-01f4-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "89.208.230.42",
              "port": 443,
              "users": [
                {
                  "id": "65259548-1d98-0bb8-a7f9-1937927c68e9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "146.185.240.139",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-01f4-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "9ct5bm.by-api-yandex.com",
              "port": 10121,
              "users": [
                {
                  "id": "d1209ffb-c159-48d5-b40d-542ce11fc768",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "4DdA8dBVn5zB_UTbgBY45YqM0HU8zrjXYdzg3-wz5Rg",
            "shortId": "9c2a7d4e5f18b6a3",
            "spiderX": "",
            "serverName": "apple.com",
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
              "address": "212.233.88.14",
              "port": 443,
              "users": [
                {
                  "id": "15df7e15-ceb8-4e58-b3b5-6ebfec96c9ad",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "9V6nLW41-TzWLHj4NGN-MW-71IA-41W0VgUMOgihwTo",
            "shortId": "",
            "spiderX": "",
            "serverName": "elma.sdesk-stage-1.salt.x5.ru",
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
              "address": "37.139.34.228",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-07d0-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
    "remarks": "🇷🇺#10 LTE | @restlyconnect",
    "burstObservatory": {
      "pingConfig": {
        "destination": "https://www.google.com/generate_204",
        "interval": "1s",
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
              "address": "194.36.39.149",
              "port": 8443,
              "users": [
                {
                  "id": "cadadce7-0daa-44c1-9f7a-05fe4ebcbb30",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "7HejPU15kdTl9QG_8AygEM3w0ythsbhG6q_SwUumyR0",
            "shortId": "f1071c148a5aefc4",
            "spiderX": "",
            "serverName": "rbc.ru",
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
              "address": "194.36.39.92",
              "port": 8443,
              "users": [
                {
                  "id": "cadadce7-0daa-44c1-9f7a-05fe4ebcbb30",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "7HejPU15kdTl9QG_8AygEM3w0ythsbhG6q_SwUumyR0",
            "shortId": "f1071c148a5aefc4",
            "spiderX": "",
            "serverName": "rbc.ru",
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
              "address": "95.181.160.23",
              "port": 443,
              "users": [
                {
                  "id": "658786e5-f302-48e2-b321-f4dc6da2a398",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "EdEtwDL3a_V9midkIqik19C3xo7VvefseGkDM5jBWGM",
            "shortId": "ba34cbf836e99bf6",
            "spiderX": "",
            "serverName": "cdnv-img.perekrestok.ru",
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
              "address": "178.154.193.70",
              "port": 8443,
              "users": [
                {
                  "id": "970e232e-50d9-4ef5-acb3-27b54d74f0a6",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "zii4nGNapnFKL6SN8GzWNqFlElBvUCUFUThEP0kFH04",
            "shortId": "205748bc0f24a747",
            "spiderX": "",
            "serverName": "rbc.ru",
            "fingerprint": "random",
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
              "address": "90.156.225.48",
              "port": 10121,
              "users": [
                {
                  "id": "d1209ffb-c159-48d5-b40d-542ce11fc768",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "4DdA8dBVn5zB_UTbgBY45YqM0HU8zrjXYdzg3-wz5Rg",
            "shortId": "9c2a7d4e5f18b6a3",
            "spiderX": "",
            "serverName": "apple.com",
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
              "address": "146.185.240.88",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-03e8-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "89.208.229.10",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-1f40-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "130.193.41.243",
              "port": 8443,
              "users": [
                {
                  "id": "71ede0a1-e947-4a78-8422-4c6b40345f2f",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "Qddpg8luihgzgx4g4uMJklXzlrMCd8L1igJSWrRUvSc",
            "shortId": "8f222b3475800821",
            "spiderX": "",
            "serverName": "rbc.ru",
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
              "address": "37.139.35.50",
              "port": 443,
              "users": [
                {
                  "id": "65259548-1d98-07d0-a7f9-1937927c68e9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "109.120.188.115",
              "port": 443,
              "users": [
                {
                  "id": "65259548-1d98-01f4-a7f9-1937927c68e9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
    "remarks": "🇷🇺#11 LTE | @restlyconnect",
    "burstObservatory": {
      "pingConfig": {
        "destination": "https://www.google.com/generate_204",
        "interval": "1s",
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
              "address": "kz-mg-01.org",
              "port": 8443,
              "users": [
                {
                  "id": "818e3d20-4d31-4a1c-b74a-20ae054721a4",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "unyuuAPGgKOlZDNcwmKK6re8DwGMp0Npy675AOhQTD8",
            "shortId": "84aa32f674cfe92f",
            "spiderX": "",
            "serverName": "rbc.ru",
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
              "address": "87.239.108.204",
              "port": 9443,
              "users": [
                {
                  "id": "b11a0da8-8ae2-4c9e-b36f-498fc10c4d7f",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "HCPPIX3L2I1oLb9SuaciNlqJ2NgANq7_hCZN3Cs7LzM",
            "shortId": "8f1f3f",
            "spiderX": "",
            "serverName": "www.ads.x5.ru",
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
              "address": "89.208.229.10",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-1b58-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "212.233.72.45",
              "port": 4005,
              "users": [
                {
                  "id": "90c9c25c-df6c-4438-83d3-ef97166a9184",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "lGHlmZV2mbCK7MNmpe5Zbwzet0uujs4kdWfcRVxMWEw",
            "shortId": "484786",
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
              "address": "90.156.216.193",
              "port": 8443,
              "users": [
                {
                  "id": "5b58ff6d-ab11-4929-8994-2db366fc70ee",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "8qHRGcCezzSu4S-Cz9l19BNRLWm4MkaSwZV3dNrLEwc",
            "shortId": "445ab326fc7c90ac",
            "spiderX": "",
            "serverName": "rbc.ru",
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
              "address": "89.208.230.42",
              "port": 443,
              "users": [
                {
                  "id": "65259548-1d98-2710-a7f9-1937927c68e9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "216.227.161.25",
              "port": 48444,
              "users": [
                {
                  "id": "5c1aa0fb-a26c-4649-bc1d-1da3ab14a222",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "FApUbcJurXfV5Y3PG2xRycl1R7y0CxwmUU7FRgUpzG0",
            "shortId": "a1b2c3d4",
            "spiderX": "",
            "serverName": "eh.vk.com",
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
              "address": "5.188.141.239",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-0bb8-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "89.169.172.4",
              "port": 8443,
              "users": [
                {
                  "id": "9b86f133-0e92-4346-a0a2-b988aeb69077",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "5.199.163.44",
              "port": 8443,
              "users": [
                {
                  "id": "aebe6f93-7d22-4e36-90c3-67e1ed3c4b12",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "L3X1eh1Jq_6PKJ6LlwjgiWq0XNaDOqCVKgIElJ5nkVA",
            "shortId": "2cfb5a0ae8ab0cb0",
            "spiderX": "",
            "serverName": "rbc.ru",
            "fingerprint": "random",
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
    "remarks": "🇷🇺#12 LTE | @restlyconnect",
    "burstObservatory": {
      "pingConfig": {
        "destination": "https://www.google.com/generate_204",
        "interval": "1s",
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
              "address": "89.169.172.4",
              "port": 443,
              "users": [
                {
                  "id": "a325604b-c4e1-4cbc-8601-4fe9cbd43e9d",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
            "shortId": "8ba12e75110b7a9c",
            "spiderX": "",
            "serverName": "rbc.ru",
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
              "address": "130.193.41.243",
              "port": 443,
              "users": [
                {
                  "id": "71ede0a1-e947-4a78-8422-4c6b40345f2f",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "Qddpg8luihgzgx4g4uMJklXzlrMCd8L1igJSWrRUvSc",
            "shortId": "887c0d72e771a934",
            "spiderX": "",
            "serverName": "rbc.ru",
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
              "address": "5.188.143.51",
              "port": 443,
              "users": [
                {
                  "id": "65259548-1d98-07d0-a7f9-1937927c68e9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "51.250.75.192",
              "port": 7443,
              "users": [
                {
                  "id": "987015ce-80eb-4c77-b845-860165745dd4",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "59iHd67rGlyJBUpDq5NXC91EB0U4AXtSlOjAQsW2D14",
            "shortId": "",
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
              "address": "89.208.197.6",
              "port": 5555,
              "users": [
                {
                  "id": "961011c9-1244-414e-ba25-75479b35b553",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "SbVKOEMjK0sIlbwg4akyBg5mL5KZwwB-ed4eEE7YnRc",
            "shortId": "6ba85179e30d4fc2",
            "spiderX": "",
            "serverName": "www.vk.com",
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
              "address": "5.188.141.170",
              "port": 443,
              "users": [
                {
                  "id": "65259548-1d98-03e8-a7f9-1937927c68e9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
            "serverName": "sun6-22.userapi.com",
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
              "address": "89.169.172.4",
              "port": 8443,
              "users": [
                {
                  "id": "a325604b-c4e1-4cbc-8601-4fe9cbd43e9d",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
            "serverName": "rbc.ru",
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
              "address": "178.154.193.70",
              "port": 8443,
              "users": [
                {
                  "id": "c45cc46e-9073-48b6-bd32-198401ae5120",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "zii4nGNapnFKL6SN8GzWNqFlElBvUCUFUThEP0kFH04",
            "shortId": "e57932a42872a362",
            "spiderX": "",
            "serverName": "rbc.ru",
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
              "address": "178.154.193.70",
              "port": 443,
              "users": [
                {
                  "id": "c45cc46e-9073-48b6-bd32-198401ae5120",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "zii4nGNapnFKL6SN8GzWNqFlElBvUCUFUThEP0kFH04",
            "shortId": "c6ef72e4635d15a5",
            "spiderX": "",
            "serverName": "rbc.ru",
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
              "address": "37.139.32.191",
              "port": 443,
              "users": [
                {
                  "id": "65259548-1d98-2710-a7f9-1937927c68e9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
    "remarks": "🇷🇺#13 LTE | @restlyconnect",
    "burstObservatory": {
      "pingConfig": {
        "destination": "https://www.google.com/generate_204",
        "interval": "1s",
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
              "address": "89.169.172.4",
              "port": 8443,
              "users": [
                {
                  "id": "a7415cf2-f71b-47e5-8bf8-8c9fed29fda7",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
            "serverName": "rbc.ru",
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
              "address": "89.208.196.242",
              "port": 1488,
              "users": [
                {
                  "id": "6f8d4805-5d2b-4a8b-b8e3-8bd5820c5818",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "SbVKOEMjK0sIlbwg4akyBg5mL5KZwwB-ed4eEE7YnRc",
            "shortId": "",
            "spiderX": "",
            "serverName": "www.vk.com",
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
              "address": "89.169.175.22",
              "port": 8443,
              "users": [
                {
                  "id": "5729df32-b2f2-4a10-932c-fe37dfd5b6b4",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "_CjW0Khlrr5z5oc9Oy6-w2ZEanz-zMBktVn5EOX9oTM",
            "shortId": "6419bed7fd0a2cff",
            "spiderX": "",
            "serverName": "rbc.ru",
            "fingerprint": "random",
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
              "address": "37.139.35.32",
              "port": 12443,
              "users": [
                {
                  "id": "e88a7c99-fcdd-467e-b947-ed60a5028304",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "mEQMOpnl7XBZ2gPNpQtbkrEMgqyqUy9wMEmkfSRkw1c",
            "shortId": "846229eb47b3a5c9",
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
              "address": "89.169.172.4",
              "port": 8443,
              "users": [
                {
                  "id": "9b86f133-0e92-4346-a0a2-b988aeb69077",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
            "serverName": "rbc.ru",
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
              "address": "89.208.230.42",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-2710-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "95.163.208.37",
              "port": 443,
              "users": [
                {
                  "id": "658786e5-f302-48e2-b321-f4dc6da2a398",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "g_CJpYLqRg7bpisGdpQ5bt6uajJ-UT7-4HKuvyswiBo",
            "shortId": "6636127c4ed53779",
            "spiderX": "",
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
              "address": "89.169.175.22",
              "port": 8443,
              "users": [
                {
                  "id": "1bb91d3b-a28d-4b29-a4fd-558eb411cfe1",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "_CjW0Khlrr5z5oc9Oy6-w2ZEanz-zMBktVn5EOX9oTM",
            "shortId": "4ffc99daad0f261f",
            "spiderX": "",
            "serverName": "rbc.ru",
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
              "address": "89.169.175.22",
              "port": 8443,
              "users": [
                {
                  "id": "af2d4bd3-7762-45cb-b255-953e7bf75258",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "_CjW0Khlrr5z5oc9Oy6-w2ZEanz-zMBktVn5EOX9oTM",
            "shortId": "6419bed7fd0a2cff",
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
              "address": "193.43.146.29",
              "port": 8443,
              "users": [
                {
                  "id": "cadadce7-0daa-44c1-9f7a-05fe4ebcbb30",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "7HejPU15kdTl9QG_8AygEM3w0ythsbhG6q_SwUumyR0",
            "shortId": "f1071c148a5aefc4",
            "spiderX": "",
            "serverName": "rbc.ru",
            "fingerprint": "random",
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
    "remarks": "🇷🇺#14 LTE | @restlyconnect",
    "burstObservatory": {
      "pingConfig": {
        "destination": "https://www.google.com/generate_204",
        "interval": "1s",
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
              "address": "90.156.216.193",
              "port": 8443,
              "users": [
                {
                  "id": "f8087787-3c62-490b-a67a-8bf36ddd4f3e",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "8qHRGcCezzSu4S-Cz9l19BNRLWm4MkaSwZV3dNrLEwc",
            "shortId": "d515d6cfdfe60b02",
            "spiderX": "",
            "serverName": "rbc.ru",
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
              "address": "130.193.41.243",
              "port": 443,
              "users": [
                {
                  "id": "ea00433c-fef9-4e06-a93e-e6e7a900b864",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "Qddpg8luihgzgx4g4uMJklXzlrMCd8L1igJSWrRUvSc",
            "shortId": "1929ef620e9b34f5",
            "spiderX": "",
            "serverName": "rbc.ru",
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
              "address": "130.193.41.243",
              "port": 443,
              "users": [
                {
                  "id": "71ede0a1-e947-4a78-8422-4c6b40345f2f",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "Qddpg8luihgzgx4g4uMJklXzlrMCd8L1igJSWrRUvSc",
            "shortId": "8f222b3475800821",
            "spiderX": "",
            "serverName": "rbc.ru",
            "fingerprint": "random",
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
              "address": "109.120.190.254",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-07d0-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "89.169.181.188",
              "port": 8443,
              "users": [
                {
                  "id": "e48a1723-bb7b-4d13-ace6-0be7c62f16b3",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "zii4nGNapnFKL6SN8GzWNqFlElBvUCUFUThEP0kFH04",
            "shortId": "205748bc0f24a747",
            "spiderX": "",
            "serverName": "rbc.ru",
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
              "address": "5.188.141.239",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-2710-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "5.188.141.69",
              "port": 443,
              "users": [
                {
                  "id": "bea7a5db-bb02-4bcd-bece-62832eb1bc94",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "SbVKOEMjK0sIlbwg4akyBg5mL5KZwwB-ed4eEE7YnRc",
            "shortId": "6ba85179e30d4fc2",
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
              "address": "kr-1.vpnd.io",
              "port": 54989,
              "users": [
                {
                  "id": "7b5c04b1-3434-4074-86c0-542e8f41b609",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "LLES0IAfo_RVa9zzX8oVqe-M_D4iBHYk2jG-2IcClxU",
            "shortId": "82ac",
            "spiderX": "",
            "serverName": "yahoo.com",
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
              "address": "176.109.107.106",
              "port": 443,
              "users": [
                {
                  "id": "8330693c-4f84-43cb-b3be-e9bb02a5dae9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "1F5YLZnYpHAPtK9h0sAENt7AuK-r2gTxdQdYn-a-dnI",
            "shortId": "21342134",
            "spiderX": "",
            "serverName": "apple.com",
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
              "address": "178.215.236.122",
              "port": 9443,
              "users": [
                {
                  "id": "45b65e9b-4700-475d-b5db-b52ced3a2825",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "9GqT7xwLEbUnj2OS3nE1PU9Nk8JyLCnT2X06v6xW8Bk",
            "shortId": "a74635dc3695607d",
            "spiderX": "",
            "serverName": "api.whitehero.ru",
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
    "remarks": "🇷🇺#15 LTE | @restlyconnect",
    "burstObservatory": {
      "pingConfig": {
        "destination": "https://www.google.com/generate_204",
        "interval": "1s",
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
              "address": "37.139.35.50",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-0bb8-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "146.185.242.113",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-1b58-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "89.208.229.71",
              "port": 1488,
              "users": [
                {
                  "id": "bea7a5db-bb02-4bcd-bece-62832eb1bc94",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "SbVKOEMjK0sIlbwg4akyBg5mL5KZwwB-ed4eEE7YnRc",
            "shortId": "6ba85179e30d4fc2",
            "spiderX": "",
            "serverName": "www.vk.com",
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
              "address": "37.139.32.58",
              "port": 1488,
              "users": [
                {
                  "id": "961011c9-1244-414e-ba25-75479b35b553",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "SbVKOEMjK0sIlbwg4akyBg5mL5KZwwB-ed4eEE7YnRc",
            "shortId": "6ba85179e30d4fc2",
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
              "address": "178.154.193.70",
              "port": 443,
              "users": [
                {
                  "id": "785e6192-6b06-4ced-aa5c-b2325ce00b61",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "zii4nGNapnFKL6SN8GzWNqFlElBvUCUFUThEP0kFH04",
            "shortId": "e57932a42872a362",
            "spiderX": "",
            "serverName": "rbc.ru",
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
              "address": "89.169.181.188",
              "port": 8443,
              "users": [
                {
                  "id": "785e6192-6b06-4ced-aa5c-b2325ce00b61",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "zii4nGNapnFKL6SN8GzWNqFlElBvUCUFUThEP0kFH04",
            "shortId": "e57932a42872a362",
            "spiderX": "",
            "serverName": "rbc.ru",
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
              "address": "178.154.193.70",
              "port": 443,
              "users": [
                {
                  "id": "970e232e-50d9-4ef5-acb3-27b54d74f0a6",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "zii4nGNapnFKL6SN8GzWNqFlElBvUCUFUThEP0kFH04",
            "shortId": "e57932a42872a362",
            "spiderX": "",
            "serverName": "rbc.ru",
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
        "tag": "s9",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "89.169.175.22",
              "port": 443,
              "users": [
                {
                  "id": "1bb91d3b-a28d-4b29-a4fd-558eb411cfe1",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "_CjW0Khlrr5z5oc9Oy6-w2ZEanz-zMBktVn5EOX9oTM",
            "shortId": "f32140952ba18e18",
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
              "address": "5.188.140.217",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-07d0-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
    "remarks": "🇷🇺#16 LTE | @restlyconnect",
    "burstObservatory": {
      "pingConfig": {
        "destination": "https://www.google.com/generate_204",
        "interval": "1s",
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
              "address": "89.208.229.144",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-2710-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "178.154.193.70",
              "port": 443,
              "users": [
                {
                  "id": "e48a1723-bb7b-4d13-ace6-0be7c62f16b3",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "zii4nGNapnFKL6SN8GzWNqFlElBvUCUFUThEP0kFH04",
            "shortId": "c6ef72e4635d15a5",
            "spiderX": "",
            "serverName": "rbc.ru",
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
              "address": "109.120.189.133",
              "port": 443,
              "users": [
                {
                  "id": "65259548-1d98-01f4-a7f9-1937927c68e9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "5.188.142.210",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-2710-b8f9-a8681669d6f5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "178.154.193.70",
              "port": 8443,
              "users": [
                {
                  "id": "785e6192-6b06-4ced-aa5c-b2325ce00b61",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "zii4nGNapnFKL6SN8GzWNqFlElBvUCUFUThEP0kFH04",
            "shortId": "e57932a42872a362",
            "spiderX": "",
            "serverName": "rbc.ru",
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
              "address": "bs2.youtuber-vps.com",
              "port": 443,
              "users": [
                {
                  "id": "1609d73a-aad5-4215-b25d-908e3e3412de",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "6iCYv2sUAaZoGL6iWT9-Qlp29cTAJCNI_RgCm3Wjwx0",
            "shortId": "",
            "spiderX": "",
            "serverName": "www.cloudflare.com",
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
              "address": "178.154.193.70",
              "port": 8443,
              "users": [
                {
                  "id": "785e6192-6b06-4ced-aa5c-b2325ce00b61",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "zii4nGNapnFKL6SN8GzWNqFlElBvUCUFUThEP0kFH04",
            "shortId": "205748bc0f24a747",
            "spiderX": "",
            "serverName": "rbc.ru",
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
              "address": "5.188.141.137",
              "port": 443,
              "users": [
                {
                  "id": "65259548-1d98-0bb8-a7f9-1937927c68e9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "89.169.175.22",
              "port": 8443,
              "users": [
                {
                  "id": "af2d4bd3-7762-45cb-b255-953e7bf75258",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "_CjW0Khlrr5z5oc9Oy6-w2ZEanz-zMBktVn5EOX9oTM",
            "shortId": "f32140952ba18e18",
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
              "address": "89.169.181.188",
              "port": 443,
              "users": [
                {
                  "id": "785e6192-6b06-4ced-aa5c-b2325ce00b61",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "zii4nGNapnFKL6SN8GzWNqFlElBvUCUFUThEP0kFH04",
            "shortId": "e57932a42872a362",
            "spiderX": "",
            "serverName": "rbc.ru",
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
    "remarks": "🇷🇺#17 LTE | @restlyconnect",
    "burstObservatory": {
      "pingConfig": {
        "destination": "https://www.google.com/generate_204",
        "interval": "1s",
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
              "address": "nld-0001-xr.packet-drop-society.net",
              "port": 443,
              "users": [
                {
                  "id": "a1ac8a09-98fd-4c11-acc4-3ab272bd220b",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "llaiqC-oIhL_bjc236FPq26LSn7IVhIa4cIC6OVytws",
            "shortId": "d3b13f31",
            "spiderX": "/",
            "serverName": "hls-svod.itunes.apple.com",
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
              "address": "5.199.163.44",
              "port": 8443,
              "users": [
                {
                  "id": "aebe6f93-7d22-4e36-90c3-67e1ed3c4b12",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "L3X1eh1Jq_6PKJ6LlwjgiWq0XNaDOqCVKgIElJ5nkVA",
            "shortId": "e0ef3d5c0aacb615",
            "spiderX": "",
            "serverName": "rbc.ru",
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
              "address": "89.169.172.4",
              "port": 443,
              "users": [
                {
                  "id": "9b86f133-0e92-4346-a0a2-b988aeb69077",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
            "shortId": "8ba12e75110b7a9c",
            "spiderX": "",
            "serverName": "rbc.ru",
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
              "address": "grinoree.ru",
              "port": 8443,
              "users": [
                {
                  "id": "cc3f40b8-b869-4559-8490-9207bf0ed261",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
            "shortId": "8ba12e75110b7a9c",
            "spiderX": "",
            "serverName": "rbc.ru",
            "fingerprint": "random",
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
              "address": "89.208.197.6",
              "port": 5555,
              "users": [
                {
                  "id": "bea7a5db-bb02-4bcd-bece-62832eb1bc94",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "SbVKOEMjK0sIlbwg4akyBg5mL5KZwwB-ed4eEE7YnRc",
            "shortId": "6ba85179e30d4fc2",
            "spiderX": "",
            "serverName": "www.vk.com",
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
              "address": "89.169.175.22",
              "port": 443,
              "users": [
                {
                  "id": "af2d4bd3-7762-45cb-b255-953e7bf75258",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "_CjW0Khlrr5z5oc9Oy6-w2ZEanz-zMBktVn5EOX9oTM",
            "shortId": "4ffc99daad0f261f",
            "spiderX": "",
            "serverName": "rbc.ru",
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
              "address": "89.208.220.127",
              "port": 443,
              "users": [
                {
                  "id": "20846ef7-3f94-4f88-87e6-d0b69412f354",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "Dk3Nj7IKpnv46zTWRlqVIWcI8wm2esdMvtd34rDGayI",
            "shortId": "88f5210f",
            "spiderX": "/",
            "serverName": "yt3.fasssst.online",
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
              "address": "89.169.181.188",
              "port": 443,
              "users": [
                {
                  "id": "e48a1723-bb7b-4d13-ace6-0be7c62f16b3",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "zii4nGNapnFKL6SN8GzWNqFlElBvUCUFUThEP0kFH04",
            "shortId": "c6ef72e4635d15a5",
            "spiderX": "",
            "serverName": "rbc.ru",
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
              "address": "89.169.175.22",
              "port": 443,
              "users": [
                {
                  "id": "5729df32-b2f2-4a10-932c-fe37dfd5b6b4",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "_CjW0Khlrr5z5oc9Oy6-w2ZEanz-zMBktVn5EOX9oTM",
            "shortId": "6419bed7fd0a2cff",
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
              "address": "89.169.181.188",
              "port": 8443,
              "users": [
                {
                  "id": "c45cc46e-9073-48b6-bd32-198401ae5120",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "zii4nGNapnFKL6SN8GzWNqFlElBvUCUFUThEP0kFH04",
            "shortId": "e57932a42872a362",
            "spiderX": "",
            "serverName": "rbc.ru",
            "fingerprint": "random",
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
    "remarks": "🇷🇺#18 LTE | @restlyconnect",
    "burstObservatory": {
      "pingConfig": {
        "destination": "https://www.google.com/generate_204",
        "interval": "1s",
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
              "address": "89.169.181.188",
              "port": 443,
              "users": [
                {
                  "id": "c45cc46e-9073-48b6-bd32-198401ae5120",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "zii4nGNapnFKL6SN8GzWNqFlElBvUCUFUThEP0kFH04",
            "shortId": "c6ef72e4635d15a5",
            "spiderX": "",
            "serverName": "rbc.ru",
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
              "address": "vk.grizzlyvpn.work",
              "port": 443,
              "users": [
                {
                  "id": "5952ea01-0669-4f5e-8010-61f8abee3600",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "5VRdrOjXKSEfzv0b-rEeYA4B9azYQYC30NZK7y3ciCk",
            "shortId": "225dd584800cd049",
            "spiderX": "",
            "serverName": "vk.grizzlyvpn.work",
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
              "address": "158.160.71.70",
              "port": 8443,
              "users": [
                {
                  "id": "45238726-5b32-447a-a127-95b52550c86c",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
            "shortId": "48fccabc158a4c22",
            "spiderX": "",
            "serverName": "rbc.ru",
            "fingerprint": "random",
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
              "address": "158.160.71.70",
              "port": 443,
              "users": [
                {
                  "id": "07573dc9-f3e3-4931-8453-81b87e2aac7a",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
            "shortId": "48fccabc158a4c22",
            "spiderX": "",
            "serverName": "rbc.ru",
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
              "address": "89.208.198.98",
              "port": 443,
              "users": [
                {
                  "id": "5952ea01-0669-4f5e-8010-61f8abee3600",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "5VRdrOjXKSEfzv0b-rEeYA4B9azYQYC30NZK7y3ciCk",
            "shortId": "225dd584800cd049",
            "spiderX": "/",
            "serverName": "vk.grizzlyvpn.work",
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
              "address": "89.169.181.188",
              "port": 443,
              "users": [
                {
                  "id": "970e232e-50d9-4ef5-acb3-27b54d74f0a6",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "zii4nGNapnFKL6SN8GzWNqFlElBvUCUFUThEP0kFH04",
            "shortId": "e57932a42872a362",
            "spiderX": "",
            "serverName": "rbc.ru",
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
              "address": "89.169.181.188",
              "port": 8443,
              "users": [
                {
                  "id": "970e232e-50d9-4ef5-acb3-27b54d74f0a6",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "zii4nGNapnFKL6SN8GzWNqFlElBvUCUFUThEP0kFH04",
            "shortId": "205748bc0f24a747",
            "spiderX": "",
            "serverName": "rbc.ru",
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
              "address": "158.160.71.70",
              "port": 8443,
              "users": [
                {
                  "id": "66db0739-eb01-43c9-bccc-1937f8d66331",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
            "shortId": "48fccabc158a4c22",
            "spiderX": "",
            "serverName": "rbc.ru",
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
              "address": "158.160.71.70",
              "port": 443,
              "users": [
                {
                  "id": "07573dc9-f3e3-4931-8453-81b87e2aac7a",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
            "serverName": "rbc.ru",
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
              "address": "158.160.71.70",
              "port": 8443,
              "users": [
                {
                  "id": "b1d2ea26-509e-45f5-9356-55e3621c6212",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
            "shortId": "48fccabc158a4c22",
            "spiderX": "",
            "serverName": "rbc.ru",
            "fingerprint": "random",
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
    "remarks": "🇷🇺#19 LTE | @restlyconnect",
    "burstObservatory": {
      "pingConfig": {
        "destination": "https://www.google.com/generate_204",
        "interval": "1s",
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
              "address": "37.139.32.58",
              "port": 1488,
              "users": [
                {
                  "id": "bea7a5db-bb02-4bcd-bece-62832eb1bc94",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "SbVKOEMjK0sIlbwg4akyBg5mL5KZwwB-ed4eEE7YnRc",
            "shortId": "",
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
              "address": "178.154.193.70",
              "port": 8443,
              "users": [
                {
                  "id": "e48a1723-bb7b-4d13-ace6-0be7c62f16b3",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "zii4nGNapnFKL6SN8GzWNqFlElBvUCUFUThEP0kFH04",
            "shortId": "c6ef72e4635d15a5",
            "spiderX": "",
            "serverName": "rbc.ru",
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
              "address": "90.156.217.229",
              "port": 443,
              "users": [
                {
                  "id": "06d70b68-279b-4b2c-b6e3-ca0b20b4e348",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "Cxvc5bVMKln6RxPs5MtviUZNDsmpfuYUK8UFBlcBaS0",
            "shortId": "387d2fb5f83c0cde",
            "spiderX": "",
            "serverName": "rbc.ru",
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
              "address": "89.169.175.22",
              "port": 443,
              "users": [
                {
                  "id": "1bb91d3b-a28d-4b29-a4fd-558eb411cfe1",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "_CjW0Khlrr5z5oc9Oy6-w2ZEanz-zMBktVn5EOX9oTM",
            "shortId": "6419bed7fd0a2cff",
            "spiderX": "",
            "serverName": "rbc.ru",
            "fingerprint": "random",
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
              "address": "90.156.217.229",
              "port": 8443,
              "users": [
                {
                  "id": "b2aba270-ea33-49da-9290-973f726e93d3",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "Cxvc5bVMKln6RxPs5MtviUZNDsmpfuYUK8UFBlcBaS0",
            "shortId": "387d2fb5f83c0cde",
            "spiderX": "",
            "serverName": "rbc.ru",
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
              "address": "144.31.90.188",
              "port": 8143,
              "users": [
                {
                  "id": "9bb64d52-423f-4de0-ab23-587720af2021",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "4gcDJumxa0bTaHvrZRL4Hb5ItXPha6ZYZ0fGmMD_k0A",
            "shortId": "1afc9d750da1ba88",
            "spiderX": "",
            "serverName": "rbc.ru",
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
              "address": "158.160.71.70",
              "port": 443,
              "users": [
                {
                  "id": "45238726-5b32-447a-a127-95b52550c86c",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
            "serverName": "rbc.ru",
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
              "address": "37.139.34.201",
              "port": 1488,
              "users": [
                {
                  "id": "bea7a5db-bb02-4bcd-bece-62832eb1bc94",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "SbVKOEMjK0sIlbwg4akyBg5mL5KZwwB-ed4eEE7YnRc",
            "shortId": "6ba85179e30d4fc2",
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
              "address": "158.160.71.70",
              "port": 443,
              "users": [
                {
                  "id": "66db0739-eb01-43c9-bccc-1937f8d66331",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
            "serverName": "rbc.ru",
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
              "address": "158.160.71.70",
              "port": 8443,
              "users": [
                {
                  "id": "07573dc9-f3e3-4931-8453-81b87e2aac7a",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
            "serverName": "rbc.ru",
            "fingerprint": "random",
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
    "remarks": "🇷🇺#20 LTE | @restlyconnect",
    "burstObservatory": {
      "pingConfig": {
        "destination": "https://www.google.com/generate_204",
        "interval": "1s",
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
              "address": "5.188.142.219",
              "port": 1488,
              "users": [
                {
                  "id": "6f8d4805-5d2b-4a8b-b8e3-8bd5820c5818",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "SbVKOEMjK0sIlbwg4akyBg5mL5KZwwB-ed4eEE7YnRc",
            "shortId": "6ba85179e30d4fc2",
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
              "address": "158.160.71.70",
              "port": 443,
              "users": [
                {
                  "id": "b1d2ea26-509e-45f5-9356-55e3621c6212",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
            "serverName": "rbc.ru",
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
              "address": "89.169.181.188",
              "port": 8443,
              "users": [
                {
                  "id": "785e6192-6b06-4ced-aa5c-b2325ce00b61",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "zii4nGNapnFKL6SN8GzWNqFlElBvUCUFUThEP0kFH04",
            "shortId": "205748bc0f24a747",
            "spiderX": "",
            "serverName": "rbc.ru",
            "fingerprint": "random",
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
              "address": "ru-1.griffon-guard.com",
              "port": 443,
              "users": [
                {
                  "id": "932130c7-197b-4b37-af26-d550c47ba8f4",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "IBvNLerjNLpF4OpUX-wGJp8YDZrnKoh-gEItUDNT_Bg",
            "shortId": "",
            "spiderX": "",
            "serverName": "egress.yandex.net",
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
              "address": "89.169.175.22",
              "port": 443,
              "users": [
                {
                  "id": "af2d4bd3-7762-45cb-b255-953e7bf75258",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "_CjW0Khlrr5z5oc9Oy6-w2ZEanz-zMBktVn5EOX9oTM",
            "shortId": "f32140952ba18e18",
            "spiderX": "",
            "serverName": "rbc.ru",
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
              "address": "89.208.209.205",
              "port": 443,
              "users": [
                {
                  "id": "658786e5-f302-48e2-b321-f4dc6da2a398",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "HFJMqU64bwcPSJ4E0sRshfVNjweeQxvAgRP_5OOxqHE",
            "shortId": "048beb293406db13",
            "spiderX": "",
            "serverName": "m.vk.com",
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
              "address": "90.156.217.229",
              "port": 443,
              "users": [
                {
                  "id": "b7a34f53-2416-4fc0-969d-9155c61b0980",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "Cxvc5bVMKln6RxPs5MtviUZNDsmpfuYUK8UFBlcBaS0",
            "shortId": "808e2d36726ee97e",
            "spiderX": "",
            "serverName": "rbc.ru",
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
              "address": "90.156.217.229",
              "port": 443,
              "users": [
                {
                  "id": "b2aba270-ea33-49da-9290-973f726e93d3",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "Cxvc5bVMKln6RxPs5MtviUZNDsmpfuYUK8UFBlcBaS0",
            "shortId": "808e2d36726ee97e",
            "spiderX": "",
            "serverName": "rbc.ru",
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
              "address": "37.139.35.9",
              "port": 6443,
              "users": [
                {
                  "id": "92f831f0-4126-487a-a2b3-6651f232beae",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "TXyXvlKqYwNyAUBRq5rajKl2jbmeJjtvzfoeZH8VgUo",
            "shortId": "",
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
              "address": "213.219.213.84",
              "port": 443,
              "users": [
                {
                  "id": "bea7a5db-bb02-4bcd-bece-62832eb1bc94",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "SbVKOEMjK0sIlbwg4akyBg5mL5KZwwB-ed4eEE7YnRc",
            "shortId": "",
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
    "remarks": "🇷🇺#21 LTE | @restlyconnect",
    "burstObservatory": {
      "pingConfig": {
        "destination": "https://www.google.com/generate_204",
        "interval": "1s",
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
              "address": "90.156.216.193",
              "port": 8443,
              "users": [
                {
                  "id": "f8087787-3c62-490b-a67a-8bf36ddd4f3e",
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
            "publicKey": "8qHRGcCezzSu4S-Cz9l19BNRLWm4MkaSwZV3dNrLEwc",
            "shortId": "445ab326fc7c90ac",
            "spiderX": "",
            "serverName": "rbc.ru",
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
              "address": "212.193.155.80",
              "port": 443,
              "users": [
                {
                  "id": "f1600497-20e4-0c07-64e0-3e28fa3d01e8",
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
              "Host": "s43769.cdn.ngenix.net"
            }
          },
          "security": "tls",
          "tlsSettings": {
            "serverName": "s43769.cdn.ngenix.net",
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
              "address": "cdn2.api-rutube.ru",
              "port": 443,
              "users": [
                {
                  "id": "932130c7-197b-4b37-af26-d550c47ba8f4",
                  "flow": "",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp"
        }
      },
      {
        "tag": "s4",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "212.193.153.187",
              "port": 443,
              "users": [
                {
                  "id": "65259548-1d98-03e8-a7f9-1937927c68e9",
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
        "tag": "s5",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "212.193.153.187",
              "port": 443,
              "users": [
                {
                  "id": "65259548-1d98-0bb8-a7f9-1937927c68e9",
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
        "tag": "s6",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "212.193.152.120",
              "port": 443,
              "users": [
                {
                  "id": "f1600497-20e4-0c07-64e0-3e28fa3d01e8",
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
              "Host": "s43769.cdn.ngenix.net"
            }
          },
          "security": "tls",
          "tlsSettings": {
            "serverName": "s43769.cdn.ngenix.net",
            "fingerprint": "chrome"
          }
        }
      },
      {
        "tag": "s7",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "109.120.189.133",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-01f4-b8f9-a8681669d6f5",
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
        "tag": "s8",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "109.120.190.247",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-07d0-b8f9-a8681669d6f5",
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
        "tag": "s9",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "194.87.24.23",
              "port": 8444,
              "users": [
                {
                  "id": "dc1b85fd-a08e-42d7-ae2b-0a320f3399b7",
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
            "publicKey": "upDCW94g-pSYQrmXvOrTVYlwBUrSKhYFF9QwrqObdVo",
            "shortId": "3ca620a7ed5f3196",
            "spiderX": "",
            "serverName": "google.com",
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
              "address": "212.193.153.187",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-03e8-b8f9-a8681669d6f5",
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
        "protocol": "freedom",
        "tag": "direct"
      },
      {
        "protocol": "blackhole",
        "tag": "block"
      }
    ],
    "remarks": "🇷🇺#1 Резерв | @restlyconnect",
    "burstObservatory": {
      "pingConfig": {
        "destination": "https://www.google.com/generate_204",
        "interval": "1s",
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
              "address": "cdn4.api-rutube.ru",
              "port": 443,
              "users": [
                {
                  "id": "932130c7-197b-4b37-af26-d550c47ba8f4",
                  "flow": "",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp"
        }
      },
      {
        "tag": "s2",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "46.235.189.248",
              "port": 443,
              "users": [
                {
                  "id": "f1600497-20e4-0c07-64e0-3e28fa3d01e8",
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
              "Host": "s43769.cdn.ngenix.net"
            }
          },
          "security": "tls",
          "tlsSettings": {
            "serverName": "s43769.cdn.ngenix.net",
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
              "address": "194.87.24.34",
              "port": 8444,
              "users": [
                {
                  "id": "dc1b85fd-a08e-42d7-ae2b-0a320f3399b7",
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
            "publicKey": "upDCW94g-pSYQrmXvOrTVYlwBUrSKhYFF9QwrqObdVo",
            "shortId": "3ca620a7ed5f3196",
            "spiderX": "",
            "serverName": "google.com",
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
              "address": "212.193.153.187",
              "port": 443,
              "users": [
                {
                  "id": "65259548-1d98-07d0-a7f9-1937927c68e9",
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
        "tag": "s5",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "212.193.157.118",
              "port": 443,
              "users": [
                {
                  "id": "bb1deb35-8580-07d0-b8f9-a8681669d6f5",
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
        "tag": "s6",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.94.211",
              "port": 8443,
              "users": [
                {
                  "id": "91cf0b5f-45ee-40c7-8199-ddc5f315a15c",
                  "flow": "",
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
            "publicKey": "nJscx1cWA9SAQ-5fi23oAFDTL3WL1c09TR_iyGX0j20",
            "shortId": "b83be0fabe71b8",
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
              "address": "ru1.cyphervpn.pro",
              "port": 443,
              "users": [
                {
                  "id": "3cc7c3a4-03a7-11f1-9bc0-0242ac110002",
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
            "serverName": "eh.vk.com",
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
              "address": "144.31.0.234",
              "port": 4443,
              "users": [
                {
                  "id": "948fac3c-42bf-41a6-a5f9-704d36ff0d8d",
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
            "path": "/danfeng",
            "headers": {
              "Host": "danfeng.sylu.cc"
            }
          },
          "security": "tls",
          "tlsSettings": {
            "serverName": "danfeng.sylu.cc",
            "fingerprint": "random"
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
    "remarks": "🇷🇺#2 Резерв | @restlyconnect",
    "burstObservatory": {
      "pingConfig": {
        "destination": "https://www.google.com/generate_204",
        "interval": "1s",
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
        "s8"
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
            "s8"
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
  res.setHeader("announce", "UPD: 16.03.2026 01:07 | tgk: @restlyconnect");
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.end(JSON.stringify(config));
};
