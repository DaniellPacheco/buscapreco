-- CreateTable
CREATE TABLE `Providers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `website` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Providers_website_key`(`website`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `providerId` INTEGER NOT NULL,
    `endopoint` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `provider_product_id` VARCHAR(191) NOT NULL,
    `cash_value` DOUBLE NOT NULL,
    `installment_value` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product_history` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `productId` INTEGER NOT NULL,
    `endopoint` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `provider_product_id` VARCHAR(191) NOT NULL,
    `cash_value` DOUBLE NOT NULL,
    `installment_value` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Products` ADD CONSTRAINT `Products_providerId_fkey` FOREIGN KEY (`providerId`) REFERENCES `Providers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product_history` ADD CONSTRAINT `Product_history_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
