/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `role` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Patient` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hn` VARCHAR(191) NOT NULL,
    `vn` VARCHAR(191) NOT NULL,
    `citizenId` VARCHAR(191) NULL,
    `fullName` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `birthDate` DATETIME(3) NOT NULL,
    `doctorId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NurseRecord` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `patientId` INTEGER NOT NULL,
    `patientType` VARCHAR(191) NOT NULL,
    `weight` DOUBLE NULL,
    `height` DOUBLE NULL,
    `waist` DOUBLE NULL,
    `bmi` DOUBLE NULL,
    `ofc` DOUBLE NULL,
    `bsa` DOUBLE NULL,
    `spo2` DOUBLE NULL,
    `anc` DOUBLE NULL,
    `fbs` DOUBLE NULL,
    `vs1_t` DOUBLE NULL,
    `vs1_pr` DOUBLE NULL,
    `vs1_rr` DOUBLE NULL,
    `vs1_bp` VARCHAR(191) NULL,
    `vs1_pain_score` DOUBLE NULL,
    `vs1_adl` DOUBLE NULL,
    `vs2_t` DOUBLE NULL,
    `vs2_pr` DOUBLE NULL,
    `vs2_rr` DOUBLE NULL,
    `vs2_bp` VARCHAR(191) NULL,
    `vs2_pain_score` DOUBLE NULL,
    `vs2_iadl` DOUBLE NULL,
    `vs2_mmse` DOUBLE NULL,
    `visitType` VARCHAR(191) NULL,
    `currentSymptoms` VARCHAR(191) NULL,
    `currentTreatment` VARCHAR(191) NULL,
    `pastIllnesses` VARCHAR(191) NULL,
    `otherPastIllness` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `User_email_key` ON `User`(`email`);

-- AddForeignKey
ALTER TABLE `Patient` ADD CONSTRAINT `Patient_doctorId_fkey` FOREIGN KEY (`doctorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `NurseRecord` ADD CONSTRAINT `NurseRecord_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `NurseRecord` ADD CONSTRAINT `NurseRecord_patientId_fkey` FOREIGN KEY (`patientId`) REFERENCES `Patient`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
