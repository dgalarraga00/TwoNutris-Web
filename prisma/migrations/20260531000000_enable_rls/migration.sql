-- Enable RLS on all public tables
ALTER TABLE "orders" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "profiles" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "order_items" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "dish_templates" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "weekly_menus" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "weekly_menu_items" ENABLE ROW LEVEL SECURITY;

-- ── orders ────────────────────────────────────────────────────────────
-- Users can only see/update their own orders
CREATE POLICY "orders_select_own" ON "orders"
  FOR SELECT USING (auth.uid() = profile_id);

CREATE POLICY "orders_insert_own" ON "orders"
  FOR INSERT WITH CHECK (auth.uid() = profile_id);

CREATE POLICY "orders_update_own" ON "orders"
  FOR UPDATE USING (auth.uid() = profile_id);

-- ── profiles ──────────────────────────────────────────────────────────
CREATE POLICY "profiles_select_own" ON "profiles"
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "profiles_insert_own" ON "profiles"
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "profiles_update_own" ON "profiles"
  FOR UPDATE USING (auth.uid() = id);

-- ── order_items ───────────────────────────────────────────────────────
-- Users can see items from their own orders
CREATE POLICY "order_items_select_own" ON "order_items"
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM "orders"
      WHERE "orders".id = "order_items".order_id
        AND "orders".profile_id = auth.uid()
    )
  );

CREATE POLICY "order_items_insert_own" ON "order_items"
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM "orders"
      WHERE "orders".id = "order_items".order_id
        AND "orders".profile_id = auth.uid()
    )
  );

-- ── dish_templates, weekly_menus, weekly_menu_items ───────────────────
-- Public read — anyone can browse the menu (anon and authenticated)
CREATE POLICY "dish_templates_public_read" ON "dish_templates"
  FOR SELECT USING (true);

CREATE POLICY "weekly_menus_public_read" ON "weekly_menus"
  FOR SELECT USING (true);

CREATE POLICY "weekly_menu_items_public_read" ON "weekly_menu_items"
  FOR SELECT USING (true);
