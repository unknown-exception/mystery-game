package test.demo;

public class Battle {
    public Player player1;
    public Player player2;
    public Player currentMoving;

    public Battle(Player player1, Player player2) {
        this.player1 = player1;
        this.player2 = player2;
        currentMoving = player1;
    }
}
