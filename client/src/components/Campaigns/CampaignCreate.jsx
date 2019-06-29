import React, { Component } from 'react';
import Auth from '../../modules/Auth';
import NotificationSystem from 'react-notification-system';

export const Rewards = (props) => {
  return (
<div className="container">	
  
 
  
  
  
  <section className="card p-3">
    <div className="card-body px-3 py-0">
      <div className="row">
        <div className="col-lg-8">
            <form className="form-horizontal form-bordered" onSubmit={props.formHandler}>
              
              
            
                <div className="tasks-fieldset">
                  <div className="row">
                    <h3 className="mb-0">Rewards</h3>
                  </div>
                  {props.renderRewardsForm()}
                  <div className="row">
                    <button
                      className="btn btn-primary mt-3 mb-3"
                      onClick={props.handleAddReward}>
                      + Add Reward
                    </button>
                  </div>
                </div>
                <div className="text-center">
                    <input type="submit" className="mb-1 btn btn-primary"/> 
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
    
  );
}
const Story = (props) => {
    return(
<div className="container">	
  <section className="card p-3">
          <div className="card-body px-3 py-0" style={{display: 'block'}}>
            <div className="row">
              <div className="col-lg-8">
                <form className="form-horizontal form-bordered" method="get">
                  <div className="form-group row">
                    <label className="col-lg-3 control-label pt-2">Project Video</label>
                    <div className="col-lg-9">
                      <div className="avatar-upload">
                        <div className="avatar-edit">
                          
                          <input type="file" onChange={props.change_handler} name="campaign[project_video]" id="imageUploa" />
                        </div>
                        <div className="avatar-preview">
                          <div id="imagePreview" style={{backgroundColor: '#fff'}}>
                          </div>
                        </div>
                        <label htmlFor="imageUpload" className="px-3 py-2 w-100">
                          <p className="text-primary mb-1">Choose video from your Computer</p>
                          <p className="mb-1">MOV, MPEG, AVI, MP4, 3GP, WMV, or FLV • 5GB file limit</p>
                        </label>
                      </div>
                      <p className="mb-0">
                        Choose a video from your computer MOV, MPEG, AVI, MP4, 3GP, WMV, or FLV • 5GB file limit Have fun – add a video! Projects with a video have a much higher chance of success. For a dose of inspiration, check out the Creator Handbook. Need some help? Visit our Creator FAQ.
                      </p>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-lg-3 control-label pt-2" htmlFor="project_title">Project description</label>
                    <div className="col-lg-9">
                      <p className="mb-0">
                        Use your project description to share more about what you’re raising funds to do and how you plan to pull it off. It’s up to you to make the case for your project.
                      </p>
                      
                      <textarea onChange={props.change_handler} name="campaign[project_description]" className="form-control" id="project_des" defaultValue={""} />
                    </div>
                  </div>
                  {/*<div className="form-group row">
                    <label className="col-lg-3 control-label pt-2" htmlFor="project_title">Request help from the community</label>
                    <div className="col-lg-9">
                      <p className="mb-0">
                        List the skills, resources, or expertise from others that could help enhance your project. If someone can contribute, they can start a dialogue directly from your project page.
                      </p>
                      <label className="col-lg-3 control-label pt-2" htmlFor="project_title">Project need (optional)</label>
                      
                      <textarea className="form-control" maxLength={140} placeholder="Painting the Sistine Chapel will require extravagant but cost-effective colors. Are you a color mixologist who'd like to help?" id="project_title" defaultValue={""} />
                      <span id="charlimit"><strong className="words-leftpn">140 words left</strong></span>
                      <textarea className="form-control" maxLength={140} placeholder="Looking for an advanced belayer to hoist us up 68 feet. Otherwise, we’ll have to resort to rickety scaffolding and painting on our backs!" id="project_title" defaultValue={""} />
                      <span id="charlimit"><strong className="words-leftpn">140 words left</strong></span>
                      <textarea className="form-control" maxLength={140} placeholder="Do you have experience with image projection onto rounded, uneven surfaces? Please get in touch!" id="project_title" defaultValue={""} />
                      <span id="charlimit"><strong className="words-leftpn">140 words left</strong></span>
                    </div>
                  </div>*/}
                  <div className="form-group row">
                    <label className="col-lg-3 control-label pt-2" htmlFor="project_title">Risks and challenges</label>
                    <div className="col-lg-9">
                      <label className="control-label pt-2" htmlFor="project_title">What are the risks and challenges that come with completing your project, and how are you qualified to overcome them?</label>
                      <p className="mb-0">
                        Every project comes with its own unique risks and challenges. Let your backers know how you’re prepared to overcome these challenges by setting proper expectations and communicating anything that could cause delays or changes in your production plan.
                        <br /> Please mention if you’re still in the process of completing any past projects or if your project requires approval or premarket review from an outside company or agency before you can distribute rewards.
                        <br /> Being fully transparent and addressing these potential challenges from the start will help backers understand that your project is a work in progress, and that you’ve thought through all of the possible outcomes.
                      </p>
                      <textarea onChange={props.change_handler} name="campaign[risk_and_challenge]" className="form-control" id="risks" defaultValue={""} />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-lg-3 control-label pt-2" htmlFor="project_title">Project FAQs</label>
                    <div className="col-lg-9">
                      <p className="mb-0">
                        You can add frequently asked questions to the FAQ tab on your project page once it goes live. Learn more
                      </p>
                    </div>
                  </div>
                  <div className="tasks-fieldset">
                    <div className="row text-center">
                    <h3 className="mb-0">Project FAQs</h3>
                    </div>
                    {props.renderProjectFaqForm()}
                    <div className="row">
                    <button
                      className="btn btn-success"
                      onClick={props.handleAddFaq}>
                      + Add FAQ
                    </button>
                    </div>
                  </div>
                  <div className="text-center">
                      <input type="submit" className="mb-1 btn btn-primary"/> 
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
  {/*<section className="card p-3">
    <div className="card-body px-3 py-0">
      <div className="row">
        <div className="col-lg-8">
        <form className="form-horizontal form-bordered" onSubmit={props.formHandler}>
        
        
            
            
         <div className="form-group row">
          <label className="col-lg-3 control-label pt-2" htmlFor="category">Category</label>
          <div className="col-lg-9">
            <select required={true} defaultValue="" name="campaign[category_id]" onChange={props.change_handler} className="form-control mb-1">
                <option value="">Select one--</option>
                {props.category_options}
            </select>
          </div>
        </div>   
        <div className="form-group row">
          <label className="col-lg-3 control-label pt-2" htmlFor="country">Country</label>
          <div className="col-lg-9">
            <input type="text" onChange={props.change_handler} name="campaign[country]" className="form-control" id="country" />
          </div>
        </div>
        
        

        
        
        <div className="form-group row">
          <label className="col-lg-3 control-label pt-2">Project Video</label>
          <div className="col-lg-9">
            <div className="avatar-upload">
              <div className="avatar-edit">
                <input type="file" onChange={props.change_handler} name="campaign[project_video]" id="videoUpload" />
              </div>
              
              <label htmlFor="videoUpload" className="px-3 py-2 bg-white w-100">
                <p className="text-primary mb-1">Choose Project Video from your Computer</p>
                
              </label>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-lg-3 control-label pt-2" htmlFor="project_des">Project Description</label>
          <div className="col-lg-9">
            <textarea onChange={props.change_handler} name="campaign[project_description]" className="form-control" id="project_des" defaultValue={""} />
            <span id="charlimit"><strong className="words-leftd">200 characters left</strong></span>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-lg-3 control-label pt-2" htmlFor="risks">Risks and Challenges</label>
          <div className="col-lg-9">
            <textarea onChange={props.change_handler} name="campaign[risk_and_challenge]" className="form-control" id="risks" defaultValue={""} />
          </div>
        </div>
        
         <div className="form-group row">
              <label className="col-lg-3 control-label pt-2">Project Image</label>
              <div className="col-lg-9">
                <div className="avatar-upload">
                  <div className="avatar-edit">
                    <input type="file" id="imageUpload" onChange={props.change_handler} name="campaign[project_image]" />
                  </div>
                  <div className="avatar-preview">
                    <div id="imagePreview" style={{backgroundColor: '#fff'}}>
                    </div>
                  </div>
                  <label htmlFor="imageUpload" className="px-3 py-2 bg-white w-100">
                    <p className="text-primary mb-1">Choose an Image from your Computer</p>
                    <p className="mb-1">This is the main image associated with your project. Make it count!</p>
                    <p className="mb-1">JPEG, PNG, GIF, or BMP • 50MB file limit</p>
                  </label>
                </div>
                <p className="mb-0">
                  This is the first thing that people will see when they come across your project. Choose an image that’s crisp and text-free.
                </p>
              </div>
            </div>
        
            <div className="form-group row">
              <label className="col-lg-3 control-label pt-2" htmlFor="project_title">Project Title</label>
              <div className="col-lg-9">
                <input name="campaign[project_title]" onChange={props.change_handler} className="form-control" id="project_title" />
                <span id="charlimit"><strong className="words-leftt">60 characters left</strong></span>
                <p className="mb-0">
                  Our search looks through words from your project title and blurb, so make them clear and descriptive of what you’re making. Your profile name will be searchable, too.
                  These words will help people find your project, so choose them wisely! Your name will be searchable too.
                </p>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-lg-3 control-label pt-2" htmlFor="short_blurb">Short Blurb</label>
              <div className="col-lg-9">
                <textarea name="campaign[short_blurb]" onChange={props.change_handler} className="form-control" id="short_blurb" defaultValue={""} />
                <span id="charlimit"><strong className="words-lefts">135 characters left</strong></span>
                <p className="mb-0">
                  Give people a sense of what you’re doing. Skip “Help me” and focus on what you’re making.
                </p>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-lg-3 control-label pt-2" htmlFor="location">Project Location</label>
              <div className="col-lg-9">
                <input type="text" name="campaign[project_location]" onChange={props.change_handler} className="form-control" id="location" />
              </div>
            </div>
            
            <div className="form-group row">
              <label className="col-lg-3 control-label pt-2" htmlFor="duration">Funding Duration</label>
              <div className="col-lg-9">
                <input type="text" name="campaign[funding_duration]" onChange={props.change_handler} className="form-control" id="duration" />
              </div>
            </div>
           
            <div className="form-group row">
              <label className="col-lg-3 control-label pt-2" htmlFor="goal">Funding Goal</label>
              <div className="col-lg-9">
                <input type="text" name="campaign[funding_goal]" onChange={props.change_handler} className="form-control" id="goal" />
              </div>
            </div>            
        <div className="tasks-fieldset">
          <div className="row text-center">
          <h3 className="mb-0">Project FAQs</h3>
          </div>
          {props.renderProjectFaqForm()}
          <div className="row">
          <button
            className="btn btn-success"
            onClick={props.handleAddFaq}>
            + Add FAQ
          </button>
          </div>
        </div>
        <div className="text-center">
            <input type="submit" className="mb-1 btn btn-primary"/> 
        </div>
        </form>
        </div>
      </div>
    </div>
  </section> */}
</div>
    )
}

