import type { DocumentData, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";
import { type Person, type PersonName } from "./Person";
import { ref } from "firebase/storage";
import { useFirebaseStorage, useStorageFileUrl } from "vuefire";

const storage = useFirebaseStorage()
const maleRef = ref(storage, 'male.png')
const femaleRef = ref(storage, 'female.jpg')

class FamilyItem {

  readonly img: any;
  readonly fid?: string;
  readonly gender: string;
  readonly pids?: string[];
  readonly mid?: string;
  readonly visible: boolean;
  readonly order : number
  fullName: any;


  constructor(readonly id: string, person: Person) {
    this.gender = person.gender
    this.fid = person.fid;
    this.fullName = this.getFullName(person.name);
    this.pids = person.pids;
    this.mid = person.mid;
    this.visible = person.visible;
    this.order = person.order
    this.img = this.getGender(person.gender)
  }

  getFullName(name: PersonName) {
    return name.ur.title + ' ' + name.ur.firstName + ' ' + name.ur.lastName
  }

  getGender(gender: string): any {
    if(gender === 'male') {
      return useStorageFileUrl(maleRef)
    } else {
      return useStorageFileUrl(femaleRef)
    }

  }

}

export const familyItemConvertor = {
  toFirestore(post: any): DocumentData {
    return post
    // return {title: post.firstName, author: post.lastName};
  },
  fromFirestore: function(
    snapshot: QueryDocumentSnapshot<Person>,
    options: SnapshotOptions
  ): FamilyItem {
    const data = snapshot.data(options);
    return new FamilyItem(snapshot.id, data);
  }
}
