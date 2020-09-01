import User from "../entities/User";

export default class GlobalService {

    /**
     * Global service class constructor. Mounts functions to variable 'global'
     */
    constructor() {
        this.MathFunctions();
        this.StringFunctions();
        this.Statics();
    }

    /**
     * Mathematical functions
     */
    private MathFunctions() {
        global.Calc = {
            RandomInt: (min: number, max: number): number => {
                min = Math.abs(min);
                max = Math.abs(max);
                return Math.floor(Math.random() * (max - min)) + min;
            },
            Range: (min: number, max: number): Array<number> => {
                min = Math.abs(min);
                max = Math.abs(max);
                let range = [];
                for (let i = min; i <= max; i++) range.push(i);
                return range;
            }
        };
    }

    /**
     * String functions
     */
    private StringFunctions() {
        global.Text = {
            ReplaceMultiple: (text: string, params: any): string => {
                Object.keys(params).forEach(key => text = text.replace(new RegExp(key, 'g'), params[key]));
                return text;
            },
            CountOccurrence: (text: string, regex: RegExp): number => {
                return text.match(regex) === null ? 0 : text.match(regex).length;
            },
            SHA256: (text: string): string => {
                return require('js-sha256')(text);
            },
            JWT: (data: any): string => {
                return require('jsonwebtoken').sign(data, 'shhhhh');
            },
            GeneralizeMobileNumber: (number: string): string => {
                number = number.replace(/\+/g, '00');
                number = number.replace(/079/, '004179');
                return number;
            },
            Capitalize: (text: string): string => {
                if (typeof text !== 'string') return '';
                return text.charAt(0).toUpperCase() + text.slice(1);
            }
        }
    }

    /**
     * Static variables
     */
    private Statics() {
        global.TypeMap = {
            User
        }
        global.Regex = {
            email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            mobile: /^((\+|00)\d{1,3}[- ]?)?\d{10}$/
        }
    }
}