const Basics = (props)=> {
  return(
  <div className="container">
    <section className="card p-3">
        <div className="card-body px-3 py-0" style={{display: 'block'}}>
            <div className="row">
                <div className="col-lg-8">
                    <form className="form-horizontal form-bordered" onSubmit={props.formHandler}>
                        <div className="form-group row">
                            <label className="col-lg-3 control-label pt-2">Project Image</label>
                            <div className="col-lg-9">
                                <div className="avatar-upload">
                                    <div className="avatar-edit">
                                        <input type="file" name="campaign[project_image]" id="imageUpload" accept=".png, .jpg, .jpeg" />
                                    </div>
                                    <div className="avatar-preview">
                                        <div id="imagePreview" style={{backgroundColor: '#fff'}}>
                                        </div>
                                    </div>
                                    <label htmlFor="imageUpload" className="px-3 py-2 w-100">
                                        <p className="text-primary mb-1">Choose an Image from your Computer</p>
                                        <p className="mb-1">This is the main image associated with your project. Make it count!</p>
                                        <p className="mb-1">JPEG, PNG, GIF, or BMP • 50MB file limit</p>
                                    </label>
                                </div>
                                <p className="mb-0">
                                    This is the first thing that people will see when they come across your project. Choose an image that’s crisp and text-free.
                                </p>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-lg-3 control-label pt-2" htmlFor="project_title">Project Title</label>
                            <div className="col-lg-9">
                                <input type="text" onChange={props.change_handler} name="campaign[project_title]" className="form-control" id="project_title" />
                                <span id="charlimit"><strong className="words-leftt">60 words left</strong></span>
                                <p className="mb-0">
                                    Our search looks through words from your project title and blurb, so make them clear and descriptive of what you’re making. Your profile name will be searchable, too. These words will help people find your project, so choose them wisely! Your name will be searchable too.
                                </p>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-lg-3 control-label pt-2" htmlFor="project_des">Short Blurb</label>
                            <div className="col-lg-9">
                                <textarea className="form-control" onChange={props.change_handler} name="campaign[short_blurb]" id="project_des" defaultValue={ ""} />
                                <span id="charlimit"><strong className="words-leftd">135 words left</strong></span>
                                <p className="mb-0">
                                    Give people a sense of what you’re doing. Skip “Help me” and focus on what you’re making.
                                </p>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-lg-3 control-label pt-2" htmlFor="project_des">Category</label>
                            <div className="col-lg-9">
                                <select required={true} defaultValue="" name="campaign[category_id]" onChange={props.change_handler} className="form-control mb-1">
                                    <option value="">Select one--</option>
                                    {props.category_options}
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-lg-3 control-label pt-2" htmlFor="project_title">Project Location</label>
                            <div className="col-lg-9">
                                <input type="text" name="campaign[project_location]" onChange={props.change_handler} className="form-control" id="project_title" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-lg-3 control-label pt-2" htmlFor="project_title">Funding Duration</label>
                            <div className="col-lg-9">
                                <div className="row duration">
                                    {/* <div className="col-4">
                                        <input type="radio" defaultValue="numbers of day" /><span>Number of days</span>
                                    </div>*/ }
                                    <div className="col-8 in-ry">
                                        <input type="text" onChange={props.change_handler} name="campaign[funding_duration]" className="form-control" id="project_title" />
                                        <small>Up to 60 days, but we recommend 30 or fewer</small>
                                    </div>
                                </div>
                                { /* <div className="row duration-ry">
                                    <div className="col-4">
                                        <input type="radio" defaultValue="numbers of day" /><span>End on Date $ Time</span>
                                    </div>
                                    <div className="col-8">
                                        <input type="date" className="form-control" />
                                    </div>
                                </div>
                                <p>Projects with shorter durations have higher success rates. You won’t be able to adjust your duration after you launch.</p> */}
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-lg-3 control-label pt-2" htmlFor="project_title">Funding Goal</label>
                            <div className="col-lg-9">
                                <input type="text" onChange={props.change_handler} name="campaign[funding_goal]"  className="form-control" id="project_title" placeholder="$ 0" />
                                <p className="mb-0">
                                    Funding on Kickstarter is all-or-nothing. It’s okay to raise more than your goal, but if your goal isn’t met, no money will be collected. Your goal should reflect the minimum amount of funds you need to complete your project and send out rewards, and include a buffer for payments processing fees.
                                    <br />
                                    <br /> If your project is successfully funded, the following fees will be collected from your funding total: Kickstarter’s 5% fee, and payment processing fees (between 3% and 5%). If funding isn’t successful, there are no fees.
                                </p>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-lg-3 control-label pt-2" htmlFor="project_title">Project collaborators</label>
                            <div className="col-lg-9">
                                <p className="mb-0">
                                    Grant your teammates access to help with your project.
                                </p>
                                <button type="button" className="btn btn-primary mb-2">Add collaborators</button>
                            </div>
                        </div>
                        
                        
                    </form>
                </div>
            </div>
        </div>
    </section>

</div>
  );
  
}
const Profile = (props) => {
  return(
    <section className="card p-3">
      <div className="card-body px-3 py-0" style={{display: 'block'}}>
        <div className="row">
          <div className="col-lg-8">
            <form className="form-horizontal form-bordered" method="get">
              <div className="form-group row">
                <label className="col-lg-3 control-label pt-2">Profile Photo</label>
                <div className="col-lg-9">
                  <div className="avatar-upload">
                    <div className="avatar-edit">
                      <input type="file" onChange={props.change_handler}  name="campaign[user_attribures][profile_picture]" id="imageUpload" accept=".png, .jpg, .jpeg" />
                    </div>
                    <div className="avatar-preview">
                      <div id="imagePreview" style={{backgroundColor: '#fff'}}>
                      </div>
                    </div>
                    <label htmlFor="imageUpload" className="px-3 py-2 w-100">
                      <p className="text-primary mb-1">Choose an Image from your Computer</p>
                      <p className="mb-1">Choose an image from your computer JPEG, PNG, GIF, or BMP • 200MB file limit</p>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 control-label pt-2" htmlFor="project_title">Firstname</label>
                <div className="col-lg-9">
                  <input onChange={props.change_handler}  name="campaign[user_attribures][firstname]" type="text" className="form-control" />
                  <p className="mb-0">
                    Heads up: Once you launch a project, you cannot make changes to your name on Kickstarter.
                  </p>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 control-label pt-2" htmlFor="project_title">Lastname</label>
                <div className="col-lg-9">
                  <input onChange={props.change_handler}  name="campaign[user_attribures][lastname]" type="text" className="form-control" />
                  <p className="mb-0">
                    Heads up: Once you launch a project, you cannot make changes to your name on Kickstarter.
                  </p>
                </div>
              </div>
              {/*<div className="form-group row">
                <label className="col-lg-3 control-label pt-2" htmlFor="project_title">Facebook</label>
                <div className="col-lg-9">
                  <p className="mb-0">
                    <img src="images/fb.png" width={30} height={30} /><span>facebook connect</span>
                  </p>
                </div>
              </div>*/}
              <div className="form-group row">
                <label className="col-lg-3 control-label pt-2"  htmlFor="project_title">Biography</label>
                <div className="col-lg-9">
                  <textarea onChange={props.change_handler} name="campaign[user_attribures][biography]" className="form-control" defaultValue={""} />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 control-label pt-2" htmlFor="project_title">Your Location</label>
                <div className="col-lg-9">
                  <input onChange={props.change_handler}  name="campaign[user_attribures][location]" type="text" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 control-label pt-2" htmlFor="project_title">Website</label>
                <div className="col-lg-9">
                  <input type="url" onChange={props.change_handler} name="campaign[user_attribures][website]" className="form-control" />{/*<span className="btn btn-primary mt-2">Add</span>*/}
                  <p className="mb-0">Some suggestions: Link to your blog, portfolio, Twitter, Instagram, etc.</p>
                </div>
              </div>
              {/*<div className="form-group row">
                <label className="col-lg-3 control-label pt-2" htmlFor="project_title">Google Analytics</label>
                <div className="col-lg-9">
                  <input type="text" className="form-control" placeholder="UA-XXXXXXXX-X" />
                  <p className="mb-0">Enter your tracking ID to enable Google Analytics for your project. Check out our FAQ for more info.</p>
                </div>
              </div>*/}
              <div className="text-center">
                  <input type="submit" className="mb-1 btn btn-primary"/> 
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    
  );
}


