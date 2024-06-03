'use server';
import {
  CandidateCardData,
  CandidateRawData,
  RecommendationsProps,
  User,
  UserSettings,
} from '@/types/types';
import { DataService } from './data-service';
const PLATFORM_API_BASE_URL = process.env.PLATFORM_API_BASE_URL;

const CANDIDATES_URLS = {
  singleCandidate: `${PLATFORM_API_BASE_URL}/api/v1/candidates/user`,
  singleCandidateSettings: `${PLATFORM_API_BASE_URL}/api/v1/candidates/settings`,
  candidateInfo: `${PLATFORM_API_BASE_URL}/api/v1/candidates/user_info`,
  candidateRawData: `${PLATFORM_API_BASE_URL}/api/v1/candidates/raw_data`,
  candidateRecommendation: `${PLATFORM_API_BASE_URL}/api/v1/candidates/recommendation`,
};

const CANDIDATES: CandidateCardData[] = [
  {
    name: 'Lara Nasir',
    profession: 'Frontend Developer',
    location: 'Sydney, Australia',
    candidateImgUrl: '/assets/candidates/candidate.png',
    skillSet: ['Python', 'React', 'Next.js', 'Vue', 'Django'],
    about:
      'Hi, I’m Lara Nasir, a frontend developer dedicated to building responsive and performant web applications with a focus on user experience and accessibility.',
  },
  {
    name: 'Zara Ahmed',
    profession: 'UI/UX Designer',
    location: 'Los Angeles, USA',
    candidateImgUrl: '/assets/candidates/candidate.png',
    skillSet: ['Python', 'React', 'Next.js', 'Vue', 'Django'],
    about:
      'Hi, I’m Zara Ahmed, a UI/UX designer passionate about creating beautiful and intuitive user experiences that solve real-world problems.',
  },
  {
    name: 'Amir Khan',
    profession: 'Backend Developer',
    location: 'Toronto, Canada',
    candidateImgUrl: '/assets/candidates/candidate.png',
    skillSet: ['Python', 'React', 'Next.js', 'Vue', 'Django'],
    about:
      'Hey there! I’m Amir Khan, a backend developer specializing in building robust and scalable server-side applications using Node.js, Express, and MongoDB.',
  },
  {
    name: 'Hina Ali',
    profession: 'Data Analyst',
    location: 'Singapore',
    candidateImgUrl: '/assets/candidates/candidate.png',
    skillSet: ['Python', 'React', 'Next.js', 'Vue', 'Django'],
    about:
      'Hello, I’m Hina Ali, a data analyst with a passion for transforming raw data into actionable insights that drive business growth and decision-making.',
  },
  {
    name: 'Umar Farooq',
    profession: 'Mobile App Developer',
    location: 'Berlin, Germany',
    candidateImgUrl: '/assets/candidates/candidate.png',
    skillSet: ['Python', 'React', 'Next.js', 'Vue', 'Django'],
    about:
      'Hi there! I’m Umar Farooq, a mobile app developer experienced in building cross-platform applications for iOS and Android using React Native and Flutter.',
  },
  {
    name: 'Sana Khalid',
    profession: 'SEO Specialist',
    location: 'Sydney, Australia',
    candidateImgUrl: '/assets/candidates/candidate.png',
    skillSet: ['Python', 'React', 'Next.js', 'Vue', 'Django'],
    about:
      'Hello, I’m Sana Khalid, an SEO specialist dedicated to improving website visibility and driving organic traffic through strategic keyword research and optimization techniques.',
  },
  {
    name: 'Bilal Akhtar',
    profession: 'DevOps Engineer',
    location: 'Seattle, USA',
    candidateImgUrl: '/assets/candidates/candidate.png',
    skillSet: ['Python', 'React', 'Next.js', 'Vue', 'Django'],
    about:
      'Greetings! I’m Bilal Akhtar, a DevOps engineer proficient in automating deployment pipelines and optimizing infrastructure to enhance software delivery and reliability.',
  },
  {
    name: 'Farah Khan',
    profession: 'Content Strategist',
    location: 'London, UK',
    candidateImgUrl: '/assets/candidates/candidate.png',
    skillSet: ['Python', 'React', 'Next.js', 'Vue', 'Django'],
    about:
      'Hi, I’m Farah Khan, a content strategist specializing in developing comprehensive content plans and editorial calendars to drive brand awareness and engagement.',
  },
  {
    name: 'Imran Ahmed',
    profession: 'Blockchain Developer',
    location: 'New York, USA',
    candidateImgUrl: '/assets/candidates/candidate.png',
    skillSet: ['Python', 'React', 'Next.js', 'Vue', 'Django'],
    about:
      'Hey there! I’m Imran Ahmed, a blockchain developer with expertise in building decentralized applications (DApps) and smart contracts using Ethereum and Hyperledger Fabric.',
  },
  {
    name: 'Ayesha Malik',
    profession: 'Digital Illustrator',
    location: 'Paris, France',
    candidateImgUrl: '/assets/candidates/candidate.png',
    skillSet: ['Python', 'React', 'Next.js', 'Vue', 'Django'],
    about:
      'Hello, I’m Ayesha Malik, a digital illustrator passionate about creating captivating artworks and illustrations that evoke emotion and inspire imagination.',
  },
  {
    name: 'Usman Ali',
    profession: 'Data Engineer',
    location: 'Melbourne, Australia',
    candidateImgUrl: '/assets/candidates/candidate.png',
    skillSet: ['Python', 'React', 'Next.js', 'Vue', 'Django'],
    about:
      'Hi there! I’m Usman Ali, a data engineer focused on designing and implementing scalable data pipelines and ETL processes to support analytics and machine learning initiatives.',
  },
  {
    name: 'Saad Gulzar',
    profession: 'Software Engineer',
    location: 'Sidney, Australia',
    candidateImgUrl: '/assets/candidates/candidate.png',
    skillSet: ['Python', 'React', 'Next.js', 'Vue', 'Django'],
    about:
      'Hello, my name is Saad Gulzar and I am asoftware engineer with skills in next.js react.js and figma design',
  },
  {
    name: 'Amina Khan',
    profession: 'UX/UI Designer',
    location: 'London, UK',
    candidateImgUrl: '/assets/candidates/candidate.png',
    skillSet: ['Python', 'React', 'Next.js', 'Vue', 'Django'],
    about:
      'Hi, I’m Amina Khan, a passionate UX/UI designer with experience in creating intuitive and engaging user interfaces.',
  },
  {
    name: 'Ali Hassan',
    profession: 'Data Scientist',
    location: 'New York, USA',
    candidateImgUrl: '/assets/candidates/candidate.png',
    skillSet: ['Python', 'React', 'Next.js', 'Vue', 'Django'],
    about:
      'Hey there! I’m Ali Hassan, a data scientist specializing in machine learning and predictive analytics.',
  },
  {
    name: 'Fatima Ahmad',
    profession: 'Digital Marketing Specialist',
    location: 'Toronto, Canada',
    candidateImgUrl: '/assets/candidates/candidate.png',
    skillSet: ['Python', 'React', 'Next.js', 'Vue', 'Django'],
    about:
      'Hello, I’m Fatima Ahmad, a digital marketing specialist passionate about driving growth through data-driven strategies and creative campaigns.',
  },
  {
    name: 'Ahmed Khan',
    profession: 'Full Stack Developer',
    location: 'Berlin, Germany',
    candidateImgUrl: '/assets/candidates/candidate.png',
    skillSet: ['Python', 'React', 'Next.js', 'Vue', 'Django'],
    about:
      'Hi there! I’m Ahmed Khan, a full-stack developer with expertise in building scalable web applications using Node.js, React.js, and MongoDB.',
  },
  {
    name: 'Sara Patel',
    profession: 'Product Manager',
    location: 'San Francisco, USA',
    candidateImgUrl: '/assets/candidates/candidate.png',
    skillSet: ['Python', 'React', 'Next.js', 'Vue', 'Django'],
    about:
      'Greetings! I’m Sara Patel, a product manager with a passion for creating innovative products that delight users and drive business growth.',
  },
  {
    name: 'Zainab Khan',
    profession: 'Graphic Designer',
    location: 'Dubai, UAE',
    candidateImgUrl: '/assets/candidates/candidate.png',
    skillSet: ['Python', 'React', 'Next.js', 'Vue', 'Django'],
    about:
      'Hello, I’m Zainab Khan, a creative graphic designer with a keen eye for detail and a love for bringing ideas to life through visual storytelling.',
  },
  {
    name: 'Hassan Ali',
    profession: 'Frontend Developer',
    location: 'Sydney, Australia',
    candidateImgUrl: '/assets/candidates/candidate.png',
    skillSet: ['Python', 'React', 'Next.js', 'Vue', 'Django'],
    about:
      'Hi, I’m Hassan Ali, a frontend developer passionate about building responsive and user-friendly web applications with HTML, CSS, and JavaScript.',
  },
  {
    name: 'Yasmeen Khan',
    profession: 'Content Writer',
    location: 'Paris, France',
    candidateImgUrl: '/assets/candidates/candidate.png',
    skillSet: ['Python', 'React', 'Next.js', 'Vue', 'Django'],
    about:
      'Hello, I’m Yasmeen Khan, a content writer with a knack for crafting compelling stories and engaging copy that resonates with audiences.',
  },
];
export async function getCandidateByUserId(userId: string): Promise<{}> {
  if (!userId) {
    // can return 404 heres
    return {} as {};
  }
  const data = await DataService.get<{}>(`${CANDIDATES_URLS.singleCandidate}/${userId}`, {
    skip: '0',
    limit: '10',
    allow_for_translated_jobs: 'false',
  });
  return data;
}
export async function getCandidateById(candidateId: string): Promise<{}> {
  if (!candidateId) {
    // can return 404 heres
    return {} as {};
  }
  const data = await DataService.get<{}>(`${CANDIDATES_URLS.singleCandidate}/${candidateId}`);
  return data;
}

