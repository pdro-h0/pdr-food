import React, { useContext } from "react";
import { CartContext } from "../_context/cart";
import CartItem from "./cart-item";
import { Card, CardContent } from "./ui/card";
import { formatCurrency } from "../_helpers/price";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const Cart = () => {
  const { products, subtotalPrice, totalDiscounts, totalPrice } =
    useContext(CartContext);

  return (
    <div className="py-5 h-full flex flex-col">
      <div className="flex-auto space-y-4">
        {products.map((product) => (
          <CartItem key={product.id} cartProduct={product} />
        ))}
      </div>

      {products.length > 0 ? (
        <>
          <div className="mt-6">
            <Card>
              <CardContent className="p-5 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatCurrency(subtotalPrice)}</span>
                </div>

                <Separator />

                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Descontos</span>
                  <span>{formatCurrency(totalDiscounts)}</span>
                </div>

                <Separator className="h-[0.5px]" />

                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Entrega</span>
                  {+products?.[0].restaurant.deliveryFee === 0 ? (
                    <span className="uppercase text-primary">Grátis</span>
                  ) : (
                    formatCurrency(+products?.[0].restaurant.deliveryFee)
                  )}
                </div>

                <Separator />

                <div className="flex items-center justify-between text-xs font-semibold">
                  <span>Total</span>
                  <span>{formatCurrency(totalPrice)}</span>
                </div>
              </CardContent>
            </Card>
          </div>
          <Button className="mt-6 w-full">Finalizar Pedido</Button>
        </>
      ) : (
        <h2 className="text-left font-medium">Sua sacola está vazia.</h2>
      )}
    </div>
  );
};

export default Cart;
