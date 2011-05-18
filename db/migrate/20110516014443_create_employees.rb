class CreateEmployees < ActiveRecord::Migration
  def self.up
    create_table :employees do |t|
      t.string :name
      t.text :intro
      t.text :content
      t.text :contact
      t.text :quote

      t.timestamps
    end
  end

  def self.down
    drop_table :employees
  end
end
