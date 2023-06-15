import type { DocumentData, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";
import { type PersonName } from "./Person";
import { ref } from "firebase/storage";
import { useFirebaseStorage, useStorageFileUrl } from "vuefire";

const storage = useFirebaseStorage()
const mountainFileRef = ref(storage, 'male.png')

class FamilyItem {

  img: any;
  constructor(readonly name: PersonName, readonly id: string, 
    readonly gender: any, readonly fid: string, readonly pids: string) {
    this.img = useStorageFileUrl(mountainFileRef)
  }

  toString(): string {
    return this.name.ur.firstName + ' ' + this.name.ur.lastName
  }
}

export const familyItemConvertor = {
  toFirestore(post: any): DocumentData {
    return post
    // return {title: post.firstName, author: post.lastName};
  },
  fromFirestore: function(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): FamilyItem {
    const data = snapshot.data(options);
    return new FamilyItem(data.name, snapshot.id, data.gender, data.fid, data.pids);
  }
}
