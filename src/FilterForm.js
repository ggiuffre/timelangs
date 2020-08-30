import React from 'react';
import './FilterForm.css';

function tagsConcat(tags, lang) { return [...tags, ...lang.tags]; }
function clean(array) { return Array.from(new Set(array)); }

class FilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.updateTopic = this.props.updateTopic;
    this.updateTimeline = this.props.updateTimeline;
  }

  componentDidMount() {
    const tags = clean(require('./languages.json').reduce(tagsConcat, []));
    this.options = tags
      .map(tag => <option value={tag} key={tag} />)
      .sort((a, b) => a.key.localeCompare(b.key));
  }

  render() {

    // the whole form:
    return <form
        className={this.props.fullPage ? 'fullpage' : ''}
        name="filter"
        id="filter"
        onSubmit={this.updateTimeline}
      >
      <label id="topic">Topic: <input
          tabIndex="1"
          type="text"
          value={this.props.topic}
          onChange={this.updateTopic}
          placeholder="OOP, Lisp, JVM..."
          list="topics"
        />
      </label>
      <datalist id="topics">
        {this.options}
      </datalist>

      <label>
        <input type="submit" value="Update" />
      </label>
    </form>;
  }
}

export default FilterForm;
