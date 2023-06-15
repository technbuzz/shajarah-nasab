<script setup lang="ts">
import { useCollection } from 'vuefire'
import FamilyTree from '@balkangraph/familytree.js'
import { ref, watch } from 'vue';
import AddPerson from "./AddPerson.vue";
import { personsRef } from '../firebase';
import { familyItemConvertor } from './FamilyItem'

const personId = ref<string | undefined>(undefined)
const addPersonDialog = ref(false)
interface DialogType {
visible: boolean, id?: string, fid?: string, gender?: 'male' | 'female'
}
const dialog = ref<DialogType>({visible: false, id: '', fid: ''})

function presentPerson(id?: string) {
  addPersonDialog.value = true
  personId.value = id
}

function hidePersonAdd() {
  dialog.value = { visible: false }
}


let family: FamilyTree
const treeRef = ref<HTMLDivElement>()


const addSonHandler = (nodeId: string) => {
  dialog.value = {visible: true, fid: nodeId, gender: 'male'}
}
const addDaughterHandler = (nodeId: string) => {
  dialog.value = {visible: true, fid: nodeId, gender: 'female'}
}

let editForm = function () {
  this.nodeId = null
}

editForm.prototype.init = function (obj:any) {
  this.obj = obj
}

editForm.prototype.show = function (nodeId: any) {
  this.nodeId = nodeId
  dialog.value = { visible: true, id: nodeId, fid: '' }
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
    nodeContextMenu: {
      edit: { text: "Add Son", onClick: addSonHandler, icon: FamilyTree.icon.addUser(18, 18, '#039BE5')  },
      share: { text: "Add Daughter", onClick: addDaughterHandler, icon: FamilyTree.icon.addUser(18, 18, '#039BE5')  },
    },
    // mouseScrool: FamilyTree.action.scroll,
    editUI: new editForm(),
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
  return { ...item, img: result }
}

watch(persons, async (newValue, oldValue) => {
  const fullNameMapped = await Promise.all(newValue.map(item => getImage(item)))
  console.log(fullNameMapped)
  renderTree(treeRef.value, fullNameMapped)
  // renderTree(treeRef.value, nodes.value)
})

</script>

<template>
  <v-dialog v-model="dialog.visible" width="400">
    <AddPerson :fid="dialog.fid" :id="dialog.id" :gender="dialog.gender" @close="hidePersonAdd" />
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
  transform: translateY(10px)
}

.bft-family-menu.bft-family-menu {
  min-width: 100px
}

.bft-family-menu div {
  display: flex;
  align-items: center;
}

.field_0 {
  /* font-family: Impact; */
  text-transform: uppercase;
  fill: #cfcfcf;
}
</style>
