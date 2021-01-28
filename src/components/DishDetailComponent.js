import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Label, Row, Col,
        Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };


    toggleModal() {
        console.log("toggle Modal");
        this.setState({
            modalOpen: !this.state.modalOpen
        });
    }

    handleSubmit(values) {
        this.props.addComment(this.props.dishId, values.rating, values.yourname, values.comment);
        this.toggleModal();
    }

    render() {
        return (
            <React.Fragment>
                <Button outline onClick={this.toggleModal}><span className="fa fa-pencil"></span> Submit Comment</Button>

                <Modal isOpen={this.state.modalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={12}>Rating</Label>
                                <Col md={12}>
                                    <Control.select className="col-12" model=".rating" name="rating">
                                        <option>5</option>
                                        <option>4</option>
                                        <option>3</option>
                                        <option>2</option>
                                        <option>1</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="yourname" md={12}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".yourname" id="yourname" name="yourname"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}></Control.text>
                                    <Errors className="text-danger"
                                        model=".yourname"
                                        show="touched"
                                        messages={{
                                            required: "Required.",
                                            minLength: "Should be greater than 2 characters.",
                                            maxLength: "Should be less than 15 characters."
                                        }}></Errors>
                                </Col>
                            </Row>

                            <Row className="form-group">

                                <Label htmlFor="comment" md={12}>Your Feedback</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" id="comment" name="comment" rows="6"
                                        className="form-control"></Control.textarea>
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col md={12}>
                                    <Button type="submit" color="primary">Submit</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>

        );
    }
};

function date(d) {
    var yr = d.slice(0, 4);
    var mn = d.slice(5, 7);
    var dt = d.slice(8, 10);
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

const DishDetail = (props) => {
    var comments = props.comments.map((comment) => {
        return (
            <li key={comment.id} className="unlisted">
                <p>{comment.comment}</p>
                <p>-- {comment.author}, {date(comment.date)}</p>
            </li>
        );
    })

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr></hr>
                </div>
            </div>
            <div className="row">

                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" object src={props.dish.image} />
                        <CardBody>
                            <CardTitle>{props.dish.name}</CardTitle>
                            <CardText>{props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul>
                        {comments}
                    </ul>
                    <CommentForm addComment={props.addComment} dishId={props.dish.id}></CommentForm>
                </div>
            </div>
        </div>

    );
}

export default DishDetail;
