<template>
<div style="height: 1000px; width: 200px; left: 100px; top: 200px; position: absolute;">
  <button @click="visible = true">click to open dialog</button>
  <hsy-dialog class="test" v-model="visible" :clickMask2Close="false">
    <div slot="title">Message</div>
    <div slot="body" style="width: 300px;">
      This is your message content.
    </div>
  </hsy-dialog>

  <button @click="visible1 = true">remove</button>
  <hsy-dialog class="confirm" v-model="visible1">
    <div slot="title">Remove</div>
    <div slot="body" style="width: 200px;">
      <div>This operation is irreversible, are you sure?</div>
      <div class="btns">
        <button class="yes" @click="handleYes">Yes</button>
        <button class="no">No</button>
      </div>
    </div>
  </hsy-dialog>
</div>
</template>

<script>
import 'main'

export default {
  data() {
    return {
      visible: false,
      visible1: false
    }
  },
  methods: {
    handleYes() {
      alert('Yes')
      this.visible1 = false
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

div.confirm button {
  border: 0;
  border-radius: 3px;
  padding: 8px 10px;
  cursor: pointer;
  outline: none;
  font-size: 13px;
}

div.confirm .no {
  color: #fff;
  background-color: #f84f47;
}

div.confirm .yes {
  color: #fff;
  background-color: #0097ff;
}

div.confirm .btns {
  overflow: hidden;
  margin-top: 20px;
}

div.confirm .btns .yes {
  float: left;
}

div.confirm .btns .no {
  float: right;
}
</style>
