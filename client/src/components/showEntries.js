import { Button, Card } from 'react-bootstrap';
import { Component } from 'react';
import moment from 'moment';
import { BsFillTrashFill, BsPencil } from "react-icons/bs";


class showEntries extends Component {

    constructor(props) {
        super(props);
        this.state = {
            popup: false
        }

    }

    clicked(){
        this.setState({
            popup:true
        });
    }




    render() {
        const readEntries = this.props.entryList;
        readEntries.forEach(readEntry => {
            var startD = new Date(readEntry.startDate);
            var endD = new Date(readEntry.endDate);
            readEntry.timeDiff = (endD.getTime() - startD.getTime()) / (1000 * 3600 * 24);
        });
        return (
            <div class="pt-4" style={{ "display": "flex", "flex-wrap": "wrap", "align-content": "stretch", "margin": "5px" }} >
                {readEntries.map(readEntry => (
                    <Card className={"bookCard"}>
                        <Card.Body style={{ "display": "flex" }}>
                            <p style={{ "flex-wrap": "wrap" }}>
                                Book Name : {readEntry.bookName}<br />
                                Author : {readEntry.author}<br />
                                Start date : {moment(readEntry.startDate).format('MMM Do YYYY')}<br />
                                End date : {moment(readEntry.endDate).format('MMM Do YYYY')}<br />
                            </p>
                            <div style={{ "align": "right", "margin": "30px" }}><h1>{readEntry.timeDiff}</h1>Days</div>
                            <div style={{ "display": "grid" }}>
                                <Button type="submit" id={readEntry.bookName} style={{ "background-color": "rgb(141, 122, 194)", "height": "35px", "border-color": "white", "align": "center" }} onClick={() => { this.clicked(); }}><BsFillTrashFill /></Button>
                                {/* {
                                    this.state.popup ? <div class="modal" id={readEntry.bookName} style={{ "background-color": "rgb(255, 0, 0)", "height": "35px", "border-color": "red", "align": "center" }} onClick={() => { this.props.entryDel(readEntry.bookName); this.setState({popup:false})}}><BsFillTrashFill /> ?? </div> : null
                                } */}
                                <Button style={{ "background-color": "rgb(141, 122, 194)", "height": "35px", "border-color": "white" }} ><BsPencil /></Button>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        )
    }

}

export default showEntries;