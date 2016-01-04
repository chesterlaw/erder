class IndexController < ApplicationController
  before_action :get_previous_and_next_character, except: :index

  def get_previous_and_next_character
    alphabet = ('a' .. 'z').to_a
    characters = ('a' .. 'z').to_a

    alphabet.each do |letter|
      characters << 'lowercase_' + letter
    end

    characters += ('0'..'9').to_a

    hereIndex = characters.index(action_name)
    @previousPage = characters[hereIndex - 1]
    @nextPage = characters[hereIndex + 1]

    if hereIndex == characters.count - 1
      @nextPage = characters[0]
    end
  end
end
