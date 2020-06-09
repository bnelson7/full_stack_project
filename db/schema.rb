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

ActiveRecord::Schema.define(version: 2020_06_08_184525) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "channels", force: :cascade do |t|
    t.integer "owner_id", null: false
    t.integer "subscribed", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "description"
    t.string "name", null: false
    t.index ["owner_id"], name: "index_channels_on_owner_id", unique: true
  end

  create_table "comments", force: :cascade do |t|
    t.string "body", null: false
    t.integer "author_id", null: false
    t.integer "video_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "parent_comment_id"
    t.boolean "edited", default: false
  end

  create_table "likes", force: :cascade do |t|
    t.integer "liker_id", null: false
    t.string "likeable_type", null: false
    t.bigint "likeable_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "liked", default: false, null: false
    t.boolean "disliked", default: false, null: false
    t.index ["likeable_type", "likeable_id"], name: "index_likes_on_likeable_type_and_likeable_id"
    t.index ["liker_id"], name: "index_likes_on_liker_id"
  end

  create_table "subscriptions", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "subscriber_id", null: false
    t.integer "channel_id", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email", null: false
    t.index ["username", "email", "session_token"], name: "index_users_on_username_and_email_and_session_token", unique: true
  end

  create_table "videos", force: :cascade do |t|
    t.integer "creator_id", null: false
    t.string "title", null: false
    t.string "description"
    t.integer "views", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "channel_id"
    t.index ["channel_id"], name: "index_videos_on_channel_id", unique: true
    t.index ["creator_id", "title"], name: "index_videos_on_creator_id_and_title"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
