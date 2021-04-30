import React, { Component } from 'react';
import App from '../App';

export class Counter extends Component {
  static displayName = Counter.name;

  constructor(props) {
    super(props);
    
    this.state = { 
        isUourTurn: false,
        userName : App.userName,
        userHp : 100,
        userMana : 5,
        opponentName : App.opponentName,
        opponentHp : 100,
        opponentMana : 5,
        selectedCard : 'Prepeare for battle!',
        player : {card1 : { img : "img/empty.png"}, card2 : { img : "img/empty.png"}, card3 : { img : "img/empty.png"}, card4 : { img : "img/empty.png"}, card5 : { img : "img/empty.png"}},
        opponent : {card1 : { img : "img/empty.png"}, card2 : { img : "img/empty.png"}, card3 : { img : "img/empty.png"}, card4 : { img : "img/empty.png"}, card5 : { img : "img/empty.png"}},
        cards : {card1 : { img : "img/empty.png"}, card2 : { img : "img/empty.png"}, card3 : { img : "img/empty.png"}, card4 : { img : "img/empty.png"}, card5 : { img : "img/empty.png"}},
        currentCount: 0
      };
    this.incrementCounter = this.makeTurn.bind(this);
    this.fieldSelected = this.fieldSelected.bind(this);
    this.cardSelected = this.cardSelected.bind(this);
    this.setState({ state: this.state });
  }
  
  async getСardDeck() {
    debugger;
    const response = await fetch(App.baseUrl + '/getAllCards');
    const data = await response.json();
    debugger;
    let cards = {card1 : data[0], card2 : data[1], card3 : data[2], card4 : data[3], card5 : data[4]};


    //let cards = {card1 : {}, card2 : {}, card3 : {}, card4 : {}, card5 : {}};
    // cards.card1 = {img: "img/1.jpg", name: 'Goblin', hp : 3, manaCost : 3, attack : 1};
    // cards.card2 = {img: "img/4.jpg", name: 'Iftit', hp : 4, manaCost : 4, attack : 2};
    // cards.card3 = {img: "img/15.jpg",  name: 'Gargoyle', hp: 5, manaCost : 5, attack : 3};
    // cards.card4 = {img: "img/57.jpg",  name: 'Ghost', hp :6, manaCost : 6, attack : 4};
    // cards.card5 = {img: "img/73.jpg", name: 'Palladin', hp : 7, manaCost : 7, attack : 5};
    // this.state.userName = 'Foo!';
    this.state.cards = cards;
    this.setState({ state: this.state });
  }

  componentDidMount() {
   this.getСardDeck();
  }

  fieldSelected(id) {
    this.state.selectedField = `You selected ${id} position`;
    this.setState({ state: this.state });
  }


  cardSelected(card) {
    this.state.selectedCard = `You selected ${card.name} (${card.hp}/${card.attack}) `;
    this.setState({ state: this.state });
  }

