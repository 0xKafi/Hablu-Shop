import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Users } from "lucide-react";
import Image from "next/image";
import React from "react";

interface PageProps {
  params: {
    id: string;
  };
}

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

const Page = async({ params }: PageProps) => {
  const { id } = params;

    const data = await fetch(`https://hablu-shop-backend.vercel.app/products/${id}`)
    const product: Product = await data.json()

  return (
    <div className="mt-10 h-120 rounded-lg p-10 px-20 mb-24">
      <div className="flex space-x-20 ">
          <div className="relative w-100 h-100 border rounded-lg shadow hover:shadow-md"> 
          <Image
              src={product.thumbnail}
              alt={product.name}
              fill
              className="object-cover rounded-lg"/>
          </div>
          <div className="w-1/2">
           <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    Education
                  </Badge>
                  <Badge variant="outline" className="border-destructive text-destructive">
                    Yearly
                  </Badge>
                </div>

                <h1 className="text-4xl font-bold text-foreground">{product.name} Subscription</h1>

                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-primary">${product.price}</span>
                  <span className="text-muted-foreground">/year</span>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">{product.description}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(Math.floor(product.ratings))].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-semibold">{product.ratings}</span>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>{product.reviews} reviews</span>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
              >
                Buy Now
              </Button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Page;
