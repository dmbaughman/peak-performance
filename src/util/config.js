export const languages = [
  {
    name: 'English',
    code: 'en-US'
  },
  {
    name: 'Español',
    code: 'es-US'
  }
]

export const heroVideoConfig = {
  poster: '',
  muted: true,
  loop: true,
  autoPlay: true,
  controls: false,
  'plays-inline': 'true',
  sources: [
    {
      type: 'video/webm',
      url: 'https://cdnus.melaleuca.com/microsites/peak-performance/videos/header-video.webm'
    },
    {
      type: 'video/ogg',
      url: 'https://cdnus.melaleuca.com/microsites/peak-performance/videos/header-video.ogv'
    },
    {
      type: 'video/mp4',
      url: 'https://cdnus.melaleuca.com/microsites/peak-performance/videos/header-video.mp4'
    }
  ],
  poster: ''
}

export const heroSlides = [
  {
    id: 'peak',
    time: 0,
    mobileImg: 'https://cdnus.melaleuca.com/microsites/peak-performance/images/bg-hero-packet.jpg'
  },
  {
    id: 'energy',
    time: 3.2,
    mobileImg: 'https://cdnus.melaleuca.com/microsites/peak-performance/images/bg-hero-running.jpg'
  },
  {
    id: 'health',
    time: 6.8,
    mobileImg: 'https://cdnus.melaleuca.com/microsites/peak-performance/images/bg-hero-health.jpg'
  },
  {
    id: 'vitality',
    time: 12,
    mobileImg: 'https://cdnus.melaleuca.com/microsites/peak-performance/images/bg-hero-vitality.jpg'
  }
]


export const symptoms = [
  'freeRadicals',
  'sleep',
  'tired',
  'joints',
  'energy',
  'brain',
  'heart'
]

export const jwConfig = {
  playerScript: 'https://content.jwplatform.com/libraries/0FZCK9ag.js',
  playerId: 'jw-player',
  isAutoPlay: true
}

export const introVideoConfig = {
  playerId: 'intro-video',
  file: 'https://content.jwplatform.com/manifests/Nc9aCZXj.m3u8'
}

