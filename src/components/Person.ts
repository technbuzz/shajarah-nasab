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
  visible: boolean;
  pids?: string[];
  fid?: string;
  mid?: string;
  gender: string;
  order: number;
  name: PersonName;
  fullName?: string,
  description: {
    en?: string;
    ur: string;
  }
}
