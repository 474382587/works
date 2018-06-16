class Waiter extends Staff {
  constructor(id, name, salary) {
    super(id, name, salary)
    this.available = true
  }
  completeTask(task) {
    if (Array.isArray(task)) {
      console.log("a");
      
      return this.takeOrder(task)
    } else {
      this.serveDish(task)
    }
  }
  takeOrder(order) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(order)
      }, 5000);
    })
  }
  // serveDish(order) {
  //   if (this.available || !order) {
  //     this.available = false
  //     let p = new Promise(resolve => {
  //       setTimeout(() => {
  //         resolve(ready[0])
  //       }, 500)
  //     }).then(e => {
  //       onTable.push(e)
  //       console.log("传到桌子");
  //       eat(false)
  //       ready.shift()
  //       return e.lastOne
  //     }).then(e => {
  //       let p
  //       if (e) {
  //         console.log("准备收钱");
  //       }
  //       else {
  //         p = new Promise(resolve => {
  //           setTimeout(() => {
  //             resolve(ready[0])
  //           }, 500)
  //         })
  //         p.then(e => {
  //           if (ready.length > 0) {
  //             pass(true)
  //           }
  //           else {
  //             this.available = true
  //           }
  //         })
  //       }
  //     })
  // }
}