export default class CampaignCreate extends Component {
    constructor(props){
        super(props);
        this.emptyReward = {
            title: '',
            id: null,
            errors: {},
            _destroy: false
        };
        this.emptyFaq = {
            title: '',
            _destroy: false,
            description: ''
        }
        this.state = {
            current_step: 1,
            loading: false,
            category_options: [],
            last_step: 4,
            form: {},
            formData: new FormData(),
            rewards_attributes: [Object.assign({}, this.emptyReward)],
            project_faqs_attributes: [Object.assign({}, this.emptyFaq)]

        }
        this.formSubmit = this.formSubmit.bind(this);
        this.update = this.update.bind(this);
        this.onChange = this.onChange.bind(this);
        this.renderRewardForm = this.renderRewardForm.bind(this);
        this.handleAddReward = this.handleAddReward.bind(this);
        this.handleRemoveReward = this.handleRemoveReward.bind(this);
        this.renderProjectFaqForm = this.renderProjectFaqForm.bind(this);
        this.handleAddFaq = this.handleAddFaq.bind(this);

    }

    handleRemoveReward(reward,counter) {
        reward._destroy = true;
        this.state.formData.append(`campaign[rewards_attributes][${counter}][_destroy]`,"true")
        this.setState({ rewards_attributes: this.state.rewards_attributes});
      }

