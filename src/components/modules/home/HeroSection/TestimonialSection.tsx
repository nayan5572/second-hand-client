import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  name: string;
  title: string;
  testimonial: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Mark Zukerburg",
    title: "Project Co-ordinator",
    testimonial:
      "I had a fantastic experience using this marketplace! The product was exactly as described, and the seller was very responsive. Smooth transaction and great value for money. Highly recommend!",
    rating: 5,
  },
  {
    name: "Bil Gates",
    title: "Account Executive",
    testimonial:
      "I had a fantastic experience using this marketplace! The product was exactly as described, and the seller was very responsive. Smooth transaction and great value for money. Highly recommend!",
    rating: 5,
  },
  {
    name: "Mukesh Ambanee",
    title: "HR Executive",
    testimonial:
      "I had a fantastic experience using this marketplace! The product was exactly as described, and the seller was very responsive. Smooth transaction and great value for money. Highly recommend!",
    rating: 5,
  },
  {
    name: "Goutam Adani",
    title: "Marketing Manager",
    testimonial:
      "I had a fantastic experience using this marketplace! The product was exactly as described, and the seller was very responsive. Smooth transaction and great value for money. Highly recommend!",
    rating: 4,
  },
  {
    name: "Elon Musk",
    title: "Software Engineer",
    testimonial:
      "I had a fantastic experience using this marketplace! The product was exactly as described, and the seller was very responsive. Smooth transaction and great value for money. Highly recommend!",
    rating: 4,
  },
];

export function TestimonialCarousel() {
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1">
        {testimonials.map((testimonial, index) => (
          <CarouselItem
            key={index}
            className="pl-1 sm:basis-full md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-500">{testimonial.title}</p>
                    <p className="text-gray-600 my-4">
                      {testimonial.testimonial}
                    </p>
                    <div className="flex justify-center space-x-1">
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <span key={i} className="text-yellow-400">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10" />
      <CarouselNext className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10" />
    </Carousel>
  );
}
