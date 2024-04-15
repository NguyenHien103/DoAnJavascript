function listProducts(){
    for(let i=0; i<= products.length-1;i++){
        var demo = '<div class="col-3">';
        demo+= '<div class="card" style="width: 18rem; ">';
        demo+= '<img src="'+products[i].image+'" class="card-img-top" style="height:400px; ">';
        demo += '<div class="card-body">';
        demo += '<div class="card-title">'+products[i].name + '</h5>';
        demo += '<p class="card-text">'+products[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("products").innerHTML+= demo;


    }
}
// const randomBoytList = (productList, boyOfproduct)=>{
//     const boyList = [];
//     if(boyOfproduct <= 0) return [];
//     for(const e of productList){
//         Array.from(new Array(boyOfproduct)).forEach(()=>{
//             const boy = {
            
           
//             name:faker.random.name,
            
//             preview:faker.image.avatar(400,400),
//             description:faker.name.gender(),
//             brand:faker.name.gender(),
//             price:Number.parseFloat(faker.random.number(10)),
//             id:faker.random.uuid()
//             };
//             productList.push(boy)
//         })
//     }
//     return productList;
// }
// (()=>{
//     const productList = randomproductList(2)
//     const boyList = randomBoytList(productList,3)

//     const data = {
//         products: productList,
//         boys:boyList
//     };
//     //write db obj to db.json
//     fs.writeFile('./data.json',JSON.stringify(data),()=>{
//         console.log('Write successfully')
//     });
// })()
