class AddSmallPicToEmployees < ActiveRecord::Migration
  def self.up
    add_column :employees, :smallPic_file_name, :string
    add_column :employees, :smallPic_content_type, :string
    add_column :employees, :smallPic_file_size, :integer
  end

  def self.down
    remove_column :employees, :smallPic_file_size
    remove_column :employees, :smallPic_content_type
    remove_column :employees, :smallPic_file_name
  end
end
