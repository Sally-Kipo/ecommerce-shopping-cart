import { useState } from 'react';
import CroppedStay from './Images/Cropped Stay.webp';
import BasicCactus from './Images/Basic Cactus.webp';
import SkaterBlack from './Images/Skater Black.webp';
import BlackTule from './Images/Black Tule.webp';
import BlackBatman from './Images/Black Batman.webp';
import BlueTShirt from './Images/Blue TShirt.webp';
import LooseBlack from './Images/Loose Black.webp';
import RingerHall from './Images/Ringer Hall.webp';
import Grey from './Images/Grey.webp';
import Black from './Images/Black.webp';
import Turtles from './Images/Turtles.webp';
import Slimblack from './Images/Slim black.webp';
import Blue from './Images/Blue.webp';
import White from './Images/White.webp';
import Tropical from './Images/Tropical.webp';
import MarineBlue from './Images/Marine Blue.webp';




function App() {
  const [selectedSizes, setSelectedSizes] = useState ([]); 
  const sizes = ['XS','S','M','ML','L','XL','XXL']
  const chooseSize = (size) => {
    
  }
  const products = [
  {
    id: 0,
    Images: CroppedStay,
    title:'Cropped Stay Groovy off white',
    size:['L', 'XL', 'XXL'],
    price:'$10.90',
    button: 'Add to cart'
    },
  {
    id: 1,
    Images: BasicCactus,
    title:'Basic Cactus White T-shirt',
    size:['ML', 'L',],
    price:'$13.25',
    button: 'Add to cart'
    },
  {
    id: 2,
    Images: SkaterBlack,
    title:'Skater Black Sweatshirt',
    size:['XL',],
    price:'$25.90',
    button: 'Add to cart'
    },
  {
    id: 3,
    Images: BlackTule,
    title:'Black Tule Oversized',
    size: ['M','ML','L','XL',],
    price:'$29.45',
    button: 'Add to cart'
    },
  {
    id: 4,
    Images: BlackBatman,
    title:'Black Batman T-shirt',
    size: ['M','ML','L','XL',],
    price:'$10.90',
    button: 'Add to cart'
    },
  {
    id: 5,
    Images: BlueTShirt,
    title:'Blue T-Shirt',
    size: ['M','ML','L','XL',],
    price:'$9.00',
    button: 'Add to cart'
    },
  {
    id: 6,
    Images: LooseBlack,
    title:'Loose Black T-shirt',
    size: ['M','ML','L','XL',],
    price:'$14.00',
    button: 'Add to cart'
    },

  {
    id: 7,
    Images: RingerHall,
    title:'Ringer Hall Pass',
    size: ['M','ML','L','XL',],
    price:'$10.90',
    button: 'Add to cart'
    },
  {
    id: 8,
    Images: Grey,
    title:'Grey T-shirt',
    size: ['M','ML','L','XL',],
    price:'$14.90',
    button: 'Add to cart'
    },
  {
    id: 9,
    Images: Black,
    title:'Black T-shirt with white stripes',
    size: ['M','ML','L','XL',],
    price:'$14.90',
    button: 'Add to cart'
    },
  {
    id: 10,
    Images: Turtles,
    title:'Turtles Ninja T-shirt',
    size: ['M','ML','L','XL',],
    price:'$10.90',
    button: 'Add to cart'
    },
  {
    id: 11,
    Images: Slimblack,
    title:'Slim black T-shirt',
    size: ['M','ML','L','XL',],
    price:'$49.90',
    button: 'Add to cart'
    },
  {
    id: 12,
    Images: Blue,
    title:'Blue Sweatshirt',
    size: ['M','ML','L','XL',],
    price:'$22.50',
    button: 'Add to cart'
    },
  {
    id: 13,
    Images: White,
    title:'White T-shirt Gucci',
    size: ['M','ML','L','XL',],
    price:'$18.70',
    button: 'Add to cart'
    },
  {
    id: 14,
    Images: Tropical,
    title:'Tropical Wine T-shirt',
    size: ['M','ML','L','XL',],
    price:'$134.90',
    button: 'Add to cart'
    },
  {
    id: 15,
    Images: MarineBlue,
    title:'Marine Blue T-shirt',
    size: ['M','ML','L','XL',],
    price:'$49.00',
    button: 'Add to cart'
    },
  ];

return (
  <ul>
    {sizes.map((size) => (
      <li>{size}</li>
    ))}
    <ul>
      {products.map((products) => (
  <li key={products.id}>
  <img src={products.Images} alt={products.title} />
  <div>{products.title}</div>
  <div>{products.price}</div>
  <button>{products.button}</button>
</li>
      ))}
    </ul>
  </ul>

);
}

export default App;
