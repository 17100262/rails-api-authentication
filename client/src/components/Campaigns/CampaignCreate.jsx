import React, { Component } from 'react';
import Auth from '../../modules/Auth';
import NotificationSystem from 'react-notification-system';

export const Step1 = (props) => {
  return (

    <form className="form-horizontal form-bordered text-center" onSubmit={props.formHandler}>
            <label className="control-label h5 pt-2 mb-3" htmlFor="inputDefault">Category</label>
        <div className="form-group row">
            <div className="col-lg-8 offset-lg-2">
                <select required={true} defaultValue="" name="campaign[category_id]" onChange={props.change_handler} className="form-control mb-3">
                    <option value="">Select one--</option>
                    {props.category_options}
                    
                </select>
                {/* <input type="text" name="category" className="form-control" id="inputDefault" /> */}
            </div>
        </div>
            <label className="control-label h5 pt-2 mb-3" htmlFor="inputDefault">Country</label>
        <div className="form-group row">
            <div className="col-lg-8 offset-lg-2">
                <input type="text" onChange={props.change_handler} name="campaign[country]" className="form-control" id="inputDefault" />
            </div>
        </div>
            <label className="control-label h5 pt-2 mb-3" htmlFor="inputDefault">Project Video</label>
        <div className="form-group row">
            <div className="col-lg-8 offset-lg-2">
            <div class="fileupload fileupload-new" data-provides="fileupload">
				<div class="input-append">
					<div class="uneditable-input">
						
						<span class="fileupload-preview"></span>
					</div>
					<span class="btn btn-default btn-file">
						<span class="fileupload-exists">Change</span>
						<span class="fileupload-new">Select file</span>
						<input type="file" onChange={props.change_handler} name="campaign[project_video]" id="inputDefault" />
					</span>
					<a href="javascript:void(0)" class="btn btn-default fileupload-exists" data-dismiss="fileupload">Remove</a>
				</div>
			</div>
                
            </div>
        
        </div>
            <label className="control-label h5 pt-2 mb-3" htmlFor="inputDefault">Project Description</label>
        <div className="form-group row">
            <div className="col-lg-8 offset-lg-2">
                <textarea onChange={props.change_handler} name="campaign[project_description]" className="form-control" id="inputDefault" />
            </div>
        </div>
            <label className="control-label h5 pt-2 mb-3" htmlFor="inputDefault">Risks and Challenges</label>
        <div className="form-group row">
            <div className="col-lg-8 offset-lg-2">
                <textarea onChange={props.change_handler} name="campaign[risk_and_challenge]" className="form-control" id="inputDefault" />
            </div>
        </div>
        <div className="tasks-fieldset">
          <center>
          <h2 className="mb-0">Rewards</h2>
          </center>
          {props.renderRewardsForm()}
          <button
            className="btn btn-success mt-4"
            onClick={props.handleAddReward}>
            + Add Reward
          </button>
        </div>
        <center>
            <input className="form-control" type="submit" className="mb-1 mt-1 mr-1 btn btn-primary"/> 
        </center>
    </form>
    
  );
}
const Step2 = (props) => {
    return(
        <form className="form-horizontal form-bordered text-center" onSubmit={props.formHandler}>
        
            <label className="control-label h5 pt-2 mb-3" htmlFor="inputDefault">Project Image</label>
        <div className="form-group row">
            <div className="col-lg-8 offset-lg-2">
            <div class="fileupload fileupload-new" data-provides="fileupload">
				<div class="input-append">
					<div class="uneditable-input">
						
						<span class="fileupload-preview"></span>
					</div>
					<span class="btn btn-default btn-file">
						<span class="fileupload-exists">Change</span>
						<span class="fileupload-new">Select file</span>
						<input type="file" onChange={props.change_handler} name="campaign[project_image]" id="inputDefault" />
					</span>
					<a href="javascript:void(0)" class="btn btn-default fileupload-exists" data-dismiss="fileupload">Remove</a>
				</div>
			</div>
                
            </div>
        </div>
            <label className="control-label h5 pt-2 mb-3" htmlFor="inputDefault">Project Title</label>
        <div className="form-group row">
            <div className="col-lg-8 offset-lg-2">
                <input name="campaign[project_title]" onChange={props.change_handler} className="form-control" id="inputDefault" />
            </div>
        </div>
            <label className="control-label h5 pt-2 mb-3" htmlFor="inputDefault">Short Blurb</label>
        <div className="form-group row">
            <div className="col-lg-8 offset-lg-2">
                <textarea name="campaign[short_blurb]" onChange={props.change_handler} className="form-control" id="inputDefault" />
            </div>
        </div>

            <label className="control-label h5 pt-2 mb-3" htmlFor="inputDefault">Project Location</label>
        <div className="form-group row">
            <div className="col-lg-8 offset-lg-2">
                <input name="campaign[project_location]" onChange={props.change_handler} className="form-control" id="inputDefault" />
            </div>
        </div>
            <label className="control-label h5 pt-2 mb-3" htmlFor="inputDefault">Funding Duration</label>
        <div className="form-group row">
            <div className="col-lg-8 offset-lg-2">
                <input name="campaign[funding_duration]" onChange={props.change_handler} className="form-control" id="inputDefault" />
            </div>
        </div>
            <label className="control-label h5 pt-2 mb-3" htmlFor="inputDefault">Funding Goal</label>
        <div className="form-group row">
            <div className="col-lg-8 offset-lg-2">
                <input name="campaign[funding_goal]" onChange={props.change_handler} className="form-control" id="inputDefault" />
            </div>
        </div>
        <div className="tasks-fieldset">
          <center>
          <h2 className="mb-0">Project FAQs</h2>
          </center>
          {props.renderProjectFaqForm()}
          <button
            className="btn btn-success mt-4"
            onClick={props.handleAddFaq}>
            + Add Reward
          </button>
        </div>
        <center>
            <input className="form-control" type="submit" className="mb-1 mt-1 mr-1 btn btn-primary"/> 
        </center>
    </form>
    
    )
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
            last_step: 2,
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
              <div className="reward-form" key={index}>
                <div className="form-group">
                  <div className="clearfix" style={{ marginBottom: 5 }}>
                    <button
                      className="btn btn-danger"
                      style={{ padding: '5px 10px', float: 'right' , 'position': 'absolute' , 'right': '15px' }}
                      onClick={e => this.handleRemoveReward(reward,index)}>
                      X
                    </button>
                    <center>
                    <label>
                      <h4>Reward {counter + 1}</h4>
                    </label>
                    </center>
                  </div>

                    <label className="control-label h5 pt-2 mb-3" htmlFor="inputDefault">Title</label>
                  <div className="form-group row">
                    <div className="col-lg-8 offset-lg-2">
                        <input name={`campaign[rewards_attributes][${index}][title]`} onChange={this.onChange}type="text" className="form-control" />
                    </div>
                  </div>
                  
                    <label className="control-label h5 pt-2 mb-3" htmlFor="inputDefault">Pledge Amount</label>
                  <div className="form-group row">
                    <div className="col-lg-8 offset-lg-2">
                        <input type="text" name={`campaign[rewards_attributes][${index}][pledge_amount]`}onChange={this.onChange}className="form-control" />
                    </div>
                 </div>
                  
                    <label className="control-label h5 pt-2 mb-3" htmlFor="inputDefault">Description</label>
                  <div className="form-group row">
                    <div className="col-lg-8 offset-lg-2">
                        <textarea name={`campaign[rewards_attributes][${index}][description]`} onChange={this.onChange} className="form-control" />
                    </div>
                 </div>
                 
                    <label className="control-label h5 pt-2 mb-3" htmlFor="inputDefault">Estimated Delivery</label>
                 <div className="form-group row">
                    <div className="col-lg-8 offset-lg-2">
                        <input type="date" name={`campaign[rewards_attributes][${index}][estimated_delivery]`}onChange={this.onChange} className="form-control" />
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
              <div className="reward-form" key={index}>
                <div className="form-group">
                  <div className="clearfix" style={{ marginBottom: 5 }}>
                    <button
                      className="btn btn-danger"
                      style={{ padding: '5px 10px', float: 'right', "position":"absolute", "right":"15px" }}
                      onClick={e => this.handleRemoveFaq(faq,index)}>
                      X
                    </button>
                    <center>
                    <label>
                      <h4>FAQ {counter + 1}</h4>
                    </label>
                    </center>
                  </div>

                    <label className="control-label h5 pt-2 mb-3" htmlFor="inputDefault">Title</label>
                  <div className="form-group row">
                    <div className="col-lg-8 offset-lg-2">
                        <input name={`campaign[project_faqs_attributes][${index}][title]`} onChange={this.onChange}type="text" className="form-control" />
                    </div>
                  </div>
                  
                  
                    <label className="control-label h5 pt-2 mb-3" htmlFor="inputDefault">Description</label>
                  <div className="form-group row">
                    <div className="col-lg-8 offset-lg-2">
                        <textarea name={`campaign[project_faqs_attributes][${index}][description]`} onChange={this.onChange} className="form-control" />
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
        // console.log(`${key} ${value}`);
        this.setState({form})
  
      }

    componentDidMount(){
        this._notificationSystem = this.refs.notificationSystem;
        if(this.state.current_step == 1){
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
            case 1:
                step = <Step1 handleAddReward={this.handleAddReward} renderRewardsForm={this.renderRewardForm} change_handler={this.onChange} category_options={optionItems} formHandler={this.formSubmit}/>
                break;
            case 2:
                step = <Step2 handleAddFaq={this.handleAddFaq} renderProjectFaqForm={this.renderProjectFaqForm} change_handler={this.onChange} formHandler={this.formSubmit}/>
                break;
            default:
                step = <Step1 />
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
                    <div className="container">
                    
                        <section className="card">
                            <div className="card-body">
                             <center>
                             <h2 className="pb-2"> New Campaign </h2>
                             </center>
                                {step}
                                
                            </div>
                        </section>
                    </div>
                </React.Fragment>

    
            
            )

        }
        
    }
}
