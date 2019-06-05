import React, { Component } from 'react'
import {
  Field,
  FieldArray,
  reduxForm,
} from 'redux-form'
import { style } from 'typestyle'
import { connect } from 'react-redux'

import {
  Cards,
  Col,
  Dropbox,
  DateTimePicker,
  DropdownList,
  Form,
  FormSection,
  Quill,
  Roll,
  Row,
  Table,
  TextField,
  Toggle,
  Toolbar,
  validation,
  ToolbarTitleContainer,
  ToolbarDropdown,
  ToolbarMenu,
  ToolbarMenuItem,
  ToolbarTitle
} from '..'
import { getName, setFilter, setInitialValues } from './actions'

import { TEST_CARD_MODEL } from './card-model'
import { ROLL_MODEL } from './roll-model'

export const WEATHER_TYPES = [
  { label: 'Sunny', value: 'Sunny' },
  { label: 'Rainy', value: 'Rainy' },
  { label: 'Overcast', value: 'Overcast' },
  { label: 'Partly cloudy', value: 'Partly cloudy' },
  { label: 'Light rain', value: 'Light rain' },
  { label: 'Foggy', value: 'Foggy' },
  { label: 'Shower', value: 'Shower' },
  { label: 'Snow', value: 'Snow' },
  { label: 'Windy', value: 'Windy' },
  { label: 'Misty', value: 'Misty' },
  { label: 'Hail', value: 'Hail' },
  { label: 'Heavy snow', value: 'Heavy snow' },
  { label: 'Rain/Snow', value: 'Rain/Snow' },
  { label: 'Strong wind', value: 'Strong wind' },
  { label: 'Thunderstorm', value: 'Thunderstorm' },
]

const HAZARD_RATINGS_HEADERS = [
  {
    name: 'Name',
    size: 0.3,
    field: 'name field'
  },
  {
    name: 'Positive',
    size: 0.2,
    field: 'positive field'
  },
  {
    name: 'Negative',
    size: 0.5,
    className: style({ textAlign: 'right' })
  },
]

const TEST_ROWS = [
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
  ['test', 5, 6],
]

const testUsers = [
  {
    name: 'aaa',
    position: 'Job2'
  },
  {
    name: 'bbb',
    position: 'Job1'
  },
  {
    name: 'ccc',
    position: 'Job1'
  },
  {
    name: 'ddd',
    position: 'Job3'
  },
  {
    name: 'eee',
    position: 'Job2'
  },
  {
    name: 'fff',
    position: 'JobN'
  },
]

class TestForm extends Component {
  state = {
    dropdownIndex: 0
  }
  componentDidMount () {
    this.props.setFilter({
      sort: 'name field'
    })
    this.props.getName()
  }

  renderTitle() {
    return (
      <ToolbarTitleContainer>
        <ToolbarTitle
          title='Projects'
        />
        <ToolbarMenu
          // to={'https://www.google.com'}
          heading={ 'Project X' }
          width={ 180 }
          maxHeight={ 250 }
        >
          {
            (() => {
              const rows = []
              for (let i = 0; i < 30; ++i) {
                rows.push( <ToolbarMenuItem content={ 'Project ' + i }/>)
              }
              return rows
            })()
          }

        </ToolbarMenu>
        <ToolbarMenu
          heading={ 'Dailies' }
          width={180}
          onClick={() => { console.log('clicked menu') }}
        >
          <ToolbarMenuItem content={ 'Analysis' } onClick={() => { console.log('clicked item') }}/>
          <ToolbarMenuItem content={ 'Trades' } onClick={() => { console.log('clicked item') }}/>
          <ToolbarMenuItem content={ 'Users' }/>
          <ToolbarMenu
            heading={ 'HSE Dailies' }
            // to={'https://www.google.com'}
            width={180}
            offset={180}
            submenu
            onClick={() => { console.log('clicked menu') }}
          >
            <ToolbarMenuItem content={ 'HSE Dailies List' }/>
            <ToolbarMenuItem content={ 'Analysis' }/>
          </ToolbarMenu>
          <ToolbarMenu
            heading={ 'Concrete Pours' }
            width={220}
            offset={180}
            submenu
          >
            <ToolbarMenuItem content={ 'Pours List' }/>
            <ToolbarMenuItem content={ 'Analysis' }/>
            <ToolbarMenuItem content={ 'Concrete Mixes List' }/>
            <ToolbarMenuItem content={ 'Concrete Addons List' }/>
          </ToolbarMenu>
          <ToolbarMenu
            heading={ 'Cost Tracking' }
            width={180}
            offset={180}
            submenu
          >
            <ToolbarMenuItem content={ 'Cost Tracking List' }/>
            <ToolbarMenuItem content={ 'Analysis' }/>
            <ToolbarMenuItem content={ 'Budget List' }/>
          </ToolbarMenu>
        </ToolbarMenu>

        <ToolbarDropdown
          data={
            [
              {name: 'item1'},
              {name: 'item2'},
              {name: 'item3'}
            ]
          }
          value={this.state.dropdownIndex}
          onChange={
            (index) => {
              this.setState({dropdownIndex: index})
            }
          }
        />
      </ToolbarTitleContainer>
    )
  }

