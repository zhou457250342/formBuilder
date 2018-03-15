import control from '../control';

/**
 * Text input class
 * Output a <input type="text" ... /> form element
 */
export default class controldatetime extends control {

  /**
   * class configuration
   */
  static get definition() {
    return {

      // mi18n custom mappings (defaults to camelCase type)
      mi18n: {
        date: 'dateField',
        file: 'fileUpload'
      }
    };
  }

  /**
   * build a text DOM element, supporting other jquery text form-control's
   * @return {Object} DOM Element to be injected into the form.
   */
  build() {
    if(this.config.type=='datetime')
       this.config.type='datetime-local';
    return this.markup('input', null, this.config);
  }
}

// register this control for the following types & text subtypes
control.register(['datetime'], controldatetime);
control.register(['datetime','date','year','month'], controldatetime, 'datetime');
