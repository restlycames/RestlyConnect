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
        "tag": "s2",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.47.5",
              "port": 443,
              "users": [
                {
                  "id": "54227b24-4d00-4942-9511-b114d8a049d4",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "5orQGt6i0bCMdGt6ry0OqYSDdV-v_2jWzQgsQtA4rU4",
            "shortId": "b3",
            "spiderX": "",
            "serverName": "eh.vk.com",
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
              "address": "51.250.66.196",
              "port": 443,
              "users": [
                {
                  "id": "1e3dcb46-c506-4410-9921-a5032fb2d2e9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "mYLhVolivlt9MUBBBc6Sn4t4ZS7SE8lCUIaaUkBLIkE",
            "shortId": "b2a6e3d42f05c3d1",
            "spiderX": "%2F",
            "serverName": "api-maps.yandex.ru",
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
              "address": "84.201.165.182",
              "port": 443,
              "users": [
                {
                  "id": "c443cdb4-dda8-4f97-943a-0d10e1e2012e",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "U6nPMiPQW-ipQwgxotVd4rqywWryMlTNI-9xvSIL4Vg",
            "shortId": "e11822a0958dd1a3",
            "spiderX": "%2F",
            "serverName": "ads.x5.ru",
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
              "address": "51.250.99.75",
              "port": 443,
              "users": [
                {
                  "id": "f86dd881-00d4-447e-b445-0d31f235dcbe",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "3uWYzm65qryajVsnj0Uanu8be-RhDBd6Ofy2EhQTZjw",
            "shortId": "",
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
              "address": "109.120.188.112",
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
              "address": "37.139.32.137",
              "port": 443,
              "users": [
                {
                  "id": "b6e53af5-babc-453c-99f4-645dfd7aa905",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc",
            "shortId": "43dcff53849b81e6",
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
              "address": "109.120.188.156",
              "port": 443,
              "users": [
                {
                  "id": "45223222-04c6-01f4-b5e6-486115d5968e",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "217.25.92.76",
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
            "publicKey": "8_eCxkrzPtoxZKM05euCs664cL_knpqvbr-KTlnHVmw",
            "shortId": "17a729f0cd30b6a7",
            "spiderX": "%2F",
            "serverName": "eh.vk.com",
            "fingerprint": "randomized",
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
              "address": "84.201.181.141",
              "port": 443,
              "users": [
                {
                  "id": "7fbb424e-fd85-42ea-a86a-26cec380fcf7",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "0rPvIBbfmdq3YJkkNGc8p7t-1zme85V-nj3v8ekm4DE",
            "shortId": "1b3de616b36b1233",
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
              "address": "89.208.231.82",
              "port": 443,
              "users": [
                {
                  "id": "187afdf1-14c9-4384-81a0-17625dac5d4d",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "09yujrRdcmxAqVF0CGtEwwov02Uc-8rdIO_pBj-DfE4",
            "shortId": "a50ebec7fc3679ba",
            "spiderX": "%2F",
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
              "address": "37.139.33.117",
              "port": 443,
              "users": [
                {
                  "id": "46dbabb0-b074-46ff-83dd-08aab029309b",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc",
            "shortId": "43dcff53849b81e6",
            "spiderX": "",
            "serverName": "eh.vk.com",
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
              "address": "5.188.141.112",
              "port": 443,
              "users": [
                {
                  "id": "768b231f-1e87-4ee8-848a-fce075e31ab0",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "UXs4haWBs7BiegeBZmzRiEl8xv0lAxowmoHAMUsfIxk",
            "shortId": "b8e67f13a6a17d54",
            "spiderX": "%2F",
            "serverName": "max.ru",
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
              "address": "84.201.154.74",
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
            "publicKey": "3Sv23xq-91ymYjcCOXEBkQ-CRRC-KiB0PMNxjfehuHA",
            "shortId": "",
            "spiderX": "",
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
              "address": "79.137.174.106",
              "port": 443,
              "users": [
                {
                  "id": "e8bbc3fe-9eee-48da-bf28-d412909dd721",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "213.219.214.9",
              "port": 443,
              "users": [
                {
                  "id": "49ac422e-dcb6-41bc-969e-255989df9625",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc",
            "shortId": "43dcff53849b81e6",
            "spiderX": "",
            "serverName": "eh.vk.com",
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
              "address": "51.250.71.116",
              "port": 443,
              "users": [
                {
                  "id": "640500ce-b72f-48f4-8478-32e36a4f9b50",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
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
            "spiderX": "%2F",
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
              "address": "51.250.92.19",
              "port": 443,
              "users": [
                {
                  "id": "640500ce-b72f-48f4-8478-32e36a4f9b50",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
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
            "spiderX": "%2F",
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
              "address": "185.99.96.64",
              "port": 443,
              "users": [
                {
                  "id": "7f3f0960-cfcc-464b-a20f-4181f0b5a813",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
            "serverName": "01.img.avito.st",
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
              "address": "89.208.230.27",
              "port": 443,
              "users": [
                {
                  "id": "c443cdb4-dda8-4f97-943a-0d10e1e2012e",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "Mo3n13nZckfU73adFvLyNdjcW7xx9UM1FTKCsm5FkEI",
            "shortId": "9a6f9ef841af778b",
            "spiderX": "%2F",
            "serverName": "max.ru",
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
              "address": "95.163.210.138",
              "port": 443,
              "users": [
                {
                  "id": "ca21934a-cfa7-4d61-9808-737f271da7b1",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
            "shortId": "f45c9665f3261108",
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
              "address": "94.228.124.191",
              "port": 443,
              "users": [
                {
                  "id": "17b701b8-1434-4968-946e-e14fe5d06d4d",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "H0DEomaR2FJq-0bkX6x6PkI-Wks_i1hibBNxfLGG-RI",
            "shortId": "23b332167b815f27",
            "spiderX": "",
            "serverName": "static.rutube.ru",
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
              "address": "84.201.181.141",
              "port": 443,
              "users": [
                {
                  "id": "f23dd209-5f9a-4e82-b975-38b32df69e86",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "0rPvIBbfmdq3YJkkNGc8p7t-1zme85V-nj3v8ekm4DE",
            "shortId": "1b3de616b36b1233",
            "spiderX": "",
            "serverName": "ads.x5.ru",
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
              "address": "217.16.16.12",
              "port": 443,
              "users": [
                {
                  "id": "187afdf1-14c9-4384-81a0-17625dac5d4d",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "tODCxAh9DPQ0_iKHyoauDD6XlBUGPwoHetCh0TKiBSs",
            "shortId": "43daa1666d1e275f",
            "spiderX": "%2F",
            "serverName": "eh.vk.com",
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
              "address": "152.53.236.168",
              "port": 443,
              "users": [
                {
                  "id": "9032f390-3f3a-4684-8c08-eb43a8221840",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "wnGvj74U0YBW_9DvIya4LGUdF_UONMCg8xqCHyRrhws",
            "shortId": "cb3b1ae3cfb0",
            "spiderX": "",
            "serverName": "vk.ru",
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
              "address": "87.239.109.16",
              "port": 443,
              "users": [
                {
                  "id": "e34a84c4-8a52-4b4e-9a7d-cfa1a4d77e95",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "wbnGBz2-4phcH28Bz9rPpUaxxrIrYdXwpWIKHcCI4lw",
            "shortId": "c0ffee1234abcd56",
            "spiderX": "",
            "serverName": "taxi.yandex.ru",
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
              "address": "84.201.165.182",
              "port": 443,
              "users": [
                {
                  "id": "c443cdb4-dda8-4f97-943a-0d10e1e2012e",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "zjwvBtA4hH_fEiPnxkBxTwJLjqaiRpaS0lGtBjT7Iis",
            "shortId": "e11822a0958dd1a3",
            "spiderX": "%2F",
            "serverName": "api-maps.yandex.ru",
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
            "shortId": "d17bd238f23fba92",
            "spiderX": "%2F",
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
              "address": "178.236.244.22",
              "port": 443,
              "users": [
                {
                  "id": "cf97c9a9-441e-43e1-9bd2-f66a198cd87b",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "3LwULpxLmY98y-IDJAeOwZzlVo5s5BnzKz4D5A7lQn4",
            "shortId": "586207ca3cf8d389",
            "spiderX": "",
            "serverName": "kinopoisk.ru",
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
              "address": "188.120.234.103",
              "port": 443,
              "users": [
                {
                  "id": "bcf31ced-07e7-4bd3-ae6d-9280d9a47834",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "H6Ka1r2xZnRf29vhxygofvtwGD2KelEFcYHKXTEt2wk",
            "shortId": "d87a6ae332fd4d2d",
            "spiderX": "",
            "serverName": "sun6-21.userapi.com",
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
              "address": "5.188.140.37",
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
        "tag": "s2",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "185.130.115.55",
              "port": 443,
              "users": [
                {
                  "id": "ea10b09f-719b-4857-b57d-2b7d34e971f1",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
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
            "spiderX": "%2F",
            "serverName": "web.max.ru",
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
              "address": "79.137.174.164",
              "port": 443,
              "users": [
                {
                  "id": "c3599d6c-52e6-411c-b19a-0f8875e886ef",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "46.149.68.236",
              "port": 443,
              "users": [
                {
                  "id": "919c1334-5a4a-4eb4-930a-7576b307aa48",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "KrdRa3hUCFN2pYeSUsf9DOnAQJyQsg2p0B7FWcN1oSU",
            "shortId": "",
            "spiderX": "",
            "serverName": "ir.ozone.ru",
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
              "address": "109.120.189.71",
              "port": 443,
              "users": [
                {
                  "id": "45223222-04c6-0bb8-b5e6-486115d5968e",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "185.130.115.55",
              "port": 443,
              "users": [
                {
                  "id": "08d01609-d113-436d-b761-6ae080ce7361",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
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
            "spiderX": "%2F",
            "serverName": "web.max.ru",
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
              "address": "51.250.108.190",
              "port": 443,
              "users": [
                {
                  "id": "fafa682e-ac62-4c01-945d-178f02d2b833",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "1o-cHJjBH0bnTUYB3IKtRJ10aiEvpBH5We5dApcTFFk",
            "shortId": "e572",
            "spiderX": "",
            "serverName": "event.yandex.ru",
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
              "address": "185.130.115.55",
              "port": 443,
              "users": [
                {
                  "id": "c38e6142-9223-47ef-84ce-2a84a308cafb",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
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
            "serverName": "web.max.ru",
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
            "spiderX": "%2F",
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
              "address": "84.201.172.189",
              "port": 443,
              "users": [
                {
                  "id": "7d94a6d3-e43e-59b3-9408-bfa0d909e7f3",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "mk-fkkWvUHz2ubIOkr8kfDeglXowdCI3Z4OssjWIIwg",
            "shortId": "2b145d99dc39e2cc",
            "spiderX": "",
            "serverName": "sun9-38.userapi.com",
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
              "address": "158.160.189.247",
              "port": 443,
              "users": [
                {
                  "id": "a05d23b2-9b72-45d4-9d8d-eb86990e5e34",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "84.201.167.196",
              "port": 443,
              "users": [
                {
                  "id": "48b57546-0260-4140-836a-61b5eaa64c4e",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "53np4dm7wFCgvoOfGCX2w6WHxq3590b62a2Yiq66N00",
            "shortId": "f1d8f4aa",
            "spiderX": "%2F",
            "serverName": "event.yandex.ru",
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
              "address": "217.16.16.12",
              "port": 443,
              "users": [
                {
                  "id": "187afdf1-14c9-4384-81a0-17625dac5d4d",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "09yujrRdcmxAqVF0CGtEwwov02Uc-8rdIO_pBj-DfE4",
            "shortId": "a50ebec7fc3679ba",
            "spiderX": "%2F",
            "serverName": "max.ru",
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
              "address": "213.176.19.224",
              "port": 443,
              "users": [
                {
                  "id": "694da8d8-0f3a-4028-a7a6-05927218eb6c",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "UCXPPx6xuh21NtqvboGsl-hf1y-LSpwB37K-vzlxyyM",
            "shortId": "68039fa078",
            "spiderX": "",
            "serverName": "tr7.strelkavpn.ru",
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
              "address": "51.250.76.178",
              "port": 443,
              "users": [
                {
                  "id": "640500ce-b72f-48f4-8478-32e36a4f9b50",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
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
            "spiderX": "%2F",
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
              "address": "95.163.210.138",
              "port": 443,
              "users": [
                {
                  "id": "ca21934a-cfa7-4d61-9808-737f271da7b1",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
        "tag": "s7",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.92.19",
              "port": 443,
              "users": [
                {
                  "id": "640500ce-b72f-48f4-8478-32e36a4f9b50",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
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
            "spiderX": "%2F",
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
              "address": "est01-vlr01.tcp-reset-club.net",
              "port": 443,
              "users": [
                {
                  "id": "f0383138-8329-40cf-8b68-dabcd1b6c754",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "mLmBhbVFfNuo2eUgBh6r9-5Koz9mUCn3aSzlR6IejUg",
            "shortId": "48720c",
            "spiderX": "",
            "serverName": "hls-svod.itunes.apple.com",
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
              "address": "rue.cdn.stemstep.cloud",
              "port": 443,
              "users": [
                {
                  "id": "f24ea5b6-addb-440d-b7b4-82ef3f318398",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "cTPVHpWKxuK-BOgZ7j0hleXfO9bx4VUVHhReuAieIRA",
            "shortId": "97ad88ccc8232bfe",
            "spiderX": "",
            "serverName": "yandex.ru",
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
              "address": "hels3.vlessok.store",
              "port": 443,
              "users": [
                {
                  "id": "7405cd73-01d9-48d5-ada9-6905378d3975",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "wffi6nrJbxOiA0g7IuiXB4FZ7tkFtb9eRkPS9UvWPks",
            "shortId": "9ec7e0",
            "spiderX": "/",
            "serverName": "disk.yandex.ru",
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
              "address": "158.160.149.4",
              "port": 443,
              "users": [
                {
                  "id": "f23dd209-5f9a-4e82-b975-38b32df69e86",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "0rPvIBbfmdq3YJkkNGc8p7t-1zme85V-nj3v8ekm4DE",
            "shortId": "1b3de616b36b1233",
            "spiderX": "",
            "serverName": "maps.yandex.ru",
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
              "address": "est01-vlr01.tcp-reset-club.net",
              "port": 443,
              "users": [
                {
                  "id": "75383d68-be02-495e-9852-17acad6e23aa",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "mLmBhbVFfNuo2eUgBh6r9-5Koz9mUCn3aSzlR6IejUg",
            "shortId": "86e999a2cdc2",
            "spiderX": "%2F",
            "serverName": "hls-svod.itunes.apple.com",
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
              "address": "de-01.opsvpnvless.ru",
              "port": 443,
              "users": [
                {
                  "id": "1218c022-dca8-49e5-b7d4-a04f3023db81",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "7_RFavizkZFWUyGrUalk1jAKAJ7oVTxIgV-PEGD89Bs",
            "shortId": "50d4a7cd",
            "spiderX": "",
            "serverName": "stats.vk-portal.net",
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
              "address": "est01-vlr01.tcp-reset-club.net",
              "port": 443,
              "users": [
                {
                  "id": "c8144707-3068-4fa9-9fab-03f60f1532e5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "mLmBhbVFfNuo2eUgBh6r9-5Koz9mUCn3aSzlR6IejUg",
            "shortId": "e499f276e7bd6420",
            "spiderX": "%2F",
            "serverName": "hls-svod.itunes.apple.com",
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
              "address": "che01-plr-vlr01.tcp-reset-club.net",
              "port": 443,
              "users": [
                {
                  "id": "e108f3eb-4d3a-4e20-a09b-7008e333bc23",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "mLmBhbVFfNuo2eUgBh6r9-5Koz9mUCn3aSzlR6IejUg",
            "shortId": "31",
            "spiderX": "",
            "serverName": "hls-svod.itunes.apple.com",
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
              "address": "ru01-blh01.tcp-reset-club.net",
              "port": 443,
              "users": [
                {
                  "id": "e108f3eb-4d3a-4e20-a09b-7008e333bc23",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "mLmBhbVFfNuo2eUgBh6r9-5Koz9mUCn3aSzlR6IejUg",
            "shortId": "48720c",
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
              "address": "fi.appav.online",
              "port": 443,
              "users": [
                {
                  "id": "95abaefc-7861-417a-81b7-166cb788ce1a",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "9ajY_OBOn5CCPnCJTPjxg6J3IWE8uJYAiWQvG9CBGjU",
            "shortId": "00684d2eae2cdd16",
            "spiderX": "",
            "serverName": "st.ozone.ru",
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
              "address": "81.200.149.112",
              "port": 443,
              "users": [
                {
                  "id": "187afdf1-14c9-4384-81a0-17625dac5d4d",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "_-GgrwPZ2wH-9uk1jVc_EgIXkdMPm7r51oCY6TkS3lg",
            "shortId": "a1b2c3d4e5f60002",
            "spiderX": "",
            "serverName": "api.yandex.ru",
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
              "address": "84.201.140.112",
              "port": 443,
              "users": [
                {
                  "id": "768b231f-1e87-4ee8-848a-fce075e31ab0",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "v6rib0-2FxBd1MnBxdylbIRIhvXywSj56QEtCkaEuBo",
            "shortId": "27e53bbcab7593d7",
            "spiderX": "%2F",
            "serverName": "ads.x5.ru",
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
              "address": "ru01-blh01.tcp-reset-club.net",
              "port": 443,
              "users": [
                {
                  "id": "b4d8a0f6-bf50-43a5-a8ff-e8da390910f9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "mLmBhbVFfNuo2eUgBh6r9-5Koz9mUCn3aSzlR6IejUg",
            "shortId": "8453e5fd9af927",
            "spiderX": "/",
            "serverName": "stats.vk-portal.net",
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
            "shortId": "65ce6cee3941af69",
            "spiderX": "%2F",
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
              "address": "filterai.ru",
              "port": 443,
              "users": [
                {
                  "id": "4292f5ab-8963-07d0-8052-3615895ce4f1",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "wl-2.komaruvpn.com",
              "port": 443,
              "users": [
                {
                  "id": "e6d2818a-2db6-4df5-a9f0-2cc418185437",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "WEZn2WygVogwL7mWqz9EvHdrNllEXf9MaDlRh20Ds10",
            "shortId": "f28ec2ab265c5efd",
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
              "address": "147.45.237.40",
              "port": 443,
              "users": [
                {
                  "id": "ac100002-eb6f-11f0-8d36-02425bb19656",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "FTQFvnQv39brE3y6yzJ-Nbby99pbAsxaRiyKmNJF0w0",
            "shortId": "7f6324aca90f1ff1",
            "spiderX": "",
            "serverName": "eh.vk.com",
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
              "address": "fi.appav.online",
              "port": 443,
              "users": [
                {
                  "id": "c501c66b-c6c2-456b-b604-80393b83d67f",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "9ajY_OBOn5CCPnCJTPjxg6J3IWE8uJYAiWQvG9CBGjU",
            "shortId": "00684d2eae2cdd16",
            "spiderX": "",
            "serverName": "st.ozone.ru",
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
              "address": "85.209.70.13",
              "port": 443,
              "users": [
                {
                  "id": "87d58e85-a4b3-4187-9fb7-6f0a73b21a6b",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "xhttp",
          "security": "tls",
          "tlsSettings": {
            "serverName": "api.furypay.ru",
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
        "tag": "s8",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.92.19",
              "port": 443,
              "users": [
                {
                  "id": "640500ce-b72f-48f4-8478-32e36a4f9b50",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
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
            "spiderX": "%2F",
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
              "address": "51.250.86.218",
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
            "publicKey": "nsfP_pCDtmyl2ZuyzNYQ4JOkaJN1BHYnEx9XJR1b7F4",
            "shortId": "e1ab11951029de10",
            "spiderX": "%2F",
            "serverName": "ads.x5.ru",
            "fingerprint": "randomized",
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
              "address": "ru01-blh01.tcp-reset-club.net",
              "port": 443,
              "users": [
                {
                  "id": "d44e93de-4a8c-464f-81f2-eb0d384b1ab2",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "mLmBhbVFfNuo2eUgBh6r9-5Koz9mUCn3aSzlR6IejUg",
            "shortId": "175d",
            "spiderX": "%2F",
            "serverName": "stats.vk-portal.net",
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
              "address": "ru01-blh01.tcp-reset-club.net",
              "port": 443,
              "users": [
                {
                  "id": "e3ce253c-896c-416f-9a4a-33b1cb771e02",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "mLmBhbVFfNuo2eUgBh6r9-5Koz9mUCn3aSzlR6IejUg",
            "shortId": "48720c",
            "spiderX": "%2F",
            "serverName": "stats.vk-portal.net",
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
              "address": "5.188.140.244",
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
        "tag": "s3",
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
        "tag": "s4",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.38.225",
              "port": 443,
              "users": [
                {
                  "id": "7fbb424e-fd85-42ea-a86a-26cec380fcf7",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "0rPvIBbfmdq3YJkkNGc8p7t-1zme85V-nj3v8ekm4DE",
            "shortId": "1b3de616b36b1233",
            "spiderX": "",
            "serverName": "ya.ru",
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
        "tag": "s6",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.90.137",
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
            "shortId": "cd57a927f6b72d81",
            "spiderX": "%2F",
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
              "address": "95.163.210.4",
              "port": 443,
              "users": [
                {
                  "id": "1a422a92-4959-45ae-b497-d3ab2a5c56dc",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
            "spiderX": "%2F",
            "serverName": "m.vk.com",
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
            "shortId": "95ec618532fa065e",
            "spiderX": "%2F",
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
              "address": "51.250.86.118",
              "port": 443,
              "users": [
                {
                  "id": "6b0ea369-4b34-49d2-80ce-735e87098503",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "WHU2mY4_UA_PjfWOcN_MUhJoy76pY7SHF1GE6JbGe00",
            "shortId": "cba5f8297ee5c9",
            "spiderX": "",
            "serverName": "event.yandex.ru",
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
              "address": "est01-vlr01.tcp-reset-club.net",
              "port": 443,
              "users": [
                {
                  "id": "64ec96eb-1551-4d97-a098-15ad98b3c949",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "mLmBhbVFfNuo2eUgBh6r9-5Koz9mUCn3aSzlR6IejUg",
            "shortId": "e499f276e7bd6420",
            "spiderX": "",
            "serverName": "hls-svod.itunes.apple.com",
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
              "address": "81.200.149.112",
              "port": 443,
              "users": [
                {
                  "id": "187afdf1-14c9-4384-81a0-17625dac5d4d",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "DWfec3JDXHMXmEz3iVtz6_HTzJD_Vl0QWniXWjDF2i0",
            "shortId": "a1b2c3d4e5f60003",
            "spiderX": "",
            "serverName": "api-maps.yandex.ru",
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
              "address": "37.139.32.78",
              "port": 443,
              "users": [
                {
                  "id": "49ac422e-dcb6-41bc-969e-255989df9625",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc",
            "shortId": "43dcff53849b81e6",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "edge",
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
              "address": "51.250.28.252",
              "port": 443,
              "users": [
                {
                  "id": "7a31d541-e885-43d4-81f2-62ac29ecd387",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "xl3D_xayL74d7uzlV_1EpEWw0BJ52kzEMF8tUGd7vBM",
            "shortId": "1f6dffff8a",
            "spiderX": "",
            "serverName": "ads.x5.ru",
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
              "address": "146.185.240.4",
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
        "tag": "s5",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.104.128",
              "port": 443,
              "users": [
                {
                  "id": "f6533bb4-8d71-4672-aeac-fffe111c0225",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "jTwoei499uLogYymJZ3EuDjDO8hzEFDDgFXa8m55Axg",
            "shortId": "8adf2faddbaa5955",
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
              "address": "158.160.129.231",
              "port": 443,
              "users": [
                {
                  "id": "ee93958c-7d12-4a5c-aaa7-0a7a0e9c68bc",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "D6Rp5wFAzRZ-ZHOcKdaTK7aCfsBBu1jb3_dtvekt2W0",
            "shortId": "",
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
              "address": "84.201.168.25",
              "port": 443,
              "users": [
                {
                  "id": "6849ced5-a456-4898-9ac2-39461f91e47c",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "SW_6K6SCiDhuLbBV980_CFTu_DcdeWHBYSoyilF_L2o",
            "shortId": "8564",
            "spiderX": "%2F",
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
              "address": "5.188.140.244",
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
            "shortId": "d17bd238f23fba92",
            "spiderX": "%2F",
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
              "address": "51.250.101.108",
              "port": 443,
              "users": [
                {
                  "id": "a079848a-f786-49ed-bd21-021b9d61dcf7",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "4YI0QbJYHCyl4-VWZPWAMccOmUW0c_XDE_rEZc-dNC0",
            "shortId": "",
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
              "address": "185.234.59.90",
              "port": 443,
              "users": [
                {
                  "id": "b4d8a0f6-bf50-43a5-a8ff-e8da390910f9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "mLmBhbVFfNuo2eUgBh6r9-5Koz9mUCn3aSzlR6IejUg",
            "shortId": "8453e5fd9af927",
            "spiderX": "",
            "serverName": "stats.vk-portal.net",
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
              "address": "95.163.182.206",
              "port": 443,
              "users": [
                {
                  "id": "a7a9f670-44c0-45a9-8047-69db0203c142",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "5bGFIWSo4vlrd9Tv1yFcpdpSjrjYYN20SOWHYfighHc",
            "shortId": "abde0809",
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
              "address": "51.250.90.137",
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
            "spiderX": "%2F",
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
              "address": "51.250.25.211",
              "port": 443,
              "users": [
                {
                  "id": "7a31d541-e885-43d4-81f2-62ac29ecd387",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "yYAinVQAEpA8zDIJ9n01Fa4ln7zQn6I3i5nfRdX1UAI",
            "shortId": "ff44bc26",
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
              "address": "a.nl.maviks.ru",
              "port": 443,
              "users": [
                {
                  "id": "e5c31f13-b10a-4e9c-bfa6-09454bc5e65c",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "fPSR5GZpxhOV6Rh7VzMtS4AeRN7ipyNX4waG9JzJzxQ",
            "shortId": "21181028b56c8702",
            "spiderX": "",
            "serverName": "www.apple.com",
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
              "address": "92.53.107.207",
              "port": 443,
              "users": [
                {
                  "id": "06e8ad5f-df74-11f0-b453-0242ac100005",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "n0X8cA7Ndd42e8dYC8OVWm8qniP_dxjy7GeY8LWNEjQ",
            "shortId": "6f822eda1c375660",
            "spiderX": "",
            "serverName": "rutube.ru",
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
              "address": "78.159.245.89",
              "port": 443,
              "users": [
                {
                  "id": "7d94a6d3-e43e-59b3-9408-bfa0d909e7f3",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "mk-fkkWvUHz2ubIOkr8kfDeglXowdCI3Z4OssjWIIwg",
            "shortId": "2b145d99dc39e2cc",
            "spiderX": "",
            "serverName": "sun9-38.userapi.com",
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
              "address": "poland.nebesniy.com",
              "port": 443,
              "users": [
                {
                  "id": "ad7a9316-1953-439a-854f-66355100a004",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "4WI4bWzGjxTzGYpJawVWeUzqcOCm8jsjDdXXBlr2axQ",
            "shortId": "a05add1ef2a1b7",
            "spiderX": "",
            "serverName": "ok.ru",
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
              "address": "51.250.95.115",
              "port": 443,
              "users": [
                {
                  "id": "640500ce-b72f-48f4-8478-32e36a4f9b50",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
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
            "spiderX": "%2F",
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
              "address": "filterai.ru",
              "port": 443,
              "users": [
                {
                  "id": "4292f5ab-8963-2710-8052-3615895ce4f1",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
        "tag": "s2",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "81.200.151.63",
              "port": 443,
              "users": [
                {
                  "id": "c443cdb4-dda8-4f97-943a-0d10e1e2012e",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "Y5shJIf4QYfvBr0pDrfF4CPOMBU597qPBQaf-K0GmkE",
            "shortId": "e2b31f439b701fe6",
            "spiderX": "%2F",
            "serverName": "api-maps.yandex.ru",
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
              "address": "217.16.17.224",
              "port": 443,
              "users": [
                {
                  "id": "fd4b0117-d752-46fd-9a94-21a21e360fdb",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "r5WB5FnSCt4eeBC1FJMfkWHbzsMuabo0Rc6wuAhlZUs",
            "shortId": "71f0b07a98c840c7",
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
        "tag": "s5",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "109.120.189.71",
              "port": 443,
              "users": [
                {
                  "id": "3bb96984-fc3d-01f4-912c-aeccbeafb334",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "95.163.210.138",
              "port": 443,
              "users": [
                {
                  "id": "ae9ea891-af47-418a-b679-a57fb5cba5b4",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
            "shortId": "d020b987f84eb78a",
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
            "shortId": "7426b0c03ef009dc",
            "spiderX": "%2F",
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
              "address": "sw1.fgnconnection.life",
              "port": 443,
              "users": [
                {
                  "id": "84124a40-4b02-4762-a3a6-6cf43f297724",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "H46I56wuurV9oQyn2irq5ZleWz_FBpHWmWoqz1Hc-Qc",
            "shortId": "53c8004fa34e8724",
            "spiderX": "",
            "serverName": "eh.vk.com",
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
              "address": "158.160.189.247",
              "port": 443,
              "users": [
                {
                  "id": "5a233ce1-e895-403e-b1fe-2cd89f88048e",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
            "serverName": "m.vk.com",
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
              "address": "194.164.32.160",
              "port": 443,
              "users": [
                {
                  "id": "a6cc3164-87d8-5a1e-9e89-4a2d8a81450f",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "7tavpjDPb8z2aUDo9XDWXrhh7O1YjpaC5GQMIiU7JFo",
            "shortId": "dceb83b5c6df",
            "spiderX": "",
            "serverName": "www.vk.com",
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
              "address": "est01-vlr01.tcp-reset-club.net",
              "port": 443,
              "users": [
                {
                  "id": "9f47cbec-f7da-4035-b034-373971d6fe2b",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "mLmBhbVFfNuo2eUgBh6r9-5Koz9mUCn3aSzlR6IejUg",
            "shortId": "e499f276e7bd6420",
            "spiderX": "%2F",
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
              "address": "84.23.53.252",
              "port": 443,
              "users": [
                {
                  "id": "cc61ea7c-92f2-4c2d-b272-32cfe8fdf99f",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "CMkW1axrhEXoiJ6anMz9XEjlfqlAtEZya7L0b5ZPMyw",
            "shortId": "df5f7ec1de636bbb",
            "spiderX": "",
            "serverName": "sun6-22.userapi.com",
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
              "address": "ru01-blh01.tcp-reset-club.net",
              "port": 443,
              "users": [
                {
                  "id": "fba162df-6a82-4d57-b956-3a862944f50e",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "mLmBhbVFfNuo2eUgBh6r9-5Koz9mUCn3aSzlR6IejUg",
            "shortId": "175d",
            "spiderX": "%2F",
            "serverName": "stats.vk-portal.net",
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
              "address": "144.31.129.196",
              "port": 443,
              "users": [
                {
                  "id": "c679f6a4-3c2d-498e-86d3-9535021e2bac",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
        "tag": "s5",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.47.5",
              "port": 443,
              "users": [
                {
                  "id": "54227b24-4d00-4942-9511-b114d8a049d4",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "5orQGt6i0bCMdGt6ry0OqYSDdV-v_2jWzQgsQtA4rU4",
            "shortId": "13c2e27a",
            "spiderX": "",
            "serverName": "event.yandex.ru",
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
              "address": "45.89.53.31",
              "port": 443,
              "users": [
                {
                  "id": "00f02ab2-6f2d-449f-a089-d182a2fac59a",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
            "serverName": "sun6-21.userapi.com",
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
              "address": "dostupbypass1.suio.me",
              "port": 443,
              "users": [
                {
                  "id": "ba9ddd0d-5ffd-4d40-b76d-df32ecb092a1",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "5bGFIWSo4vlrd9Tv1yFcpdpSjrjYYN20SOWHYfighHc",
            "shortId": "abde0809",
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
            "shortId": "2476f063981ffd92",
            "spiderX": "%2F",
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
              "address": "217.16.27.96",
              "port": 443,
              "users": [
                {
                  "id": "187afdf1-14c9-4384-81a0-17625dac5d4d",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "09yujrRdcmxAqVF0CGtEwwov02Uc-8rdIO_pBj-DfE4",
            "shortId": "a50ebec7fc3679ba",
            "spiderX": "%2F",
            "serverName": "max.ru",
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
              "address": "5.188.140.92",
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
              "address": "109.120.188.156",
              "port": 443,
              "users": [
                {
                  "id": "45223222-04c6-03e8-b5e6-486115d5968e",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "158.160.149.4",
              "port": 443,
              "users": [
                {
                  "id": "7fbb424e-fd85-42ea-a86a-26cec380fcf7",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "0rPvIBbfmdq3YJkkNGc8p7t-1zme85V-nj3v8ekm4DE",
            "shortId": "1b3de616b36b1233",
            "spiderX": "",
            "serverName": "maps.yandex.ru",
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
              "address": "144.31.129.198",
              "port": 443,
              "users": [
                {
                  "id": "c679f6a4-3c2d-498e-86d3-9535021e2bac",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "144.124.242.141",
              "port": 443,
              "users": [
                {
                  "id": "3d358bdf-ce2d-4b82-964b-cad7c898c705",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "kY32I2PvI5UYqhjoZlcL0z6V6r1AV_lLZolQH78ApmU",
            "shortId": "ae575a16aa1a19a9",
            "spiderX": "%2F",
            "serverName": "kinopoisk.ru",
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
              "address": "5.188.140.92",
              "port": 443,
              "users": [
                {
                  "id": "9ee1984a-3a9b-03e8-b1c1-afc6fdd73211",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "185.241.193.60",
              "port": 443,
              "users": [
                {
                  "id": "a9afd24e-2f6c-42fb-8b60-ccdbcc0aaeb2",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
            "spiderX": "%2F",
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
              "address": "217.25.92.76",
              "port": 443,
              "users": [
                {
                  "id": "c1ac0b55-611a-48ca-8594-63e0cbcb3dd0",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "8_eCxkrzPtoxZKM05euCs664cL_knpqvbr-KTlnHVmw",
            "shortId": "17a729f0cd30b6a7",
            "spiderX": "%2F",
            "serverName": "eh.vk.com",
            "fingerprint": "randomized",
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
              "address": "158.160.189.247",
              "port": 443,
              "users": [
                {
                  "id": "60e08828-2a44-47bd-86e7-79113f00f0d0",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
            "serverName": "m.vk.com",
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
              "address": "51.250.25.103",
              "port": 443,
              "users": [
                {
                  "id": "48b57546-0260-4140-836a-61b5eaa64c4e",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "oSk1K-R-fmT4tj_qrYAvR1Mn0cEcvCl7zh9gQz6Fx28",
            "shortId": "b1d8aa4aad",
            "spiderX": "%2F",
            "serverName": "event.yandex.ru",
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
              "address": "178.154.254.238",
              "port": 443,
              "users": [
                {
                  "id": "c443cdb4-dda8-4f97-943a-0d10e1e2012e",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "KusXgb8rHwJyq0E3MTIhralpeZBAuSyQDphDwhojGgQ",
            "shortId": "e11822a0958dd1a3",
            "spiderX": "%2F",
            "serverName": "api-maps.yandex.ru",
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
              "address": "51.250.38.225",
              "port": 443,
              "users": [
                {
                  "id": "f23dd209-5f9a-4e82-b975-38b32df69e86",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "0rPvIBbfmdq3YJkkNGc8p7t-1zme85V-nj3v8ekm4DE",
            "shortId": "1b3de616b36b1233",
            "spiderX": "",
            "serverName": "ya.ru",
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
              "address": "213.219.214.245",
              "port": 443,
              "users": [
                {
                  "id": "46dbabb0-b074-46ff-83dd-08aab029309b",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc",
            "shortId": "43dcff53849b81e6",
            "spiderX": "",
            "serverName": "eh.vk.com",
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
              "address": "51.250.74.75",
              "port": 443,
              "users": [
                {
                  "id": "d99757ac-d44d-4f1c-8680-84d18b07da21",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "DtNSFtpox12uBJgQMEeZD9OsHdcCFdzvVWwCeavGwn0",
            "shortId": "27e53bbcab7593d7",
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
              "address": "213.176.19.224",
              "port": 443,
              "users": [
                {
                  "id": "3f8673ed-eca3-4aba-aa60-85b841b389f0",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "UCXPPx6xuh21NtqvboGsl-hf1y-LSpwB37K-vzlxyyM",
            "shortId": "68039fa078",
            "spiderX": "%2F",
            "serverName": "tr7.strelkavpn.ru",
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
            "shortId": "048fe5c8be4bb687",
            "spiderX": "%2F",
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
              "address": "178.154.220.63",
              "port": 443,
              "users": [
                {
                  "id": "187afdf1-14c9-4384-81a0-17625dac5d4d",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "zYJherUg8rsyTsumgWLweMea_Tp2j4ZpVuRlskKTwiY",
            "shortId": "92df5620ac107be4",
            "spiderX": "",
            "serverName": "ads.x5.ru",
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
              "address": "178.154.206.7",
              "port": 443,
              "users": [
                {
                  "id": "e34a84c4-8a52-4b4e-9a7d-cfa1a4d77e95",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "_1CdC4TRCkeTD3sHtnnZo2kkCGZkbYzLO2I-mJsWvmk",
            "shortId": "e3b1c4d5a6f70912",
            "spiderX": "",
            "serverName": "maps.yandex.ru",
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
              "address": "51.250.71.116",
              "port": 443,
              "users": [
                {
                  "id": "640500ce-b72f-48f4-8478-32e36a4f9b50",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
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
            "spiderX": "%2F",
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
              "address": "51.250.86.118",
              "port": 443,
              "users": [
                {
                  "id": "4776eea3-90b9-48ae-bcdb-aec925c3c044",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "WHU2mY4_UA_PjfWOcN_MUhJoy76pY7SHF1GE6JbGe00",
            "shortId": "39b4e488819b81",
            "spiderX": "",
            "serverName": "event.yandex.ru",
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
              "address": "84.201.172.189",
              "port": 443,
              "users": [
                {
                  "id": "0ec69e9d-290e-5090-872e-93b51084f060",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "mk-fkkWvUHz2ubIOkr8kfDeglXowdCI3Z4OssjWIIwg",
            "shortId": "2b145d99dc39e2cc",
            "spiderX": "",
            "serverName": "sun9-38.userapi.com",
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
              "address": "178.154.206.7",
              "port": 443,
              "users": [
                {
                  "id": "f23dd209-5f9a-4e82-b975-38b32df69e86",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "_1CdC4TRCkeTD3sHtnnZo2kkCGZkbYzLO2I-mJsWvmk",
            "shortId": "e3b1c4d5a6f70912",
            "spiderX": "",
            "serverName": "maps.yandex.ru",
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
              "address": "109.120.188.145",
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
        "tag": "s4",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "89.23.101.203",
              "port": 443,
              "users": [
                {
                  "id": "d5f7970e-121f-4e6f-9acf-250effc0715b",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "lJscl0GgEiVZtTVrMVI6O0-zSJTgmug9Cs-KJqpxWw0",
            "shortId": "f6fb0261a102c0c8",
            "spiderX": "",
            "serverName": "www.vk.com",
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
              "address": "79.137.174.170",
              "port": 443,
              "users": [
                {
                  "id": "e34a84c4-8a52-4b4e-9a7d-cfa1a4d77e95",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "ukaSnTt3IOCDDZVDNfToNGif8yfMKjGLLZgn8ynOVmU",
            "shortId": "deadbeefcafebabe",
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
              "address": "109.120.190.39",
              "port": 443,
              "users": [
                {
                  "id": "49ac422e-dcb6-41bc-969e-255989df9625",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc",
            "shortId": "43dcff53849b81e6",
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
              "address": "84.201.169.24",
              "port": 443,
              "users": [
                {
                  "id": "bed987c7-922c-4bb0-940b-f6ff688dc0e8",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "6LY8pdiGxeFO6Vx5Fz2qdstbLyd0zbQoWpFWVxumaxA",
            "shortId": "27da",
            "spiderX": "",
            "serverName": "st.vk.com",
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
            "spiderX": "%2F",
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
              "address": "51.250.90.137",
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
            "shortId": "95ec618532fa065e",
            "spiderX": "%2F",
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
              "address": "kz.connect-iskra.ru",
              "port": 443,
              "users": [
                {
                  "id": "df0069ff-8af9-4a46-804c-f8d038d26afd",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "8VKPutEgZOD-XpqMamtP1NAq_Vkzs9_PVCPzIfkPhA0",
            "shortId": "3c0f3356519e387a",
            "spiderX": "%2F",
            "serverName": "softpipe.xyz",
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
              "address": "109.120.188.156",
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
        "tag": "s2",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "158.160.189.247",
              "port": 443,
              "users": [
                {
                  "id": "5a233ce1-e895-403e-b1fe-2cd89f88048e",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "138.124.79.3",
              "port": 443,
              "users": [
                {
                  "id": "d6b1327d-2bec-4366-a3a1-9b1284f95841",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "usa141.luckerusa.org",
              "port": 443,
              "users": [
                {
                  "id": "2473ced1-b0e6-4d39-873b-acd41be42258",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "BhTJ3phnq-Z-10aFKSsj1lzhA8mULR4L6leE4-0WTAs",
            "shortId": "",
            "spiderX": "/sinavn",
            "serverName": "www.vk.com",
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
              "address": "che01-plr-vlr01.tcp-reset-club.net",
              "port": 443,
              "users": [
                {
                  "id": "9f47cbec-f7da-4035-b034-373971d6fe2b",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "mLmBhbVFfNuo2eUgBh6r9-5Koz9mUCn3aSzlR6IejUg",
            "shortId": "d3b13f31",
            "spiderX": "%2F",
            "serverName": "hls-svod.itunes.apple.com",
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
              "address": "212.233.95.51",
              "port": 443,
              "users": [
                {
                  "id": "e24fcc0e-b819-4df0-bb64-b997660e208f",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "jyfiBUYiL1e88ru9_K3hrieKZVwiI6CkU5mhnH36qm8",
            "shortId": "afee1a48fd42a87b",
            "spiderX": "",
            "serverName": "ads.x5.ru",
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
              "address": "5.188.140.244",
              "port": 443,
              "users": [
                {
                  "id": "45223222-04c6-01f4-b5e6-486115d5968e",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "51.250.92.19",
              "port": 443,
              "users": [
                {
                  "id": "640500ce-b72f-48f4-8478-32e36a4f9b50",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
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
            "spiderX": "%2F",
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
              "address": "155.212.164.103",
              "port": 443,
              "users": [
                {
                  "id": "87d58e85-a4b3-4187-9fb7-6f0a73b21a6b",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "VtTa1_wXkB9yxDN5p-DIXq-jC5bcnQM_62fYfFLuX04",
            "shortId": "7f9eb0824a7dbef7",
            "spiderX": "",
            "serverName": "sun6-21.userapi.com",
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
              "address": "176.98.178.5",
              "port": 443,
              "users": [
                {
                  "id": "37e7881f-ff59-4858-83cd-c6b4b03cba4a",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "_jpR0GmavJ8-b6UCyMnf1u4WLf4KYvvAkcISmL45TiY",
            "shortId": "f1f9",
            "spiderX": "",
            "serverName": "eh.vk.com",
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
              "address": "217.25.92.76",
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
            "publicKey": "8_eCxkrzPtoxZKM05euCs664cL_knpqvbr-KTlnHVmw",
            "shortId": "17a729f0cd30b6a7",
            "spiderX": "%2F",
            "serverName": "eh.vk.com",
            "fingerprint": "randomized",
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
              "address": "51.250.45.201",
              "port": 443,
              "users": [
                {
                  "id": "1a422a92-4959-45ae-b497-d3ab2a5c56dc",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "UEKLXjQmUAh_6hhHqB4fmCo68a15hC18hgRCWbzr3UE",
            "shortId": "27e53bbcab7593d7",
            "spiderX": "%2F",
            "serverName": "ads.x5.ru",
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
              "address": "91.107.121.223",
              "port": 443,
              "users": [
                {
                  "id": "744af89f-09ef-46bb-b3b4-79117a96d685",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "tFOva4mDqw-noGSk4B5gdh4X4WhyXHs0eNxM3QogyE4",
            "shortId": "f5563ddfa2847b32",
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
              "address": "217.16.27.96",
              "port": 443,
              "users": [
                {
                  "id": "187afdf1-14c9-4384-81a0-17625dac5d4d",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "tODCxAh9DPQ0_iKHyoauDD6XlBUGPwoHetCh0TKiBSs",
            "shortId": "43daa1666d1e275f",
            "spiderX": "%2F",
            "serverName": "eh.vk.com",
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
              "address": "217.13.104.115",
              "port": 443,
              "users": [
                {
                  "id": "0ee2d410-3e64-4c41-a571-3e5d2b5b8982",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
        "tag": "s6",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "37.139.35.119",
              "port": 443,
              "users": [
                {
                  "id": "49ac422e-dcb6-41bc-969e-255989df9625",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc",
            "shortId": "43dcff53849b81e6",
            "spiderX": "",
            "serverName": "eh.vk.com",
            "fingerprint": "edge",
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
              "address": "37.139.35.37",
              "port": 443,
              "users": [
                {
                  "id": "46dbabb0-b074-46ff-83dd-08aab029309b",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc",
            "shortId": "43dcff53849b81e6",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "edge",
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
              "address": "51.250.90.137",
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
            "spiderX": "%2F",
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
            "spiderX": "%2F",
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
              "address": "blackapple46.ru",
              "port": 443,
              "users": [
                {
                  "id": "fb6b7e3a-c2d8-4a36-a248-bbaf50a5f03c",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "bskTpzWrn9zsMB2f3SG4VcAiBaRmw7uW8kAMzm2PJBA",
            "shortId": "5e80da63696887",
            "spiderX": "/",
            "serverName": "www.vk.com",
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
              "address": "51.250.4.247",
              "port": 443,
              "users": [
                {
                  "id": "2f7d7016-74e0-42d4-a0ac-6470322a4d33",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "CM_8BBs3aFSoioBTi0ciNTD5h4j-4vPcxfqUmwyYXVk",
            "shortId": "348dc0b768acd16f",
            "spiderX": "",
            "serverName": "sun6-22.userapi.com",
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
              "address": "95.163.212.112",
              "port": 443,
              "users": [
                {
                  "id": "4765c728-47cc-42f2-aac0-b9e392e86664",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "bhmXYuOivgD85xqBI7NSernxk-lKYqjLpC3jYsMDQgk",
            "shortId": "063bbc645f77",
            "spiderX": "",
            "serverName": "eh.vk.ru",
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
              "address": "45.84.1.163",
              "port": 443,
              "users": [
                {
                  "id": "32119e22-3da0-439c-858e-aa54c1a67e9e",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "28xC5eoPLJbic43s1rHBA0Oznrh5RNFWrdLEn_xxtQM",
            "shortId": "e5d9",
            "spiderX": "",
            "serverName": "isr8.strelkavpn.ru",
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
            "shortId": "e55fd8f9c9a9a0ca",
            "spiderX": "%2F",
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
              "address": "hk01-vlr01.tcp-reset-club.net",
              "port": 443,
              "users": [
                {
                  "id": "e9dbc178-3656-40f8-8833-5023f306ef1d",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "mLmBhbVFfNuo2eUgBh6r9-5Koz9mUCn3aSzlR6IejUg",
            "shortId": "48720c",
            "spiderX": "%2F",
            "serverName": "hls-svod.itunes.apple.com",
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
              "address": "plmain.fgnconnection.life",
              "port": 443,
              "users": [
                {
                  "id": "84124a40-4b02-4762-a3a6-6cf43f297724",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "H46I56wuurV9oQyn2irq5ZleWz_FBpHWmWoqz1Hc-Qc",
            "shortId": "53c8004fa34e8724",
            "spiderX": "",
            "serverName": "eh.vk.com",
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
              "address": "51.250.95.115",
              "port": 443,
              "users": [
                {
                  "id": "640500ce-b72f-48f4-8478-32e36a4f9b50",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
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
            "spiderX": "%2F",
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
              "address": "155.212.164.103",
              "port": 443,
              "users": [
                {
                  "id": "4fe214fb-048e-431f-b939-4518dc9df6a2",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "VtTa1_wXkB9yxDN5p-DIXq-jC5bcnQM_62fYfFLuX04",
            "shortId": "7f9eb0824a7dbef7",
            "spiderX": "",
            "serverName": "sun6-21.userapi.com",
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
              "address": "ru-vkcloud.appav.online",
              "port": 443,
              "users": [
                {
                  "id": "95abaefc-7861-417a-81b7-166cb788ce1a",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "Uwz6QjH6QTonKba4RVv35LNmhJLA6c2kxtI2nXRQWTg",
            "shortId": "2c60d62e1d95c07a",
            "spiderX": "",
            "serverName": "eh.vk.com",
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
              "address": "ru01-blh01.tcp-reset-club.net",
              "port": 443,
              "users": [
                {
                  "id": "fa9a90cf-f639-4719-9db7-1aba06690552",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "mLmBhbVFfNuo2eUgBh6r9-5Koz9mUCn3aSzlR6IejUg",
            "shortId": "8453e5fd9af927",
            "spiderX": "%2F",
            "serverName": "stats.vk-portal.net",
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
              "address": "37.139.32.66",
              "port": 443,
              "users": [
                {
                  "id": "49ac422e-dcb6-41bc-969e-255989df9625",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc",
            "shortId": "43dcff53849b81e6",
            "spiderX": "",
            "serverName": "ads.x5.ru",
            "fingerprint": "edge",
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
              "address": "158.160.189.247",
              "port": 443,
              "users": [
                {
                  "id": "b27c7007-9a35-43cb-ab1e-8c5c0a7e3c34",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
            "serverName": "m.vk.com",
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
              "address": "51.250.108.190",
              "port": 443,
              "users": [
                {
                  "id": "3fd09b09-485d-4f1c-9fbc-c682393098f9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "1o-cHJjBH0bnTUYB3IKtRJ10aiEvpBH5We5dApcTFFk",
            "shortId": "562d5db877d548cd",
            "spiderX": "",
            "serverName": "event.yandex.ru",
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
              "address": "51.250.110.5",
              "port": 443,
              "users": [
                {
                  "id": "00f02ab2-6f2d-449f-a089-d182a2fac59a",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
            "serverName": "sun6-21.userapi.com",
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
              "address": "51.250.71.116",
              "port": 443,
              "users": [
                {
                  "id": "640500ce-b72f-48f4-8478-32e36a4f9b50",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
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
            "spiderX": "%2F",
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
              "address": "37.139.33.178",
              "port": 443,
              "users": [
                {
                  "id": "38e1f5a3-bdf6-4a48-9282-91fc8482dacb",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc",
            "shortId": "43dcff53849b81e6",
            "spiderX": "",
            "serverName": "api-maps.yandex.ru",
            "fingerprint": "edge",
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
              "address": "37.139.35.30",
              "port": 443,
              "users": [
                {
                  "id": "49ac422e-dcb6-41bc-969e-255989df9625",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc",
            "shortId": "43dcff53849b81e6",
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
              "address": "185.234.59.90",
              "port": 443,
              "users": [
                {
                  "id": "98895157-4ded-4eeb-a22c-058ed62bdac3",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "mLmBhbVFfNuo2eUgBh6r9-5Koz9mUCn3aSzlR6IejUg",
            "shortId": "48720c",
            "spiderX": "",
            "serverName": "stats.vk-portal.net",
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
              "address": "81.200.149.211",
              "port": 443,
              "users": [
                {
                  "id": "1a422a92-4959-45ae-b497-d3ab2a5c56dc",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
            "spiderX": "%2F",
            "serverName": "m.vk.com",
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
              "address": "89.208.229.61",
              "port": 443,
              "users": [
                {
                  "id": "411d247a-071a-4ade-a8fb-00316bf7509d",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "YS9eF4uemctd80tICfPoMJC0SmDO1yMR8PsuQVemBWU",
            "shortId": "460a1b7c34ae203f",
            "spiderX": "",
            "serverName": "apiok.ru",
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
              "address": "64.188.67.25",
              "port": 443,
              "users": [
                {
                  "id": "c48bd63d-f4a0-42d5-9569-6ccfe5c435ed",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "wYoaKmGm40vL6L1lg-2umg9nIXUIqzPfmvw57C1fwXU",
            "shortId": "847cd30556ea39",
            "spiderX": "/",
            "serverName": "yandex.ru",
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
        "tag": "s4",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "109.120.188.145",
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
        "tag": "s5",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "79.137.174.106",
              "port": 443,
              "users": [
                {
                  "id": "1207da56-06c0-458f-8290-e89c1fad41a2",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
        "tag": "s6",
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
        "tag": "s7",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.95.115",
              "port": 443,
              "users": [
                {
                  "id": "640500ce-b72f-48f4-8478-32e36a4f9b50",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
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
            "spiderX": "%2F",
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
              "address": "212.233.72.112",
              "port": 443,
              "users": [
                {
                  "id": "e34a84c4-8a52-4b4e-9a7d-cfa1a4d77e95",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "ukaSnTt3IOCDDZVDNfToNGif8yfMKjGLLZgn8ynOVmU",
            "shortId": "8f0a12bc34de5678",
            "spiderX": "",
            "serverName": "ya.ru",
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
            "shortId": "cd57a927f6b72d81",
            "spiderX": "%2F",
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
              "address": "est01-vlr01.tcp-reset-club.net",
              "port": 443,
              "users": [
                {
                  "id": "e108f3eb-4d3a-4e20-a09b-7008e333bc23",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "mLmBhbVFfNuo2eUgBh6r9-5Koz9mUCn3aSzlR6IejUg",
            "shortId": "86e999a2cdc2",
            "spiderX": "",
            "serverName": "hls-svod.itunes.apple.com",
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
            "spiderX": "%2F",
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
              "address": "84.201.153.154",
              "port": 443,
              "users": [
                {
                  "id": "6849ced5-a456-4898-9ac2-39461f91e47c",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "tus0v5Zu9WhLdAl0A103tmYvCiV2CY4yJiJTpgpZd0Q",
            "shortId": "4791f0562c",
            "spiderX": "%2F",
            "serverName": "ads.x5.ru",
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
              "address": "109.120.189.71",
              "port": 443,
              "users": [
                {
                  "id": "45223222-04c6-03e8-b5e6-486115d5968e",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "51.250.10.215",
              "port": 443,
              "users": [
                {
                  "id": "7610752c-9563-41e6-8294-d1d0fa91ee2a",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "uS9N9YmZxcjBZPqYD-RSNR_arQQxCsJ2WKIZTOUlCng",
            "shortId": "18fcfbf331f5f6ea",
            "spiderX": "",
            "serverName": "ads.x5.ru",
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
              "address": "144.31.232.228",
              "port": 443,
              "users": [
                {
                  "id": "c501c66b-c6c2-456b-b604-80393b83d67f",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "9ajY_OBOn5CCPnCJTPjxg6J3IWE8uJYAiWQvG9CBGjU",
            "shortId": "00684d2eae2cdd16",
            "spiderX": "",
            "serverName": "st.ozone.ru",
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
            "shortId": "17802e8ff84f12df",
            "spiderX": "%2F",
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
              "address": "79.137.175.25",
              "port": 443,
              "users": [
                {
                  "id": "7399d5a8-0026-4f39-a2c6-4ad1a992e8d9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "ISa-DZOI4LRRb9DHMFYm5oFqBXDjYzz0hVWUfWvzLmo",
            "shortId": "dc8109baf0f607ea",
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
            "shortId": "048fe5c8be4bb687",
            "spiderX": "%2F",
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
              "address": "144.31.30.175",
              "port": 443,
              "users": [
                {
                  "id": "ff4acfd1-b138-4b7f-b2f6-968710018b4a",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
            "serverName": "ozon.ru",
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
              "address": "95.163.209.21",
              "port": 443,
              "users": [
                {
                  "id": "ba9ddd0d-5ffd-4d40-b76d-df32ecb092a1",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "5bGFIWSo4vlrd9Tv1yFcpdpSjrjYYN20SOWHYfighHc",
            "shortId": "44f0602c",
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
            "shortId": "6354585c37827955",
            "spiderX": "%2F",
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
              "address": "178.154.252.237",
              "port": 443,
              "users": [
                {
                  "id": "c443cdb4-dda8-4f97-943a-0d10e1e2012e",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "KusXgb8rHwJyq0E3MTIhralpeZBAuSyQDphDwhojGgQ",
            "shortId": "e11822a0958dd1a3",
            "spiderX": "%2F",
            "serverName": "api-maps.yandex.ru",
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
              "address": "51.250.9.196",
              "port": 443,
              "users": [
                {
                  "id": "4a92aeed-f74a-46ae-a79a-8b6d2fab59a3",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "1LeZaQvQySNCrNmRU_-Y143RO2OqFN4JUsOT3fbtyS4",
            "shortId": "7d77500f1352bbc3",
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
        "tag": "s5",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "81.200.149.112",
              "port": 443,
              "users": [
                {
                  "id": "187afdf1-14c9-4384-81a0-17625dac5d4d",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "Mn7-WkqRgIC9zw63xgVMkBbfUKvaLNAOzDsTHIkWxSM",
            "shortId": "a1b2c3d4e5f60006",
            "spiderX": "",
            "serverName": "www.rutube.ru",
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
              "address": "90.156.219.143",
              "port": 443,
              "users": [
                {
                  "id": "10535c8c-fec6-40ca-83e5-13c85b9c92e0",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "745bE3Oscpuzb6Es-H27VycyCfq3rppNssJt5xoAVio",
            "shortId": "ef8d96bdbd9a2090",
            "spiderX": "",
            "serverName": "eh.vk.com",
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
              "address": "89.208.230.27",
              "port": 443,
              "users": [
                {
                  "id": "c443cdb4-dda8-4f97-943a-0d10e1e2012e",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "yl2tD0m0Ko7jVaFHmjS0YJWtyqSBYWdeJcNHsAncrRM",
            "shortId": "bdd73c74631a80cf",
            "spiderX": "%2F",
            "serverName": "eh.vk.com",
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
              "address": "51.250.77.7",
              "port": 443,
              "users": [
                {
                  "id": "71e0492e-9dc5-4fef-891b-15c983934886",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "UEKLXjQmUAh_6hhHqB4fmCo68a15hC18hgRCWbzr3UE",
            "shortId": "27e53bbcab7593d7",
            "spiderX": "/",
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
              "address": "185.234.59.90",
              "port": 443,
              "users": [
                {
                  "id": "3b4d1c7f-4fd7-45bb-9251-79cd53a3e006",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "mLmBhbVFfNuo2eUgBh6r9-5Koz9mUCn3aSzlR6IejUg",
            "shortId": "86e999a2cdc2",
            "spiderX": "",
            "serverName": "stats.vk-portal.net",
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
              "address": "51-wl.connect-opengate.ru",
              "port": 443,
              "users": [
                {
                  "id": "4184cd6e-804d-44dc-8d37-b68817403e36",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "CM_8BBs3aFSoioBTi0ciNTD5h4j-4vPcxfqUmwyYXVk",
            "shortId": "348dc0b768acd16f",
            "spiderX": "%2F",
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
              "address": "144.124.242.141",
              "port": 443,
              "users": [
                {
                  "id": "cf97c9a9-441e-43e1-9bd2-f66a198cd87b",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "kY32I2PvI5UYqhjoZlcL0z6V6r1AV_lLZolQH78ApmU",
            "shortId": "ae575a16aa1a19a9",
            "spiderX": "",
            "serverName": "eh.vk.com",
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
              "address": "5.188.140.37",
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
              "address": "89.208.231.82",
              "port": 443,
              "users": [
                {
                  "id": "187afdf1-14c9-4384-81a0-17625dac5d4d",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "tODCxAh9DPQ0_iKHyoauDD6XlBUGPwoHetCh0TKiBSs",
            "shortId": "43daa1666d1e275f",
            "spiderX": "%2F",
            "serverName": "eh.vk.com",
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
              "address": "109.120.181.190",
              "port": 443,
              "users": [
                {
                  "id": "17e76910-1e63-4124-a792-db8c311c3199",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
            "shortId": "331a8c3fe668c1ee",
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
              "address": "51.250.17.230",
              "port": 443,
              "users": [
                {
                  "id": "a079848a-f786-49ed-bd21-021b9d61dcf7",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "4YI0QbJYHCyl4-VWZPWAMccOmUW0c_XDE_rEZc-dNC0",
            "shortId": "",
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
              "address": "51.250.95.115",
              "port": 443,
              "users": [
                {
                  "id": "640500ce-b72f-48f4-8478-32e36a4f9b50",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
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
            "spiderX": "%2F",
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
              "address": "79.137.174.47",
              "port": 443,
              "users": [
                {
                  "id": "c1ac0b55-611a-48ca-8594-63e0cbcb3dd0",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "hr7V5NTBBQFyvGNZie2OLt2wPDepqEnb8Ck9_tU9hFg",
            "shortId": "99db3196ed2399f1",
            "spiderX": "%2F",
            "serverName": "eh.vk.com",
            "fingerprint": "randomized",
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
              "address": "81.200.151.63",
              "port": 443,
              "users": [
                {
                  "id": "c443cdb4-dda8-4f97-943a-0d10e1e2012e",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "X9ERd_UcTNJNxh--fvBHyhfJ3L_l3E__AD5PmpnJTiA",
            "shortId": "dff09e22f2a68fe1",
            "spiderX": "%2F",
            "serverName": "api.yandex.ru",
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
              "address": "84.201.158.43",
              "port": 443,
              "users": [
                {
                  "id": "47fb6045-2913-4272-b9ef-50ae6b490e41",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "Tt8cQK7R-qgu3J_b1B7B_tId7MGL_oR4XDRdW0cXcCs",
            "shortId": "804a73b2a1",
            "spiderX": "",
            "serverName": "login.vk.com",
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
              "address": "185.241.193.60",
              "port": 443,
              "users": [
                {
                  "id": "b1683f17-1017-4201-bf1e-1da589c690f9",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "5.129.193.147",
              "port": 443,
              "users": [
                {
                  "id": "a888c6da-33b0-480c-a40a-0e94f4eb9c48",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
            "shortId": "93ae75024604f796",
            "spiderX": "",
            "serverName": "eh.vk.com",
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
              "address": "37.139.33.178",
              "port": 443,
              "users": [
                {
                  "id": "49ac422e-dcb6-41bc-969e-255989df9625",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc",
            "shortId": "43dcff53849b81e6",
            "spiderX": "",
            "serverName": "eh.vk.com",
            "fingerprint": "edge",
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
              "address": "84.201.136.67",
              "port": 443,
              "users": [
                {
                  "id": "6849ced5-a456-4898-9ac2-39461f91e47c",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "M4DkYywFvRzittxKLeRu-HhkLR3Lhz6rb-iSrap-cWE",
            "shortId": "4791f0562c",
            "spiderX": "%2F",
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
              "address": "5.188.140.92",
              "port": 443,
              "users": [
                {
                  "id": "45223222-04c6-03e8-b5e6-486115d5968e",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "81.200.151.119",
              "port": 443,
              "users": [
                {
                  "id": "1a422a92-4959-45ae-b497-d3ab2a5c56dc",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
            "spiderX": "%2F",
            "serverName": "travel.yandex.ru",
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
              "address": "109.120.181.190",
              "port": 443,
              "users": [
                {
                  "id": "2bd8a29f-e024-4cdd-b714-53678cecaf79",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "212.34.145.199",
              "port": 443,
              "users": [
                {
                  "id": "968e508c-d52b-43a9-8890-7133cb4f72da",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "HkLK62c3szw51gYtORRnPlO0v6kxOSd_aCd0J4rTKzo",
            "shortId": "00e7",
            "spiderX": "",
            "serverName": "www.wildberries.ru",
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
              "address": "uk1.fgnconnection.life",
              "port": 443,
              "users": [
                {
                  "id": "84124a40-4b02-4762-a3a6-6cf43f297724",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "H46I56wuurV9oQyn2irq5ZleWz_FBpHWmWoqz1Hc-Qc",
            "shortId": "53c8004fa34e8724",
            "spiderX": "",
            "serverName": "eh.vk.com",
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
              "address": "access-fl15.agveit.pro",
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
            "publicKey": "hGydpZcQoEQHwTTtwTf0Lai6MqGOHhvUJtUlONunh2c",
            "shortId": "584053d3c479a4fc",
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
    "remarks": "🇸🇪 LTE #24 | @restlyconnect",
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
              "address": "free.joserv.online",
              "port": 443,
              "users": [
                {
                  "id": "a88ea8bf-7001-4e29-a9bb-379f6778195c",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "n7PbThf3Y4O9x0Ya1sENteFwg7k4INOTnI64MxVz5UQ",
            "shortId": "0123456789abcdef",
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
              "address": "a.de.maviks.ru",
              "port": 443,
              "users": [
                {
                  "id": "d94fd00b-45b4-49f0-87e0-078315c58d20",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "lyLhdojpACv6B3tHViJvPjNGATedXYRMnpAt4n4Siyo",
            "shortId": "f203719d3ff9a5f5",
            "spiderX": "",
            "serverName": "www.microsoft.com",
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
            "shortId": "4a3ad88ff867a295",
            "spiderX": "%2F",
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
            "shortId": "f85b0cdd7d20c84c",
            "spiderX": "%2F",
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
              "address": "109.120.189.73",
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
        "tag": "s6",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "95.163.250.227",
              "port": 443,
              "users": [
                {
                  "id": "7e680f35-6bd9-44bd-8365-8768c41608d0",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "SDH7X2nZwoXpdWVQ5iO0MLXoP_71iCTQSFgCKirx0xU",
            "shortId": "27e53bbcab7593d7",
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
              "address": "51.250.74.75",
              "port": 443,
              "users": [
                {
                  "id": "d99757ac-d44d-4f1c-8680-84d18b07da21",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "wVGCaBw4aNC3tffUk3KxzK2UuucHOvAGsFaLSZJO3x0",
            "shortId": "27e53bbcab7593d7",
            "spiderX": "",
            "serverName": "ads.x5.ru",
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
              "address": "51.250.90.137",
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
            "spiderX": "%2F",
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
              "address": "frmain.fgnconnection.life",
              "port": 443,
              "users": [
                {
                  "id": "84124a40-4b02-4762-a3a6-6cf43f297724",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "H46I56wuurV9oQyn2irq5ZleWz_FBpHWmWoqz1Hc-Qc",
            "shortId": "53c8004fa34e8724",
            "spiderX": "",
            "serverName": "eh.vk.com",
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
              "address": "ilovemax.ru",
              "port": 443,
              "users": [
                {
                  "id": "4292f5ab-8963-07d0-8052-3615895ce4f1",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
    "remarks": "🇸🇪 LTE #25 | @restlyconnect",
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
              "address": "37.46.134.53",
              "port": 443,
              "users": [
                {
                  "id": "87d58e85-a4b3-4187-9fb7-6f0a73b21a6b",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "VsFcOuqknetiqOCyyUJRQ_yzu0S-PfZ7ZSap2iZnyCA",
            "shortId": "1c17fc2737fd1064",
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
              "address": "m8ru.cdn-easy.tech",
              "port": 443,
              "users": [
                {
                  "id": "8d577b19-8033-41a0-bd40-0dc6854c35bb",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "bsmT5rND6qNVATsWZZu5Y3cbQbvCjmW--IcsqxVfhFE",
            "shortId": "c5922ea1f024eb65",
            "spiderX": "",
            "serverName": "vk.ru",
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
            "shortId": "17f0f0e38f01af5a",
            "spiderX": "%2F",
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
              "address": "37.139.32.92",
              "port": 443,
              "users": [
                {
                  "id": "46dbabb0-b074-46ff-83dd-08aab029309b",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc",
            "shortId": "43dcff53849b81e6",
            "spiderX": "",
            "serverName": "eh.vk.com",
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
              "address": "144.31.14.33",
              "port": 443,
              "users": [
                {
                  "id": "53885bb6-dd6d-42df-9e46-2b781bd4078c",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "19IyqpuunsW93JMPaFmm5yGl4HXfbqDDnI1G0mhMiHI",
            "shortId": "",
            "spiderX": "",
            "serverName": "vk.com",
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
              "address": "130.193.56.74",
              "port": 443,
              "users": [
                {
                  "id": "e34a84c4-8a52-4b4e-9a7d-cfa1a4d77e95",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "0rPvIBbfmdq3YJkkNGc8p7t-1zme85V-nj3v8ekm4DE",
            "shortId": "1b3de616b36b1233",
            "spiderX": "",
            "serverName": "yandex.ru",
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
              "address": "5.188.140.37",
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
        "tag": "s8",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "37.139.32.137",
              "port": 443,
              "users": [
                {
                  "id": "49ac422e-dcb6-41bc-969e-255989df9625",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc",
            "shortId": "43dcff53849b81e6",
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
              "address": "213.219.214.183",
              "port": 443,
              "users": [
                {
                  "id": "46dbabb0-b074-46ff-83dd-08aab029309b",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc",
            "shortId": "43dcff53849b81e6",
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
              "address": "51.250.90.137",
              "port": 443,
              "users": [
                {
                  "id": "640500ce-b72f-48f4-8478-32e36a4f9b50",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
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
            "spiderX": "%2F",
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
    "remarks": "🇸🇪 LTE #26 | @restlyconnect",
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
              "address": "185.77.231.80",
              "port": 443,
              "users": [
                {
                  "id": "b02262ee-d4e8-44c5-b08b-2dba07d1eec7",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "J1HIxQSniHBlaSUXTLTWyUUpiaeyE8MWmA2evyFZbFQ",
            "shortId": "1a",
            "spiderX": "",
            "serverName": "www.ozon.ru",
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
              "address": "91.107.121.223",
              "port": 443,
              "users": [
                {
                  "id": "bcf31ced-07e7-4bd3-ae6d-9280d9a47834",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "tFOva4mDqw-noGSk4B5gdh4X4WhyXHs0eNxM3QogyE4",
            "shortId": "f5563ddfa2847b32",
            "spiderX": "",
            "serverName": "sun6-21.userapi.com",
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
              "address": "37.139.33.134",
              "port": 443,
              "users": [
                {
                  "id": "49ac422e-dcb6-41bc-969e-255989df9625",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc",
            "shortId": "43dcff53849b81e6",
            "spiderX": "",
            "serverName": "eh.vk.com",
            "fingerprint": "edge",
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
        "tag": "s5",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "109.120.189.73",
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
              "address": "ru01-blh01.tcp-reset-club.net",
              "port": 443,
              "users": [
                {
                  "id": "3b4d1c7f-4fd7-45bb-9251-79cd53a3e006",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "mLmBhbVFfNuo2eUgBh6r9-5Koz9mUCn3aSzlR6IejUg",
            "shortId": "d3b13f31",
            "spiderX": "%2F",
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
              "address": "filterai.ru",
              "port": 443,
              "users": [
                {
                  "id": "4292f5ab-8963-03e8-8052-3615895ce4f1",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
        "tag": "s8",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "217.13.104.115",
              "port": 443,
              "users": [
                {
                  "id": "9db29659-b68e-466e-988a-6627572c2478",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
        "tag": "s9",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "104.128.140.193",
              "port": 443,
              "users": [
                {
                  "id": "9196c882-06f3-408b-959b-3292fc3ebe31",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "awtnQSo8Lx0AH7ly6fRIcPsNYXtgG1iSW8EucF8QiFY",
            "shortId": "0eb0",
            "spiderX": "%2F",
            "serverName": "vk.com",
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
            "shortId": "f45c9665f3261108",
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
    "remarks": "🇸🇪 LTE #27 | @restlyconnect",
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
              "address": "109.120.189.73",
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
              "address": "51.250.103.29",
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
            "publicKey": "LCxSn-zcFxBKKztCytR-Wzjt3VwezZs2jN6FtZPQ3n0",
            "shortId": "",
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
              "address": "5.188.140.244",
              "port": 443,
              "users": [
                {
                  "id": "45223222-04c6-03e8-b5e6-486115d5968e",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "37.139.32.92",
              "port": 443,
              "users": [
                {
                  "id": "49ac422e-dcb6-41bc-969e-255989df9625",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc",
            "shortId": "43dcff53849b81e6",
            "spiderX": "",
            "serverName": "eh.vk.com",
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
              "address": "tun.proxy1.raketa-balance.com",
              "port": 443,
              "users": [
                {
                  "id": "3915cbc9-adef-49e4-becd-5c5cfc4d0146",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "JaP4bhvIMW-l7T0_RkLra59DeBYI6W9XemKa8MyRPSY",
            "shortId": "6c6082a2223c1d03",
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
              "address": "109.120.188.112",
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
        "tag": "s7",
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
        "tag": "s8",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "79.137.174.164",
              "port": 443,
              "users": [
                {
                  "id": "c3599d6c-52e6-411c-b19a-0f8875e886ef",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
        "tag": "s9",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.90.196",
              "port": 443,
              "users": [
                {
                  "id": "1b65a4f1-1595-40ed-891a-e417ab6eafd1",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "sL3MykBy2ENl0O5cGT4rNhH526-jlyx6BVQ6XU23A0w",
            "shortId": "d2e7fddd2450b86a",
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
              "address": "tun.proxy1.raketa-balance.com",
              "port": 443,
              "users": [
                {
                  "id": "9269d1e6-6ff1-46fc-8581-a25f76967190",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "JaP4bhvIMW-l7T0_RkLra59DeBYI6W9XemKa8MyRPSY",
            "shortId": "6c6082a2223c1d03",
            "spiderX": "",
            "serverName": "eh.vk.com",
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
    "remarks": "🇸🇪 LTE #28 | @restlyconnect",
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
              "address": "rsr.fasssst.ru",
              "port": 443,
              "users": [
                {
                  "id": "f6f0191f-1edc-446b-b7d0-a90c19cf6a7a",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "zqK2uIx7zaEDvGbKLX3Rqqt1PYVm8BFBUmS7jK9HF1M",
            "shortId": "04f50bd2899df409",
            "spiderX": "%2F",
            "serverName": "rsr.fasssst.ru",
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
              "address": "87.239.107.34",
              "port": 443,
              "users": [
                {
                  "id": "bf77f272-4220-4655-ab76-5ccdf0d2a60f",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "JaP4bhvIMW-l7T0_RkLra59DeBYI6W9XemKa8MyRPSY",
            "shortId": "6c6082a2223c1d03",
            "spiderX": "",
            "serverName": "eh.vk.com",
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
              "address": "sg01-vlr01.tcp-reset-club.net",
              "port": 443,
              "users": [
                {
                  "id": "9f47cbec-f7da-4035-b034-373971d6fe2b",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "mLmBhbVFfNuo2eUgBh6r9-5Koz9mUCn3aSzlR6IejUg",
            "shortId": "8453e5fd9af927",
            "spiderX": "%2F",
            "serverName": "hls-svod.itunes.apple.com",
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
              "address": "188.120.234.103",
              "port": 443,
              "users": [
                {
                  "id": "e05cb81b-5288-41d6-ad4a-fb4016cccb27",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "H6Ka1r2xZnRf29vhxygofvtwGD2KelEFcYHKXTEt2wk",
            "shortId": "d87a6ae332fd4d2d",
            "spiderX": "%2F",
            "serverName": "eh.vk.com",
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
              "address": "45.84.1.163",
              "port": 443,
              "users": [
                {
                  "id": "8a5314fe-9689-4be1-b1d3-b4989d612dd5",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "28xC5eoPLJbic43s1rHBA0Oznrh5RNFWrdLEn_xxtQM",
            "shortId": "62",
            "spiderX": "",
            "serverName": "isr8.strelkavpn.ru",
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
            "shortId": "a76ea384b29a4f79",
            "spiderX": "%2F",
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
              "address": "ru01-blh01.tcp-reset-club.net",
              "port": 443,
              "users": [
                {
                  "id": "42a7df85-0739-4760-a248-32a491abfa2a",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "mLmBhbVFfNuo2eUgBh6r9-5Koz9mUCn3aSzlR6IejUg",
            "shortId": "8453e5fd9af927",
            "spiderX": "%2F",
            "serverName": "stats.vk-portal.net",
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
              "address": "est01-vlr01.tcp-reset-club.net",
              "port": 443,
              "users": [
                {
                  "id": "0eb4ea60-bdd0-46c2-b2a0-fdb3c7a37318",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "mLmBhbVFfNuo2eUgBh6r9-5Koz9mUCn3aSzlR6IejUg",
            "shortId": "86e999a2cdc2",
            "spiderX": "",
            "serverName": "hls-svod.itunes.apple.com",
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
              "address": "est01-vlr01.tcp-reset-club.net",
              "port": 443,
              "users": [
                {
                  "id": "c533bf19-aff3-4e5f-b1ba-4c546dc19a29",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "mLmBhbVFfNuo2eUgBh6r9-5Koz9mUCn3aSzlR6IejUg",
            "shortId": "f79448a30d",
            "spiderX": "%2F",
            "serverName": "hls-svod.itunes.apple.com",
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
              "address": "176.122.25.13",
              "port": 443,
              "users": [
                {
                  "id": "2eb94117-832f-4159-8b82-cc63f9feb5d1",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "fc7wwlzUfydHkCpOx0NTUCIScR0i66XtzGsoL_D4AVk",
            "shortId": "960ae214db9f1604",
            "spiderX": "",
            "serverName": "eh.vk.ru",
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
    "remarks": "🇸🇪 LTE #29 | @restlyconnect",
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
              "address": "h2.buzzvpn.online",
              "port": 443,
              "users": [
                {
                  "id": "bb2ebd0e-ebdd-44c2-bd99-d8d52cdc46c6",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "V8dls56WMgWw0VFXXULEfZvNM3uNQx7kfmoZKSo43Cs",
            "shortId": "d71633167501ca",
            "spiderX": "%2F",
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
              "address": "selfms.nodesecure.ru",
              "port": 443,
              "users": [
                {
                  "id": "e05cb81b-5288-41d6-ad4a-fb4016cccb27",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "VsFcOuqknetiqOCyyUJRQ_yzu0S-PfZ7ZSap2iZnyCA",
            "shortId": "1c17fc2737fd1064",
            "spiderX": "",
            "serverName": "eh.vk.com",
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
              "address": "109.120.181.41",
              "port": 443,
              "users": [
                {
                  "id": "2c15a5c9-1dd9-4989-8d03-29a4ce1d6298",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "jSx3_X_tBAcNgp7SrKSfZnr5WN0cTN2ShEJv4rHceQU",
            "shortId": "",
            "spiderX": "",
            "serverName": "sun6-22.userapi.com",
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
              "address": "51.250.5.222",
              "port": 443,
              "users": [
                {
                  "id": "38009570-f150-4ebd-9517-cdcb8a1e7cff",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "BgH8ba_xaAeLa5pyvwwJp6HT7i09aNoiAsE1HgTXXkU",
            "shortId": "3275b9d98d3b69fc",
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
              "address": "194.87.133.111",
              "port": 443,
              "users": [
                {
                  "id": "ac100002-eb6f-11f0-8d36-0242cf03305a",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "BcwI4K4lJ70ypESvST9HkyMts9PFEtNYFWPvfzcf0AU",
            "shortId": "983a1875c8259550",
            "spiderX": "",
            "serverName": "eh.vk.com",
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
              "address": "5.188.140.92",
              "port": 443,
              "users": [
                {
                  "id": "3bb96984-fc3d-1f40-912c-aeccbeafb334",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "213.176.19.224",
              "port": 443,
              "users": [
                {
                  "id": "b77cc9f8-efdd-4301-9c9b-0841fbac6553",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "UCXPPx6xuh21NtqvboGsl-hf1y-LSpwB37K-vzlxyyM",
            "shortId": "dc15cb06388f22",
            "spiderX": "",
            "serverName": "tr7.strelkavpn.ru",
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
              "address": "5.188.140.244",
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
              "address": "51-wl.connect-opengate.ru",
              "port": 443,
              "users": [
                {
                  "id": "2f7d7016-74e0-42d4-a0ac-6470322a4d33",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "9F_vT5oJmi-EEUkrQ4ykDrFFJLqPJ2zw3w-VHjnyY20",
            "shortId": "14ee0c59550e3fb9",
            "spiderX": "%2F",
            "serverName": "sun9-38.userapi.com",
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
              "address": "ru01-blh01.tcp-reset-club.net",
              "port": 443,
              "users": [
                {
                  "id": "46c9a909-2e81-4f6f-b999-def280062188",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "mLmBhbVFfNuo2eUgBh6r9-5Koz9mUCn3aSzlR6IejUg",
            "shortId": "31",
            "spiderX": "%2F",
            "serverName": "stats.vk-portal.net",
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
    "remarks": "🇸🇪 LTE #30 | @restlyconnect",
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
              "address": "est01-vlr01.tcp-reset-club.net",
              "port": 443,
              "users": [
                {
                  "id": "f13b15a6-d235-4161-b57a-274676335502",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "mLmBhbVFfNuo2eUgBh6r9-5Koz9mUCn3aSzlR6IejUg",
            "shortId": "f79448a30d",
            "spiderX": "",
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
              "address": "ru01-blh01.tcp-reset-club.net",
              "port": 443,
              "users": [
                {
                  "id": "3f214356-cfab-4056-9c06-7e2199fdf6e3",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "mLmBhbVFfNuo2eUgBh6r9-5Koz9mUCn3aSzlR6IejUg",
            "shortId": "175d",
            "spiderX": "%2F",
            "serverName": "stats.vk-portal.net",
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
              "address": "ru01-blh01.tcp-reset-club.net",
              "port": 443,
              "users": [
                {
                  "id": "c8685922-46f6-4cce-a64d-269aa22bdc84",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "mLmBhbVFfNuo2eUgBh6r9-5Koz9mUCn3aSzlR6IejUg",
            "shortId": "8453e5fd9af927",
            "spiderX": "%2F",
            "serverName": "stats.vk-portal.net",
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
              "address": "51.250.67.8",
              "port": 443,
              "users": [
                {
                  "id": "1b65a4f1-1595-40ed-891a-e417ab6eafd1",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "sL3MykBy2ENl0O5cGT4rNhH526-jlyx6BVQ6XU23A0w",
            "shortId": "d2e7fddd2450b86a",
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
              "address": "89.208.84.172",
              "port": 443,
              "users": [
                {
                  "id": "187afdf1-14c9-4384-81a0-17625dac5d4d",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "09yujrRdcmxAqVF0CGtEwwov02Uc-8rdIO_pBj-DfE4",
            "shortId": "a50ebec7fc3679ba",
            "spiderX": "%2F",
            "serverName": "max.ru",
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
              "address": "nlmain.fgnconnection.life",
              "port": 443,
              "users": [
                {
                  "id": "84124a40-4b02-4762-a3a6-6cf43f297724",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "H46I56wuurV9oQyn2irq5ZleWz_FBpHWmWoqz1Hc-Qc",
            "shortId": "53c8004fa34e8724",
            "spiderX": "",
            "serverName": "eh.vk.com",
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
              "address": "94.156.114.171",
              "port": 443,
              "users": [
                {
                  "id": "c679f6a4-3c2d-498e-86d3-9535021e2bac",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
        "tag": "s8",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.47.5",
              "port": 443,
              "users": [
                {
                  "id": "1de2db6d-7c82-4d38-a8b8-9b8e0f4591bf",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "5orQGt6i0bCMdGt6ry0OqYSDdV-v_2jWzQgsQtA4rU4",
            "shortId": "576e6863a757",
            "spiderX": "%2F",
            "serverName": "eh.vk.com",
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
              "address": "filterai.ru",
              "port": 443,
              "users": [
                {
                  "id": "4292f5ab-8963-1770-8052-3615895ce4f1",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
        "tag": "s10",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "79.174.95.161",
              "port": 443,
              "users": [
                {
                  "id": "e6d2818a-2db6-4df5-a9f0-2cc418185437",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "WEZn2WygVogwL7mWqz9EvHdrNllEXf9MaDlRh20Ds10",
            "shortId": "f28ec2ab265c5efd",
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
    "remarks": "🇸🇪 LTE #31 | @restlyconnect",
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
              "address": "109.120.188.145",
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
              "address": "fi2.techdatacloud.org",
              "port": 443,
              "users": [
                {
                  "id": "28b49e0a-318c-4806-8294-5a30cb7159ff",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "bGECnZf1Q6tQOjKnVaBojS9mT0k1sDnX-1fJLFpI8w4",
            "shortId": "76356466c88b76",
            "spiderX": "/",
            "serverName": "yandex.com",
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
              "address": "158.160.189.247",
              "port": 443,
              "users": [
                {
                  "id": "b27c7007-9a35-43cb-ab1e-8c5c0a7e3c34",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
            "serverName": "m.vk.com",
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
              "address": "23.230.179.116",
              "port": 443,
              "users": [
                {
                  "id": "bcf31ced-07e7-4bd3-ae6d-9280d9a47834",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "J2yJCkBI-GDKHgH0OuRP0Bm0aqZ8qL_fXhITn4titAg",
            "shortId": "a20d3ed244c76426",
            "spiderX": "",
            "serverName": "eh.vk.com",
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
              "address": "5.188.140.92",
              "port": 443,
              "users": [
                {
                  "id": "9ee1984a-3a9b-01f4-b1c1-afc6fdd73211",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "212.233.73.247",
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
            "shortId": "df13327f2677fc90",
            "spiderX": "",
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
            "spiderX": "%2F",
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
              "address": "85.208.87.189",
              "port": 443,
              "users": [
                {
                  "id": "9269d1e6-6ff1-46fc-8581-a25f76967190",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "JaP4bhvIMW-l7T0_RkLra59DeBYI6W9XemKa8MyRPSY",
            "shortId": "6c6082a2223c1d03",
            "spiderX": "",
            "serverName": "eh.vk.com",
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
              "address": "51.250.17.230",
              "port": 443,
              "users": [
                {
                  "id": "21dbaefd-8677-4a09-8469-70490e01eb8a",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "4YI0QbJYHCyl4-VWZPWAMccOmUW0c_XDE_rEZc-dNC0",
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
              "address": "filterai.ru",
              "port": 443,
              "users": [
                {
                  "id": "4292f5ab-8963-0bb8-8052-3615895ce4f1",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
        "protocol": "freedom",
        "tag": "direct"
      },
      {
        "protocol": "blackhole",
        "tag": "block"
      }
    ],
    "remarks": "🇸🇪 LTE #32 | @restlyconnect",
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
              "address": "51-wl.connect-opengate.ru",
              "port": 443,
              "users": [
                {
                  "id": "2f7d7016-74e0-42d4-a0ac-6470322a4d33",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "CM_8BBs3aFSoioBTi0ciNTD5h4j-4vPcxfqUmwyYXVk",
            "shortId": "348dc0b768acd16f",
            "spiderX": "%2F",
            "serverName": "sun6-22.userapi.com",
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
              "address": "51.250.38.225",
              "port": 443,
              "users": [
                {
                  "id": "e34a84c4-8a52-4b4e-9a7d-cfa1a4d77e95",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "0rPvIBbfmdq3YJkkNGc8p7t-1zme85V-nj3v8ekm4DE",
            "shortId": "1b3de616b36b1233",
            "spiderX": "",
            "serverName": "ya.ru",
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
              "address": "146.185.240.4",
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
        "tag": "s4",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.82.183",
              "port": 443,
              "users": [
                {
                  "id": "36628fb7-b83f-4f84-827c-462e4b8a7f78",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc",
            "shortId": "43dcff53849b81e6",
            "spiderX": "",
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
              "address": "84.201.158.43",
              "port": 443,
              "users": [
                {
                  "id": "bb5619c9-70b9-42a2-ac34-bc38fc0f4d23",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "Tt8cQK7R-qgu3J_b1B7B_tId7MGL_oR4XDRdW0cXcCs",
            "shortId": "aa3e26f0af4273",
            "spiderX": "",
            "serverName": "login.vk.com",
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
              "address": "5.188.140.92",
              "port": 443,
              "users": [
                {
                  "id": "3bb96984-fc3d-01f4-912c-aeccbeafb334",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
              "address": "158.160.189.247",
              "port": 443,
              "users": [
                {
                  "id": "a05d23b2-9b72-45d4-9d8d-eb86990e5e34",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
            "spiderX": "%2F",
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
              "address": "37.139.32.50",
              "port": 443,
              "users": [
                {
                  "id": "49ac422e-dcb6-41bc-969e-255989df9625",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc",
            "shortId": "43dcff53849b81e6",
            "spiderX": "",
            "serverName": "eh.vk.com",
            "fingerprint": "edge",
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
              "address": "37.46.134.53",
              "port": 443,
              "users": [
                {
                  "id": "4fe214fb-048e-431f-b939-4518dc9df6a2",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "VsFcOuqknetiqOCyyUJRQ_yzu0S-PfZ7ZSap2iZnyCA",
            "shortId": "1c17fc2737fd1064",
            "spiderX": "",
            "serverName": "sun6-21.userapi.com",
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
    "remarks": "🇸🇪 LTE #33 | @restlyconnect",
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
              "address": "89.208.228.31",
              "port": 443,
              "users": [
                {
                  "id": "c443cdb4-dda8-4f97-943a-0d10e1e2012e",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "yl2tD0m0Ko7jVaFHmjS0YJWtyqSBYWdeJcNHsAncrRM",
            "shortId": "bdd73c74631a80cf",
            "spiderX": "%2F",
            "serverName": "eh.vk.com",
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
              "address": "109.120.190.39",
              "port": 443,
              "users": [
                {
                  "id": "38e1f5a3-bdf6-4a48-9282-91fc8482dacb",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "10rVZPoOUP1TlQviIAsQ_jAROX0fRQxH0C92nq_zGQc",
            "shortId": "43dcff53849b81e6",
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
            "shortId": "4a3ad88ff867a295",
            "spiderX": "%2F",
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
              "address": "81.200.149.112",
              "port": 443,
              "users": [
                {
                  "id": "187afdf1-14c9-4384-81a0-17625dac5d4d",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "1xYZo087Xr5sqxRkJ5b2vkPPuei6F3oNTlJi45PUrEI",
            "shortId": "a1b2c3d4e5f60001",
            "spiderX": "",
            "serverName": "eh1.vk.com",
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
              "address": "5.188.140.244",
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
        "tag": "s6",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "51.250.47.5",
              "port": 443,
              "users": [
                {
                  "id": "54227b24-4d00-4942-9511-b114d8a049d4",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "5orQGt6i0bCMdGt6ry0OqYSDdV-v_2jWzQgsQtA4rU4",
            "shortId": "576e6863a757",
            "spiderX": "",
            "serverName": "event.yandex.ru",
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
              "address": "185.130.115.55",
              "port": 443,
              "users": [
                {
                  "id": "ea10b09f-719b-4857-b57d-2b7d34e971f1",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
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
            "spiderX": "%2F",
            "serverName": "web.max.ru",
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
              "address": "de1.vpnreal.ru",
              "port": 443,
              "users": [
                {
                  "id": "d08ff8b7-d4a3-4628-9c39-c9c3d256cbf7",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "xUBjC2vNXBrDnJ3rVvQl2CYPvugp3VeVC5NN9ukRojU",
            "shortId": "e3ebde1f3c9c2b7c",
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
              "address": "91.243.86.139",
              "port": 443,
              "users": [
                {
                  "id": "c7a3634e-3049-4c54-a7e7-fdaea7284f3a",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "Z3jAFVPXZymXESt50xJqcxKO94-oyk53iHQbsKqqVCQ",
            "shortId": "6cca5ad91ceb",
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
              "address": "188.120.234.103",
              "port": 443,
              "users": [
                {
                  "id": "4fe214fb-048e-431f-b939-4518dc9df6a2",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "H6Ka1r2xZnRf29vhxygofvtwGD2KelEFcYHKXTEt2wk",
            "shortId": "d87a6ae332fd4d2d",
            "spiderX": "",
            "serverName": "sun6-21.userapi.com",
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
    "remarks": "🇸🇪 LTE #34 | @restlyconnect",
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
              "address": "51.250.103.96",
              "port": 443,
              "users": [
                {
                  "id": "a079848a-f786-49ed-bd21-021b9d61dcf7",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "4YI0QbJYHCyl4-VWZPWAMccOmUW0c_XDE_rEZc-dNC0",
            "shortId": "",
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
              "address": "217.16.27.250",
              "port": 443,
              "users": [
                {
                  "id": "f5a9d600-e073-47bd-b558-476c2b87a863",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "dJL2yGuBe-moYv-cHHGZo-P6RhY0g1eHMil0LoaFc1M",
            "shortId": "d5ace6e96f4d8e29",
            "spiderX": "",
            "serverName": "vkvideo.ru",
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
              "address": "72.56.69.193",
              "port": 443,
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
            "publicKey": "yP1V_oAX1Sehc_102nMHuQgTOYk7T9KbJQmTlK4maVE",
            "shortId": "5485e4d782145257",
            "spiderX": "",
            "serverName": "sun6-22.userapi.com",
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
              "address": "158.160.189.247",
              "port": 443,
              "users": [
                {
                  "id": "12a57f4b-813d-4e0f-b15f-2234c71fd41d",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
            "serverName": "m.vk.com",
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
              "address": "79.137.174.164",
              "port": 443,
              "users": [
                {
                  "id": "ead1c781-eaaf-4a7f-97ae-91fae89db30b",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
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
        "tag": "s7",
        "protocol": "vless",
        "settings": {
          "vnext": [
            {
              "address": "81.200.149.112",
              "port": 443,
              "users": [
                {
                  "id": "187afdf1-14c9-4384-81a0-17625dac5d4d",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "-88qA67hu8p_y8_drkK03gxzsgDfW8pI-ineqxf_f2w",
            "shortId": "a1b2c3d4e5f60007",
            "spiderX": "",
            "serverName": "ads.x5.ru",
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
              "address": "tun.proxy1.raketa-balance.com",
              "port": 443,
              "users": [
                {
                  "id": "bf77f272-4220-4655-ab76-5ccdf0d2a60f",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "JaP4bhvIMW-l7T0_RkLra59DeBYI6W9XemKa8MyRPSY",
            "shortId": "6c6082a2223c1d03",
            "spiderX": "",
            "serverName": "eh.vk.com",
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
              "address": "dostupbypass1.suio.me",
              "port": 443,
              "users": [
                {
                  "id": "02fb468f-21f2-460e-bfa1-ef52ae5e627f",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "5bGFIWSo4vlrd9Tv1yFcpdpSjrjYYN20SOWHYfighHc",
            "shortId": "aad92345",
            "spiderX": "",
            "serverName": "api-maps.yandex.ru",
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
            "shortId": "33554379411b3219",
            "spiderX": "%2F",
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
    "remarks": "🇸🇪 LTE #35 | @restlyconnect",
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
              "address": "nlgame.fgnconnection.life",
              "port": 443,
              "users": [
                {
                  "id": "84124a40-4b02-4762-a3a6-6cf43f297724",
                  "flow": "xtls-rprx-vision",
                  "encryption": "none"
                }
              ]
            }
          ]
        },
        "streamSettings": {
          "network": "tcp",
          "security": "reality",
          "realitySettings": {
            "publicKey": "H46I56wuurV9oQyn2irq5ZleWz_FBpHWmWoqz1Hc-Qc",
            "shortId": "53c8004fa34e8724",
            "spiderX": "",
            "serverName": "eh.vk.com",
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
    "remarks": "🇸🇪 LTE #36 | @restlyconnect",
    "routing": {
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
          "outboundTag": "s1",
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
  res.setHeader("announce", "UPD: 03.03.2026 19:30 | tgk: @restlyconnect");
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.end(JSON.stringify(config));
};
