# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  email           :string           not null
#
class User < ApplicationRecord

    attr_reader :password
    
    validates :username, :email, :password_digest, :session_token, presence: true
    validates :username, :email, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true
    
    after_initialize :ensure_session_token

    # has_one_attached :photo

    has_many :comments,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :Comment
    
    has_many :likes,
        primary_key: :id,
        foreign_key: :liker_id,
        class_name: :Like

    has_many :channels,
        primary_key: :id,
        foreign_key: :creator_id,
        class_name: :Channel

    has_many :uploads,
        through: :channels,
        source: :uploads
        # primary_key: :id,
        # foreign_key: :creator_id,
        # class_name: :Video

    has_many :subscriptions

    # add scope to find channels with just users id

    # has_many :subscribed_channels,
    #     through: :subscriptions,
    #     source: :channel

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.has_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end
    
    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def has_password?(password)
        self.password_digest == password
    end

    def reset_session_token!
        generate_unique_session_token
        save!
        self.session_token
    end

    def video_likes
        self.likes.where(likeable_type: "Video")
    end

    def comment_likes
        self.likes.where(likeable_type: "Comment")
    end

    private

    def ensure_session_token
        generate_unique_session_token unless self.session_token
    end

    def new_session_token
        SecureRandom.urlsafe_base64
    end

    def generate_unique_session_token
        self.session_token = new_session_token
        while User.find_by(session_token: self.session_token)
            self.session_token = new_session_token
        end
        self.session_token
    end
    
end
