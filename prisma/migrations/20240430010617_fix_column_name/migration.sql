/*
  Warnings:

  - You are about to drop the column `discaount_percentage` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "discaount_percentage",
ADD COLUMN     "discount_percentage" INTEGER NOT NULL DEFAULT 0;
