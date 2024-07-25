/*
  Warnings:

  - You are about to drop the column `destination_account_number` on the `Transaction` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "destination_account_number",
ADD COLUMN     "destination_account_id" TEXT;
