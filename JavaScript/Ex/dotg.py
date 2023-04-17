import random

def create_board(board_size, num_mines):
    board = [[' ' for _ in range(board_size)] for _ in range(board_size)]
    mines = random.sample(range(board_size * board_size), num_mines)
    for mine in mines:
        row = mine // board_size
        col = mine % board_size
        board[row][col] = '*'
    return board

def print_board(board):
    board_size = len(board)
    print('    ', end='')
    for i in range(board_size):
        print(i, end=' ')
    print()
    print('   ', '-' * board_size * 2)
    for i in range(board_size):
        print(i, '|', end=' ')
        for j in range(board_size):
            print(board[i][j], end=' ')
        print('|')
    print('   ', '-' * board_size * 2)

def count_adjacent_mines(board, row, col):
    count = 0
    board_size = len(board)
    for i in range(max(row - 1, 0), min(row + 2, board_size)):
        for j in range(max(col - 1, 0), min(col + 2, board_size)):
            if board[i][j] == '*':
                count += 1
    return count

def reveal_square(board, row, col, visited):
    board_size = len(board)
    if board[row][col] == '*':
        return False
    visited.add((row, col))
    count = count_adjacent_mines(board, row, col)
    board[row][col] = str(count) if count > 0 else ' '
    if count == 0:
        for i in range(max(row - 1, 0), min(row + 2, board_size)):
            for j in range(max(col - 1, 0), min(col + 2, board_size)):
                if (i, j) not in visited:
                    reveal_square(board, i, j, visited)
    return True

def play_game():
    board_size = 10
    num_mines = 10
    board = create_board(board_size, num_mines)
    game_over = False
    visited = set()
    while not game_over:
        print_board(board)
        row = int(input('Enter row: '))
        col = int(input('Enter column: '))
        if (row, col) in visited:
            print('You already visited that square. Try again.')
            continue
        game_over = not reveal_square(board, row, col, visited)
        if not game_over and len(visited) == board_size * board_size - num_mines:
            print_board(board)
            print('You win!')
            game_over = True
    print('Game over.')

if __name__ == '__main__':
    play_game()
