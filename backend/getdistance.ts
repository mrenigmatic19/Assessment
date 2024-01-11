import axios, { AxiosResponse } from 'axios';

interface PincodeData {
    [pincode: string]: {
        latitude: number;
        longitude: number;
    };
}

function getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const radius = 6371; // Radius of the earth in km
    const latitudeDifference = deg2rad(lat2 - lat1); // deg2rad below
    const longitudeDifference = deg2rad(lon2 - lon1);
    console.log(latitudeDifference, longitudeDifference);

    const a =
        Math.sin(latitudeDifference / 2) * Math.sin(latitudeDifference / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(longitudeDifference / 2) * Math.sin(longitudeDifference / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = radius * c;

    return distance;
}

function deg2rad(deg: number): number {
    return deg * (Math.PI / 180);
}

const calculate = (pincode1: string, pincode2: string, data: PincodeData): number => {
    const latitude1 = data[pincode1].latitude;
    const longitude1 = data[pincode1].longitude;
    const latitude2 = data[pincode2].latitude;
    const longitude2 = data[pincode2].longitude;
    const distance = getDistanceFromLatLonInKm(latitude1, longitude1, latitude2, longitude2);
    console.log(pincode1, pincode2, data);
    return distance;
};

const getDistance = async (pincode1: string, pincode2: string): Promise<number> => {
  try {
      const response: AxiosResponse<PincodeData> = await axios.get('./pincode.json');
      console.log(pincode1, pincode2, "1");

      const data = response.data as PincodeData;

      if (data) {
          const result = calculate(pincode1, pincode2, data);
          return result;
      } else {
          throw new Error('Invalid pincode data format');
      }
  } catch (error) {
      console.error(error);
      throw error;
  }
};


getDistance('382445', '110021').then((result) => console.log(result));

export { getDistance };
