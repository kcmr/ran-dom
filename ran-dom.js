Slim.tag('ran-dom',
  `
  <style bind>
    :host {
      padding: 20px;
      background-color: var(--ran-dom-background-color, pink);
      display: block;
    }
  </style>

  <slim-content></slim-content>
  `,
  class extends Slim {
    get useShadow() { return true; }
    onBeforeUpdate() {
      this.items = this.getAttribute('items');
      this.getRandom();
    }

    getRandom() {
      let arr = this.items.indexOf(',') > -1 ? this.items.split(',') : Array.from(this.items);
      this.result = arr[Math.floor(Math.random() * arr.length)];
      this.dispatchEvent(new CustomEvent('result-changed', { detail: this.result }));
    }
  }
);
