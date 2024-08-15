import { randomUUID } from "crypto";
import { relations, sql } from "drizzle-orm";
import { integer, sqliteTable, text, unique } from "drizzle-orm/sqlite-core";

const id = () =>
  text("id")
    .primaryKey()
    .$default(() => randomUUID());

const createdAt = () =>
  text("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull();

const date = (name: string) => text(name);

const boolean = (field: string) => integer(field, { mode: "boolean" });

export const users = sqliteTable("users", {
  id: id(),
  createdAt: createdAt(),
  email: text("email").unique().notNull(),
  password: text("password").notNull(),
  role: text("role").notNull(),
});

export const usersRelations = relations(users, ({ many }) => ({
  messages: many(messages),
}));

export const messages = sqliteTable(
  "events",
  {
    id: id(),
    createdAt: createdAt(),
    createdById: text("createdById").notNull(),
    description: text("description"),

    status: text("status", {
      enum: ["unread", "read"],
    })
      .default("unread")
      .notNull(),
  },
);

export const messagesRelations = relations(messages, ({ one }) => ({
  createdBy: one(users, {
    fields: [messages.createdById],
    references: [users.id],
  }), // Many-to-one relation: many messages belong to one user
}));
