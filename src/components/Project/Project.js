import React, { Component } from 'react';
import './Project.scss';
import githubIcon from '../../images/icons/github-icon.png';
import linkIcon from '../../images/icons/link-icon.png';
import moreIcon from '../../images/icons/more-icon.png';
import backIcon from '../../images/icons/back-icon.png';
import PropTypes from 'prop-types';

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDescriptionShowing: false
    };
    this.changeSlide = this.changeSlide.bind(this);
  }

  changeSlide() {
    this.setState(prevState => {
      return { isDescriptionShowing: !prevState.isDescriptionShowing };
    });
  }

  render() {
    const {
      projectData: { title, description, background, github, url, panelClass, tools }
    } = this.props;
    const dataFirstClass = !this.state.isDescriptionShowing ? 'active__panel' : '';
    const dataSecondClass = this.state.isDescriptionShowing ? 'active__panel' : '';
    return (
      <div className="project__content">
        <div className="project__image-container" style={{ backgroundImage: `url(${background})` }}>
          <img src={background} alt={title} className="project__image" />
        </div>
        <div className="project__details">
          <div className={`project__panel ${dataFirstClass} ${panelClass}`}>
            <h2 className="project__title">{title}</h2>
            <span className="learn__more" onClick={this.changeSlide}>
              <img src={moreIcon} alt="more icon" className="more__icon" />
            </span>
          </div>
          <div className={`project__panel ${dataSecondClass} ${panelClass}`}>
            <span className="show__project-name" onClick={this.changeSlide}>
              <img src={backIcon} alt="back arrow icon" className="back__icon" />
            </span>
            <p className="project__description">{description}</p>
            <p className="project__tools">{tools}</p>
            <ol className="project__links">
              <li className="project__link">
                <a href={github} className="link__github" target="_blank" rel="noopener noreferrer">
                  <span className="github__icon">
                    <img src={githubIcon} alt="github icon" />
                  </span>
                </a>
              </li>
              <li className="project__link">
                <a href={url} className="link__url" target="_blank" rel="noopener noreferrer">
                  <span className="link__icon">
                    <img src={linkIcon} alt="link icon" />
                  </span>
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;

Project.propTypes = {
  projectData: PropTypes.object
};
