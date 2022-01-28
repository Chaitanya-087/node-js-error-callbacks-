let stock = {
    Fruits : ["apple","mango","strawberry","banana","blackberry","blueberry"],
    Liquid : ["water","ice"],
    Holder : ["cone","cup","stick"],
    Toppings : ["chocolate","peanuts"]
};
let shop_status = true
let order = (time , work) => {
    return new Promise((resolve,reject) => {
        if(shop_status){
            setTimeout(()=>{ resolve(work()) },time);
        }
        else{
            reject(console.log("shop is closed"));
        }
    });
};

order(2000,()=>{ 
    console.log(`${stock.Fruits[0]} was selected`)
})  

.then(()=>{
    return order(0000,() =>{
        console.log("the production has started");
    })
})

.then(() => {
 return order(2000,() => console.log("the fruit was chopped"));
})

.then(() =>{
    return order(1000, () => console.log(`${stock.Liquid[0]} and ${stock.Liquid[1]} was selected`));
})

.then(() =>{
    return order(1000,() => console.log("start the machine"))
})

.then(()=>{
    return order(2000, ()=>{
        console.log(`ice cream placed on ${stock.Holder[0]}`)
    })
})

.then(()=>{
    return order(3000, ()=>{
        console.log(`${stock.Toppings[0]} was selected`);
    })
})

.then(()=>{
    return order(1000, () => console.log("ice cream is served"));
})

.catch(()=>{
    console.log("customer left");
})

.finally(() => {
    console.log("day ended,shop is closed");
})