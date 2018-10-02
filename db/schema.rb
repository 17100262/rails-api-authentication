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

ActiveRecord::Schema.define(version: 2018_09_29_100810) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "campaigns", force: :cascade do |t|
    t.bigint "category_id"
    t.string "country"
    t.text "project_description"
    t.text "risk_and_challenge"
    t.string "project_title"
    t.text "short_blurb"
    t.string "project_location"
    t.string "funding_goal"
    t.integer "funding_duration"
    t.bigint "user_id"
    t.string "project_video_file_name"
    t.string "project_video_content_type"
    t.bigint "project_video_file_size"
    t.datetime "project_video_updated_at"
    t.string "project_image_file_name"
    t.string "project_image_content_type"
    t.bigint "project_image_file_size"
    t.datetime "project_image_updated_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_campaigns_on_category_id"
    t.index ["user_id"], name: "index_campaigns_on_user_id"
  end

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "project_faqs", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.bigint "campaign_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["campaign_id"], name: "index_project_faqs_on_campaign_id"
  end

  create_table "rewards", force: :cascade do |t|
    t.bigint "campaign_id"
    t.string "title"
    t.integer "pledge_amount"
    t.text "description"
    t.date "estimated_delivery"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["campaign_id"], name: "index_rewards_on_campaign_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.boolean "admin", default: false
    t.string "firstname"
    t.string "lastname"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "authentication_token", limit: 30
    t.boolean "approved", default: false
    t.string "profile_picture_file_name"
    t.string "profile_picture_content_type"
    t.bigint "profile_picture_file_size"
    t.datetime "profile_picture_updated_at"
    t.text "biography"
    t.string "location"
    t.string "website"
    t.index ["authentication_token"], name: "index_users_on_authentication_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "project_faqs", "campaigns"
  add_foreign_key "rewards", "campaigns"
end
