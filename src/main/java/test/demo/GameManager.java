package test.demo;
import java.util.ArrayList;

public class GameManager {
    static int playerTurn = 0;
    static Card selectedCard;
    static Board board = new Board();
    static Player player1;
    static Player player2;
    static ArrayList<Action> actions = new ArrayList<>();


    static public void assignPlayers(Player _player1, Player _player2){
        player1 = _player1;
        player2 = _player2;
    }

    static public void QueueAction(Card card, int[] boardIndex){
        if(card.onBoard && boardIndex[0] != playerTurn){
            actions.add(new Action(card.damage, boardIndex));
        }else if(!card.onBoard && boardIndex[0] == playerTurn){
            board.assignCard(card, boardIndex);
        }
    }

    static public void EndTurn(){
        for (Action action:actions) {
            if(board.deck[action.attackedIndex[0]][action.attackedIndex[1]].TakeDamage(action.damage)){
                board.removeCard(action.attackedIndex);
            }
        }
        actions.clear();
        playerTurn = (playerTurn == 1) ? 0 : 1;
    }
}
