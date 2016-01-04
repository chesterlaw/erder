class IndexController < ApplicationController
  before_action :get_previous_and_next_character, except: :index

  def index
    get_special_characters
  end

  def get_previous_and_next_character
    alphabet = ('a' .. 'z').to_a
    characters = ('a' .. 'z').to_a

    alphabet.each do |letter|
      characters << 'lowercase_' + letter
    end

    characters += ('0'..'9').to_a
    get_special_characters
    characters += @special_characters

    hereIndex = characters.index(action_name)
    @previousPage = characters[hereIndex - 1]
    @nextPage = characters[hereIndex + 1]

    if hereIndex == characters.count - 1
      @nextPage = characters[0]
    end
  end

  private
    def get_special_characters
      @special_characters = [
        'exclamation_mark',
        'at_sign',
        'number_sign',
        'percent_sign',
        'caret',
        'left_parenthesis',
        'right_parenthesis',
        'plus_sign',
        'minus_sign',
        'forward_slash',
        'question_mark',
        'back_slash',
      ]
    end
end