  render () {
    const { test } = this.props
    let sortedField = ''
    let sortIcon = ''

    if (test.filterData.sort) {
      if (test.filterData.sort.charAt(0) === '-') {
        sortedField = test.filterData.sort.substr(1)
        sortIcon = 'keyboard_arrow_down'
      } else {
        sortedField = test.filterData.sort
        sortIcon = 'keyboard_arrow_up'
      }
    }

    return <div>
      <Toggle
        iconOn='check_box'
        iconOff='check_box_outline_blank'
      />

      <Table
        sortedField={ sortedField }
        sortIcon={ sortIcon }
        headers={HAZARD_RATINGS_HEADERS}
        headerOnClick={
          (field) => {
            let sortedField = field
            if(test.filterData.sort === sortedField) {
              sortedField = `-${sortedField}`
            }
            // simulating dispatching of set filter action in GET action
            this.props.setFilter({
              sort: sortedField
            })
            this.props.getName()
          }
        }
      >
        {
          TEST_ROWS.map((row, key) => {
            return <Row key={key}>
              <Col onClick={() => { console.log(row) }}>{row[0]}</Col>
              <Col>{row[1]}</Col>
              <Col>{row[2]}</Col>
            </Row>
          })
        }
      </Table>
      <button
        onClick={() => {
          this.props.setInitialValues({date: "May 12, 2019 07:34 PM", roll: {index: 1, description: "<p>aergaerg</p>"}})
        }}
      >
        Set initialValues
      </button>
      <button
        onClick={() => {
          this.props.setInitialValues({})
        }}
      >
        Reset initialValues
      </button>
      <Form
        title={this.renderTitle()}
      >
        <FormSection>
          <Field
            label='Date'
            name='date'
            showTime={false}
            component={DateTimePicker}
            defaultValue={new Date()}
            validate={[validation.required]}
            isRequired
          />
          <Field
            label='Weather AM'
            name='weatherAm'
            type='text'
            component={DropdownList}
            data={WEATHER_TYPES}
            validate={[validation.required]}
            isRequired
          />
          <FieldArray
            label='Attachments'
            name='workCompletedAttachments'
            component={Dropbox}
            onDrop={this.props.uploadImages}
          />
          <Field
            label='Name'
            name='name'
            defaultValue='hello'
            component={TextField}
          />
          <Field
            label='Quill Test'
            name='quilltest'
            component={Quill}
          />
          <Field
            label={'test-roll'}
            name={'roll'}
            component={Roll}
            model={ROLL_MODEL}
          />
        </FormSection>
        <FieldArray
          label='Test'
          name='test'
          component={Cards}
          data={{ testUsers }}
          model={TEST_CARD_MODEL}
        />
      </Form>
    </div>
  }
}

TestForm = reduxForm({
  form: 'test-form',
  destroyOnUnmount: false,
  enableReinitialize: true
})(TestForm)

export default connect(
  (state) => {
    return { 
      test: state.test,
      initialValues: state.test.initialValues
    }
  }, {
    getName,
    setFilter,
    setInitialValues
  }
)(TestForm)