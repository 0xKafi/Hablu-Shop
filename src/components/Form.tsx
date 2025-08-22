"use client"
import React from 'react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const Form = () => {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const rawData = Object.fromEntries(formData.entries());

    const data = {
    ...rawData,
    price: Number(rawData.price),
    ratings: Number(rawData.ratings),
    reviews: Number(rawData.reviews),
    };

    try {
        const response = await fetch('https://hablu-shop-backend.vercel.app/add-product', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), 
        });

        if (response.ok) {
        const result = await response.json();
        console.log('Post created successfully:', result);

        } else {
        console.error('Failed to create post:', response.statusText);
        }
    } catch (error) {
        console.error('Error sending POST request:', error);
    }

    };

    return (
        <div>
        <Card className="w-xs sm:w-sm md:w-md">
          <CardHeader>
            <CardTitle className="text-center">Add Product</CardTitle>
            <CardDescription className="text-center">
              Enter all the details of the product
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label>Name</Label>
                  <Input name="name" type="text" placeholder="Product Name" required />
                </div>

                <div className="grid gap-2">
                  <Label>Thumbnail URL</Label>
                  <Input name="thumbnail" type="text" defaultValue="https://i.ibb.co.com/YFKsv3xL/image.png" placeholder="Thumbnail URL" required />
                </div>

                <div className="grid gap-2">
                  <Label>Frequency</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="yearly">Yearly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label>Price</Label>
                  <Input name="price" type="number" max={100} min={10} placeholder="Price" required />
                </div>

                <div className="grid gap-2">
                  <Label>Description</Label>
                  <Input name="description" type="text" placeholder="Description" required />
                </div>

                <div className="grid gap-2">
                  <Label>Tech Category</Label>
                  <Input name="tech_category" type="text" placeholder="Tech Category" required />
                </div>

                <div className="grid gap-2">
                  <Label>Ratings</Label>
                  <Input name="ratings" type="number" min={1} max={5} placeholder="Ratings" step="0.1" required />
                </div>

                <div className="grid gap-2">
                  <Label>Reviews</Label>
                  <Input name="reviews" type="number" placeholder="Reviews" required />
                </div>
              </div>

              <Button className="mt-5">Submit</Button>
            </form>
          </CardContent>
        </Card>
        </div>
    );
};

export default Form;