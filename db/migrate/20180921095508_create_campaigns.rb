class CreateCampaigns < ActiveRecord::Migration[5.2]
  def change
    create_table :campaigns do |t|
      t.references :category
      t.string :country
      t.text :project_description
      t.text :risk_and_challenge
      t.string :project_title
      t.text :short_blurb
      t.string :project_location
      t.string :funding_goal
      t.integer :funding_duration
      t.references :user
      t.attachment :project_video
      t.attachment :project_image
      
      

      t.timestamps
    end
  end
end
