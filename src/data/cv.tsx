import BKHNLogo from '@/public/about/cv/BKHN.svg'
import FSOLogo from '@/public/about/cv/FSO.svg'
import rf3iLogo from '@/public/about/cv/rf3i.png'
import ViettelLogo from '@/public/about/cv/viettel.svg'

import { CVGroupType } from '../app/components/CVGroup'

const cv: CVGroupType[] = [
  {
    id: 'experiences',
    name: 'Experiences',
    list: [
      {
        id: 'employed',
        where: 'FPT Software',
        logo: FSOLogo,
        url: 'https://fptsoftware.com/',
        title: 'Full-stack Software Developer',
        date: '2023 — current',
        activity: [
          'FPT Software Company Limited, or simply FPT Software, is a global IT services provider headquartered in Hanoi, Vietnam, being the core subsidiary of the FPT Corporation. It is considered one of the biggest software services companies in Vietnam, with US$1.87 billion in revenue (FY2022) and more than 48,000 core employees.',
          "I'm a staff in FWA.EC branch as a Backend Engineer. Also, I'm trainning C++ with OOP programming to new member."
        ],
        tech: [
          'bash',
          'git',
          'js',
          'linux',
          'nestjs',
          'nextjs',
          'nodejs',
          'cpp',
        ]
      },
      {
        id: 'viettel',
        where: 'Viettel Group',
        bgWhite: false,
        logo: ViettelLogo,
        url: 'https://viettel.com.vn/vi/',
        title: 'Viettel Digital Talent Resident - Internet of Things program',
        date: 'Apr — Jul 2023',
        activity: [
          'Had opportunity to approach IoT technology developed by Viettel High Tech (VHT) and Viettel Network (VTN). I also learnt a various knowledge about IoT device, IoT Platform, and IoT-Related protocol such as MQTT',
          "I did 2 projects about IoT Device Handling as well as NB-IoT connectivity and succesfully completed the 1st phase of the program"
        ],
        tech: [
          'git', 'cpp'
        ]
      },
      // {
      //   id: 'dataswati',
      //   where: 'Dataswati',
      //   logo: DataswatiLogo,
      //   url: 'https://www.dataswati.com/',
      //   title: 'Data Scientist',
      //   date: '2020',
      //   activity: [
      //     'Dataswati is a company that uses artificial intelligence technologies to optimize industrial processes.',
      //     "I was one of the main people responsible for maintaining POPAI, Dataswati's AI library. I worked on 4 main projects/customers with different subjects in Machine Learning and Data Science."
      //   ],
      //   tech: [
      //     'airflow',
      //     'docker',
      //     'bash',
      //     'git',
      //     'gitkraken',
      //     'grpc',
      //     'jupyter',
      //     'linux',
      //     'mongodb',
      //     'mysql',
      //     'pytorch',
      //     'python',
      //     'r-lang',
      //     'scikit-learn',
      //     'sphinx',
      //     'tensorflow'
      //   ]
      // },
      // {
      //   id: 'math2it',
      //   where: 'Math2IT',
      //   logo: Math2ITLogo,
      //   url: 'https://math2it.com',
      //   title: 'Founder & Fullstack Developer & Writer',
      //   date: '2013 — current',
      //   activity: [
      //     'Math2IT is a Vietnamese math, education, and technology community. We write about intuitive math and technology that help Vietnamese learn these subjects easily.',
      //     "I write about math and technology in an intuitive way. I am also an administrator of <a href='https://www.facebook.com/groups/math2it' target='_blank'>a community</a> about mathematics and technology on Facebook."
      //   ],
      //   tech: [
      //     'bootstrap',
      //     'docker',
      //     'eleventy',
      //     'gatsby',
      //     'git',
      //     'gitkraken',
      //     'graphql',
      //     'html5',
      //     'imgur',
      //     'js',
      //     'jekyll',
      //     'linux',
      //     'mysql',
      //     'notion',
      //     'php',
      //     'react',
      //     'ruby',
      //     'scss',
      //     'wordpress'
      //   ]
      // },
      {
        id: 'rf3i',
        where: 'Radio Frequency Instrumentation and Industrial Informatics Lab (RF3i Lab) ',
        logo: rf3iLogo,
        bgWhite: true,
        url: 'https://www.rf-3i.com/AboutUs',
        title: 'Undergraduate/Assistant Researcher',
        date: '2021 — 2024',
        activity: [
          "research laboratory of SEEE-HUST. Under the guidance of Assoc. Prof. Minh-Thuy Le, my research focuses on IoT Systems and Wireless sensor Network."
        ],
        // tech: ['freefempp', 'bash', 'git', 'linux', 'matlab', 'python']
      }
    ]
  },
  {
    id: 'educations',
    name: 'Education',
    list: [
      // {
      //   id: 'self-learning-ds',
      //   where: 'Self-learning',
      //   logo: SelfLearnLogo,
      //   title: 'Data Science',
      //   date: '2019 — current',
      //   activity: [
      //     "I've been learning myself Data Science using online courses (Coursera, deeplearning.ai, Dataquest, Fastai, Oxford) and real projects."
      //   ]
      // },
      // {
      //   id: 'self-learning-web-dev',
      //   where: 'Self-learning',
      //   logo: SelfLearnLogo,
      //   title: 'Web Development',
      //   date: '2013 — current',
      //   activity: [
      //     "I've been learning myself Web Development by making applications, websites and real projects."
      //   ]
      // },
      // {
      //   id: 'self-learning-cs',
      //   where: 'Self-learning',
      //   logo: SelfLearnLogo,
      //   title: 'Computer Science',
      //   date: '2008 — current',
      //   activity: [
      //     "I've been learning myself CS by watching online video courses, reading books, and practicing programming on sites like Hackerrank."
      //   ]
      // },
      // {
      //   id: 'u-sorbonne-paris-nord-doctor',
      //   where: 'U. Sorbonne Paris Nord',
      //   logo: P13Logo,
      //   bgWhite: true,
      //   url: 'https://www.math.univ-paris13.fr/laga/index.php/en/',
      //   title: 'Doctor in Applied Maths',
      //   date: '2013 — 2018',
      //   activity: [
      //     "I have studied the growth of biofilms using the Finite Element Method, a numerical method of analysis. The title of <a href='https://www.theses.fr/2018USPCD083' target='_blank'>the dissertation</a> is \"<i>Finite Element Methods for Nonlinear Interface Problems. Application to a bioﬁlmic growth model</i>\". For the implementation I used FreeFem++ and a self-made NXFEM toolbox written in Matlab."
      //   ]
      // },
      // {
      //   id: 'u-tours',
      //   where: 'U. of Tours',
      //   logo: ToursLogo,
      //   bgWhite: true,
      //   url: 'https://www.univ-tours.fr/',
      //   title: 'Master in Applied Maths',
      //   date: '2012 — 2013',
      //   activity: [
      //     "My Master's degree was registered at this university, but I spent most of my time studying in Vietnam and completing an internship at Paris 13 University."
      //   ]
      // },
      {
        id: 'bkhn',
        where: 'Hanoi University of Science and Technology.',
        logo: BKHNLogo,
        url: 'https://hust.edu.vn/',
        title: 'Bachelor in Control engineering and Automation',
        date: '2020 - Present',
        activity: [
          'Get experience in Electric Circuit, and Wireless Sensor Network',
          "CPA: 3.86"
        ]
      }
    ]
  }
]

export default cv
