public class Player extends BaseCard{
    int maxDeployPoints;
    Card[] availableCards;

    public Player(int _maxHP, int _maxDeployPoints, String _name, String _image, Card[] _availableCards){
        super(_maxHP, _name, _image);
        maxDeployPoints = _maxDeployPoints;
        availableCards = _availableCards;
    }
}
