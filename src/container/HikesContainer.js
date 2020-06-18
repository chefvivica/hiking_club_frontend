import React, { Component } from 'react'
import HikeCard from '../components/HikeCard'
import NewHikeForm from '../components/NewHikeForm'


export class HikesContainer extends Component {

  state = {
    showForm: false,
    searchTerm: '',
  }

  handleClick = () => {
    this.setState(prevState => {
      return {showForm: !prevState.showForm}
    })
  };

  handleSearch = (e) => this.setState({searchTerm : e.target.value})
  

  render() {
    const { hikes, addHike, deleteHike } = this.props
    let filteredHikes = this.props.hikes.filter(hike=> hike.location.toLowerCase().includes(this.state.searchTerm.toLocaleLowerCase()))
    let hikesToRender = []
    filteredHikes? hikesToRender = filteredHikes : hikesToRender = this.props.hikes

    return (
      <div className="hike-container">
        <input placeholder="🔍Search by location ..." value={this.state.searchTerm} onChange={this.handleSearch}/>
        <button onClick={this.handleClick}>
          {this.state.showForm ? "Hide From" : "Schedule a Hike"}
        </button>
        {this.state.showForm ? <NewHikeForm addHike={addHike}/> : null}
        <br></br>
        {hikesToRender.map(hike=> 
          <HikeCard 
            {...hike} 
            key={hike.id} 
            deleteHike={deleteHike}

          />
        )}
      </div>
      
    )
  }
}

export default HikesContainer
