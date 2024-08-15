CREATE TABLE `events` (
	`id` text PRIMARY KEY NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`createdById` text NOT NULL,
	`description` text,
	`status` text DEFAULT 'unread' NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `events_createdById_unique` ON `events` (`createdById`);