# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :string
#  views       :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  channel_id  :integer
#
require 'test_helper'

class VideoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
