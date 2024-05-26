const mail = document.querySelector('.navbar-email');
const menuDestok = document.querySelector('.desktop-menu');
const iconMenu = document.querySelector('.menu');
const MenuLabel = document.querySelector('.mobile-menu');
const carIcon = document.querySelector('.navbar-shopping-cart');
const cardProductDetail = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

let productList = [];

productList.push(
    {
        name: 'Bike' ,
        price: 100 , 
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' , 
    }
)

productList.push(
    {
        name: 'Cámara' ,
        price: 150 , 
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' , 
    }
)

productList.push(
    {
        name: 'Telefono' ,
        price: 400 , 
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' , 
    }
)

productList.push(
    {
        name: 'Motor' ,
        price: 800 , 
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' , 
    }
)

mail.addEventListener('click', toggleDestokMenu);

iconMenu.addEventListener('click', toggleMobileMenu);

carIcon.addEventListener('click', toggleCardProduct);

function toggleDestokMenu(){

    menuDestok.classList.toggle('inactive')
    cardProductDetail.classList.add('inactive');

}


function toggleMobileMenu(){
    MenuLabel.classList.toggle('inactive');
    cardProductDetail.classList.add('inactive');
}

function toggleCardProduct(){
    cardProductDetail.classList.toggle('inactive');
    MenuLabel.classList.add('inactive')
    menuDestok.classList.add('inactive');
}

/*
    <section class="main-container">
    <div class="cards-container">

      <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
    </div>
  </section>
      */

for(product of productList){
 let productDivCard =  document.createElement('div');
 productDivCard.classList.add('product-card');

 //imagen 
 let ProductImage = document.createElement('img');
 ProductImage.setAttribute('src', product.image);


//Product-info
let ProducInfo = document.createElement('div');
ProducInfo.classList.add('product-info');

let ProductInforDiv = document.createElement('div');

//Price and Name
let ProductName = document.createElement('p');
let ProductPrice = document.createElement('p');

ProductInforDiv.appendChild(ProductName);
ProductInforDiv.appendChild(ProductPrice);

ProductName.innerText = product.name;
ProductPrice.innerText = '$' + product.price;

let ProductFigure = document.createElement('figure');
let ProductFigureImg = document.createElement('img');
ProductFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');

ProductFigure.appendChild(ProductFigureImg);
ProducInfo.appendChild(ProductInforDiv);
ProducInfo.appendChild(ProductFigure);

productDivCard.appendChild(ProductImage);
productDivCard.appendChild(ProducInfo);

cardsContainer.appendChild(productDivCard);

}
