function uniqueDigitProducts(a: number[]): number {
    var count=0;
    var productsArr=[];
    for(let num of a){
        let product;
        if(num.toString().split('').length>1){
            product=num.toString().split('').reduce((a,b)=>a*b);
            if(!productsArr.includes(product)){
                count++
            }
            productsArr.push(product);
        }else{
            product=num;
            if(!productsArr.includes(product)){
                count++
            }
            productsArr.push(product);
        }
    }


    return count
}

console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));

// -   For a = [2, 8, 121, 42, 222, 23], the output should be
// uniqueDigitProducts(a) = 3.

// Here are the products of the array's elements:

// 2: product(2) = 2;
// 8: product(8) = 8;
// 121: product(121) = 1 * 2 * 1 = 2;
// 42: product(42) = 4 * 2 = 8;
// 222: product(222) = 2 * 2 * 2 = 8;
// 23: product(23) = 2 * 3 = 6.
// As you can see, there are only 3 different products: 2, 6 and 8.

// **Hints**
// -   includes()
// -   push()
// -   toString()
// -   split()
// -   parseInt()