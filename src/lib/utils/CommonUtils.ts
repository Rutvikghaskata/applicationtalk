import { Colors } from "../../Theme";
import {Heart,Gastro,Neuro,Dentist,Eyes,Lungs} from '../../Theme/Images';
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
    img:Heart,
  },
  {
    id: '2',
    name: 'Gastrology',
    themeColor: Colors.card.green,
    img:Gastro,
  },
  {
    id: '3',
    name: 'Neurology',
    themeColor: Colors.card.pink,
    img:Neuro,
  },
  {
    id: '4',
    name: 'Dentist',
    themeColor: Colors.card.orange,
    img:Dentist,
  },
  {
    id: '5',
    name: 'Eye',
    themeColor: Colors.card.sky,
    img:Eyes,
  },
  {
    id: '6',
    name: 'Lungs',
    themeColor: Colors.card.green,
    img:Lungs,
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
    screen: 'findlocation',
    icon: DrawerIcon.Home,
  },
];