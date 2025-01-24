export interface Town {
  id: string;
  name: string;
  nameJp: string;
  description: string;
  image: string;
  location: {
    lat: number;
    lng: number;
  };
  onsenCount: number;
  region: string;
}

export interface Onsen {
  id: string;
  name: string;
  nameJp: string;
  townId: string;
  description: string;
  images: string[];
  features: string[];
  temperature: number;
  price: number;
  type: 'indoor' | 'outdoor' | 'both';
}