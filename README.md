# netlify-cms-widget-nested-select>

[Check out a demo!](https://netlify-cms-widget-nested-select.netlify.com/demo)

This widget will conditionally show a second select with its own options based on what's chosen in the first select. This can be used, for example, to set up subcategories inside of categories.

## Install

As an npm package:

```shell
npm install --save netlify-cms-widget-nested-select
```

```js
import NestedSelect from 'netlify-cms-widget-nested-select'

CMS.registerWidget('nested-select', NestedSelectControl, NestedSelectPreview)
```

Via `script` tag:

```html
<script src="https://unpkg.com/netlify-cms-widget-nested-select@^1.0.0"></script>

<script>
  CMS.registerWidget('nested-select', NestedSelectControl, NestedSelectPreview)
</script>
```

## How to use

Add to your Netlify CMS configuration:

```yaml
    fields:
      - {
          name: <fieldname>,
          label: <fieldlabel>,
          widget: nested-select,
          options: [
            "Regular option",
            "Another regular option",
            {
              label: "Option with suboptions",
              options: [
                "Suboption 1",
                "Suboption 2",
                "Suboption 3"
              ]
            }
          ]
        }
```

## Support

For help with this widget, open an [issue](https://github.com/kbravh/netlify-cms-widget-nested-select) or ask the Netlify CMS community in [Gitter](https://gitter.im/netlify/netlifycms).
