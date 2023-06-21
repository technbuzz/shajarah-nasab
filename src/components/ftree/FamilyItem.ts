import type { DocumentData, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";
import { type Person, type PersonName } from "../Person";

import male from '@/assets/male.png'
import female from '@/assets/female.jpg'

class FamilyItem {

  readonly img: any;
  readonly fid?: string;
  readonly gender: string;
  readonly pids?: string[];
  readonly mid?: string;
  readonly visible: boolean;
  readonly order : number
  readonly description: string;
  fullName: any;


  constructor(readonly id: string, person: Person) {
    this.gender = person.gender
    this.fid = person.fid;
    this.fullName = this.getFullName(person.name);
    this.description = this.getDesc(person.description)
    this.pids = person.pids;
    this.mid = person.mid;
    this.visible = person.visible;
    this.img = this.getGender(person.gender)
    this.order = person.order
  }

  getFullName(name: PersonName) {
    return name.ur.title + ' ' + name.ur.firstName + ' ' + name.ur.lastName
  }

  getDesc(desc: any) {
    return desc.ur
  }

  getGender(gender: string): any {
    if(gender === 'male') {
      return male
    } else {
      return female
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
