/*
  Warnings:

  - The `destination_account_id` column on the `Transaction` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "destination_account_id",
ADD COLUMN     "destination_account_id" INTEGER;
