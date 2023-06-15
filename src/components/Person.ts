export interface Person {
  id?: string;
  gender: {
    ur: '',
    en?: ''
  },
  name: {
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
  },
  description: {
    en?: string;
    ur: string;
  }
}