  async makeTurn() {
    this.state.currentCount ++;
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, {App.userName}</h1> <br />
        <h4>{this.state.selectedCard}</h4> <br />
        <h4>{this.state.selectedField}</h4>
        <table border="1">
          <tr>
            <td>
            <table  border="1">
                <tr>
                  <td  colspan="2" align="center" ><img src="img\player1.png" /> <br />
                  <b> {this.state.userName} </b>
                   </td>
                </tr>
                <tr>
                  <td><img width="30px" src="img\hp.png" /> {this.state.userHp}</td>
                  <td><img width="30px" src="img\mana.png" />  {this.state.userMana}</td>
                </tr>
              </table>
            </td>
            <td>
              <table  border="1">
                <td>
                  <tr>
                    <img src={this.state.player.card1.img} onClick={this.fieldSelected.bind(this, 1)} /> <br />
                    {this.state.player.card1.name} <br /> 
                    {this.state.player.card1.hp} / {this.state.player.card1.attack}
                  </tr>
                  <tr>
                    <img src={this.state.player.card2.img} onClick={this.fieldSelected.bind(this, 2)}  /> <br />
                    {this.state.player.card2.name} <br /> 
                    {this.state.player.card2.hp} / {this.state.player.card2.attack}
                  </tr>
                  <tr>
                    <img src={this.state.player.card3.img} onClick={this.fieldSelected.bind(this, 3)}  /> <br />
                    {this.state.player.card3.name} <br /> 
                    {this.state.player.card3.hp} / {this.state.player.card3.attack}
                  </tr>
                  <tr>
                    <img src={this.state.player.card4.img} onClick={this.fieldSelected.bind(this, 4)} /> <br />
                    {this.state.player.card4.name} <br /> 
                    {this.state.player.card4.hp} / {this.state.player.card4.attack}
                  </tr>
                  <tr>
                    <img src={this.state.player.card5.img} onClick={this.fieldSelected.bind(this, 5)} /> <br />
                    {this.state.player.card5.name} <br /> 
                    {this.state.player.card5.hp} / {this.state.player.card5.attack}
                  </tr>
                </td>
                <td>
                  <tr>
                    <img src={this.state.opponent.card1.img} /> <br />
                    {this.state.opponent.card1.name} <br /> 
                    {this.state.opponent.card1.hp} / {this.state.opponent.card1.attack}
                  </tr>
                  <tr>
                    <img src={this.state.opponent.card2.img} /> <br />
                    {this.state.opponent.card2.name} <br /> 
                    {this.state.opponent.card2.hp} / {this.state.opponent.card2.attack}
                  </tr>
                  <tr>
                    <img src={this.state.opponent.card3.img} /> <br />
                    {this.state.opponent.card3.name} <br /> 
                    {this.state.opponent.card3.hp} / {this.state.opponent.card3.attack}
                  </tr>
                  <tr>
                    <img src={this.state.opponent.card4.img} /> <br />
                    {this.state.opponent.card4.name} <br /> 
                    {this.state.opponent.card4.hp} / {this.state.opponent.card4.attack}
                  </tr>
                  <tr>
                    <img src={this.state.opponent.card5.img} /> <br />
                    {this.state.opponent.card5.name} <br /> 
                    {this.state.opponent.card5.hp} / {this.state.opponent.card5.attack}
                  </tr>
                </td>
              </table>
            </td>
            <td>
              <table  border="1">
                <tr>
                  <td  colspan="12" align="center"><img src="img\player2.png" /> <br />
                  <b> {this.state.opponentName} </b></td>
                </tr>
                <tr>

                  <td><img width="30px" src="img\hp.png" /> {this.state.opponentHp}</td>
                  <td><img width="30px" src="img\mana.png" />  {this.state.opponentMana}</td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <table  border="1">
          <tr>
            <td>
              <img src={this.state.cards.card1.img} width="50px" onClick={this.cardSelected.bind(this, this.state.cards.card1)} /> <br />
              {this.state.cards.card1.name} <img width="10px" src="img\mana.png" /> {this.state.cards.card1.manaCost} <br /> 
              <img width="10px" src="img\hp.png" /> {this.state.cards.card1.hp} / <img width="10px" src="img\sword.png" /> {this.state.cards.card1.attack}
            </td>
            <td>
              <img src={this.state.cards.card2.img} width="50px" onClick={this.cardSelected.bind(this, this.state.cards.card2)} /> <br />
              {this.state.cards.card2.name} <img width="10px" src="img\mana.png" />  {this.state.cards.card2.manaCost} <br /> 
              <img width="10px" src="img\hp.png" /> {this.state.cards.card2.hp} / <img width="10px" src="img\sword.png" /> {this.state.cards.card2.attack}
            </td>
            <td>
              <img src={this.state.cards.card3.img} width="50px" onClick={this.cardSelected.bind(this, this.state.cards.card3)} /> <br />
              {this.state.cards.card3.name} <img width="10px" src="img\mana.png" /> {this.state.cards.card3.manaCost} <br /> 
              <img width="10px" src="img\hp.png" /> {this.state.cards.card3.hp} / <img width="10px" src="img\sword.png" /> {this.state.cards.card3.attack}
            </td>
            <td>
              <img src={this.state.cards.card4.img} width="50px" onClick={this.cardSelected.bind(this, this.state.cards.card4)} /> <br />
              {this.state.cards.card4.name} <img width="10px" src="img\mana.png" /> {this.state.cards.card4.manaCost} <br /> 
              <img width="10px" src="img\hp.png" /> {this.state.cards.card4.hp} / <img width="10px" src="img\sword.png" /> {this.state.cards.card4.attack}
            </td>
            <td>
              <img src={this.state.cards.card5.img} width="50px" onClick={this.cardSelected.bind(this, this.state.cards.card5)} /> <br />
              {this.state.cards.card5.name} <img width="10px" src="img\mana.png" /> {this.state.cards.card5.manaCost} <br /> 
              <img width="10px" src="img\hp.png" /> {this.state.cards.card5.hp} / <img width="10px" src="img\sword.png" /> {this.state.cards.card5.attack}
            </td>
          </tr>
        </table>
        <button className="btn btn-primary" onClick={this.makeTurn}>Go!</button>
      </div>
    );
  }
}
