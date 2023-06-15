<script setup lang="ts">
import { useCollection } from 'vuefire'
import FamilyTree from '@balkangraph/familytree.js'
import { ref, onMounted, watch } from 'vue';
import AddPerson from "./AddPerson.vue";
import { type Person } from "./Person";
import { personsRef } from '../firebase';
import { familyItemConvertor } from './FamilyItem'

const personId = ref<string | undefined>(undefined)
const addPersonDialog = ref(false)

function presentPerson(id?: string) {
  addPersonDialog.value = true
  personId.value = id
}

function hidePersonAdd() {
  addPersonDialog.value = false
}


let family: FamilyTree
const treeRef = ref<HTMLDivElement>()

const nodes = ref([
  // { id: 1, pids: [2], name: "Amber McKenzie", gender: "female", img: "https://cdn.balkan.app/shared/2.jpg" },
  // { id: 2, pids: [1], name: "Ava Field", gender: "male", img: "https://cdn.balkan.app/shared/m30/5.jpg" },
  // { id: 3, mid: 1, fid: 2, name: "Peter Stevens", gender: "male", img: "https://cdn.balkan.app/shared/m10/2.jpg" },
  // { id: 4, mid: 1, fid: 2, name: "Savin Stevens", gender: "male", img: "https://cdn.balkan.app/shared/m10/1.jpg" },
  // { id: 5, mid: 1, fid: 2, name: "Emma Stevens", gender: "female", img: "https://cdn.balkan.app/shared/w10/3.jpg" }
  { id: 1, pids: [1], name: "Amber McKenzie", gender: "female", img: "https://cdn.balkan.app/shared/2.jpg" },
  { id: 2, pids: [2], name: "Ava Field", gender: "male", img: "https://cdn.balkan.app/shared/m30/5.jpg" },
  { id: 3, fid: 1, name: "Peter Stevens", gender: "male", img: "https://cdn.balkan.app/shared/m10/2.jpg" },
  { id: 4, fid: 1, name: "Savin Stevens", gender: "male", img: "https://cdn.balkan.app/shared/m10/1.jpg" },
  { id: 5, fid: 1, name: "Emma Stevens", gender: "female", img: "https://cdn.balkan.app/shared/w10/3.jpg" }
])

let editForm = function () {
  this.nodeId = null
}

editForm.prototype.init = function (obj) {
  this.obj = obj
}

editForm.prototype.show = function (nodeId: any) {
  console.log(nodeId)
  this.nodeId = nodeId
  addPersonDialog.value = true
  personId.value = nodeId
}

editForm.prototype.hide = function (nodeId: any) {
  console.log('hidden')
}


function renderTree(domEL: HTMLElement, nodes: any) {
  family = new FamilyTree(domEL, {
    nodes: nodes,
    enableSearch: false,
    enablePan: false,
    // editUI: new editForm(),
    enableTouch: false,
    template: 'john',
    nodeBinding: {
      field_0: "fullName",
      img_0: "img",
    }
  })

}

const persons = useCollection(personsRef, { converter: familyItemConvertor })

const getImage = async (item: any) => {
  const result = await item.img.promise
  debugger
  return {
    ...item,
    fullName: item.toString(),
    id: item.id,
    img: result,
  }
}

watch(persons, async (newValue, oldValue) => {
  const fullNameMapped = await Promise.all(newValue.map(item => getImage(item)))
  console.log(fullNameMapped)
  renderTree(treeRef.value, fullNameMapped)
  // renderTree(treeRef.value, nodes.value)
})

</script>

<template>
  <v-dialog title="Login" v-model="addPersonDialog" width="400">
    <AddPerson :id="personId" @close="hidePersonAdd" />
  </v-dialog>
  <div ref="treeRef" class="tree"></div>
</template>

<style >
.tree {
  width: 100%;
  height: 100%;
}
svg.john text{
  font-family: var(--ar-locale) ;
    }
.field_0 {
  /* font-family: Impact; */
  text-transform: uppercase;
  fill: #cfcfcf;
}
</style>