    handleAddReward(e) {
        e.preventDefault();
        this.state.rewards_attributes.push(Object.assign({}, this.emptyReward))
        this.setState({rewards_attributes: this.state.rewards_attributes })
        
    }
      

    renderRewardForm() {
        let counter = 0;
        return this.state.rewards_attributes.map((reward, index) => {
          if (reward._destroy === false) {
            
            
            
            
            let taskDOM = (
              <div className="form-group row" key={index}>
              <button
                className="btn btn-danger"
                style={{ padding: '5px 10px', float: 'right' , 'position': 'absolute' , 'right': '-15px' }}
                onClick={e => this.handleRemoveReward(reward,index)}>
                X
              </button>
              <label className="col-lg-3 control-label pt-2" htmlFor="project_title">Reward {counter + 1}</label>
              
              <div className="col-lg-9">
                  <div className="ay">
                      
                      <table className="table table-bordered">
                          <tbody>
                              <tr>
                                  <td width="30%">Title</td>
                                  <td>
                                    <input type="text" onChange={this.onChange} name={`campaign[rewards_attributes][${index}][title]`} className="form-control" />
                                  </td>
                              </tr>
                              
                              <tr>
                                  <td width="30%">Pledge Amount</td>
                                  <td>
                                    <input type="text" onChange={this.onChange} name={`campaign[rewards_attributes][${index}][pledge_amount]`} className="form-control" id="r_amount" />
                                  </td>
                              </tr>

                              <tr>
                                  <td width="30%">Description</td>
                                  <td>
                                      <input type="text" name={`campaign[rewards_attributes][${index}][description]`} onChange={this.onChange} className="form-control"/>
                                      <br />
                                      
                                  </td>
                              </tr>
                              <tr>
                                  <td width="30%">Estimated Delivery</td>
                                  <td>
                                      {/*<select className="form-control">
                                          <option>august</option>
                                          <option>january</option>
                                          <option>febuary</option>
                                      </select>
                                      <select className="form-control">
                                          <option>2018</option>
                                          <option>2016</option>
                                          <option>2015</option>
                                      </select>*/}
                                      <input type="date" name={`campaign[rewards_attributes][${index}][estimated_delivery]`}onChange={this.onChange} className="form-control" id="r_date" />
                                  </td>
                              </tr>
                              {/* <tr>
                                  <td width="30%">Shipping Details</td>
                                  <td>
                                      <select className="form-control">
                                          <option value="none">No shipping involved</option>
                                          <option value="restricted">Only ships to certain countries</option>
                                          <option value="unrestricted">Ships anywhere in the world</option>
                                      </select>
                                  </td>
                              </tr>
                              <tr>
                                  <td width="30%">Limit availability</td>
                                  <td>
                                      <input type="radio" /><span> Enable reward limit</span></td>
                              </tr> */}
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
                      
            
            
              
            );
            counter++;
      
            return taskDOM;
          } else {
            return null;
          }
        });
    }

