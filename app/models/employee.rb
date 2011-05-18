# == Schema Information
# Schema version: 20110516030436
#
# Table name: employees
#
#  id                    :integer         not null, primary key
#  name                  :string(255)
#  intro                 :text
#  content               :text
#  contact               :text
#  quote                 :text
#  created_at            :datetime
#  updated_at            :datetime
#  smallPic_file_name    :string(255)
#  smallPic_content_type :string(255)
#  smallPic_file_size    :integer
#

class Employee < ActiveRecord::Base
  
  has_attached_file :smallPic,
       :styles => {
         :thumb=> "90x90#",
         :small  => "180x180#" }
  
end
