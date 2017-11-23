// DO NOT EDIT
// This file is automatically generated by `npm run build`.

declare namespace Polymer {
  namespace decorators {
    /**    
     * @license    
     * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.    
     * This code may only be used under the BSD style license found at    
     * http://polymer.github.io/LICENSE.txt The complete set of authors may be found    
     * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may    
     * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by    
     * Google as part of the polymer project is also subject to an additional IP    
     * rights grant found at http://polymer.github.io/PATENTS.txt    
     */    
    /**    
     * A TypeScript class decorator factory that defines a custom element with name    
     * `tagname` and the decorated class. If `tagname` is not provided, the static    
     * `is` property of the class is used.    
     */    
    function customElement(tagname?: string): (clazz: any) => void;    
    /**    
     * Options for the @property decorator.    
     * See https://www.polymer-project.org/2.0/docs/devguide/properties.    
     */    
    interface PropertyOptions {    
        /**    
         * This field can be omitted if the Metadata Reflection API is configured.    
         */    
        type?: BooleanConstructor | DateConstructor | NumberConstructor | StringConstructor | ArrayConstructor | ObjectConstructor;    
        notify?: boolean;    
        reflectToAttribute?: boolean;    
        readOnly?: boolean;    
        computed?: string;    
    }    
    /**    
     * A TypeScript property decorator factory that defines this as a Polymer    
     * property.    
     *    
     * This function must be invoked to return a decorator.    
     */    
    function property(options?: PropertyOptions): (proto: any, propName: string) => any;    
    /**    
     * A TypeScript property decorator factory that causes the decorated method to    
     * be called when a property changes. `targets` is either a single property    
     * name, or a list of property names.    
     *    
     * This function must be invoked to return a decorator.    
     */    
    function observe(targets: string | string[]): (proto: any, propName: string) => any;    
    /**    
     * A TypeScript property decorator factory that converts a class property into    
     * a getter that executes a querySelector on the element's shadow root.    
     *    
     * By annotating the property with the correct type, element's can have    
     * type-checked access to internal elements.    
     *    
     * This function must be invoked to return a decorator.    
     */    
    const query: (selector: string) => (proto: any, propName: string) => any;    
    /**    
     * A TypeScript property decorator factory that converts a class property into    
     * a getter that executes a querySelectorAll on the element's shadow root.    
     *    
     * By annotating the property with the correct type, element's can have    
     * type-checked access to internal elements. The type should be NodeList    
     * with the correct type argument.    
     *    
     * This function must be invoked to return a decorator.    
     */    
    const queryAll: (selector: string) => (proto: any, propName: string) => any;    
    
  }
}