export const gallery = [
  [
    {
      type: 'video',
      size: 'medium',
      videos: [
        {
          image: 'https://cdn.jwplayer.com/thumbs/8OrvT9Qt-720.jpg',
          file: 'https://cdn.jwplayer.com/manifests/8OrvT9Qt.m3u8',
          quote: 'My life is back to me',
          name: 'Diane Marsh'
        },
        {
          image: 'https://cdn.jwplayer.com/thumbs/VcbuPNvD-720.jpg',
          file: 'https://cdn.jwplayer.com/manifests/VcbuPNvD.m3u8',
          quote: 'Energy to enjoy my 5 kids',
          name: 'Macy Lee'
        }
      ],
      largeScreen: true
    },
    {
      type: 'text',
      title: 'gallery.title',
      description: 'gallery.description'
    }
  ],
  [
    {
      type: 'video',
      size: 'large',
      videos: [
        {
          image: 'https://cdn.jwplayer.com/thumbs/Tuox0AIk-720.jpg',
          file: 'https://cdn.jwplayer.com/manifests/Tuox0AIk.m3u8',
          name: 'Tim'
        },
        {
          image: 'https://cdn.jwplayer.com/thumbs/m38vHMX4-720.jpg',
          file: 'https://cdn.jwplayer.com/manifests/m38vHMX4.m3u8',
          name: 'Karen'
        }
      ]
    }
  ],
  [
    {
      type: 'video',
      size: 'small',
      videos: [
        {
          image: 'https://cdn.jwplayer.com/thumbs/ZRdf86El-720.jpg',
          file: 'https://cdn.jwplayer.com/manifests/ZRdf86El.m3u8'
        },
        {
          image: 'https://cdn.jwplayer.com/thumbs/tSLAuljr-720.jpg',
          file: 'https://cdn.jwplayer.com/manifests/tSLAuljr.m3u8'
        }
      ]
    },
    {
      type: 'button',
      label: 'ui.more',
      largeScreen: true
    },
    {
      type: 'video',
      size: 'medium',
      videos: [
        {
          image: 'https://cdn.jwplayer.com/thumbs/zSE8EWBF-720.jpg',
          file: 'https://cdn.jwplayer.com/manifests/zSE8EWBF.m3u8',
          quote: 'I ran a 5K!',
          name: 'Laura Larson'
        },
        {
          image: 'https://cdn.jwplayer.com/thumbs/AHMhhemb-720.jpg',
          file: 'https://cdn.jwplayer.com/manifests/AHMhhemb.m3u8',
          quote: 'Started waking up before the alarm',
          name: 'Joan Giocondi'
        }
      ],
      largeScreen: true
    },
    {
      type: 'video',
      size: 'small',
      videos: [
        {
          image: 'https://cdn.jwplayer.com/thumbs/XQ6v7UeF-720.jpg',
          file: 'https://cdn.jwplayer.com/manifests/XQ6v7UeF.m3u8',
        },
        {
          image: 'https://cdn.jwplayer.com/thumbs/jxYywZXV-720.jpg',
          file: 'https://cdn.jwplayer.com/manifests/jxYywZXV.m3u8',
        }
      ]
    },
    {
      type: 'video',
      size: 'small',
      videos: [
        {
          image: 'https://cdn.jwplayer.com/thumbs/7W5oP06V-720.jpg',
          file: 'https://cdn.jwplayer.com/manifests/7W5oP06V.m3u8',
        },
        {
          image: 'https://cdn.jwplayer.com/thumbs/wWmmjOnv-720.jpg',
          file: 'https://cdn.jwplayer.com/manifests/wWmmjOnv.m3u8',
        }
      ],
      largeScreen: true
    },
    {
      type: 'video',
      size: 'small',
      videos: [
        {
          image: 'https://cdn.jwplayer.com/thumbs/KPqsMFjd-720.jpg',
          file: 'https://cdn.jwplayer.com/manifests/KPqsMFjd.m3u8',
        },
        {
          image: 'https://cdn.jwplayer.com/thumbs/LJRZgfuG-720.jpg',
          file: 'https://cdn.jwplayer.com/manifests/LJRZgfuG.m3u8',
        }
      ],
      largeScreen: true
    }
  ],
  [
    {
      type: 'video',
      size: 'small',
      videos: [
        {
          image: 'https://cdn.jwplayer.com/thumbs/Mutagqfr-720.jpg',
          file: 'https://cdn.jwplayer.com/manifests/Mutagqfr.m3u8',
        },
        {
          image: 'https://cdn.jwplayer.com/thumbs/wA7wmCIJ-720.jpg',
          file: 'https://cdn.jwplayer.com/manifests/wA7wmCIJ.m3u8',
        }
      ],
      largeScreen: true
    },
    {
      type: 'video',
      size: 'medium',
      videos: [
        {
          image: 'https://cdn.jwplayer.com/thumbs/2OPgIk9q-720.jpg',
          file: 'https://cdn.jwplayer.com/manifests/2OPgIk9q.m3u8',
          quote: 'Brain fog was lifted',
          name: 'Mandi Varnum'
        },
        {
          image: 'https://cdn.jwplayer.com/thumbs/Y3rclrof-720.jpg',
          file: 'https://cdn.jwplayer.com/manifests/Y3rclrof.m3u8',
          quote: 'Felt like I was in my 20\'s again',
          name: 'Marybeth Green'
        }
      ]
    },
    {
      type: 'video',
      size: 'small',
      videos: [
        {
          image: 'https://cdn.jwplayer.com/thumbs/cYEOltTq-720.jpg',
          file: 'https://cdn.jwplayer.com/manifests/cYEOltTq.m3u8',
        },
        {
          image: 'https://cdn.jwplayer.com/thumbs/qLMpEQbS-720.jpg',
          file: 'https://cdn.jwplayer.com/manifests/qLMpEQbS.m3u8',
        }
      ]
    },
    {
      type: 'video',
      size: 'small',
      videos: [
        {
          image: 'https://cdn.jwplayer.com/thumbs/ESVd2xaz-720.jpg',
          file: 'https://cdn.jwplayer.com/manifests/ESVd2xaz.m3u8',
        },
        {
          image: 'https://cdn.jwplayer.com/thumbs/4lfT6jFK-720.jpg',
          file: 'https://cdn.jwplayer.com/manifests/4lfT6jFK.m3u8',
        }
      ]
    }
  ],
  [
    {
      type: 'video',
      size: 'small',
      videos: [
        {
          image: 'https://cdn.jwplayer.com/thumbs/02gwROpq-720.jpg',
          file: 'https://cdn.jwplayer.com/manifests/02gwROpq.m3u8',
        },
        {
          image: 'https://cdn.jwplayer.com/thumbs/9Yk5yw1m-720.jpg',
          file: 'https://cdn.jwplayer.com/manifests/9Yk5yw1m.m3u8',
        }
      ],
      largeScreen: true
    },
    {
      type: 'video',
      size: 'medium',
      videos: [
        {
          image: 'https://cdn.jwplayer.com/thumbs/6ySPgmdl-720.jpg',
          file: 'https://cdn.jwplayer.com/manifests/6ySPgmdl.m3u8',
          quote: 'Doing things I never thought I would',
          name: 'Kerry Buxton'
        },
        {
          image: 'https://cdn.jwplayer.com/thumbs/J1Yjx2OS-720.jpg',
          file: 'https://cdn.jwplayer.com/manifests/J1Yjx2OS.m3u8',
          quote: 'Blood pressure came down 10 points',
          name: 'Joe Hetzel'
        }
      ]
    },
    {
      type: 'video',
      size: 'small',
      videos: [
        {
          image: 'https://cdn.jwplayer.com/thumbs/GZ4BKCEU-720.jpg',
          file: 'https://cdn.jwplayer.com/manifests/GZ4BKCEU.m3u8',
        },
        {
          image: 'https://cdn.jwplayer.com/thumbs/8fJVhiRG-720.jpg',
          file: 'https://cdn.jwplayer.com/manifests/8fJVhiRG.m3u8',
        }
      ]
    },
    {
      type: 'video',
      size: 'small',
      videos: [
        {
          image: 'https://cdn.jwplayer.com/thumbs/pQnaBnPk-720.jpg',
          file: 'https://cdn.jwplayer.com/manifests/pQnaBnPk.m3u8',
        },
        {
          image: 'https://cdn.jwplayer.com/thumbs/jmhJEn8a-720.jpg',
          file: 'https://cdn.jwplayer.com/manifests/jmhJEn8a.m3u8',
        }
      ]
    },
    {
      type: 'video',
      size: 'small',
      videos: [
        {
          image: 'https://cdn.jwplayer.com/thumbs/pi9RRsl1-720.jpg',
          file: 'https://cdn.jwplayer.com/manifests/pi9RRsl1.m3u8',
        },
        {
          image: 'https://cdn.jwplayer.com/thumbs/dRNI4cUF-720.jpg',
          file: 'https://cdn.jwplayer.com/manifests/dRNI4cUF.m3u8',
        }
      ],
      largeScreen: true
    }
  ]
]


