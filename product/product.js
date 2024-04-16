fetch("./data.json").then((response) => {
    return response.json();
  }).then((data) => {
    const session = document.querySelector(".session-one");
    const divcontainer = document.createElement("div");
    divcontainer.classList="container";

    session.appendChild(divcontainer);
    data.girl.forEach((item) => {
      const wrap = document.createElement("div");
      wrap.classList = "inner-wrap";
      divcontainer.appendChild(wrap);
  
      const box = document.createElement("div");
      box.classList = "inner-box";
      wrap.appendChild(box);
  
      const image = document.createElement("div");
      image.classList = "inner-image";
      box.appendChild(image);
  
      const imgTag = document.createElement("img");
      imgTag.src = item.preview;
      image.appendChild(imgTag);
  
      const content = document.createElement("div");
      content.classList = "inner-content";
      box.appendChild(content);
  
      const p = document.createElement("p");
      const ptext = document.createTextNode(item.name);
      p.appendChild(ptext);
  
      const brand = document.createElement("p");
      const brandText = document.createTextNode("Brand: " + item.brand);
      brand.appendChild(brandText);
  
      const price = document.createElement("p");
      const priceText = document.createTextNode(item.price);
      price.appendChild(priceText);
  
      content.appendChild(p);
      content.appendChild(brand);
      content.appendChild(price);
    });
  }).catch((error) => {
    console.log(error);
 // Thêm CSS để đảm bảo 4 sản phẩm trên cùng một hàng
 
});
