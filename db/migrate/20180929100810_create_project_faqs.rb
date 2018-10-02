class CreateProjectFaqs < ActiveRecord::Migration[5.2]
  def change
    create_table :project_faqs do |t|
      t.string :title
      t.text :description
      t.references :campaign, foreign_key: true

      t.timestamps
    end
  end
end
