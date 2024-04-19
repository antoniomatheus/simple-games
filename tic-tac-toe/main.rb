class TicTacToe
  def initialize(first_player, second_player)
    @board = Array.new(3) { Array.new(3) }
    @first_player = first_player
    @second_player = second_player
  end

  def play
    render_board
  end

  private

  def render_board
    puts '-' * 7
    print '|'
    @board.each do |row|
      row.each do |column|
        print "#{column}|"
      end
      print "\n"
      puts '-' * 7
    end
  end

  def is_game_over?
  end
end


print 'What is the name of the first player: '
first_player = gets.chomp
print 'What is the name of the second player: '
second_player = gets.chomp

game = TicTacToe.new(first_player, second_player)
game.play
