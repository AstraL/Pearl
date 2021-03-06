# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171121200833) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "apartaments", force: :cascade do |t|
    t.string   "image"
    t.float    "living_space"
    t.float    "kitchen_space"
    t.string   "thrd_image"
    t.float    "total_space"
    t.integer  "rooms"
    t.string   "floor"
    t.integer  "access"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.integer  "section_id"
    t.integer  "house_id"
  end

  create_table "feedbacks", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.string   "phone"
    t.text     "message"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "friendly_id_slugs", force: :cascade do |t|
    t.string   "slug",                      null: false
    t.integer  "sluggable_id",              null: false
    t.string   "sluggable_type", limit: 50
    t.string   "scope"
    t.datetime "created_at"
    t.index ["slug", "sluggable_type", "scope"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type_and_scope", unique: true, using: :btree
    t.index ["slug", "sluggable_type"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type", using: :btree
    t.index ["sluggable_id"], name: "index_friendly_id_slugs_on_sluggable_id", using: :btree
    t.index ["sluggable_type"], name: "index_friendly_id_slugs_on_sluggable_type", using: :btree
  end

  create_table "houses", force: :cascade do |t|
    t.string   "title"
    t.string   "address"
    t.string   "image"
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.string   "default_floor"
    t.string   "nodefault_floor"
    t.boolean  "active",          default: false
    t.string   "slug"
    t.string   "points"
    t.integer  "floors"
  end

  create_table "posts", force: :cascade do |t|
    t.string   "title"
    t.text     "text"
    t.string   "image"
    t.integer  "show_count"
    t.string   "kind"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sections", force: :cascade do |t|
    t.integer  "index"
    t.string   "points"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "house_id"
  end

  create_table "users", force: :cascade do |t|
    t.string   "login",               default: "", null: false
    t.string   "first_name",          default: "", null: false
    t.string   "last_name",           default: "", null: false
    t.string   "avatar",              default: "", null: false
    t.string   "email",               default: "", null: false
    t.string   "encrypted_password",  default: "", null: false
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",       default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                       null: false
    t.datetime "updated_at",                       null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
  end

end
