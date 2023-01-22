const clicked_1 = document.querySelector('.cards__item-1');
const clicked_2 = document.querySelector('.cards__item-2');
const clicked_3 = document.querySelector('.cards__item-3');
const clicked_11 = document.querySelector('.bay-1');
const clicked_21 = document.querySelector('.bay-2');
const clicked_31 = document.querySelector('.bay-3');

const firstCard = function () {
  console.log('image clicked' + clicked_1);
  document.getElementById('prod_1').classList.toggle('product__weght-color--active');
  document.getElementById('board_1').classList.toggle('card-border--active');
  document.getElementById('info_11').classList.toggle('selected');
  document.getElementById('info_12').classList.toggle('selected');
  console.log(clicked_1.classList)
}

const secondCard = function () {
  console.log('image clicked' + clicked_2);
  document.getElementById('prod_2').classList.toggle('product__weght-color--active');
  document.getElementById('board_2').classList.toggle('card-border--active');
  document.getElementById('info_21').classList.toggle('selected');
  document.getElementById('info_22').classList.toggle('selected');  
  console.log(clicked_2)
}

const thirdCard = function () {
  console.log('image clicked' + clicked_3);
  document.getElementById('prod_3').classList.toggle('product__weght-color--active');
  document.getElementById('board_3').classList.toggle('card-border--active');
  document.getElementById('info_31').classList.toggle('selected');
  document.getElementById('info_32').classList.toggle('selected');
  console.log(clicked_3)
}

clicked_1.addEventListener('click', firstCard);
clicked_11.addEventListener ('click', firstCard);

clicked_2.addEventListener('click', secondCard );
clicked_21.addEventListener ('click', secondCard);

clicked_3.addEventListener('click', thirdCard );
clicked_31.addEventListener ('click', thirdCard );


const firstCardHoverIn = function () {
  if (clicked_1.classList.contains('card-border--active')){
    document.getElementById('slogan_1').innerText ='Котэ не одобряет?';
  };}

const firstCardHoverOut = function () {
  if (clicked_1.classList.contains('card-border--active')){
    document.getElementById('slogan_1').innerText ='Cказочное заморское яство';
  };}

  const SecondCardHoverIn = function () {
    if (clicked_2.classList.contains('card-border--active')){
      document.getElementById('slogan_2').innerText ='Котэ не одобряет?';
    };}
  
  const SecondCardHoverOut = function () {
    if (clicked_2.classList.contains('card-border--active')){
      document.getElementById('slogan_2').innerText ='Cказочное заморское яство';
    };}

    const ThirdCardHoverIn = function () {
      if (clicked_3.classList.contains('card-border--active')){
        document.getElementById('slogan_3').innerText ='Котэ не одобряет?';
      };}
    
    const ThirdCardHoverOut = function () {
      if (clicked_3.classList.contains('card-border--active')){
        document.getElementById('slogan_3').innerText ='Cказочное заморское яство';
      };}


clicked_1.addEventListener('mouseenter', firstCardHoverIn);
clicked_1.addEventListener('mouseleave',firstCardHoverOut);


clicked_2.addEventListener('mouseenter', SecondCardHoverIn);
clicked_2.addEventListener('mouseleave',SecondCardHoverOut);


clicked_3.addEventListener('mouseenter', ThirdCardHoverIn);
clicked_3.addEventListener('mouseleave',ThirdCardHoverOut);