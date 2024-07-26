/*
  Warnings:

  - You are about to drop the column `account_id` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `destination_account_id` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the `_BankAccountToTransaction` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `receiver_account_id` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sender_account_id` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_BankAccountToTransaction" DROP CONSTRAINT "_BankAccountToTransaction_A_fkey";

-- DropForeignKey
ALTER TABLE "_BankAccountToTransaction" DROP CONSTRAINT "_BankAccountToTransaction_B_fkey";

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "account_id",
DROP COLUMN "destination_account_id",
ADD COLUMN     "receiver_account_id" TEXT NOT NULL,
ADD COLUMN     "sender_account_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "_BankAccountToTransaction";

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_sender_account_id_fkey" FOREIGN KEY ("sender_account_id") REFERENCES "BankAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_receiver_account_id_fkey" FOREIGN KEY ("receiver_account_id") REFERENCES "BankAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
