import { Button, Card } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import FormControl from 'react-bootstrap/FormControl';
import { Component } from 'react';
import axios from 'axios';

class AddNewEntry extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bookName: '',
            author: '',
            startDate: '',
            endDate: ''
        };
    }

    handleChange = e => (this.setState({
        [e.target.name]: e.target.value,
    }));

    handleSubmit = e => {
        e.preventDefault();

        axios.post('http://localhost:5000/api/readEntry/create', this.state)
            .then(() => {
                console.log("Sent get reuest");
                this.props.newBook(this.state);
            })
            .catch(err => {
                console.log("Error" + err);
            })
    }


    render() {
        return (
            <Card className="p-4" style={{ "background-color": "rgb(207, 202, 221)" }}>
                <Card.Body>
                    <form onSubmit={this.handleSubmit}>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text >Book Details</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl name='bookName' placeholder="BookName" onChange={this.handleChange} />
                            <FormControl name='author' placeholder="Author" onChange={this.handleChange} />
                            <FormControl name='startDate' type="Date" selected={null} placeholder="StartDate" onChange={this.handleChange} />
                            <FormControl name='endDate' type="Date" placeholder="EndDate" onChange={this.handleChange} />
                            <Button type="submit" style={{ "background-color": "rgb(141, 122, 194)" }}>Add New Entry</Button>
                        </InputGroup>
                    </form>
                </Card.Body>
            </Card>
        )
    }

}

export default AddNewEntry;