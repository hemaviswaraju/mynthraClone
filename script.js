let bagItems;
onLoad();

function onLoad(){
  let bagItemStr = localStorage.getItem('bagItems');
  bagItems = bagItemStr ? JSON.parse(bagItemStr):[];
  itemsdisplayOnHomePage();
  displayBagIcon();
}

function addToBag(itemId){
  bagItems.push(itemId);
  localStorage.setItem('bagItems',JSON.stringify(bagItems))
  displayBagIcon();
}

function displayBagIcon(){
  let bagIconElement = document.querySelector(".bag-item-count")
  if(bagItems.length > 0){
    bagIconElement.style.visibility ='visible';
    bagIconElement.innerText = bagItems.length
  }else{
    bagIconElement.style.visibility ='hidden';
  }
}

function itemsdisplayOnHomePage(){
  let itemsContainerElement = document.querySelector(".items-container")
  console.log(itemsContainerElement)
  if(!itemsContainerElement){
    return ;
  }
  let innerHTML='';
  items.forEach(item => {
    innerHTML += `<div class="item-container">
          <img src="${item.image}" alt="no" class="item-image">
          <div class="rating">
            ${item.rating.stars} ⭐ | ${item.rating.count}k 
          </div>
          <div class="company-name">${item.company}</div>
          <div class="item-name">${item.item_name}</div>
          <div class="price">
            <span class="current-price">Rs ${item.current_price}</span>
            <span class="original-price">Rs ${item.original_price}</span>
            <span class="discount">(${item.discount_percentage}% OFF)</span>
          </div>
          <button class="add-to-cart" onclick="addToBag(${item.id})"><span class="material-symbols-outlined action_icon leftbag">shopping_bag</span>
      Add to Bag</button>
  </div>`
  itemsContainerElement.innerHTML = innerHTML;
  });
}
