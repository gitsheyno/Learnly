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
  favoriteTutors: many(userFavorites),
}));

export const messages = sqliteTable("events", {
  id: id(),
  createdAt: createdAt(),
  createdById: text("createdById").notNull(),
  description: text("description"),

  status: text("status", {
    enum: ["unread", "read"],
  })
    .default("unread")
    .notNull(),
});

export const messagesRelations = relations(messages, ({ one }) => ({
  createdBy: one(users, {
    fields: [messages.createdById],
    references: [users.id],
  }), // Many-to-one relation: many messages belong to one user
}));

// Define the tutors table
export const tutors = sqliteTable("tutors", {
  id: id(),
  createdAt: createdAt(),
  image: text("image").notNull(),
  name: text("name").notNull(),
  language: text("language").notNull(),
  category: text("category").notNull(),
  students: text("students").notNull(),
  lessons: text("lessons").notNull(),
  speakLang: text("speakLang").notNull(),
  benefit: text("benefit").notNull(),
  cost: text("cost").notNull(),
  session: text("session").notNull(),
});

export const tutorsRelations = relations(tutors, ({ many }) => ({
  favoredBy: many(userFavorites),
}));

export const userFavorites = sqliteTable(
  "user_favorites",
  {
    userId: text("user_id")
      .references(() => users.id)
      .notNull(),
    tutorId: text("tutor_id")
      .references(() => tutors.id)
      .notNull(),
  },
  (table) => ({
    pk: unique().on(table.userId, table.tutorId),
  }),
);

export const userFavoritesRelations = relations(userFavorites, ({ one }) => ({
  user: one(users, {
    fields: [userFavorites.userId],
    references: [users.id],
  }),
  tutor: one(tutors, {
    fields: [userFavorites.tutorId],
    references: [tutors.id],
  }),
}));
