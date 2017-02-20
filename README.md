# vue-dialog

This is yet another vue dialog component.

## Install

Use npm to download code:

```
npm install hsy-vue-dialog -S
```

then import it into your project, add below code into your `main.js`:

```js
import Dialog from 'hsy-vue-dialog'

Vue.use(Dialog)
```

## Usage

```html
<button @click="visible = true">remove</button>

<hsy-dialog class="confirm" v-model="visible">
  <div slot="title">Remove</div>
  <div slot="body">
    <div>This operation is irreversible, are you sure?</div>
    <div>
      <button @click="handleYes">Yes</button>
      <button>No</button>
    </div>
  </div>
</hsy-dialog>

<script>
export default {
  data() {
    return {
      visible: false
    }
  },
  methods: {
    handleYes() {
      alert('Yes')
      this.visible = false
    }
  }
}
</script>
```

## Props

| Prop            | Description                                     | Type    | Accepted Values | Default |
|:----------------|:------------------------------------------------|:--------|:----------------|:--------|
| value           | whether dialog is visible or not                | Boolean | --              | false   |
| closeButton     | whether close button is visible or not          | Boolean | --              | true    |
| clickMask2Close | if dialog should be closed when mask is clicked | Boolean | --              | true    |

## Demo

[demo](http://vue-demo.hsiaosiyuan.com/#/dialog)

## Screenshot

<img src="http://og9g58alt.bkt.clouddn.com/dialog1.png" width="500">
<img src="http://og9g58alt.bkt.clouddn.com/dialog2.png" width="430">
