class ShoppingCart{
	constructor(){
		this.items = [
			{	
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
			}
		];
	}
	scan(product){
		if (this.items.length > 5){
			this.items.push(product)
		} else{
			return "Your cart is full."
		}
	}

	remove(product){
		if (this.items.length < 1){
			return "Your cart is empty"
		} else{
			this.items.pop();
		}
	}
	dicount(percent){
		for(i=0;i < items.length;i++){
			price = this.items[i].price
		}
		let numberDiscount = percent/100
		let afterDiscount = price - (price*numberDiscount)
		if(percent > 50){
			console.log("Manager will get mad ")
		} else{
			return afterDiscount
		}
		
	}

	total(){
		return this.items
	}
}
let shoppingCart = new ShoppingCart();
console.log(shoppingCart.items);
let product = {
	name:"banana",
	itemID:2,
	price: 2
}
shoppingCart.remove();
shoppingCart.scan(product);
shoppingCart.scan(product);

