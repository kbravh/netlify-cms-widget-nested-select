import Control from './NestedSelectControl'
import Preview from './NestedSelectPreview'

if (typeof window !== 'undefined') {
  window.NestedSelectControl = Control
  window.NestedSelectPreview = Preview
}

export { Control as NestedSelectControl, Preview as NestedSelectPreview }
