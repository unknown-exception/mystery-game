public class Player extends BaseCard{
    int maxDeployPoints;

    public Player(int _maxHP, int _maxDeployPoints, String _name, String _image){
        super(_maxHP, _name, _image);
        maxDeployPoints = _maxDeployPoints;
    }
}
