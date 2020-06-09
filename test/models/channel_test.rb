# == Schema Information
#
# Table name: channels
#
#  id          :bigint           not null, primary key
#  owner_id    :integer          not null
#  subscribed  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :string
#  name        :string           not null
#
require 'test_helper'

class ChannelTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
