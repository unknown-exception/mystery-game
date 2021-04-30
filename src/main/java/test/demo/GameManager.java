package test.demo;
import java.util.ArrayList;

public class GameManager {


    public static ArrayList<Battle> Battles = new ArrayList<Battle>();

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
        /*
        if(card.onBoard && boardIndex[0] != playerTurn){
            actions.add(new Action(card.damage, boardIndex));
        }else if(!card.onBoard && boardIndex[0] == playerTurn){
            board.assignCard(card, boardIndex);
        }*/
    }

    static public void EndTurn(){
/*
        for (Action action:actions) {
            if(board.deck[action.attackedIndex[0]][action.attackedIndex[1]].TakeDamage(action.damage)){
                board.removeCard(action.attackedIndex);
            }
        }
        actions.clear();
        playerTurn = (playerTurn == 1) ? 0 : 1;
        */

    }

    private static ArrayList<Card> _allCards = null;

    public static ArrayList<Card> GetAllCards(){
        if(_allCards == null) {
            _allCards = new ArrayList<>();
            _allCards.add(new Card(1, 3, 1, 3, "Goblin", "", "img/1.jpg" ));
            _allCards.add(new Card(2, 4, 2, 4, "Gin", "", "img/4.jpg" ));
            _allCards.add(new Card(3, 5, 3, 5, "Gargoyle", "", "img/15.jpg" ));
            _allCards.add(new Card(4, 6, 4, 6, "Ghost", "", "img/57.jpg" ));
            _allCards.add(new Card(5, 7, 5, 7, "Palladin", "", "img/73.jpg" ));
        }
        return _allCards;
    }
}
