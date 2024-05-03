import Image from "next/image";
import React, { useContext } from "react";
import { calculateProductPrice, formatCurrency } from "../_helpers/price";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, TrashIcon } from "lucide-react";
import { CartContext, CartProduct } from "../_context/cart";

interface CartItemProps {
  cartProduct: CartProduct;
}

const CartItem = ({ cartProduct }: CartItemProps) => {
  const {
    deacreaseProductQuantity,
    increaseProductQuantity,
    removeProductFromCart,
  } = useContext(CartContext);

  const handleDecreaseQuantity = () => {
    deacreaseProductQuantity(cartProduct.id);
  };

  const handleIncreaseQuantity = () => {
    increaseProductQuantity(cartProduct.id);
  };

  const handleRemoveOnClivk = () => {
    removeProductFromCart(cartProduct.id);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="relative size-20">
          <Image
            src={cartProduct.imageUrl}
            alt={cartProduct.name}
            fill
            className="rounded-lg object-cover"
          />
        </div>

        <div className="space-y-1">
          <h3 className="text-xs">{cartProduct.name}</h3>
          <div className="flex items-center gap-1">
            <h4 className="text-sm font-semibold">
              {formatCurrency(
                calculateProductPrice(cartProduct) * cartProduct.quantity
              )}
            </h4>

            {cartProduct.discountPercentage > 0 && (
              <span className="text-xs text-muted-foreground line-through">
                {formatCurrency(+cartProduct.price  * cartProduct.quantity)}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3 text-center">
            <Button
              size="icon"
              variant="ghost"
              className="border border-solid border-muted-foreground size-7"
            >
              <ChevronLeft size={16} onClick={handleDecreaseQuantity} />
            </Button>
            <span className="w-3 text-xs block">{cartProduct.quantity}</span>
            <Button size="icon" className="size-7">
              <ChevronRight size={16} onClick={handleIncreaseQuantity} />
            </Button>
          </div>
        </div>
      </div>

      <Button
        size={"icon"}
        className="size-7 border border-solid border-muted-foreground"
        variant={"ghost"}
      >
        <TrashIcon size={16} onClick={handleRemoveOnClivk} />
      </Button>
    </div>
  );
};

export default CartItem;
