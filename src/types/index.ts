export interface Class {
  id: string;
  title: string;
  description: string;
  image: string;
  ageGroup: string; // '0-2', '3-5', '6-8'
  tags: string[]; // 'movement', 'sensory', 'creative', 'music'
  duration: number; // in minutes
  capacity: number;
  schedule: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  isNew?: boolean;
  shopifyUrl: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
}