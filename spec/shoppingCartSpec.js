describe("Shopping", () => {

  it("Should add an item to the shopping cart", () => {
    const shoppingCart = new ShoppingCart();
  
    shoppingCart.scan(product)
    expect(shoppingCart.total()).toBe([
      {  
        mame : "orangeJuice" ,
        itemId: 1,
        price: 5.00
      },
      {
        name: "butter",
          itemId: 243,
          price: 6.05
      },
      {
        name: "chocolate",
          itemId: 1242,
          price: 4.75
      },
      {
        name: "banana",
        itemId:2,
        price:2
      }
      ])

    shoppingCart.scan(product)
    expect(shoppingCart.total()).tobe([ 
      {  
        mame : "orangeJuice" ,
        itemId: 1,
          price: 5.00
      },
      {
        name: "butter",
          itemId: 243,
          price: 6.05
      },
      {
        name: "chocolate",
          itemId: 1242,
          price: 4.75,
      },
      {
        name: "banana",
        itemId:2,
        price:2
      },
      {
        name: "banana",
        itemId:2,
        price:2
      }
      ])
  })

  it("Should only allow 16 items in cart", () => {
    const shoppingCart = new ShoppingCart();
    shoppingCart.add(product)
   

    expect(shoppingCart.add(product)).toBe("ShoppingCart is full")
  })

  it("Should remove an item to the shopping cart", () => {
    const shoppingCart = new ShoppingCart();
    shoppingCart.add(product)
    shoppingCart.add(product)
    shoppingCart.remove()
    
    expect(shoppingCart.total()).toBe([{  
        mame : "orangeJuice", 
        itemId: 1,
          price: 5.00
      },
      {
        name: "butter",
          itemId: 243,
          price: 6.05
      },
      {
        name: "chocolate",
          itemId: 1242,
          price: 4.75
      },
      {
        name: "banana",
        itemId:2,
        price:2
      }
      ])

  })
it("Should discount an items in your cart , if discount less than 50%", () => {
    const shoppingCart = new ShoppingCart();
 
    expect(shoppingCart.discount(10)).toBe([4.5,4.545,4.275,1.8])
  })

it("Should print out manager will get mad , if discount more than 50%", () => {
    const shoppingCart = new ShoppingCart();
 
    expect(shoppingCart.discount(60)).toBe("Manager will get mad")
  })

