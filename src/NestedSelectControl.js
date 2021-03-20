import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';

import './style.css'

const delimiter = `\n\n---\n\n`

export default class Control extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      fieldOptions: [],
      primaryOptions: [],
      subOptions: {}
    }
  }
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string,
    value: PropTypes.node,
    classNameWrapper: PropTypes.string.isRequired,
  }

  static defaultProps = {
    value: '',
  }

  componentDidMount = () => {
    const {field} = this.props;
    const fieldOptions = field.get('options')
    const primaryOptions = [...fieldOptions.map(this.convertToOption)]
    const subOptions = {}

    fieldOptions.forEach(option => {
      if(typeof option == 'string') {
        subOptions[option] = []
      }else{
        subOptions[option.toJS().label] = [...option.toJS().options.map(
          option => {
            return {label: option, value: option}
          }
        )]
      }
    })

    this.setState({
      fieldOptions,
      primaryOptions,
      subOptions
    })
  }

  convertToOption = raw => {
    if(typeof raw == 'string')
      return {label: raw, value: raw};
    return {label: raw.toJS().label, value: raw.toJS().label};
  }

  render() {
    const {
      forID,
      value,
      onChange,
      classNameWrapper,
      setActiveStyle,
      setInactiveStyle
    } = this.props;

    if (!this.state.fieldOptions) {
      return <div>Error rendering select control for {field.get('name')}: No options</div>
    }

    const handleChange = (index, newValue) => {
      // if a new parent is selected, erase children
      let newValues = index == 0 ? [] : value.split(delimiter)
      newValues[index] = newValue;
      onChange(newValues.join(delimiter))
    }

    return (
      <div className={classNameWrapper}>
        <Select
          className="firstSelect"
          classNamePrefix="firstSelect"
          id={forID}
          value={this.convertToOption(value.split(delimiter)[0]) || ''}
          options={this.state.primaryOptions}
          onChange={selected => {handleChange(0, selected.label)}}
          onFocus={setActiveStyle}
          onBlur={setInactiveStyle}
          />
        {this.state.subOptions[value.split(delimiter)[0]] &&
          this.state.subOptions[value.split(delimiter)[0]].length !== 0 &&
          <Select
            className="secondSelect"
            value={(value.split(delimiter)[1] && this.convertToOption(value.split(delimiter)[1])) || ''}
            options={this.state.subOptions[value.split(delimiter)[0]]}
            onChange={selected => {handleChange(1, selected.label)}}
            onFocus={setActiveStyle}
            onBlur={setInactiveStyle}
          />
        }
      </div>
    );
  }
}''