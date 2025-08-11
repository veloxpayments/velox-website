"use client"
import { Star, StarIcon } from "lucide-react"

import React from 'react'

const Testimonial = () => {
    
const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    location: "ON, Canada",
    rating: 3,
    text: "I love the Velox app so much, it makes me feel like i can fly, inserting more text to make it longer so that usual and see just how many world users can fit into this text box",
    avatar: "/black-girl.svg",
  },
  {
    id: 2,
    name: "Jane Doe",
    location: "ON, Canada",
    rating: 3,
    text: "I love the Velox app so much, it makes me feel like i can fly, inserting more text to make it longer so that usual and see just how many world users can fit into this text box",
    avatar: "/black-girl.svg",
  },
  {
    id: 3,
    name: "Jane Doe",
    location: "ON, Canada",
    rating: 3,
    text: "I love the Velox app so much, it makes me feel like i can fly, inserting more text to make it longer so that usual and see just how many world users can fit into this text box",
    avatar: "/black-girl.svg",
  },
]

  return (
   <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[24px] md:text-[40px] font-medium text-[#050506] mb-4">What Our Customers Say</h2>
          <p className="text-[16px] text-[#737373] font-normal mx-auto">
            Join thousands of satisfied customers who trust Velox for their international money transfers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-[#F8F9FB] rounded-[14px] p-6">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar || "/black-girl.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating ? "fill-[#FCDE2F] text-[#FCDE2F]" : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <p className="text-[#3C3C3C] text-[18px] italic mb-4 leading-[27px] font-normal">"{testimonial.text}"</p>

              <div>
                <p className="font-medium text-black text-[18px]">{testimonial.name}</p>
                <p className="text-sm text-black font-normal">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial