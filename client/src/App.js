import './App.css';
import { Component } from 'react';
import axios from 'axios';
import AddNewEntry from './components/addNewEntry';
import ShowEntries from './components/showEntries';


class App extends Component {
  constructor() {
    super();
    this.state = {
      entries: [],
      bookDet: {
        bookName: '',
        author: '',
        startDate: '',
        endDate: ''
      }
    }
  }

  updateEntries = entries => {
    let newState = this.state;
    newState.entries = entries;
    this.setState(newState);
  }

  updateBookDets = dets => {
    let newState = this.state;
    newState.bookDet = dets;
    this.setState(newState);
    this.getEntries();
  }

  deleteEntry = bookName => {
    axios.get('http://localhost:5000/api/readEntry/delete', { params: { book: bookName } }).then((res) => {
      console.log("Entry deleted" + (res.data));
      this.getEntries();
    }).catch(err => {
      console.log("Err");
    })
  }

  getEntries() {
    axios.get('http://localhost:5000/api/readEntry')
      .then((res) => {
        this.updateEntries(res.data.data);
        console.log(this.state);

      })
      .catch(err => {
        console.log("Error" + err);
      })
  }

  componentDidMount() {
    document.title = "Read-n-Track";
    this.getEntries();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Read-n-Track</p>
        </header>
        <body className="App-body m-5">
          <AddNewEntry newBook={this.updateBookDets}></AddNewEntry>
          <ShowEntries entryList={this.state.entries} entryDel={this.deleteEntry}></ShowEntries>
        </body>
      </div>
    );
  }
}

export default App;
