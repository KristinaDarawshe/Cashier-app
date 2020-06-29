const initialState = {
  products: [],
  searchProducts: [],
  totalToPay: 0,
};

function sumTotal(prods){
     return  prods.reduce(function(accumulator, currentValue) {
        return currentValue.total+ accumulator
       },0)
}


export default function reducer(state = initialState, action) {
  let products = [...state.products];
  let filterdProducts = [];
  let total = state.totalToPay;
  switch (action.type) {
    case "INSERT": {
      products.push(action.data);
      total = sumTotal(products);
      return { ...state, products: products, totalToPay: total };
    }
    case "DELETE": {
      products.splice(action.data, 1);
      total =sumTotal(products);
      return { ...state, products: products, totalToPay: total };
    }
    case "SEARCH": {
        if(action.data){
            filterdProducts = state.products.filter((p) =>
            p.productName.startsWith(action.data)
          );
          return { ...state, searchProducts: filterdProducts };
        }
        return { ...state, searchProducts: [] };
    }
    case "UPDATEAMOUNT": {
     let productsAm=products[action.data.index];
     productsAm['productAmount']=action.data.newAmount;
     productsAm['total']=productsAm['productAmount']*productsAm['productPrice'];
     total = sumTotal(products);
     return { ...state, products: products, totalToPay: total };

    
    }
    case "UPDATEPRICE": {
        let productsAm=products[action.data.index];
        productsAm['productPrice']=action.data.newPrice;
        productsAm['total']=productsAm['productAmount']*productsAm['productPrice'];
        total = sumTotal(products);
        return { ...state, products: products, totalToPay: total };
    }
    default:
      return state;
  }
}
