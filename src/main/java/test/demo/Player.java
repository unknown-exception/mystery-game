package test.demo;
public class Player {
    public int hp = 30;
    public int mana = 30;
    public String name;
    Card[] playedCards = new Card[5];


    public Player(String name) {
        this.name = name;
    }
}
