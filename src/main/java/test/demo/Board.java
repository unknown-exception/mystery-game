package test.demo;
public class Board {
    Card[][] deck = new Card[2][6];

    public void assignCard(Card card, int[] index){
        /*
        deck[index[0]][index[1]] = card;
        card.onBoard = true;

         */
    }

    public void removeCard(int[] index){
        deck[index[0]][index[1]] = null;
    }
}
