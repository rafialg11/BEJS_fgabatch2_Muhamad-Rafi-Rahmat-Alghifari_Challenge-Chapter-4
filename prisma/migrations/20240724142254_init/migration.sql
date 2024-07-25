/*
  Warnings:

  - You are about to drop the `TransactionType` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `destination_account_id` on table `Transaction` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_id_transaction_type_fkey";

-- AlterTable
ALTER TABLE "Transaction" ALTER COLUMN "destination_account_id" SET NOT NULL;

-- DropTable
DROP TABLE "TransactionType";
