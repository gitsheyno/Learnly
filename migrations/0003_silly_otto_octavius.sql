DROP INDEX IF EXISTS `events_createdById_unique`;--> statement-breakpoint
ALTER TABLE `users` ADD `lessons` integer DEFAULT 0 NOT NULL;