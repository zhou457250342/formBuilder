import control from '../control';
import controlText from './text';

/**
 * Text input class
 * Output a <input type="text" ... /> form element
 */
export default class controlImageUploader extends control {

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
    return {field:this.markup('input', null, $.extend({}, this.config, {type:'file'}))};
  }
}

controlText.register('file', controlText, 'file');
controlText.register('imageuploader', controlImageUploader, 'file');
