import heroGymImg from '../assets/images/hero_gym_interior_1787317882506.jpg';
import aboutGymImg from '../assets/images/about_gym_training_1787317894029.jpg';
import strengthWeightsImg from '../assets/images/strength_weights_1787317909867.jpg';
import cardioImg from '../assets/images/cardio_functional_1787317923365.jpg';
import exteriorImg from '../assets/images/fitbase_night_facade_1787318648967.jpg';
import { Program, Facility, Review } from '../types';

export const GYM_INFO = {
  name: 'Fit Base Fitness Center',
  tagline: 'BUILD YOUR STRONGEST SELF.',
  subTagline: 'Train harder. Move stronger. Become better.',
  description: 'Train in a modern fitness environment with professional guidance, quality equipment and a supportive community designed to help you reach your goals.',
  phone: '+92 312 8330203',
  phoneRaw: '+923128330203',
  phoneDisplay: '+92 312 8330203',
  whatsappUrl: 'https://wa.me/923128330203?text=Hi%20Fit%20Base%20Fitness%20Center!%20I%20would%20like%20to%20inquire%20about%20membership%20and%20programs.',
  address: {
    line1: '204 Chak, W Canal Rd, Green Avenue',
    city: 'Faisalabad',
    province: 'Punjab',
    country: 'Pakistan',
    postalCode: '38000',
    areaNote: 'East Canal Road / West Canal Road area',
    plusCode: 'F523+6Q Faisalabad, Pakistan',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=204+Chak+W+Canal+Rd+Green+Avenue+Faisalabad+38000+Pakistan+Fit+Base+Fitness+Center',
    googleMapsEmbedUrl: 'https://maps.google.com/maps?q=31.4285,73.1256&hl=en&z=15&output=embed',
  },
  rating: 4.8,
  totalReviews: '85+',
  hours: {
    display: '6:00 AM – 12:00 AM',
    note: 'Open Daily (Monday – Sunday)',
    openTime: '6:00 AM',
    closeTime: '12:00 AM',
  },
  social: {
    instagram: {
      name: 'Fit Base Fitness Center',
      handle: '@fitbasefitnesscenter',
      url: 'https://www.instagram.com',
    },
    facebook: {
      name: 'Fit Base Fitness Center Faisalabad',
      handle: 'Fit Base Fitness Center Faisalabad',
      url: 'https://www.facebook.com',
    },
  },
  images: {
    hero: heroGymImg,
    about: aboutGymImg,
    strength: strengthWeightsImg,
    cardio: cardioImg,
    exterior: exteriorImg,
  }
};

export const STATS_DATA = [
  {
    value: '4.8★',
    label: 'Google Rating',
    subtext: 'Verified Member Score',
  },
  {
    value: '85+',
    label: 'Happy Reviews',
    subtext: '5-Star Experiences',
  },
  {
    value: '6 AM – 12 AM',
    label: 'Daily Hours',
    subtext: '18 Hours Every Day',
  },
  {
    value: '100%',
    label: 'Fitness Focus',
    subtext: 'Dedicated Environment',
  },
];

export const WHY_CHOOSE_ITEMS = [
  {
    id: 'trainers',
    title: 'Professional Trainers',
    description: 'Get guidance and support from experienced and cooperative trainers.',
    iconName: 'Award',
    metric: 'Certified Guidance',
  },
  {
    id: 'equipment',
    title: 'Modern Equipment',
    description: 'A wide range of equipment for different workout goals.',
    iconName: 'Dumbbell',
    metric: 'Heavy-Duty Racks & Weights',
  },
  {
    id: 'environment',
    title: 'Comfortable Environment',
    description: 'A clean, cool and comfortable environment for focused workouts.',
    iconName: 'Wind',
    metric: 'Full AC Climate Control',
  },
  {
    id: 'hours',
    title: 'Flexible Hours',
    description: 'Open from 6 AM until midnight for early risers and night owls.',
    iconName: 'Clock',
    metric: '6:00 AM – 12:00 AM Daily',
  },
  {
    id: 'community',
    title: 'Supportive Community',
    description: 'A friendly environment that helps members stay motivated and consistent.',
    iconName: 'Users',
    metric: 'Energetic & Welcoming',
  },
  {
    id: 'everyone',
    title: 'Fitness For Everyone',
    description: 'Suitable for beginners as well as experienced gym members.',
    iconName: 'Flame',
    metric: 'Tailored Progression',
  },
];

