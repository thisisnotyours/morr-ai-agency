"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Trusted by these companies",
  logos = [
    {
      id: "logo-1",
      description: "Sendo",
      image: "/sendo.avif",
      className: "h-12 w-auto",
    },
    {
      id: "logo-2",
      description: "Noxara",
      image: "/noxara.png",
      className: "h-12 w-auto",
    },
    {
      id: "logo-3",
      description: "Holon",
      image: "holon.png",
      className: "h-12 w-auto",
    },
    {
      id: "logo-4",
      description: "GreenSymphony",
      image: "/greensymphony.png",
      className: "h-12 w-auto",
    },
    {
      id: "logo-5",
      description: "Wingston",
      image: "/Wingston.png",
      className: "h-12 w-auto",
    },
    {
      id: "logo-6",
      description: "CatalystAI",
      image: "/catalystailabs.avif",
      className: "h-12 w-auto",
    },
    {
      id: "logo-7",
      description: "Tu Meng",
      image: "/tu_meng_bi_logo.jpeg",
      className: "h-12 w-auto",
    },   
  ],
}: Logos3Props) => {
  return (
    <section className="py-0">
      <div className="container flex-col items-center text-center">
        <h1 className="headline my-2 text-pretty text-2xl font-bold lg:text-4xl">
          {heading}
        </h1>
      </div>
      <div className="pt-0 md:pt-0.5">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[
              AutoScroll({
                playOnInit: true,
                speed: 1, // 기본 부드러운 속도
              }),
            ]}
          >
            <CarouselContent className="ml-0">
              {[...logos, ...logos].map((logo, i) => (
            <CarouselItem
              key={`${logo.id}-${i}`}
              className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
            >
              <div className="mx-2 flex shrink-0 items-center justify-center bg-transparent">
                <img
                  src={logo.image}
                  alt={logo.description}
                  className={`${logo.className} object-contain`}
                />
              </div>
            </CarouselItem>

              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent"></div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500;700;900&display=swap');

        .headline {
          font-family: 'Poppins', monospace;
          font-size: 1rem;
          font-weight: 400;
          color: #6b7280;
          margin-bottom: 0.5rem;
          line-height: 1.2;
        }

        @media (max-width: 1024px) {
          .headline {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 768px) {
          .headline {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .headline {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export { Logos3 };
