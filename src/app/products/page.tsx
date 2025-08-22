import Card from '@/components/Card';
import React from 'react';

const page = async () => {
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

    const data = await fetch('https://hablu-shop-backend.vercel.app/products')
    const products: Product[] = await data.json()
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 mx-auto mb-24'>
            {
                products.map(product => <Card key={product._id} product={product}></Card>)
            }
        </div>
    );
};

export default page;