import React, { Component } from 'react'
import Avatar from './Avatar'
import './style.css'

export default class Naqvi extends Component {
    render() {
        return (
            <div className='main'>
                <Avatar size='s with 30*30' type='square'/>
                <Avatar size='s with 30*30' type='round'/>
                <Avatar size='s with 30*30' type='circle'/>
                <Avatar size='m with 60*60' type='square'/>
                <Avatar size='m with 60*60' type='round'/>
                <Avatar size='m with 60*60' type='circle'/>
                <Avatar size='l with 120*120' type='square'/>
                <Avatar size='l with 120*120' type='round'/>
                <Avatar size='l with 120*120' type='circle'/>
                <Avatar size='xl with 200*200' type='square'/>
                <Avatar size='xl with 200*200' type='round'/>
                <Avatar size='xl with 200*200' type='circle'/>
            </div>
        )
    }
}
