import React from 'react';
import FilterForm from './FilterForm.js';
import Timeline from './Timeline.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {languages: [], topic: ''};
    this.updateTopic = this.updateTopic.bind(this);
    this.updateTimeline = this.updateTimeline.bind(this);
    this.topicFormFullPage = true;
  }

  componentDidMount() {
    this.updateTimeline();
  }

  updateTimeline(event) {
    // if the timeline is updated due to a browser event...
    if (arguments.length > 0) {
      // avoid refreshing the page:
      event.preventDefault();

      // minimize the topic form after its first use:
      if (this.topicFormFullPage)
        this.topicFormFullPage = false;
    }

    // update the state of the timeline:
    this.setState({languages: this.languagesWithTopic(this.state.topic)});
  }

  languagesWithTopic(topic) {
    const cachedLanguages = require('./languages.json');
    if (topic === '') {
      return cachedLanguages;
    } else {
      return cachedLanguages.filter(
        language => language.tags.includes(topic) 
      );
    }
  }

  updateTopic(event) {
    this.setState({topic: event.target.value});
  }

  render() {
    const filterForm = <FilterForm
        topic={this.state.topic}
        updateTopic={this.updateTopic}
        updateTimeline={this.updateTimeline}
        fullPage={this.topicFormFullPage}
      />;

    const timeline = this.topicFormFullPage ? '' :
      <Timeline items={this.state.languages} />;

    return <React.Fragment>
      {filterForm}
      {timeline}
    </React.Fragment>;
  }
}

export default App;
