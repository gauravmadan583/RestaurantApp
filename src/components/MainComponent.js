import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
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
  render() { 
    return (
      <div className="App">
        <Header/>
        <Menu dishes={this.state.dishes}
            onClick={(dishId) => {this.onDishSelect(dishId)}}
        />
        <div className="container">
          <DishDetail dish={
            this.state.dishes[this.state.selectedDish]
          }
          />
        </div>
        <Footer/>
        
      </div>
    );}
}

export default Main;
