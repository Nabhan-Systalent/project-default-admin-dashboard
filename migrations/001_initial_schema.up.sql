CREATE TABLE "user" (
  "id" uuid NOT NULL,
  "created_at" timestamptz NOT NULL,
  "updated_at" timestamptz NOT NULL,
  "finance_report_id" uuid,
  PRIMARY KEY ("id")
);

CREATE TABLE "account_action" (
  "id" uuid NOT NULL,
  "created_at" timestamptz NOT NULL,
  "updated_at" timestamptz NOT NULL,
  "user_id" uuid,
  PRIMARY KEY ("id")
);

CREATE TABLE "audit_log" (
  "id" uuid NOT NULL,
  "created_at" timestamptz NOT NULL,
  "updated_at" timestamptz NOT NULL,
  "account_action_id" uuid,
  PRIMARY KEY ("id")
);

CREATE TABLE "finance_report" (
  "id" uuid NOT NULL,
  "created_at" timestamptz NOT NULL,
  "updated_at" timestamptz NOT NULL,
  PRIMARY KEY ("id")
);