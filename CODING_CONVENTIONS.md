# Coding conventions
## Introduction
These are the coding conventions for the hive backend. Always follow these when implementing new content.
## Conventions
```typescript
/**
 * All variable names are written in one of the following conventions
 * 
 * - camel case (eg. variableName, user, dataUsagePermissions)
 * 
 * - pascal case (eg. VariableName, User, DataUsagePermissions)
 **/
/**
 * Always add a description to class constructors and any class
 * functions except getters and setters
 * 
 * - First line is always formatted like this: 
 *   Classname class constructor. Custom description 
 * 
 * - Specify params with the '@param {type} attributeName' syntax
 * 
 * - If the constructor / function has a return value specify it with the
 *   '@returns {type} description' syntax
 **/

/**
 * Import JSON files using following syntax
 * 
 * - If data.json is as following 
 * 
 *   {
 *      "foo":"bar",
 *      "bar":"foo"
 *   }
 * 
 *   the data can be called like data.foo or data['foo']
 **/
import * as data from './data.json';

/**
 * Import classes like following
 * 
 * - import name always in pascal case
 **/
import Foo from './models/Foo';

/**
 * - put every class in its own file
 * 
 * - always declare it as export default
 * 
 * - class name always in pascal case
 **/
export default class Foo {
    /** 
     * - use correct access modifier (public, private, protected).
     *    * Public for attributes available for any class
     * 
     *    * Private for attributes only used by the class itself
     * 
     *    * Protected for attributes used by the class itself and classes that extend
     *      this class
     * 
     * - attribute names always in camel case
     * 
     * - always specify the attribute's type (eg. string, number, Date) which 
     *   can also be a class (eg. User, Location, Node)
     * 
     * - for string declarations always use single ticks ' or if you're 
     *   using in-string variables back ticks ` 
     * 
     * - for attributes that won't be changed or initialized use a readonly modifier
     * 
     * - for attributes that get initialized by the constructor, just specify the
     *   access modifier and its type
     **/
    private attribute: string = 'value'; 
    protected inStringVariableAttribute: string = `Attribute has value ${value}`;
    public readonly readonlyAttribute: string = 'Readonly';
    private attribute2: string; 

    
    /**
     * - if a class takes any params to create it (eg User: firstName, lastName) add
     *   a constructor.
     * 
     * - Optional params that if not provided have a default value can be specified
     *   like shown below at 'paramWithDefault'
     * 
     * - Optional parameters that should default to undefined can be modified to do
     *   so with a ? like shown below at 'optionalParam'
     **/

    /**
     * Foo class constructor. Class foo does task a and b and manages c.
     * @param {string} attribute1
     * @param {number} attribute2
     * @param {string} paramWithDefault
     * @param {string} optionalParam
     **/
    constructor(
        attribute: string,
        attribute2: number,
        paramWithDefault: string = 'default value',
        optionalParam?: string
    ) {
        /**
         * To store a value given in the constructor to a class attribute
         * use following syntax
         **/
        this.attribute = attribute;
        /**
         * Custom initializations are also possible
         **/
        this.attribute2 = require('axios');
    }

    /**
     * - Function names always in pascal case
     * 
     * - Optional params that if not provided have a default value can be specified
     *   like shown below at 'paramWithDefault'
     * 
     * - Optional parameters that should default to undefined can be modified to do
     *   so with a ? like shown below at 'optionalParam'
     * 
     * - always specify the return type with 'Function(): type'
     **/

    /**
     * Description for MyFunction
     * @param {string} param1 description for param1
     * @param {number} param2 description for param2
     * @param {string} paramWithDefault description for paramWithDefault
     * @param {string} optionalParam description for optionalParam
     * @returns {string} description for return value
     **/
    private MyFunction(
        param1: string,
        param2: number,
        paramWithDefault: string = 'default value',
        optionalParam?: string
    ): string {
        /**
         * - for package imports use type var, no type specification needed
         * 
         * - variable names always in camel case
         * 
         * - for any other variable or object specify the type and use
         * 
         *  * let if it needs to be changed its lifetime
         * 
         *  * const if it never need to be changed in its lifetime
         **/
        var axios = require('axios');
        let foo: Foo = new Foo();
        const bar: Bar = new Bar();

        /**
         * - when comparing booleans NEVER compare it with true or with false
         **/
        if(booleanVariable === true) {} //<-- NOT LIKE THIS
        if(booleanVariable === false) {} // NOR LIKE THIS
        /**
         * - instead use for comparing with true just the variable name
         *   or for comparing with false add an ! before the variable
         * 
         * - to check if a variable is undefined, the ! syntax will also work
         * 
         * - to check if a variable is null, compare it with null
         * 
         * - for any other comparison use one of following
         *   * === //Is equal to
         *   * !== //Is unequal to
         *   * >=  //Is bigger or equal, numbers only
         *   * <=  //is smaller or equal, numbers only
         *   * >   // is bigger, numbers only
         *   * <   // is smaller, numbers only
         */
        //will be triggered by a variable that is true
        if(booleanVariable) {}
        //will be triggered by boolean that is false or undefined
        if(!booleanVariable) {}
        //will be triggered if variable is null
        if(object === null) {}
        if(param1 === 'Test') {}

        /**
         * For multiple === comparisons with a variable use a switch
         **/
        switch(param1) {
            case 'abc':
                //handle action
                break;
            case 'def':
                //handle action
                break;
            default:
                //handle action if none of the above cases match
                break;
        }

        /**
         * If the function has a return value call the return statement with the
         * return value after it.
         **/
        return returnValue;
    }

    /**
     * If a function has a task which's response needs to be awaited because of delay
     * (eg. Database call, HTTP request) have an extra modifier after the access
     * modifier 'async'. In such function the await syntax can be used.
     **/
    private async AsynchronousFunction() {
        const data: any = await this.AsynchronousTask();
    }

    /**
     * - use 'public get' for getters
     * 
     * - use pascal case for attributes
     * 
     * - specify the return type
     * 
     * - use 'public set' or just 'public async' if the set action has any
     *   asynchronous task in it
     **/
    public get Attribute(): string { return this.attribute }
    public set SetAttribute(value: string) { this.attribute = value; }
    public async AlternativeSetAttribute(value: string) { this.attribute = value; }
}
```