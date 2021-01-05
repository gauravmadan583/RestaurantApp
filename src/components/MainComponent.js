import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import { Component } from 'react';
import DishDetail from './DishDetailComponent';


class Main extends Component {
  constructor(props){
      super(props);
      this.state = {
          dishes: DISHES,
          selectedDish: 0
      };
  }
  onDishSelect(dishId) {
    this.setState({
      selectedDish:dishId
    });
  }
  aisehi(){
    if(this.state.selectedDish){
      return this.state.dish[this.state.selectedDish]
    }else{
      return null
    }
  };
  render() { 
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}
            onClick={(dishId) => {this.onDishSelect(dishId)}}
        />
        <div className="container">
          <DishDetail dish={
            this.state.dishes[this.state.selectedDish]
          }
          />
        </div>
        
      </div>
    );}
}

export default Main;
