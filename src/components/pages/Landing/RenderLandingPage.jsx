import React from 'react';
// ADD IMPORTS BACK FOR GRAPHS SECTION
import GrantRatesByOfficeImg from '../../../styles/Images/bar-graph-no-text.png';
import GrantRatesByNationalityImg from '../../../styles/Images/pie-chart-no-text.png';
import GrantRatesOverTimeImg from '../../../styles/Images/line-graph-no-text.png';
import HrfPhoto from '../../../styles/Images/paper-stack.jpg';
import '../../../styles/RenderLandingPage.less';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
// for the purposes of testing PageNav
import PageNav from '../../common/PageNav';

function RenderLandingPage(props) {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const history = useHistory();

  return (
    <div className="main">
      <div className="header">
        <div className="header-text-container">
          <h1>Asylum Office Grant Rate Tracker</h1>
          <h3>
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions
          </h3>
        </div>
      </div>

      {/* Graphs Section: Add code here for the graphs section for your first ticket */}
      {/* Imported graph images by uncommenting the imports and used flex and margin to place images and buttons.*/}

      <div className="graphs-section">
        <div className="graphs-section-images">
          <div className="graphs-img-container">
            <img
              className="graph-section-img"
              src={GrantRatesByOfficeImg}
              alt="Grant Rates By Office"
            />
            <p className="graphs-header">Search Grant Rates By Office</p>
          </div>
          <div className="graphs-img-container">
            <img
              className="graph-section-img by-nationality"
              src={GrantRatesByNationalityImg}
              alt="Grant Rates By Nationality"
            />
            <p className="graphs-header">Search Grant Rates By Nationality</p>
          </div>
          <div className="graphs-img-container">
            <img
              className="graph-section-img"
              src={GrantRatesOverTimeImg}
              alt="Grant Rates Over Time"
            />
            <p className="graphs-header">Search Grant Rates Over Time</p>
          </div>
        </div>
        <div className="view-more-data-btn-container">
          <Button
            className="more-data-btn"
            type="default"
            style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
            onClick={() => history.push('/graphs')}
          >
            View the Data
          </Button>

          {/* Added the download data button but it doesn't have functionality until I have access to the data. */}
          {/* I believe data is taken care of on the next ticket. */}
          <Button
            type="default"
            style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
          >
            Download the Data
          </Button>
        </div>
      </div>

      <div className="middle-section">
        <div className="hrf-img-container">
          <img src={HrfPhoto} alt="Human Rights First" className="hrf-img" />
        </div>
        <div className="middle-section-text-container">
          <h3>
            Human Rights First has created a search tool to give you a
            user-friendly way to explore a data set of asylum decisions between
            FY 2016 and May 2021 by the USCIS Asylum Office, which we received
            through a Freedom of Information Act request. You can search for
            information on asylum grant rates by year, nationality, and asylum
            office, visualize the data with charts and heat maps, and download
            the data set
          </h3>
        </div>
      </div>
      <div>
        {/* Bottom Section: Add code here for the graphs section for your first ticket */}
        {/* Added heading elements for bottom data articles to match the deployed site. */}
        <div className="bottom-section">
          <h1>Systemic Disparity Insights</h1>
          <div className="data-container">
            <div className="first-data-point-container">
              <h2>36%</h2>
              <h3 title="left-title">
                By the end of the Trump administration, the average asylum
                office grant rate had fallen 36 percent from an average of 44
                percent in fiscal year 2016 to 28 percent in fiscal year 2020.
              </h3>
            </div>
            <div className="second-data-point-container">
              <h2 title="middle-title">5%</h2>
              <h3>
                The New York asylum office grant rate dropped to 5 percent in
                fiscal year 2020.
              </h3>
            </div>
            <div className="third-data-point-container">
              <h2 title="right-title">6x Lower</h2>
              <h3>
                Between fiscal year 2017 and 2020, the New York asylum office’s
                average grant rate was six times lower than the San Francisco
                asylum office.
              </h3>
            </div>
          </div>
          {/* Added Read more link that links to the human rights page. Just as it is in the deployed site. */}
          <a
            className="more-link"
            target="blank"
            rel="noreferrer"
            href="https://humanrightsfirst.org/library/uscis-records-reveal-systemic-disparities-in-asylum-decisions/"
          >
            <div className="more-container">
              <button className="more-btn">Read More</button>
            </div>
          </a>
          <p onClick={() => scrollToTop()} className="back-to-top">
            Back To Top ^
          </p>
        </div>
      </div>
    </div>
  );
}
export default RenderLandingPage;
