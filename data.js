var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.02297365622811043,
        "pitch": 0.03127648986908227,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.39232257269898874,
          "pitch": 0.2775626070306618,
          "rotation": 0,
          "target": "1-parking"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.08516476302038711,
          "pitch": -0.10972573293986088,
          "title": "M.I Sevilla",
          "text": "This is the M.I. Sevilla&nbsp;"
        }
      ]
    },
    {
      "id": "1-parking",
      "name": "Parking",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.3922850171798977,
        "pitch": -0.06715769979416208,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.530201252444064,
          "pitch": 0.09466896810189418,
          "rotation": 0,
          "target": "2-lobby"
        },
        {
          "yaw": -1.4615652890501138,
          "pitch": 0.07575352967431925,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-lobby",
      "name": "Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3361634454691806,
          "pitch": 0.3194190794873286,
          "rotation": 0,
          "target": "3-hallway"
        },
        {
          "yaw": 2.929119063167927,
          "pitch": 0.5721995854902175,
          "rotation": 0,
          "target": "1-parking"
        },
        {
          "yaw": 0.8749824037810665,
          "pitch": 0.3208610163090899,
          "rotation": 0,
          "target": "4-event-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "title": "Front Desk",
          "text": "Customers can ask the front desk for more info"
        }
      ]
    },
    {
      "id": "3-hallway",
      "name": "Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.0628609668349878,
        "pitch": 0.28229028846635096,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4678666739550605,
          "pitch": 0.25694034743466787,
          "rotation": 0,
          "target": "2-lobby"
        },
        {
          "yaw": -1.0634342918664945,
          "pitch": 0.23602602663144445,
          "rotation": 0,
          "target": "4-event-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-event-hall",
      "name": "Event Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.09463613222095546,
        "pitch": 0.18589114032311116,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1837065254105337,
          "pitch": 0.08990845842866158,
          "rotation": 0,
          "target": "3-hallway"
        },
        {
          "yaw": -1.3426179694852287,
          "pitch": 0.06835893710357865,
          "rotation": 0,
          "target": "2-lobby"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
