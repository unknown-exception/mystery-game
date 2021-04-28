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
        currentStatusMessage : 'Prepeare for battle!',
        player : {card1 : {}, card2 : {}, card3 : {}, card4 : {}, card5 : {}},
        opponent : {card1 : {}, card2 : {}, card3 : {}, card4 : {}, card5 : {}},
        cards : {card1 : {}, card2 : {}, card3 : {}, card4 : {}, card5 : {}},
        currentCount: 0
      };
    this.incrementCounter = this.incrementCounter.bind(this);
    this.fieldSelected = this.fieldSelected.bind(this);
    this.cardSelected = this.cardSelected.bind(this);
    this.setState({ state: this.state });
  }
  
  async getСardDeck() {
    debugger;

    let cards = {card1 : {}, card2 : {}, card3 : {}, card4 : {}, card5 : {}};
    cards.card1 = {img: "https://cdn.webshopapp.com/shops/153/files/314913226/image.jpg", name: 'One', hp : 3, manaCost : 3, attack : 1};
    cards.card2 = {name: 'Two', hp : 4, manaCost : 4, attack : 2};
    cards.card3 = {name: 'Three', hp: 5, manaCost : 5, attack : 3};
    cards.card4 = {name: 'Five', hp :6, manaCost : 6, attack : 4};
    cards.card5 = {name: 'Six', hp : 7, manaCost : 7, attack : 5};
    this.state.userName = 'Foo!';
    this.state.cards = cards;
    this.setState({ state: this.state });
  }

  componentDidMount() {
   this.getСardDeck();
  }

  fieldSelected(id) {
    
  }


  cardSelected(card) {
    this.state.currentStatusMessage = `You selected ${card.name} (${card.hp}/${card.attack}) `;
    this.setState({ state: this.state });
  }

  incrementCounter() {
    this.state.currentCount ++;
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, {App.userName}</h1> <br />
        <h4>{this.state.currentStatusMessage}</h4>
        <h4>{this.state.cards.card1.name}</h4>
        <table>
          <tr>
            <td>
              <table>
                <tr>
                <td>{this.state.userName}</td>
                <td>{this.state.userHp}</td>
                <td>{this.state.userMana}</td>
                </tr>
              </table>
            </td>
            <td>
              <table>
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
                <td>
                  <tr>
                    <img src={this.state.player.card1.img} onClick={this.fieldSelected.bind(this, this.state.cards.card1)} /> <br />
                    {this.state.player.card1.name} <br /> 
                    {this.state.player.card1.hp} / {this.state.player.card1.attack}
                  </tr>
                  <tr>
                    <img src={this.state.player.card2.img} onClick={this.fieldSelected.bind(this, this.state.cards.card2)}  /> <br />
                    {this.state.player.card2.name} <br /> 
                    {this.state.player.card2.hp} / {this.state.player.card2.attack}
                  </tr>
                  <tr>
                    <img src={this.state.player.card3.img} onClick={this.fieldSelected.bind(this, this.state.cards.card3)}  /> <br />
                    {this.state.player.card3.name} <br /> 
                    {this.state.player.card3.hp} / {this.state.player.card3.attack}
                  </tr>
                  <tr>
                    <img src={this.state.player.card4.img} onClick={this.fieldSelected.bind(this, this.state.cards.card4)} /> <br />
                    {this.state.player.card4.name} <br /> 
                    {this.state.player.card4.hp} / {this.state.player.card4.attack}
                  </tr>
                  <tr>
                    <img src={this.state.player.card5.img} onClick={this.fieldSelected.bind(this, this.state.cards.card5)} /> <br />
                    {this.state.player.card5.name} <br /> 
                    {this.state.player.card5.hp} / {this.state.player.card5.attack}
                  </tr>
                </td>
              </table>
            </td>
            <td>
              <table>
                <tr>
                  <td>{this.state.opponentName}</td>
                  <td>{this.state.opponentHp}</td>
                  <td>{this.state.opponentMana}</td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <table>
          <tr>
          <tr>
              <img src={this.state.cards.card1.img} width="50px" onClick={this.cardSelected.bind(this, this.state.cards.card1)} /> <br />
              {this.state.cards.card1.name} {this.state.cards.card1.manaCost} <br /> 
              {this.state.cards.card1.hp} / {this.state.cards.card1.attack}
            </tr>
          </tr>
        </table>
        <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button>
      </div>
    );
  }
}
