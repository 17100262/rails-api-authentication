import React from 'react'


const ProjectInfo = function(props){
  return(
    <React.Fragment>
      <div className="project-info-wrapper">
        <div className="project-info">
          <div className="progress progress-striped active bg-success">
            <div style={{height: '54%'}} className="bar" />
          </div>
          <h3 className="mb-0">Funding Goal: {props.campaign.funding_goal} <br />
          </h3>
          {/* <span className="">raised of  $127,000</span> */}
          <h3 className="mb-0">
            <strong>{props.campaign.funding_duration}</strong><br />
          </h3>
          <span className=""> days to go</span>
          {/* <div className="my-3">This project will only be funded if at least $127,000 is raised by January 24, 2020 </div> */}
          <div className="funding-minimum">
            <a className="btn btn-success w-100 text-center" href="#"> Back This Project</a>
            {/*                      <small>$0 minimum</small>
          */}
          </div>
        </div>
        <div className="clear" />
      </div>
      <div className="row mt-4">
      <div className="col-3 text-right">
          <img alt="hello" className="rounded-circle" width={70} height={70} src={props.campaign.user_profile_picture_url}/>
        </div>
        <div className="col-9">
          <div className="author-info">
            {/* <div className="psponsor">Project sponsor </div> */}
            <a href="#">{props.campaign.user_name}</a>
            <p>
              {/* <i className="fa fa-map-marker" aria-hidden="true" /> <b>Canada</b>, Ottawa  */}
            </p>
          </div>
        </div>
        <div className="clear" />
      </div>
    </React.Fragment>
  );
}
export const RewardComp = function(props){
  return(
    <li className="list-unstyled bg-white pt-2 mt-4">
      <div className="px-3">
        <h3>Pledge ${props.reward.pledge_amount} or More </h3>
        {/* <h4 className="mb-0">Donation</h4> */}
        <p className="mb-1"> {props.reward.title} </p>
        <p className="mb-1"> {props.reward.description} </p>
        <h6 className="mb-0">ESTIMATED DELIVERY</h6>
        <p className="mb-2"> {props.reward.estimated_delivery} </p>
        {/* <p className="mb-2">0 Backers </p> */}
      </div>
      <a href="#">
        <div className="min-amount">
          <input type="button" defaultValue={`Fund \$${props.reward.pledge_amount}`} className="btn btn-success w-100" />
        </div>
      </a>
    </li>

  );
}

export const CampaignMainComponent = function(props){
  return(
    <div className="page project-page">
    <div className="container-fluid">
      <div className="card">
        <div className="card-body">
          <div className="tabs">
            {/* Only required for left/right tabs */}
            <ul className="nav nav-tabs nav-justified">
              <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#tab1" aria-expanded="true">Home</a></li>
              <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#backers" aria-expanded="false">Risk and Challenges</a></li>
              <li className="nav-item"><a className="nav-link" href="#updates" data-toggle="tab" aria-expanded="false">Video <strong className="ccounter" id="updates_counter"></strong></a></li>
              <li className="nav-item"><a className="nav-link" href="#comments" data-toggle="tab" aria-expanded="false">Project FAQs<strong className="ccounter" id="comments_counter"></strong>
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <div className="row">
              <div className="col-md-8">
                <div className="tab-content">
                  <div id="tab1" className="tab-pane active">
                    <div className="project-thumb-wrapper-big"><img alt="hello" className="img-fluid" src={props.campaign.project_image_url} /></div>
                    <div className="w_container">
                      <div id="story" className="project-content mt-4">
                        <h3>About</h3>
                        <p>{props.campaign.project_description}</p>
                        <h4>Category </h4>
                        <p>{props.campaign.category_name}</p>
                        <h4>Short Blurb</h4>
                        <p>{props.campaign.short_blurb}</p>
                        <h4>Project Location</h4>
                        <p>{props.campaign.project_location}</p>
                      </div>
                      {/* project-content */}
                    </div>
                    {/* /.tab1 */}
                  </div>
                  <div id="backers" className="tab-pane">
                  {props.campaign.risk_and_challenge}
                    {/* <div className="col-md-8">
                      
                       <div id="project-funders">
                        <div className="project-backer col-lg-3" data-funder-id={4846} data-project-id={2739}>
                          <div className="pb-img">
                            <img src width={85} height={85} />
                            <div className="name">test test</div>
                            <span className="amount">$888</span> -
                            <span className="reward">Pledge 10 or More</span>
                          </div>
                          <div className="clear" />
                        </div>
                        <div className="clear" />
                      </div>
                    </div>  */}
                    {/* /.col-md-8 */}
                  </div>
                  {/* backer tab end */}
                  <div id="updates" className="tab-pane col-md-8">
                    <div className="comment-form">
                      <video src={props.campaign.project_video_url} width="100%" controls />
                      {/* <div className="nnupdates"> No new updates </div> */}
                    </div>
                  </div>
                  <div id="comments" className="tab-pane col-md-8">
                    {props.campaign.campaign_faqs.map(function(faq){
                      return(
                        <div>
                          Title : {faq.title} <br />
                          Description : {faq.description}
                        </div>

                      );

                    })}
                  </div>
                </div>
              </div>
              <div className="col-md-4">

                <ProjectInfo campaign= {props.campaign}/>
                
                {/* project-info-wrapper */}
                
                {/* author */}
                <h2>Support this project</h2>
                <ul className="pl-0 fund-list">
                  {props.campaign.campaign_rewards.map(function(reward){
                    return(
                        <RewardComp reward={reward} />  
                    );
                  })}
                  
                </ul>
              </div>
              {/* /.col-md-4 */}
            </div>
          </div>
          {/* tab content end */}
        </div>
        {/* container */}
      </div>
      {/* tabbable */}
    </div>
  </div>

  );
}

