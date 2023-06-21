import router from "@/router"

export let editForm = function () {
  this.nodeId = null
}

editForm.prototype.init = function (obj: any) {
  this.obj = obj
}

editForm.prototype.show = function (nodeId: any) {
  this.nodeId = nodeId
  router.push(`/person/${nodeId}`)
}

editForm.prototype.hide = function (nodeId: any) {
  console.log('hidden')
}

