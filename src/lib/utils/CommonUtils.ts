import {Colors} from '../../Theme';
import {Heart, Gastro, Neuro, Dentist, Eyes, Lungs} from '../../Theme/Images';
import {DrawerIcon} from '../../Theme/Icons';
export const SymptomsData = [
  {
    id: '1',
    name: 'Temperature',
  },
  {
    id: '2',
    name: 'Snuffle',
  },
  {
    id: '3',
    name: 'Fever',
  },
  {
    id: '4',
    name: 'Headache',
  },
  {
    id: '5',
    name: 'Back Pain',
  },
  {
    id: '6',
    name: 'Knee Pains',
  },
  {
    id: '7',
    name: 'Diabetics',
  },
  {
    id: '8',
    name: 'General',
  },
  {
    id: '9',
    name: 'Body Pain',
  },
  {
    id: '10',
    name: 'Shoulder Pain',
  },
];

export const DoctorsData = [
  {
    id: '1',
    name: 'Dr. Chris Frazier',
    specialization: 'Pediatrician',
    isLike: 'false',
    rating: 5.1,
    gender: 'female',
  },
  {
    id: '2',
    name: 'Dr. Viola Dunn',
    specialization: 'Pediatrician',
    isLike: 'true',
    rating: 3.6,
    gender: 'male',
  },
  {
    id: '3',
    name: 'Dr. Chris Frazier',
    specialization: 'Pediatrician',
    isLike: 'false',
    rating: 4.7,
    gender: 'female',
  },
  {
    id: '4',
    name: 'Dr. Viola Dunn',
    specialization: 'Pediatrician',
    isLike: 'false',
    rating: 3.5,
    gender: 'male',
  },
];

export const SpecialistData = [
  {
    id: '1',
    name: 'Cardiology',
    themeColor: Colors.card.sky,
    img: Heart,
  },
  {
    id: '2',
    name: 'Gastrology',
    themeColor: Colors.card.green,
    img: Gastro,
  },
  {
    id: '3',
    name: 'Neurology',
    themeColor: Colors.card.pink,
    img: Neuro,
  },
  {
    id: '4',
    name: 'Dentist',
    themeColor: Colors.card.orange,
    img: Dentist,
  },
  {
    id: '5',
    name: 'Eye',
    themeColor: Colors.card.sky,
    img: Eyes,
  },
  {
    id: '6',
    name: 'Lungs',
    themeColor: Colors.card.green,
    img: Lungs,
  },
];

export const HospitalsData = [
  {
    id: '1',
    name: 'Kiran Hospital',
  },
  {
    id: '2',
    name: 'Sardar Hospital',
  },
  {
    id: '3',
    name: 'Apple Hospital',
  },
  {
    id: '4',
    name: 'Surat Hospital',
  },
  {
    id: '5',
    name: 'Dental  Hospital',
  },
  {
    id: '6',
    name: 'Kiran Hospital',
  },
];

export const screens = [
  {
    id: '1',
    name: 'Home',
    screen: 'home',
    icon: DrawerIcon.Home,
  },
  {
    id: '2',
    name: 'Your Profile',
    screen: 'profile',
    icon: DrawerIcon.Profile,
  },
  {
    id: '3',
    name: 'Book Appointment',
    screen: 'appointment',
    icon: DrawerIcon.Appointment,
  },
  {
    id: '4',
    name: 'Health Feed',
    screen: 'home',
    icon: DrawerIcon.Health,
  },
  {
    id: '5',
    name: 'My Payment',
    screen: 'home',
    icon: DrawerIcon.Payment,
  },
  {
    id: '6',
    name: 'Review',
    screen: 'home',
    icon: DrawerIcon.Review,
  },
  {
    id: '7',
    name: 'Settings',
    screen: 'home',
    icon: DrawerIcon.Setting,
  },
  {
    id: '8',
    name: 'Medical Records',
    screen: 'home',
    icon: DrawerIcon.Record,
  },
  {
    id: '9',
    name: 'Logout',
    screen: 'findDoctor',
    icon: DrawerIcon.Home,
  },
];

export const mapDarkStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'administrative.country',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#181818',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#1b1b1b',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#2c2c2c',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#8a8a8a',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#373737',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#3c3c3c',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [
      {
        color: '#4e4e4e',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#3d3d3d',
      },
    ],
  },
];

export const GoogleMapData = [
  {
    id: '1',
    coordinate: {
      latitude: 21.2266,
      longitude: 72.8312,
    },
    name: 'Dr. Albert Cooper',
    description: 'Cardiologist',
    date: 'Tue, 3 Dec',
    isVerified: true,
    rate: 3,
    imgUrl:
      'https://t4.ftcdn.net/jpg/01/36/18/77/360_F_136187711_qeBMOwkPdTg1dCN8e5TR1AmduXDz60Xn.jpg',
    type: 'doctor',
  },
  {
    id: '2',
    coordinate: {
      latitude: 21.2666,
      longitude: 72.8312,
    },
    name: 'Dr. Albert Cooper',
    description: 'Cardiologist',
    date: 'Sun, 7 Match',
    isVerified: true,
    rate: 3,
    imgUrl:
      'https://www.doctortipster.com/wp-content/uploads/2016/02/Dr-Zukerman-Profile.jpg',
    type: 'doctor',
  },
  {
    id: '3',
    coordinate: {
      latitude: 21.2185,
      longitude: 72.8368,
    },
    name: 'Kiran hospital',
    description: 'Cardiologist',
    date: 'Mon, 11 Feb',
    isVerified: true,
    rate: 5,
    imgUrl:
      'https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg',
    type: 'hospital',
  },
  {
    id: '4',
    coordinate: {
      latitude: 21.2226,
      longitude: 72.8212,
    },
    name: 'Sardar hospital',
    description: 'Cardiologist',
    date: 'Tue, 29 Jan',
    isVerified: false,
    rate: 4,
    imgUrl:
      'https://www.uab.edu/news/images/2018/Stream_Hospital_signs-3_2.png',
    type: 'hospital',
  },
  {
    id: '5',
    coordinate: {
      latitude: 21.2386,
      longitude: 72.8312,
    },
    name: 'Dr. Dinesh Patel',
    description: 'Ct Scan',
    date: 'Sun, 7 March',
    isVerified: true,
    rate: 3,
    imgUrl:
      'https://media.istockphoto.com/photos/portrait-of-male-doctor-in-white-coat-and-stethoscope-standing-in-picture-id1327024466?k=20&m=1327024466&s=170667a&w=0&h=VAPdOIGbK4z9FsRZTUc2dFY61QkCTQHQNkBRv70pe3I=',
    type: 'doctor',
  },
  {
    id: '6',
    coordinate: {
      latitude: 21.2725,
      longitude: 72.8312,
    },
    name: 'Dr. humberto',
    description: 'Health & Wellness',
    date: 'Mon, 5 April',
    isVerified: false,
    rate: 3,
    imgUrl:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    type: 'doctor',
  },
];
