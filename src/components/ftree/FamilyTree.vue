<script setup lang="ts">
import { useCollection } from 'vuefire'
import FamilyTree from '@balkangraph/familytree.js'
import { ref, watch } from 'vue';
import { personsRef } from '@/firebase';
import { familyItemConvertor } from './FamilyItem'
import { query, where } from 'firebase/firestore';
import type { Person } from '../Person';
import { editForm } from "./editUI";
import router from '@/router';

const isLoading = ref(true)

let family: FamilyTree
const treeRef = ref<HTMLDivElement>()

const addSonHandler = (nodeId: string, ...args: any[]) => {
  const node = family.get(nodeId) as Person
  if (node.gender === 'female' && node.pids?.length) {
    router.push({ state: { fid: node.pids[0], mid: node.id, gender: 'male' }, name: 'new' })
  } else {
    router.push({ state: { fid: nodeId, gender: 'male' }, name: 'new' })
  }
}

const addDaughterHandler = (nodeId: string) => {
  const node = family.get(nodeId) as Person
  if (node.gender === 'female' && node.pids?.length) {
    router.push({ state: { fid: node.pids[0], mid: node.id, gender: 'female' }, name: 'new' })
  } else {
    router.push({ state: { fid: nodeId, gender: 'female' }, name: 'new' })
  }
}

const addWifeHandler = (nodeId: string) => {
  router.push({ state: { pids: [nodeId], gender: 'female' }, name: 'new' })
}


FamilyTree.templates.john_male.plus =
  '<circle cx="0" cy="0" r="15" fill="#ffffff" stroke="#aeaeae" stroke-width="1"></circle>'
  + '<line x1="-11" y1="0" x2="11" y2="0" stroke-width="1" stroke="#aeaeae"></line>'
  + '<line x1="0" y1="-11" x2="0" y2="11" stroke-width="1" stroke="#aeaeae"></line>';
FamilyTree.templates.john_male.minus =
  '<circle cx="0" cy="0" r="15" fill="#ffffff" stroke="#aeaeae" stroke-width="1"></circle>'
  + '<line x1="-11" y1="0" x2="11" y2="0" stroke-width="1" stroke="#aeaeae"></line>';

FamilyTree.templates.john_male.defs =
  `<g transform="matrix(0.05,0,0,0.05,-12,-9)" id="heart">
    <path fill="#FFEEEE" d="M438.482,58.61c-24.7-26.549-59.311-41.655-95.573-41.711c-36.291,0.042-70.938,15.14-95.676,41.694l-8.431,8.909  l-8.431-8.909C181.284,5.762,98.663,2.728,45.832,51.815c-2.341,2.176-4.602,4.436-6.778,6.778 c-52.072,56.166-52.072,142.968,0,199.134l187.358,197.581c6.482,6.843,17.284,7.136,24.127,0.654 c0.224-0.212,0.442-0.43,0.654-0.654l187.29-197.581C490.551,201.567,490.551,114.77,438.482,58.61z"/>
  <g>`;

function renderTree(domEL: HTMLElement, nodes: any) {
  family = new FamilyTree(domEL, {
    nodes: nodes,
    enableSearch: false,
    state: null,
    nodeContextMenu: {
      edit: { text: "Add Son", onClick: addSonHandler, icon: FamilyTree.icon.addUser(18, 18, '#039BE5') },
      share: { text: "Add Daughter", onClick: addDaughterHandler, icon: FamilyTree.icon.addUser(18, 18, '#039BE5') },
      pdf: { text: "Add Wife", onClick: addWifeHandler, icon: FamilyTree.icon.addUser(18, 18, '#039BE5') },
    },
    levelSeparation: 70,
    // mouseScrool: FamilyTree.action.scroll,
    mouseScrool: FamilyTree.action.zoom,
    editUI: new editForm(),
    orderBy: { field: 'order', desc: true },
    template: 'john',
    nodeBinding: {
      field_0: "fullName",
      field_1: "description",
      img_0: "img",
    }
  })

  family.on('ready', () => {
    isLoading.value = false
  })

  family.on('expcollclick', function (sender, isCollapsing, nodeId) {
    var node = family.getNode(nodeId);
    if (isCollapsing) {
      family.expandCollapse(nodeId, [], node.ftChildrenIds)
    }
    else {
      family.expandCollapse(nodeId, node.ftChildrenIds, [])
    }
    return false;
  });

  family.on('render-link', function (sender, args) {
    if (args.cnode.ppid != undefined)
      args.html += '<use data-ctrl-ec-id="' + args.node.id + '" xlink:href="#heart" x="' + (args.p.xa) + '" y="' + (args.p.ya) + '"/>';
    if (args.cnode.isPartner && args.node.partnerSeparation == 30)
      args.html += '<use data-ctrl-ec-id="' + args.node.id + '" xlink:href="#heart" x="' + (args.p.xb) + '" y="' + (args.p.yb) + '"/>';
  });

}

const q = query(personsRef, where("visible", "==", true))
const persons = useCollection(q, { converter: familyItemConvertor })
// const persons = useCollection(personsRef, { converter: familyItemConvertor })

const getImage = async (item: any) => {
  const result = await item.img.promise
  return { ...item, img: result }
}

watch(persons, (newValue, oldValue) => {
  // const fullNameMapped = await Promise.all(newValue.map(item => getImage(item)))
  console.log(newValue)
  renderTree(treeRef.value, newValue)

  // renderTree(treeRef.value, nodes.value)
})

</script>

<template>
  <div v-if="isLoading" class="flex justify-center mt-28">
    <v-progress-circular indeterminate :size="70" :width="7" color="primary" />
  </div>
  <div ref="treeRef" class="tree"></div>
</template>

<style >
.tree {
  width: 100%;
  height: 100%;
}

svg.john text {
  transform: translateY(10px);
  font-family: var(--ar-locale);
}

.bft-family-menu.bft-family-menu {
  min-width: 100px
}

.bft-family-menu div {
  display: flex;
  align-items: center;
}
</style>