export const FACILITIES_DATA: Facility[] = [
  {
    id: 'strength-training',
    title: 'Strength & Free Weights',
    category: 'Hypertrophy & Power',
    description: 'Dedicated zones equipped with heavy-duty power racks, Olympic barbells, custom bumper plates, and a full range of precision dumbbells.',
    features: ['Olympic barbells & bumper plates', 'Heavy dumbbell rows up to heavy kg', 'Power racks & squat cages', 'Flat, incline & decline Olympic benches'],
    imageUrl: strengthWeightsImg,
    tag: 'Core Strength',
  },
  {
    id: 'cardio-zone',
    title: 'Cardio & Stamina Area',
    category: 'Endurance & Heart Health',
    description: 'Modern cardiovascular machines designed for effective warmups, HIIT intervals, fat burning, and cardiovascular conditioning.',
    features: ['High-performance treadmills', 'Stationary exercise bikes', 'Ellipticals & stair steppers', 'Heart-rate tracking consoles'],
    imageUrl: cardioImg,
    tag: 'Fat Burn & Stamina',
  },
  {
    id: 'workout-machines',
    title: 'Workout Machines & Circuit',
    category: 'Targeted Muscle Isolation',
    description: 'Pin-loaded and plate-loaded machines providing guided bio-mechanical motion paths for safe, isolated muscle stimulation.',
    features: ['Cable crossover stations', 'Leg press & hack squat', 'Lat pulldowns & seated cable rows', 'Chest, shoulder & pec fly stations'],
    imageUrl: aboutGymImg,
    tag: 'Biomechanical Precision',
  },
  {
    id: 'climate-environment',
    title: 'Air-Conditioned Training Floor',
    category: 'Climate & Comfort',
    description: 'High-power industrial cooling and ventilation systems maintaining optimal workout temperature throughout hot Faisalabad summers.',
    features: ['Multi-split AC units', 'Continuous air circulation', 'Spacious training layout', 'Hygienic daily sanitized mats & benches'],
    imageUrl: heroGymImg,
    tag: 'Cool & Comfortable',
  },
  {
    id: 'functional-training',
    title: 'Functional & Mobility Zone',
    category: 'Athletic Performance',
    description: 'Dedicated floor space for core conditioning, mobility routines, kettlebell circuits, battle ropes, and functional movement.',
    features: ['Kettlebells & medicine balls', 'Battle ropes & plyo boxes', 'High-density stretching mats', 'Resistance bands & foam rollers'],
    imageUrl: strengthWeightsImg,
    tag: 'Agility & Core',
  },
  {
    id: 'facility-entrance',
    title: 'Modern Facility & Location',
    category: 'Accessibility & Parking',
    description: 'Easily accessible premium location on Canal Road, Green Avenue with secure parking, clean changing areas, and welcoming reception.',
    features: ['Prime Canal Road access', 'Convenient vehicle parking', 'Clean locker & washroom amenities', 'Supportive desk staff on duty'],
    imageUrl: exteriorImg,
    tag: 'Prime Canal Rd Location',
  },
];

