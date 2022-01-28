let stock = {
    Fruits: ["apple", "mango", "strawberry", "blueberry", "banana"],
    Liquid: ["water", "ice"],
    Holder: ["cone", "cup", "stick"],
    Toppings: ["chocolate", "peanuts"]
  };
  
  let order = (fruit_name, call_production) => {
    setTimeout(() => {
      console.log(`${stock.Fruits[fruit_name]} was selected`);
      call_production();
    }, 2000);
  };
  let production = () => {
    setTimeout(() => {
      console.log(`production has started`);
      setTimeout(() => {
        console.log(`fruit has been chopped`);
        setTimeout(() => {
          console.log(`${stock.Liquid[0]} and ${stock.Liquid[1]} was added`);
          setTimeout(() => {
            console.log(`the machine was started`);
            setTimeout(() => {
              console.log(`${stock.Holder[0]} was selected`);
              setTimeout(() => {
                console.log(`${stock.Toppings[0]} was added as toppings`);
                setTimeout(() => {
                  console.log(`serve ice cream`);
                }, 2000);
              }, 3000);
            }, 2000);
          }, 1000);
        }, 1000);
      }, 2000);
    }, 0000);
  };
  
order(1, production);
  
  