export async function getCandidateSettingsById(candidateId: string): Promise<UserSettings> {
  if (!candidateId) {
    // can return 404 heres
    return {} as UserSettings;
  }
  const data = await DataService.get<UserSettings>(
    `${CANDIDATES_URLS.singleCandidateSettings}/${candidateId}`
  );
  return data;
}
export async function getUserInfoByCandidateId(candidateId: string): Promise<User> {
  if (!candidateId) {
    // can return 404 heres
    return {} as User;
  }
  const data = await DataService.get<User>(`${CANDIDATES_URLS.candidateInfo}/${candidateId}`);
  return data;
}
export async function getCandidateRawDataById(candidateId: string): Promise<CandidateRawData> {
  if (!candidateId) {
    // can return 404 heres
    return {} as CandidateRawData;
  }
  const data = await DataService.get<CandidateRawData>(
    `${CANDIDATES_URLS.candidateRawData}/${candidateId}`
  );
  return data;
}
export async function getCandidateRecommendationById(
  candidateId: number | string
): Promise<RecommendationsProps> {
  if (!candidateId) {
    // can return 404 heres
    return {} as RecommendationsProps;
  }
  const data = await DataService.get<RecommendationsProps>(
    `${CANDIDATES_URLS.candidateRecommendation}/${candidateId}`
  );

  return data;
}

export async function getAllCandidates(): Promise<CandidateCardData[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(CANDIDATES);
    }, 4000);
  });
}
