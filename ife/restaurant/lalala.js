let onTable = []
        let eating = false;
        let p = Promise.resolve('Start')
        dataset.forEach((e, index) => {
            p = p.then(el => {
                if (index > 0) {
                    console.log(el)
                    onTable.push({
                        name: el.name,
                        time: el.time
                    })
                    eat(false)
                }
                return new Promise(resolve => {
                    // console.log("开始做 " + e.name);
                    setTimeout(() => {
                        // console.log("做完了 " + e.name);
                        resolve(e)
                    }, e.time * 1000);
                })
            })
        })
        p.then(el => onTable.push({
            name: el.name,
            time: el.time
        }))

        function pass() {
            if ((available || moving) && onTable.length > 0) {
                available = false
                console.log("开始传递 " + onTable[0].name)
                let p = new Promise(resolve => {
                    setTimeout(() => {
                        resolve(onTable[0].name)
                    }, 500);
                })
                p.then(e=>{
                    eat(false)
                    return new Promise(resove)
                })
            }
        }


        function eat(onEating) {
            if ((!eating || onEating) && onTable.length > 0) {
                eating = true
                console.log("开始吃 " + onTable[0].name)
                let p = new Promise(resolve => {
                    setTimeout(() => {
                        resolve(onTable[0].name)
                    }, onTable[0].time * 1000);
                })
                p.then((e) => {
                    console.log(onTable);
                    console.log("吃完了 " + e)
                    if (onTable.length > 0) {
                        onTable.shift()
                        eat(true)
                    }
                    else {
                        eating = false;
                        console.log("finished all")
                    }
                })
            }
        }
