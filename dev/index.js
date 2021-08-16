import './bootstrap.js'
import CMS, { init } from 'netlify-cms'
import 'netlify-cms/dist/cms.css'
import { NestedSelectControl, NestedSelectPreview } from '../src'

const config = {
  backend: {
    name: 'test-repo',
    login: false,
  },
  media_folder: 'assets',
  collections: [{
    name: 'test',
    label: 'Test',
    files: [{
      file: 'test.yml',
      name: 'test',
      label: 'Test',
      fields: [{
        name: 'nested-select',
        label: 'Nested Select',
        widget: 'nested-select',
        options: [
          "Regular option",
          {
            label: "Option with suboptions",
            options: [
              "Suboption 1",
              "Suboption 2",
              "Suboption 3"
            ]
          }
        ]
      },
      {
        name: 'another-field',
        label: 'Another Field',
        widget: 'string'
      }],
    }],
  }],
}

CMS.registerWidget('nested-select', NestedSelectControl, NestedSelectPreview)

init({
  config
})