export const PROGRAMS_DATA: Program[] = [
  {
    id: 'strength',
    title: 'Strength Training',
    subtitle: 'Hypertrophy, Power & Density',
    description: 'Build strength, power and muscle with structured workouts designed around progressive overload and proper lifting mechanics.',
    highlights: [
      'Compound lift mastering (Squat, Bench, Deadlift)',
      'Progressive overload tracking',
      'Targeted muscle hypertrophy protocols',
      'Injury prevention & biomechanics guidance'
    ],
    idealFor: 'Anyone wanting to build lean muscle, increase physical power, and develop lifting confidence.',
    intensity: 'All Levels',
    icon: 'Dumbbell',
  },
  {
    id: 'weight-loss',
    title: 'Weight Loss & Toning',
    subtitle: 'Fat Burn, Caloric Deficit & Conditioning',
    description: 'Work toward a healthier and stronger body through consistent training combining resistance workouts with metabolic conditioning.',
    highlights: [
      'Metabolic resistance training',
      'High-calorie burn cardio interval structures',
      'Sustainable workout habits',
      'Full body toning and metabolic boost'
    ],
    idealFor: 'Individuals looking to shed excess fat, boost stamina, and feel lighter and more energetic.',
    intensity: 'Beginner',
    icon: 'Flame',
  },
  {
    id: 'personal-training',
    title: 'Personal Training',
    subtitle: '1-on-1 Dedicated Coaching',
    description: 'Get personalized guidance based on your individual fitness goals with customized exercise plans and close form correction.',
    highlights: [
      'Customized workout programming',
      '1-on-1 posture and form supervision',
      'Goal tracking and weekly milestone reviews',
      'Supportive accountability from expert coaches'
    ],
    idealFor: 'Beginners needing structured direction or athletes seeking focused technique optimization.',
    intensity: 'All Levels',
    icon: 'Target',
  },
  {
    id: 'functional-fitness',
    title: 'Functional Fitness',
    subtitle: 'Mobility, Endurance & Athleticism',
    description: 'Improve mobility, endurance, balance and everyday physical performance with athletic and core-focused movement routines.',
    highlights: [
      'Multi-planar athletic movements',
      'Core stability and joint mobility',
      'Endurance & conditioning circuits',
      'Real-world functional stamina'
    ],
    idealFor: 'People wanting to move pain-free, improve posture, and enhance athletic agility for daily life.',
    intensity: 'Intermediate',
    icon: 'Activity',
  },
];

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    author: 'Eman Tahir',
    rating: 5,
    date: 'Verified Member',
    text: 'Supportive and professional coaches who helped me progress from being a beginner toward my strength goals.',
    role: 'Fit Base Member',
    initials: 'ET',
    verified: true,
  },
  {
    id: 'rev-2',
    author: 'Alishba Minhas',
    rating: 5,
    date: 'Verified Member',
    text: 'Great equipment, cooperative staff and helpful instructors.',
    role: 'Fitness Enthusiast',
    initials: 'AM',
    verified: true,
  },
  {
    id: 'rev-3',
    author: 'Nomi Jutt',
    rating: 5,
    date: 'Verified Member',
    text: 'One of the best gyms with a very good environment. Excellent cooling system and professional owner.',
    role: 'Strength Athlete',
    initials: 'NJ',
    verified: true,
  },
];

export const FAQS_DATA = [
  {
    question: 'What are the opening hours of Fit Base Fitness Center?',
    answer: 'We are open every single day from 6:00 AM until 12:00 AM (midnight), giving you 18 hours of flexible workout opportunity whether you train early morning or late night.',
  },
  {
    question: 'Where is Fit Base Fitness Center located in Faisalabad?',
    answer: 'We are located at 204 Chak, W Canal Rd, Green Avenue, Faisalabad (near East/West Canal Road, Location Plus Code: F523+6Q Faisalabad, Pakistan).',
  },
  {
    question: 'Is Fit Base suitable for beginners who have never trained before?',
    answer: 'Absolutely. Our cooperative trainers and supportive staff provide hands-on guidance on machine setup, proper lifting form, and starter routines so beginners feel confident and comfortable.',
  },
  {
    question: 'Is the gym fully air-conditioned during hot weather?',
    answer: 'Yes! Fit Base features an advanced cooling system with multiple heavy-duty AC units and proper air circulation to ensure a cool, comfortable environment even in peak summer.',
  },
  {
    question: 'How do I start or book a visit?',
    answer: 'You can tap the "Join Now" button, call us directly at +92 312 8330203, message us on WhatsApp, or walk into the gym anytime between 6:00 AM and 12:00 AM.',
  },
];
