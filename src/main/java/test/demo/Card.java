public class Card extends BaseCard{
    public int deployCost;

    public Card(String _image, String name, int _maxHP, int _deployCost){
        super(_maxHP, name, _image);
        deployCost = _deployCost;
    }
}
