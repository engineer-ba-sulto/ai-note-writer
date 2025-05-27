CREATE TABLE `userProfile` (
	`userId` text PRIMARY KEY NOT NULL,
	`plan` text DEFAULT 'free' NOT NULL,
	`articleGenerationsRemaining` integer DEFAULT 5 NOT NULL,
	`stripeCustomerId` text,
	`stripeSubscriptionId` text,
	`stripePriceId` text,
	`stripeCurrentPeriodEnd` integer,
	FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `userProfile_stripeCustomerId_unique` ON `userProfile` (`stripeCustomerId`);--> statement-breakpoint
CREATE UNIQUE INDEX `userProfile_stripeSubscriptionId_unique` ON `userProfile` (`stripeSubscriptionId`);