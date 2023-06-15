export interface PersonName {
    // en?: {
    //   title: string;
    //   firstName: string;
    //   lastName: string;
    // },
    ur: {
      title: string;
      firstName: string;
      lastName: string;
    }
}

export interface Person {
  id?: string;
  pid?: string[];
  fid?: string;
  gender: string;
  name: PersonName;
  fullName?: string,
  description: {
    en?: string;
    ur: string;
  }
}
