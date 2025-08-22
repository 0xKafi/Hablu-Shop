import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
interface Product {
  _id: string;
  name: string;
  thumbnail: string;
  frequency: string;
  price: number;
  description: string;
  tech_category: string;
  ratings: number;
  reviews: number;
}

interface CardProps {
  product: Product;
}

const Card = ({product}: CardProps) => {

    return (
        <div>
            <div className='border rounded-lg h-90'>
                <div className="relative w-full h-50"> 
                <Image
                    src={product.thumbnail}
                    alt={product.name}
                    fill
                    className="object-cover rounded-t-lg"/>
                </div>
                <div className='flex flex-col justify-between p-4 h-40'>
                    <h2 className='text-xl font-semibold'>{product.name}</h2>
                    <div>
                        <p className='text-sm'>Price: {product.price}$</p>
                        <p className='text-sm'>Category: {product.tech_category}</p>
                    </div>
                    <Button variant={'outline'} className='w-full' asChild>
                        <Link href={`/products/${product._id}`}>View Details</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Card;