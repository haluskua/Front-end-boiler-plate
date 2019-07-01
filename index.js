
const dog = {
  speed: 'fast',
  actions: {
    bark: function() {
      console.log(this.super)
    }
  }
}

dog.actions.bark()