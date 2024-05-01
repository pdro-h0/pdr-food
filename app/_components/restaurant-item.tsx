import { Restaurant } from "@prisma/client";
import Image from "next/image";
import React from "react";
import ProductItem from "./product-item";
import { BikeIcon, HeartIcon, StarIcon, TimerIcon } from "lucide-react";
import { formatCurrency } from "../_helpers/price";
import { Button } from "./ui/button";
import Link from "next/link";

interface RestaurantItemProps {
  restaurant: Restaurant;
  className?: string
}

const RestaurantItem = ({ restaurant, className }: RestaurantItemProps) => {
  return (
    <Link
      className={className}
      href={`/restaurants/${restaurant.id}`}
    >
      <div className="w-full space-y-3">
        <div className="relative h-[136px] w-full">
          <Image
            src={restaurant.imageUrl}
            fill
            className="rounded-lg object-cover"
            alt={restaurant.name}
          />

          <div className="absolute left-2 top-2 flex items-center gap-[2px] rounded-full bg-white px-2 py-[2px]">
            <StarIcon size={12} className="fill-yellow-400 stroke-yellow-400" />
            <span className="text-xs font-semibold">5.0</span>
          </div>

          <Button
            size="icon"
            className="absolute right-2 top-2 h-7 w-7 rounded-full bg-gray-700"
          >
            <HeartIcon size={16} className="fill-white" />
          </Button>
        </div>

        <div>
          <h3 className="text-sm font-semibold">{restaurant.name}</h3>

          <div className="flex gap-3">
            <div className="flex items-center gap-1">
              <BikeIcon size={14} className="text-primary" />
              <span className="text-xs text-muted-foreground">
                {+restaurant.deliveryFee === 0
                  ? "Entrega grátis"
                  : formatCurrency(+restaurant.deliveryFee)}
              </span>
            </div>

            <div className="flex items-center gap-1">
              <TimerIcon size={14} className="text-primary" />
              <span className="text-xs text-muted-foreground">
                {restaurant.deliveryTimeMinutes} min
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantItem;
