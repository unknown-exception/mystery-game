package test.demo;
public class Card  //extends BaseCard
{
    public int id;
    public int manaCost;
    public int attack;
    public int hp;
    public String name;
    public String description;
    public String img;


    public Card(int id, int manaCost, int attack, int hp, String name, String description, String url) {
        this.id = id;
        this.manaCost = manaCost;
        this.attack = attack;
        this.hp = hp;
        this.name = name;
        this.description = description;
        this.img = url;
    }
}
