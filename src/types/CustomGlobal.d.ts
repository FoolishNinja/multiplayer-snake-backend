import Database from "../services/Database";

declare global {
    namespace NodeJS {
        interface Global {
            TypeMap: any,
            Database: Database,
            Calc: {
                RandomInt: Function,
                Range: Function
            },
            Text: {
                ReplaceMultiple: Function,
                CountOccurrence: Function,
                SHA256: Function,
                JWT: Function,
                GeneralizeMobileNumber: Function,
                Capitalize: Function
            },
            Regex: {
                email: RegExp,
                mobile: RegExp
            },
            Log: {
                info: Function,
                warn: Function,
                error: Function
            }
        }
    }
}
export default global;