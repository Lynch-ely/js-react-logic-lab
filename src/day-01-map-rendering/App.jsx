import React, { useEffect, useState } from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { GrFormSubtract } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";

import Watch from '../assets/watch.jpg';
import Headset from '../assets/headsett.jpg';
import Camera from '../assets/camera.jpg';

function App() {
    const products = [{
        id: 1,
        image: Watch,
        name: "Smart Watch",
        description: "Track your fitness and stay connected",
        price: 89.99 
    },{
        id: 2,
        image: Headset,
        name: "Wireless Headphones",
        description: "High quality sound with premium comfort",
        price: 129.99 
    },{
        id: 3,
        image: Camera,
        name: "DSLR Camera",
        description: "Capture moments with perfect clarity",
        price: 699.99 
    },]

    const [cartItems, setCartItems] = useState([]); 
    const [selectedItems, setSelectedItems] = useState([]);

    const handleAddCart = (product) => {
        if(selectedItems.includes(product.id)){
            return;
        }else{
            setSelectedItems([...selectedItems, product.id])  
        }
        const matchedItem = cartItems.find(item => item.id === product.id);

        if(!matchedItem){
            setCartItems([...cartItems, {...product, quantity: 1}])
            console.log(cartItems);
        }else{
            console.log("Already Existed")
        }
    
    }

    useEffect(() => {
        console.log(cartItems)
    }, [cartItems])

  return (
    <div className='min-h-screen w-full grid grid-cols-6 gap-5 pt-20 bg-[#f0e5de]'>
        <div className='px-15 col-span-4 h-full w-full flex flex-col bg-[#f0e5de] text-[#2b1b0b]'>
            <div className='flex flex-col justify-center items-center mt-5'>
                <h5 className='font-semibold uppercase font-sans-body'>Our Collection</h5>
                <h1 className='font-bold text-5xl font-serif-display'>Featured Products</h1>
                <h3 className='font-sans-body'>Explore our most popular items loved by customers</h3>
            </div>
            <div className='grid grid-cols-3 gap-5 mt-15 '>
                {products.map((product) => (
                    <div key={product.id} className='max-w-sm w-full h-auto rounded-xl bg-[#fdf5ef] border border-[#dbd0c0] shadow-sm space-y-3 p-3'>
                        <div className='space-y-1.5'>
                            <img src={product.image} alt={`${product.image}`} />
                            <h1 className='font-semibold text-2xl font-serif-display'>{product.name}</h1>
                            <p className='font-sans-body text-sm w-2/3'>{product.description}</p>
                        </div>
                        <div className='flex justify-between items-center w-full'>
                            <h1 className='text-xl font-semibold font-sans-body'>${product.price.toFixed(2)}</h1>
                            <div className={`text-[#faf1e6] px-3 py-2.5 flex justify-center items-center gap-2 rounded-xl font-sans-body cursor-pointer ${selectedItems.includes(product.id) ? 'bg-[#75615170]' : 'bg-[#756151] hover:bg-[#756151dc]'}`} onClick={()=> handleAddCart(product)}><FiShoppingCart />{selectedItems.includes(product.id) ? 'Added to Cart' : 'Add to Cart'}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className=' bg-[#fdf5ef] border border-[#dbd0c0] shadow-sm rounded-xl w-11/12 h-200 p-5 space-y-5 col-span-2 font-sans-body'>
            <h1 className='font-semibold text-lg text-center'>Shopping Cart</h1>

            <div className='grid grid-cols-4 border-b border-[#dbd0c0] pb-2.5'>
                <div className='col-span-2 text-sm'>Product</div>
                <div className='col-span-1 flex justify-center text-sm'>Quantity</div>
                <div className='col-span-1 flex justify-center text-sm'>Total</div>
            </div>

            {cartItems.map((cartItem) => (
                <div key={cartItem.id} className='grid grid-cols-4'>
                    {/* 1st Row */}
                    <div className='flex gap-5 col-span-2'>
                        <img src={cartItem.image} alt="" className='w-15'/>
                        <div className=''>
                            <h1 className='font-semibold text-lg font-serif-display'>{cartItem.name}</h1>
                            {/* <p className='font-sans-body text-[10.5px]'>High quality sound with premium comfort</p> */}
                            <p className='font-sans-body text-sm text-[#756151] font-bold'>${cartItem.price}</p>
                        </div>
                    </div>
                    {/* 2nd Row */}
                    <div className='col-span-1 flex items-center'>
                        <div className='bg-[#f0e5de] w-full h-10 rounded-full flex justify-between items-center'>
                            <div className='border-r border-[#dbd0c0] h-full flex justify-center items-center p-2'>
                                <button><GrFormSubtract /></button>
                            </div>
                            <p className='font-bold'>{cartItem.quantity}</p>
                            <div className='border-l border-[#dbd0c0] h-full flex justify-center items-center p-2'>
                                <button><IoMdAdd /></button>
                            </div>
                        </div>
                    </div>
                    {/* 3rd Row */}
                    <div className='col-span-1 flex items-center justify-center'>
                        <p className='font-sans-body text-base text-[#756151] font-bold'>$129.99</p>
                    </div>  
                </div>
            ))}
        </div>
    </div>
  )
}

export default App
