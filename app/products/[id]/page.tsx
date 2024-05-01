import { db } from "@/app/_lib/prisma";
import ProductImage from "./_components/product-image";
import ProductDetails from "./_components/product-details";
// import { notFound } from "next/navigation";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await db.product.findUniqueOrThrow({
    where: {
      id: params.id,
    },
    include: {
      restaurant: true,
    },
  });

  const juices = await db.product.findMany({
    where: {
      category: {
        name: "Sucos",
      },
      restaurant: {
        id: product.restaurant.id,
      },
    },
    include: {
      restaurant: true,
    },
  });

  //   if(!product){
  //     return notFound()
  //   }

  return (
    <div>
      <ProductImage product={product} />

      <ProductDetails product={product} complementaryProducts={juices} />
    </div>
  );
};

export default ProductPage;
