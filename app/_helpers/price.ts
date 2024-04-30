import { Product } from "@prisma/client";

export const calculateProductPrice = (product: Product) => {
  if (product.discountPercentage === 0) {
    return +product.price;
  }

  const discount = +product.price * (product.discountPercentage / 100);

  return +product.price - discount;
};

export const formatCurrency = (value: number) => {
  return `R$${Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(value)}`;
};
