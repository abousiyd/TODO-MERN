import React, { Component } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


export default class CreateNote extends Component {

    state = {
        users: [],
        userSelected: '',
        title: '',
        content: '',
        date: new Date,
        editing: false,
        _id: ''
    }

    
    componentDidMount = async () => {
        const res = await axios.get('http://localhost:4000/api/users')
        this.setState({
            users: res.data.map(user => user.username),
            userSelected: res.data[0].username
        })
        if(this.props.match.params.id) {
            const res = await axios.get('http://localhost:4000/api/notes/' + this.props.match.params.id)
            console.log(res)
            this.setState({
                title: res.data.title,
                content: res.data.content,
                // date: new Date(res.data.date),
                userSelected: res.data.author,
                editing: true,
                _id: this.props.match.params.id
            })
        }
        
    }
    onSubmit = async (e) => {
        const newNote = {
            title: this.state.title,
            content: this.state.content,
            data: this.state.date,
            author: this.state.userSelected
        }
        if(this.state.editing){
            await axios.post('http://localhost:4000/api/notes/' + this.state._id, newNote)

        }else{
            await axios.post('http://localhost:4000/api/notes', newNote)
        }
        window.location.href = '/'
    }
    onInputtChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onChangeDate = date => {
        this.setState({date})
    }
    render() {
        return (
            <div className='col-md-6 offset-md-3'>
                <div className='card card-body'>
                    <h4>Create a note</h4>
                    {/* SELECT USER */}
                    <div className='form-group p-2'>
                        <select
                            className='form-control'
                            name='userSelect'
                            onChange={this.onInputtChange}
                            value={this.state.selected}
                        >
                            {
                                this.state.users.map(user => 
                                    <option key={user} value={user}>
                                        {user}
                                    </option>
                                )
                            }
                        </select>
                    </div>

                    <div className='form-group p-2'>
                        <input 
                            type='text' 
                            className='form-control' 
                            name='title' 
                            placeholder='title' 
                            onChange={this.onInputtChange}
                            value={this.state.title}
                            required
                        />
                    </div>

                    <div className='form-group p-2'>
                        <textarea name=''
                            name='content'
                            className='form-control'
                            placeholder='Content'
                            onChange={this.onInputtChange}
                            value={this.state.content}
                            required
                        >

                        </textarea>
                    </div>

                    <div className='form-group p-2'>
                        <DatePicker
                            className='form-control'
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                        />
                    </div>

                    <button onClick={this.onSubmit} className='btn btn-primary'>
                        Save
                    </button>
                </div>
            </div>
        )
    }
}