    handleAddFaq(e){
        e.preventDefault();
        this.state.project_faqs_attributes.push(Object.assign({}, this.emptyReward))
        this.setState({project_faqs_attributes: this.state.project_faqs_attributes })

    }
    handleRemoveFaq(faq,counter){
        faq._destroy = true;
        this.state.formData.append(`campaign[project_faqs_attributes][${counter}][_destroy]`,"true")
        this.setState({ project_faqs_attributes: this.state.project_faqs_attributes});

    }
    renderProjectFaqForm(){
        let counter = 0;
        return this.state.project_faqs_attributes.map((faq, index) => {
          if (faq._destroy === false) {
            let taskDOM = (
              <div className="reward-form mt-2" key={index}>
                <div className="">
                   <div className="row my-3" style={{ marginBottom: 5 }}>
                    <button
                      className="btn btn-danger"
                      style={{ padding: '5px 10px', float: 'right', "position":"absolute", "right":"15px" }}
                      onClick={e => this.handleRemoveFaq(faq,index)}>
                      X
                    </button>
                    <label>
                      <h4>FAQ {counter + 1}</h4>
                    </label>
                  </div>
                  <div className="form-group row">
                    <label className="col-lg-3 control-label pt-2" htmlFor="f_title">Title</label>
                    <div className="col-lg-9">
                      <input type="text" name={`campaign[project_faqs_attributes][${index}][title]`} onChange={this.onChange} className="form-control" id="f_title" />
                    </div>
                  </div>
                  
                  <div className="form-group row">
                    <label className="col-lg-3 control-label pt-2" htmlFor="f_des">Description</label>
                    <div className="col-lg-9">
                      <input type="text" name={`campaign[project_faqs_attributes][${index}][description]`} onChange={this.onChange} className="form-control" id="f_des" />
                    </div>
                  </div>
                   
                </div>
              </div>
            );
            counter++;
      
            return taskDOM;
          } else {
            return null;
          }
        });

    }

