import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';
import { FaCheckCircle, FaExclamationCircle, FaTimes, FaRegCircle } from 'react-icons/fa';
import Datetime from 'react-datetime';
import Select from 'react-select';


export default class SetupEdit extends Component {
    static propTypes = {
        prop: PropTypes
    }
    state = {
        retroCategories: [
            {
                title: 'what went well?',
                id: 1
            },
            {
                title: 'what did we learn?',
                id: 2
            },
            {
                title: 'what can we improve?',
                id: 3
            },
            {
                title: 'what puzzles us?',
                id: 4
            }
        ],
        invitationList: [],
        editMode: false,
        selectedProject: '',
        selectedWeek: '',
        selectedTab: 'tab1',
        link: '',
        roomCode: '',
        invitationItem: '',
        selectedCategory: ''

    }
    options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    templates = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    weeks = [
        { value: 'Week', label: 'Week' },
        { value: '2 Weeks', label: '2 Weeks' },
        { value: '3 Weeks', label: '3 Weeks' },
        { value: '4 Weeks', label: '4 Weeks' }
    ]

    customStyles = {
        dropdownIndicator: (provided, state) => ({
            ...provided,
            color: '#F88440',
            justifyContent: 'flex-start'
        }),
        indicatorSeparator: (provided, state) => ({
            ...provided,
            width: 0

        }),
        indicatorsContainer: (provided, state) => ({
            ...provided
        })

    }

    retroCategoriesrender = (
        this.state.retroCategories.map(cat => (
            <input key={cat.id} type="text" className="form-control col-sm-12 categoty-input" value={cat.title} />
        ))
    );

