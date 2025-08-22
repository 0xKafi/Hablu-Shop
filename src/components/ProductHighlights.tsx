import React from 'react';
import Card from './Card';
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

const ProductHighlights = async() => {
    const data = await fetch('https://hablu-shop-backend.vercel.app/highlights')
    const products: Product[] = await data.json()
    return (
        <section className='my-24'>
          <h2 className='text-4xl font-bold mb-4'>Product Highlight</h2>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {
              products.map(product => <Card key={product._id} product={product}></Card>)
            }
          </div>
          <div className='flex justify-center'>
          <Button className='mt-10 inline-block' asChild>
            <Link href='/products'>View More</Link>
          </Button>
          </div>
        </section>
    );
};

export default ProductHighlights;