    formSubmit(e){
        e.preventDefault();
        if(this.state.current_step < this.state.last_step){
            this.setState({
                current_step: this.state.current_step + 1
            })
        }else if(this.state.current_step === this.state.last_step){
            this.setState({
                loading: true
            })
            fetch(`/api/campaigns`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${Auth.getToken()}`
                },
                body: this.state.formData
            })
            .then(function(response) {
                // response.status     //=> number 100–599
                // response.statusText //=> String
                // response.headers    //=> Headers
                // response.url        //=> String
        
                // check response status
                
                return response.json();
            
                // return response.text()
            }, function(error) {
                console.log(error.message); //=> String
            })
            .then(response => {
                console.log(response);
                    if(response.status >= 200 && response.status < 300){
                        
                        
                        this._notificationSystem.addNotification({
                            message: response.message,
                            level: 'success'
                        });
                        this.setState({
                            loading: false
                        })
                        this.props.location.push(`/profile`);
                        // console.log(this.props);
        
        
                        
        
        
                    } else if(response.status >= 400){
                        let message;
                        if (response.message){
                            message = response.message
                        } else if(response.error){
                            message = response.error
                        } else {
                            message= "Error Occured"
                        }
        
                        this._notificationSystem.addNotification({
                            message: message,
                            level: 'error'
                        });
                        
                        this.setState({
                            loading: false,
                        })
                        
                    }  
                }
            )
            .catch(e =>{
                console.log(e);
            });


        }
    
    
    }
    onChange(e){
        // console.log(e.target.type)
        if(e.target.type === 'file'){
            this.update(e.target.name,e.target.files[0])

        }else{
            this.update(e.target.name,e.target.value);

        }
        
        
  
      }
    update(key,value){
        // values = {}
        const {form} = this.state
        form[key] = value
        this.state.formData.append(`${key}`,value);
        // values
        console.log(`${key} ${value}`);
        this.setState({form})
  
      }

    componentDidMount(){
        this._notificationSystem = this.refs.notificationSystem;
        if(this.state.current_step === 1){
            this.setState({
                loading: true
            });
            fetch('/api/categories', {
                method: "GET",
                
              })
                .then(function(response) {
                  // response.status     //=> number 100–599
                  // response.statusText //=> String
                  // response.headers    //=> Headers
                  // response.url        //=> String
    
                  return response.json();
                }, function(error) {
                  console.log(error.message); //=> String
                })
                .then(response => {
                    if(response.status >=200 && response.status < 300){
                        this.setState({loading: false, category_options: response.categories},()=>{
                            console.log(this.state);
                        })
      
                    } else{
                        this.setState({loading: false})
                        this._notificationSystem.addNotification({
                            message: 'Something went Wrong',
                            level: 'error'
                        });
                    }

                })
                .catch(e => {
                    // console.log(this.props);
                    console.log(e);
                    
    
                });
        }
        
    }
    
    render() {
        var step;
        let optionItems = this.state.category_options.map((category) =>
                <option value={category.id} key={category.name}>{category.name}</option>
            );

        switch(this.state.current_step) {
            
            case 4:
              step = <Basics category_options={optionItems} change_handler={this.onChange} formHandler={this.formSubmit}/>
                break;
              
            case 2:
              
                step = <Rewards handleAddReward={this.handleAddReward} renderRewardsForm={this.renderRewardForm} change_handler={this.onChange} category_options={optionItems} formHandler={this.formSubmit}/>
                break;
            case 3:
                step = <Story handleAddFaq={this.handleAddFaq} renderProjectFaqForm={this.renderProjectFaqForm} change_handler={this.onChange} formHandler={this.formSubmit}/>
                break;
            case 1:
              step = <Profile change_handler={this.onChange} formHandler={this.formSubmit} />
              break;
            default:
                step = <Basics />
        }
        if(this.state.loading){
            return(
                <React.Fragment>
                    <NotificationSystem ref="notificationSystem" />
                    
                    <div className="loading-overlay-showing">
                        <div className="bounce-loader">
                            <div className="bounce1"></div>
                            <div className="bounce2"></div>
                            <div className="bounce3"></div>
                        </div>
                    </div>
              </React.Fragment>
            );
        } else{
            return (
                <React.Fragment>
                    <NotificationSystem ref="notificationSystem" />
                    <div className="container mb-4">
                    
                     <div className="wizard-progress wizard-progress-lg mt-4">
                      <div className="steps-progress">
                        <div className="progress-indicator" style={{width: '0%'}} />
                      </div>
                      <ul className="nav wizard-steps">
                        <li className="nav-item active">
                          <a className="nav-link active show" href={null} data-toggle="tab"><span>1</span>Basic</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href={null} data-toggle="tab"><span>2</span>Project Info</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href={null} data-toggle="tab"><span>3</span>About You</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href={null} data-toggle="tab"><span>4</span>Account</a>
                        </li>
                      </ul>
                    </div>
                        
                     <center>
                     <h2 className="py-4"> New Campaign </h2>
                     </center>
                        {step}
                                
                    </div>
                        
                </React.Fragment>

    
            
            )

        }
        
    }
}