export const contentsIntro = [
  {
    id: 'contains',
    items: [
      'vitamins',
      'antioxidants',
      'macrominerals',
      'traces',
      'botanicals',
      'probiotics',
      'omegas'
    ],
    afterthought: {
      largeScreen: true
    },
    ribbon: 'https://cdnus.melaleuca.com/microsites/peak-performance/images/circles.png'
  },
  {
    id: 'developed',
    subhead: 'supplements',
    items: [
      'patented',
      'proprietary',
      'nutritional'
    ]
  },
  {
    id: 'combined',
    subhead: 'powerfulProduct',
    img: {
      url: 'https://cdnus.melaleuca.com/microsites/peak-performance/images/packets.png',
      altText: 'Peak Performance Packets'
    },
    afterthought: {
      largeScreen: false
    }
  }
]

export const supplements = [
  {
    id: 'vitality',
    image: {
      url: 'https://cdnus.melaleuca.com/microsites/peak-performance/images/supplements-vitality.jpg',
      alt: 'Vitality Multivitamin & Mineral'
    }
  },
  {
    id: 'cellwise',
    image: {
      url: 'https://cdnus.melaleuca.com/microsites/peak-performance/images/supplements-cellwise.jpg',
      alt: 'Vitality Multivitamin & Mineral'
    }
  },
  {
    id: 'provex',
    image: {
      url: 'https://cdnus.melaleuca.com/microsites/peak-performance/images/supplements-provex.jpg',
      alt: 'Vitality Multivitamin & Mineral'
    }
  },
  {
    id: 'recover',
    image: {
      url: 'https://cdnus.melaleuca.com/microsites/peak-performance/images/supplements-recover.jpg',
      alt: 'Vitality Multivitamin & Mineral'
    }
  },
  {
    id: 'cardiomega',
    image: {
      url: 'https://cdnus.melaleuca.com/microsites/peak-performance/images/supplements-cardiomega.jpg',
      alt: 'Vitality Multivitamin & Mineral'
    }
  },
  {
    id: 'florify',
    image: {
      url: 'https://cdnus.melaleuca.com/microsites/peak-performance/images/supplements-florify.jpg',
      alt: 'Vitality Multivitamin & Mineral'
    }
  },
]


