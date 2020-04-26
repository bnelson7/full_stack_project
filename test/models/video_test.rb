# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  creator_id  :integer          not null
#  title       :string           not null
#  description :string
#  views       :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  upload_date :string
#
require 'test_helper'

class VideoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
