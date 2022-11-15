interface props {
  latitude: number;
  longitude: number;
  altitude: number | null;
  accuracy: number;
  altitudeAccuracy: number | null;
  heading: number | null;
  speed: number | null;
}

interface Region {
  latitude: number | string | null;
  longitude: number | string | null;
  latitudeDelta: number | string | null;
  longitudeDelta: number | string | null;
}

interface Card {
  data: {
    id: string;
    coordinate: {
      latitude: number | string | null;
      longitude: number | string | null;
    };
    name: string;
    description: string;
    date: string;
    isVerified: boolean | string;
    rating: number ;
    imgUrl: string;
    type: string;
  };
  index: number;
}

export type Props = props;
export type RegionProps = Region;
export type CardProps = Card;