export const detailsItems = [
  {
    sectionId: 'nature',
    image: {
      url: 'https://cdnus.melaleuca.com/microsites/peak-performance/images/bg-oligo.jpg',
      alt: ''
    },
    logo: {
      url: 'https://cdnus.melaleuca.com/microsites/peak-performance/images/logo-oligo.png',
      alt: ''
    },
    video: {
      playerId: 'oligo-video',
      file: 'https://content.jwplatform.com/manifests/iKUyo1Mw.m3u8',
      image: 'https://cdn.jwplayer.com/thumbs/iKUyo1Mw-720.jpg'
    }
  },
  {
    sectionId: 'science',
    image: {
      url: 'https://cdnus.melaleuca.com/microsites/peak-performance/images/bg-science.jpg',
      alt: ''
    },
    logo: {
      url: 'https://cdnus.melaleuca.com/microsites/peak-performance/images/logo-studies.png',
      alt: ''
    },
    video: {
      playerId: 'freiburg-video',
      file: 'https://content.jwplatform.com/manifests/3msXoVOA.m3u8',
      image: 'https://cdn.jwplayer.com/thumbs/3msXoVOA-720.jpg'
    },
    link: 'http://www.freiburgstudy.com'
  }
]

export const chart = {
  logo: {
    url: 'https://cdnus.melaleuca.com/microsites/peak-performance/images/logo-oligo.png',
    alt: 'Oligo logo'
  },
  illustration: {
    url: 'https://cdnus.melaleuca.com/microsites/peak-performance/images/oligo-illustration.jpg',
    alt: 'Illustration of how Oligo mineral binding improves absorbsion through intestinal wall'
  },
  figure: {
    url: 'https://cdnus.melaleuca.com/microsites/peak-performance/images/oligo-chart.jpg',
    alt: 'Illustration of higher absorbsion rates of Oligo-bound minerals'
  }
}


export const links = {
  freiburg: 'https://www.melaleuca.com'
}

