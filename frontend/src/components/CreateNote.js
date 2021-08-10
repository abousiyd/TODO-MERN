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
        date: new Date
    }

    componentDidMount = async () => {
        const res = await axios.get('http://localhost:4000/api/users')
        this.setState({users: res.data.map(user => user.username)})
    }
    onSubmit = (e) => {
        e.preventDefault()

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
                            required
                        />
                    </div>

                    <div className='form-group p-2'>
                        <textarea name=''
                            name='content'
                            className='form-control'
                            placeholder='Content'
                            onChange={this.onInputtChange}
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

                    <form type={this.onSubmit} className='btn btn-primary'>
                        Save
                    </form>
                </div>
            </div>
        )
    }
}
