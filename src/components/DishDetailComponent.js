import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{
    date(d) {
        var yr=d.slice(0, 4);
        var mn=d.slice(5, 7);
        var dt=d.slice(8, 10);
        let mp = new Map();
        mp["01"] = "Jan";
        mp["02"] = "Feb";
        mp["03"] = "Mar";
        mp["04"] = "Apr";
        mp["05"] = "May";
        mp["06"] = "Jun";
        mp["07"] = "Jul";
        mp["08"] = "Aug";
        mp["09"] = "Sep";
        mp["10"] = "Oct";
        mp["11"] = "Nov";
        mp["12"] = "Dec";
    
        var ans = mp[mn] + " " + dt + ", " + yr;
        return ans;
    }
    render() {

        var comments = this.props.dish.comments.map((comment) => {
            return(
                <li key={comment.id} className="unlisted">
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {this.date(comment.date)}</p>
                </li>
            );
        })
        
        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" object src={this.props.dish.image}/>
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul>
                        {comments}
                    </ul>
                </div>
            </div>
        );
    }
};

export default DishDetail;