    categoryEditHandler = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    dropDownHandler = (name, e) => {
        const val = e.value;
        this.setState({
            [name]: val
        })
    }
    onChnageHandler = (e) => {
        e.preventDefault();
        const val = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: val
        })
    }

    formSubmitHandler = () => {
        this.setState({
            selectedTab: 'tab2'
        })
    }

    tabHandler = (selectedTab) => {
        this.setState({
            selectedTab: selectedTab
        })
    }
    invitefFormSubmitHandler = () => {
        this.props.setUpEditData(this.state);
    }

    dateTimeClearHandler = () => {

    }
    copyLinkHandler = (e) => {
        e.preventDefault();
    }

    sendInvitationHandler = (e) => {
        e.preventDefault();
        var joined = this.state.invitationList.concat(this.state.invitationItem);
        this.setState({ invitationList: joined })
    }


    render() {
        return (
            <Tabs className="create-retro-tab" selectedTab={this.state.selectedTab}>
                <div className="tablink-create-retro-group">
                    <TabLink
                        className="tablink-create-retro"
                        activeClassName="active-tablink-create-retro"
                        to="tab1"><FaCheckCircle color="#3B75FA" className="circle-icon" />  Create Retro</TabLink>
                    <TabLink
                        className="tablink-create-retro"
                        activeClassName="active-tablink-create-retro"
                        to="tab2"><FaCheckCircle color="#3B75FA" className="circle-icon" />  Invite Team</TabLink>
                </div>
                <TabContent for="tab1">
                    <div className="container-fluid  home-first-row create-retro-first-row">
                        <div className="row">
                            <div className="col-sm-5 first-col">
                                <form className="create-retro-form">
                                    <div className="form-row">
                                        <div className="form-group col-sm-8">
                                            <label >Project Information</label>
                                            <Select options={this.options} className='select-dropdown' styles={this.customStyles} onChange={(e) => this.dropDownHandler('selectedProject', e)} />
                                        </div>
                                        <div className="form-group col-sm-4">
                                            <label >&nbsp;</label>
                                            <input type="text" className="form-control" placeholder="Sprint Number" />
                                            <small id="emailHelp" className="form-text text-muted hint-text">Optional</small>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label >Choose a Template :</label>
                                        <Select options={this.templates} styles={this.customStyles} className='select-dropdown' onChange={(e) => this.dropDownHandler('selectedCategory', e)} />
                                        <small id="emailHelp" className="form-text text-muted hint-text">&nbsp;</small>
                                    </div>
                                    <div className="form-group custom-input">
                                        <label >Retro Categories <span className='editButton' onClick={this.categoryEditHandler}>{this.state.editMode ? 'Reset' : 'Edit'}</span></label>
                                        {this.retroCategoriesrender}
                                        {this.state.editMode &&
                                            (
                                                <div class="form-row after-editMode">
                                                    <input type="text" className="form-control col-sm-8 categoty-input" />
                                                    <button className="btn btn-primary save-btn col-sm-3">Save</button>
                                                </div>
                                            )
                                        }

                                    </div>
                                </form>
                            </div>
                            <div className="image-holder-step-one col-sm-7">
                                <div className="row create-retro-right-col">
                                    {this.state.retroCategories.map((cat, index) => (
                                        <div key={index} className="col-sm-3">
                                            <div className="category-box">
                                                {cat.title}
                                            </div>
                                        </div>
                                    ))}
                                    <button className="btn btn-primary next-btn col-sm-3" onClick={this.formSubmitHandler}>Next</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </TabContent>
                <TabContent for="tab2">
                    <div className="container-fluid  home-first-row create-retro-first-row invite-section">
                        <div className="row ">
                            <div className="col-sm-5 first-col">
                                <form className="create-retro-form">
                                    <div className="form-row">
                                        <div className="form-group col-sm-4">
                                            <label >Room Code</label>
                                            <input type="text" className="form-control" placeholder="Room Code" value={this.state.roomCode} />
                                        </div>
                                        <div className="form-group col-sm-8">
                                            <label >&nbsp;</label>
                                            <small id="emailHelp" className="form-text text-muted hint-text hint-text-tip"><FaExclamationCircle color="#3B75FA" className="circle-icon" /> Tip</small>
                                            <small id="emailHelp" className="form-text text-muted hint-text-gray">Customize your room code!</small>
                                        </div>
                                    </div>
                                    <div className="form-group joininput">
                                        <label >Share Link</label>
                                        <div className="form-row">
                                            <input type="text" className="form-control col-sm-8" value={this.state.link} />
                                            <button className="btn btn-primary col-sm-3" onClick={this.copyLinkHandler}>Copy Link</button>
                                        </div>
                                    </div>
                                    <div className="form-group custom-input date-input">
                                        <label >Schedule Date &amp; Time <span className='clearButton' onClick={this.dateTimeClearHandler}>Clear</span></label>
                                        <p className="sub-title">Leave this blank if you are strating a retro immediately.</p>
                                        <div className="form-row">
                                            <div className="col-sm-3">
                                                <Datetime className="date-picker" defaultValue='12:00 AM' dateFormat={false} />
                                            </div>
                                            <div className="col-sm-1 mid-date-time">
                                                To
                                            </div>
                                            <div className="col-sm-3">
                                                <Datetime className="date-picker" defaultValue='12:00 PM' dateFormat={false} />
                                            </div>
                                            <div className="col-sm-5">
                                                <Datetime dateFormat="Do MMMM ,YYYY" defaultValue='16th November, 2018' className="date-picker" timeFormat={false} />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-sm-4 mid-date-time">
                                                Reapeat Every
                                            </div>
                                            <div className="col-sm-4">
                                                <Select options={this.weeks} styles={this.customStyles} value={this.state.selectedWeek} placeholder="Select Week..." className='select-dropdown week-select-dropdown' onChange={(e) => this.dropDownHandler('selectedWeek', e)} />
                                            </div>
                                            <div className="col-sm-4 mid-date-time">
                                                On Monday
                                            </div>
                                        </div>
                                        <div className="form-row">

                                            <div className="col-sm-8 offset-sm-4">
                                                <Datetime dateFormat="Do MMMM ,YYYY" defaultValue='16th November, 2018' className="date-picker" timeFormat={false} />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="image-holder-step-two col-sm-7">
                                <div className="row create-retro-right-col invite-right-section">
                                    <form className="create-retro-form">
                                        <div className="form-group inviteinput">
                                            <label >Send Invite</label>
                                            <div className="form-row">
                                                <input type="text" className="form-control col-sm-8" name="invitationItem" value={this.state.invitationItem} onChange={this.onChnageHandler} />
                                                <button className="btn btn-primary col-sm-3" onClick={this.sendInvitationHandler}>Send Invite</button>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                                <div className="row invitation-list-section">
                                    <div className="invitation-list">
                                        <h4>Who's Invited</h4>

                                        <table class='table borderless'>
                                            <thead>
                                                <th>Email</th>
                                                <th>Admin</th>
                                                <th>&nbsp;</th>
                                            </thead>
                                            <tbody>
                                                {this.state.invitationList.map((item, index) => (
                                                    <tr key={index} className="list-item">
                                                        <td>{item}</td>
                                                        <td><FaRegCircle color="#3B75FA" className="circle-icon" /></td>
                                                        <td><FaTimes color="#3B75FA" className="circle-icon" /></td>
                                                    </tr>
                                                ))}

                                            </tbody>
                                        </table>



                                    </div>

                                </div>
                                <button className="btn btn-primary done-btn col-sm-3" onClick={this.invitefFormSubmitHandler}>Done</button>
                            </div>

                        </div>
                    </div>
                </TabContent>
            </Tabs>


        )
    }
}
