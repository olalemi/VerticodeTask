export interface ILocation {
    city: string;
    country: string;
    long: string;
    lat: string;
}

export interface IPerson {
    firstName: string;
    lastName: string;
    dateOfBirth: Date| null;
    job: string | 'Firefighter' | 'Police Officer' | 'Astronaut' | 'Developer';
    bio: string;
    location: ILocation;

     //Calculated during the submit function - do not include in the form but do include in the output
    estimatedScore?: number; 
}
