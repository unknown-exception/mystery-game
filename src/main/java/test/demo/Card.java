public class Card extends BaseCard{
    public int deployCost;
    public boolean wasUsed = true;
    public boolean onBoard = false;
    public int damage;

    public Card(String _image, String name, int _damage, int _maxHP, int _deployCost){
        super(_maxHP, name, _image);
        deployCost = _deployCost;
        damage = _damage;
    }

    public boolean TakeDamage(int damage){
        HP -= damage;
        if (HP <= 0){
            return true;
        }
        return false;
    }
}
