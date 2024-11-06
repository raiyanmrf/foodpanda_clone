import React from react;

const ImageGenerator = ({key}) => {

    const cuisine = {
  bnagladeshi: {label:"bangladeshi", image: null},
  indian: {label:"indian", image: null},
  thai: {label:"thai", image: null},
  chinese: {label:"chinese", image: null},
  italian: {label:"italian", image: null},
  middleeastern: {label:"middleeastern", image: null},
  western: {label:"western", image: null},
  beverage: {label:"beverage", image: null},
  bakery: {label:"bakery", image: null},
  wraps: {label:"wraps", image: null},
  noodles: {label:"noodles", image: null},
  shawrma: {label:"shawrma", image: null}, 
  biryani: {label:"biryani", image: null} ,
  pizza: {label:"pizza", image: null}, 
  burgers: {label:"burgers", image: null} ,
  cakes: {label:"cakes", image: null} ,
  breakfast :{label:"breakfast", image: null}, 
  pasta :{label:"pasta", image: null}, 
  tehari :{label:"tehari", image: null}, 
  sweets :{label:"sweets", image: null}, 
  kebab :{label:"kebab", image: null}, 
  soups :{label:"soups", image: null}, 
  chicken :{label:"chicken", image: null}, 
  snacks :{label:"snacks", image: null}, 
  ricedishes :{label:"rice dishes",image: null}, 
  fastfood :{label:"fast food",image: null},  
  sushi :{label:"sushi", image: null}, 
  doi :{label:"doi", image: null} }
  return <img src={cuisine[key].image} alt="" />;
};

export default ImageGenerator;
