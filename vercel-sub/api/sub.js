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
        "tag": "s2",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "89.169.158.134",
              "port": 443,
              "users": [
                {
                  "id": "ed151cac-a410-470f-81b7-49ca2c4dd410",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "e4TzL8EKD8Ebhi9ZzZHtx9e3EcadTfGlqYqlJe2vlzg",
            "shortId": "0e34bc8a",
            "spiderX": "",
            "serverName": "tunnel.vk-apps.com",
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
        "tag": "s4",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "fl.vpnpplvpn.top",
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
            "publicKey": "gOummriWvIYMJpd5oifBLqxsf_jcWHVsxVI7wnM0rRo",
            "shortId": "1e943a831d22faf6",
            "spiderX": "",
            "serverName": "vpnforppl.top",
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
        "tag": "s6",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "45.159.248.58",
              "port": 443,
              "users": [
                {
                  "id": "79cc33cf-93b4-419b-9e46-33e3edf7057c",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "DrWq_ysFaGPGgRFcHevMPoruwYMRXryW6i_cwE7CuCM",
            "shortId": "d7e1a111",
            "spiderX": "",
            "serverName": "store.steampowered.com",
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
            "shortId": "da41fe77cd9c767d",
            "spiderX": "",
            "serverName": "ru.vpnforppl.top",
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
              "address": "10.nl.vpnpplvpn.top",
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
            "publicKey": "XWP3eu958tmcTzF5TvelcQMxfKd632VaNlG6nrqHwRU",
            "shortId": "4cd45277ddedbf1f",
            "spiderX": "",
            "serverName": "nl.vpnforppl.top",
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
            "shortId": "117bee239f0f9c0b",
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
            "shortId": "1e943a831d22faf6",
            "spiderX": "",
            "serverName": "waw.vpnforppl.top",
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
        "tag": "s3",
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
        "tag": "s4",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "194.36.39.98",
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
        "tag": "s7",
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
        "tag": "s8",
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
        "tag": "s9",
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
        "tag": "s10",
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
              "address": "194.116.172.50",
              "port": 8443,
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
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "upDCW94g-pSYQrmXvOrTVYlwBUrSKhYFF9QwrqObdVo",
            "shortId": "3ca620a7ed5f3196",
            "spiderX": "",
            "serverName": "sun6-21.userapi.com",
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
              "address": "129.212.143.33",
              "port": 19001,
              "users": [
                {
                  "id": "12eac926-c4ec-4040-8fb8-f316e9fc0fd6",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "S-g0oP36DShii1uPOnZDSEhp_wQghX6h68PgMivOmD4",
            "shortId": "",
            "spiderX": "",
            "serverName": "www.speedtest.net",
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
        "tag": "s4",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "94.131.104.194",
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
        "tag": "s5",
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
        "tag": "s6",
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
        "tag": "s7",
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
        "tag": "s8",
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
        "tag": "s9",
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
        "tag": "s10",
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
        "tag": "s2",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "84.201.179.202",
              "port": 9443,
              "users": [
                {
                  "id": "8b3c7b26-4b91-495e-a7c3-0c042f3fe290",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
            "spiderX": "",
            "serverName": "www.vk.com",
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
              "address": "178.154.219.2",
              "port": 8081,
              "users": [
                {
                  "id": "d0624d6b-d654-4202-ae5d-dee00a6e11a2",
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
        "tag": "s5",
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
        "tag": "s6",
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
        "tag": "s7",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "45.159.248.58",
              "port": 443,
              "users": [
                {
                  "id": "79cc33cf-93b4-419b-9e46-33e3edf7057c",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "DrWq_ysFaGPGgRFcHevMPoruwYMRXryW6i_cwE7CuCM",
            "shortId": "3decb73e",
            "spiderX": "",
            "serverName": "store.steampowered.com",
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
        "tag": "s9",
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
        "tag": "s10",
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
        "tag": "s2",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.72.141",
              "port": 8449,
              "users": [
                {
                  "id": "20b1c946-0c06-48c7-9840-224f8abffd67",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "eWc4OGy6tScPuAS_MCVSrFpqJRj1uC9f1gh6YLc332M",
            "shortId": "",
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
        "tag": "s4",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "109.120.189.133",
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
        "tag": "s5",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "45.12.143.232",
              "port": 52001,
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
            "shortId": "6ba85179",
            "spiderX": "",
            "serverName": "ya.ru",
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
              "address": "178.154.219.2",
              "port": 8181,
              "users": [
                {
                  "id": "d0624d6b-d654-4202-ae5d-dee00a6e11a2",
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
            "shortId": "887c0d72e771a934",
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
              "address": "144.31.14.250",
              "port": 443,
              "users": [
                {
                  "id": "46eb533d-e25d-4b15-a689-5ec0e834f0b9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "gGnBn3VWyNgN7fhQ7WrxgWsfmdkrodPZ1_pf2BdQnlw",
            "shortId": "c8e5fbd3087e0a09",
            "spiderX": "",
            "serverName": "nl.katanavpn.ru",
            "fingerprint": "firefox",
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
              "address": "178.154.219.2",
              "port": 8083,
              "users": [
                {
                  "id": "d0624d6b-d654-4202-ae5d-dee00a6e11a2",
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
        "tag": "s2",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "178.154.219.2",
              "port": 8444,
              "users": [
                {
                  "id": "d0624d6b-d654-4202-ae5d-dee00a6e11a2",
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
        "tag": "s4",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "178.154.219.2",
              "port": 8444,
              "users": [
                {
                  "id": "ecc8a933-059b-4d38-a23d-4035c9825c8d",
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
            "shortId": "7dbf7d3233971d5c",
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
        "tag": "s6",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "146.185.242.113",
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
        "tag": "s7",
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
        "tag": "s8",
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
        "tag": "s9",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "178.154.216.177",
              "port": 8444,
              "users": [
                {
                  "id": "ecc8a933-059b-4d38-a23d-4035c9825c8d",
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
        "tag": "s2",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "194.36.39.107",
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
              "address": "178.154.216.177",
              "port": 7433,
              "users": [
                {
                  "id": "d0624d6b-d654-4202-ae5d-dee00a6e11a2",
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
              "address": "144.31.12.171",
              "port": 443,
              "users": [
                {
                  "id": "471cbb0c-89a7-4e4f-a34f-bf0ac3eb75ea",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "EA-Sxh4tF7Iym27iYccYI5aCrc796cBJgRv9_maBbl4",
            "shortId": "433065",
            "spiderX": "/",
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
        "tag": "s6",
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
        "tag": "s7",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "37.139.32.191",
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
        "tag": "s8",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "178.154.219.2",
              "port": 8181,
              "users": [
                {
                  "id": "ecc8a933-059b-4d38-a23d-4035c9825c8d",
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
              "address": "178.154.219.2",
              "port": 8083,
              "users": [
                {
                  "id": "ecc8a933-059b-4d38-a23d-4035c9825c8d",
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
              "address": "178.154.219.2",
              "port": 8081,
              "users": [
                {
                  "id": "ecc8a933-059b-4d38-a23d-4035c9825c8d",
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
        "tag": "s6",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "109.120.189.133",
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
        "tag": "s7",
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
        "tag": "s8",
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
        "tag": "s9",
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
        "tag": "s10",
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
              "address": "109.120.188.115",
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
        "tag": "s2",
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
        "tag": "s3",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "37.139.32.191",
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
              "address": "178.154.219.2",
              "port": 7433,
              "users": [
                {
                  "id": "ecc8a933-059b-4d38-a23d-4035c9825c8d",
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
            "shortId": "7dbf7d3233971d5c",
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
        "tag": "s8",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "178.154.216.177",
              "port": 8444,
              "users": [
                {
                  "id": "d0624d6b-d654-4202-ae5d-dee00a6e11a2",
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
        "tag": "s10",
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
        "tag": "s2",
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
        "tag": "s3",
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
        "tag": "s4",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "84.201.179.202",
              "port": 9443,
              "users": [
                {
                  "id": "4f633829-3629-408c-8bdc-99cd590684ea",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
            "serverName": "travel.yandex.ru",
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
        "tag": "s6",
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
        "tag": "s7",
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
        "tag": "s8",
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
        "tag": "s9",
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
        "tag": "s10",
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
        "tag": "s2",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "5.188.141.239",
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
        "tag": "s3",
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
        "tag": "s6",
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
        "tag": "s9",
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
        "tag": "s10",
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
              "address": "178.154.216.177",
              "port": 8083,
              "users": [
                {
                  "id": "d0624d6b-d654-4202-ae5d-dee00a6e11a2",
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
            "shortId": "7dbf7d3233971d5c",
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
        "tag": "s3",
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
              "address": "132.243.200.95",
              "port": 8443,
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
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "upDCW94g-pSYQrmXvOrTVYlwBUrSKhYFF9QwrqObdVo",
            "shortId": "3ca620a7ed5f3196",
            "spiderX": "/",
            "serverName": "sun6-21.userapi.com",
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
              "address": "178.154.216.177",
              "port": 8181,
              "users": [
                {
                  "id": "ea143789-bec4-4fdd-b879-e817d2935334",
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
            "shortId": "7dbf7d3233971d5c",
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
        "s7"
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
            "s7"
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
              "address": "cdn7.api-rutube.ru",
              "port": 3306,
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
              "address": "193.233.48.173",
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
        "tag": "s3",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "cdn8.api-rutube.ru",
              "port": 5432,
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
              "address": "cdn12.api-rutube.ru",
              "port": 2096,
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
              "address": "cdn14.api-rutube.ru",
              "port": 2087,
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
        "tag": "s7",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "46.235.186.177",
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
        "tag": "s8",
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
        "tag": "s9",
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
        "tag": "s10",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "194.116.172.50",
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
              "address": "cdn17.api-rutube.ru",
              "port": 9200,
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
  res.setHeader("announce", "Обновлено: 15 марта 2026 21:02 | ТГК: @restlyconnect");
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.end(JSON.stringify(config));
};
