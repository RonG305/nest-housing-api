/*
  Warnings:

  - Changed the type of `number_of_bedrooms` on the `House` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "House" DROP COLUMN "number_of_bedrooms",
ADD COLUMN     "number_of_bedrooms" INTEGER NOT NULL;
